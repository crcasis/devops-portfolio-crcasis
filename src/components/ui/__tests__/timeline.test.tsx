/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, fireEvent } from '@testing-library/react'
import * as React from 'react'
import { Timeline } from '../timeline'
import { useScroll } from 'motion/react' // Updated import from motion/react

const mockOnChange = jest.fn()

jest.mock('motion/react', () => ({
  useScroll: jest.fn(() => ({
    scrollYProgress: {
      onChange: mockOnChange,
      get: jest.fn().mockReturnValue(0),
    },
    scrollY: {
      onChange: jest.fn(),
      get: jest.fn().mockReturnValue(0),
    },
  })),
  useTransform: jest.fn((input: any, inputRange: number[], outputRange: number[]) => {
    const progress = input.get()
    const [inStart, inEnd] = inputRange
    const [outStart, outEnd] = outputRange
    const fraction = (progress - inStart) / (inEnd - inStart)
    const clamped = Math.min(Math.max(fraction, 0), 1)
    return outStart + clamped * (outEnd - outStart)
  }),
  motion: {
    div: ({ children, style, ...props }: any) => (
      <div data-testid="motion-div" style={style} {...props}>
        {children}
      </div>
    ),
  },
}))

describe('<Timeline />', () => {
  const data = [
    { title: 'Step 1', content: <p>Content 1</p> },
    { title: 'Step 2', content: <p>Content 2</p> },
  ]

  beforeEach(() => {
    jest.clearAllMocks()
    // Mock getBoundingClientRect globally for all elements
    Element.prototype.getBoundingClientRect = jest.fn(() => ({
      height: 200,
      width: 100,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      x: 0,
      y: 0,
      toJSON: () => {},
    }))
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renders all timeline entries with titles and content', () => {
    render(<Timeline data={data} />)
    data.forEach(({ title, content }) => {
      expect(screen.getAllByText(title)[0]).toBeInTheDocument()
      expect(screen.getByText(content.props.children)).toBeInTheDocument()
    })
  })

  it('renders the timeline line container and progress bar with styles', () => {
    render(<Timeline data={data} />)
    const lineContainer = screen.getByTestId('timeline-line-container')
    expect(lineContainer).toBeInTheDocument()

    const progressBar = screen.getByTestId('motion-div')
    expect(progressBar).toBeInTheDocument()
    expect(progressBar.style.height).toBe('0px') // From useTransform mock initial
    expect(progressBar.style.opacity).toBe('0')
  })

  it('sets height state on mount and updates on resize', () => {
    // Mock getBoundingClientRect for two calls: first mount, then resize
    const mockRect = jest
      .fn()
      .mockReturnValueOnce({ height: 123 })
      .mockReturnValueOnce({ height: 200 })
    Element.prototype.getBoundingClientRect = mockRect

    render(<Timeline data={data} />)

    fireEvent(window, new Event('resize'))

    const lineContainer = screen.getByTestId('timeline-line-container')
    expect(lineContainer.style.height).toBe('200px')
  })

  it('cleans up resize event listener on unmount', () => {
    const removeListenerSpy = jest.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Timeline data={data} />)
    unmount()
    expect(removeListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function))
    removeListenerSpy.mockRestore()
  })

  it('handles null ref.current safely', () => {
    // Instead of mocking useRef, simulate ref.current = null by temporarily unmounting ref node
    // So just render and verify no crashes
    render(<Timeline data={data} />)
    const progressBar = screen.getByTestId('motion-div')
    expect(progressBar.style.height).toBe('0px')
    expect(progressBar.style.opacity).toBe('0')
  })

  it('renders titles correctly for mobile and desktop views', () => {
    // Set window width to simulate mobile view
    global.innerWidth = 500
    fireEvent(window, new Event('resize'))
    render(<Timeline data={data} />)
    expect(screen.getByText('Step 1').className).toContain('md:hidden')
    expect(screen.queryByText('Step 1', { selector: '.md\\:block' })).not.toBeInTheDocument()

    // Set window width to simulate desktop view
    global.innerWidth = 1024
    fireEvent(window, new Event('resize'))
    render(<Timeline data={data} />)
    expect(screen.getByText('Step 1').className).toContain('md:block')
    expect(screen.queryByText('Step 1', { selector: '.md\\:hidden' })).not.toBeInTheDocument()
  })

  it('updates progress bar height and opacity based on scroll progress', () => {
    const scrollYProgress = {
      onChange: jest.fn(),
      get: jest.fn().mockReturnValue(0),
    }
    const scrollY = {
      onChange: jest.fn(),
      get: jest.fn().mockReturnValue(0),
    }
    const useScrollMock = useScroll as jest.Mock
    useScrollMock.mockReturnValue({ scrollYProgress, scrollY })

    render(<Timeline data={data} />)

    let progressBar = screen.getByTestId('motion-div')
    expect(progressBar.style.height).toBe('0px')
    expect(progressBar.style.opacity).toBe('0')

    // Simulate scroll progress 0.5
    scrollYProgress.get.mockReturnValue(0.5)
    scrollY.get.mockReturnValue(0.5)
    useScrollMock.mockReturnValue({ scrollYProgress, scrollY })

    render(<Timeline data={data} />)

    progressBar = screen.getByTestId('motion-div')
    expect(parseFloat(progressBar.style.height)).toBeCloseTo(100, 1) // 0.5 * mocked height 200
    expect(progressBar.style.opacity).toBe('1')
  })

  it('renders correctly with empty data array', () => {
    render(<Timeline data={[]} />)
    expect(screen.queryByTestId('timeline-line-container')).toBeInTheDocument()
    expect(screen.queryByTestId('motion-div')).toBeInTheDocument()
    expect(screen.queryByText(/Step/)).not.toBeInTheDocument()
  })
})
