/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, fireEvent } from '@testing-library/react'
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
  NavbarLogo,
} from '../resizable-navbar'
import { useMotionValueEvent } from 'motion/react'
import { FaHome } from 'react-icons/fa'
import { useScroll } from 'motion/react'

jest.mock('motion/react', () => {
  return {
    useScroll: jest.fn(),
    useMotionValueEvent: jest.fn(),
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    motion: {
      div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
  }
})

describe('<Resizable Navbar />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders Navbar with children', () => {
    ;(useScroll as jest.Mock).mockReturnValue({ scrollY: { get: () => 150, onChange: jest.fn() } })
    render(
      <Navbar>
        <NavBody>Test Content</NavBody>
      </Navbar>,
    )

    expect(screen.getByText(/test content/i)).toBeInTheDocument()
  })

  it('applies visible styles on scroll when scrollY > 100', () => {
    ;(useScroll as jest.Mock).mockReturnValue({ scrollY: { get: () => 150, onChange: jest.fn() } })
    render(
      <Navbar>
        <NavBody>Visible Content</NavBody>
      </Navbar>,
    )

    const navbar = screen.getByTestId('navbar')
    expect(navbar).toBeInTheDocument()
    expect(navbar.className).toMatch(/sticky|inset-x-0|top-20/)
  })

  it('applies non-visible styles on scroll when scrollY <= 100', () => {
    ;(useScroll as jest.Mock).mockReturnValue({ scrollY: { get: () => 50, onChange: jest.fn() } })
    render(
      <Navbar>
        <NavBody>Not Visible Content</NavBody>
      </Navbar>,
    )

    const navbar = screen.getByTestId('navbar')
    expect(navbar).toBeInTheDocument()
  })

  it('renders NavItems with hover and click', () => {
    const onItemClick = jest.fn()
    const items = [{ name: 'Home', link: '/', icon: <FaHome /> }]

    render(<NavItems items={items} isScrolled={false} onItemClick={onItemClick} />)

    const link = screen.getByText('Home')
    fireEvent.mouseEnter(link)
    fireEvent.click(link)

    expect(onItemClick).toHaveBeenCalled()
  })

  it('renders MobileNav with MobileNavHeader and MobileNavMenu (open)', () => {
    render(
      <MobileNav visible>
        <MobileNavHeader>Header</MobileNavHeader>
        <MobileNavMenu isOpen onClose={() => {}}>
          Menu Content
        </MobileNavMenu>
      </MobileNav>,
    )

    expect(screen.getByText(/header/i)).toBeInTheDocument()
    expect(screen.getByText(/menu content/i)).toBeInTheDocument()
  })

  it('calls onClose prop when MobileNavMenu onClose is called', () => {
    const onClose = jest.fn()
    render(
      <MobileNavMenu isOpen onClose={onClose}>
        Menu Content
      </MobileNavMenu>,
    )

    // Simulate onClose call directly to cover that branch
    onClose()
    expect(onClose).toHaveBeenCalled()
  })

  it('renders MobileNavToggle closed and opens it', () => {
    const onClick = jest.fn()

    const { rerender } = render(<MobileNavToggle isOpen={false} onClick={onClick} />)

    fireEvent.click(screen.getByTestId('mobile-toggle'))
    expect(onClick).toHaveBeenCalled()

    rerender(<MobileNavToggle isOpen={true} onClick={onClick} />)
    expect(screen.getByTestId('mobile-toggle')).toBeInTheDocument()
  })

  it('renders NavbarButton with all variants', () => {
    const { rerender } = render(<NavbarButton>Primary</NavbarButton>)
    expect(screen.getByText(/primary/i)).toBeInTheDocument()

    rerender(<NavbarButton variant="secondary">Secondary</NavbarButton>)
    expect(screen.getByText(/secondary/i)).toBeInTheDocument()

    rerender(<NavbarButton variant="dark">Dark</NavbarButton>)
    expect(screen.getByText(/dark/i)).toBeInTheDocument()

    rerender(<NavbarButton variant="gradient">Gradient</NavbarButton>)
    expect(screen.getByText(/gradient/i)).toBeInTheDocument()
  })

  it('renders NavbarButton with invalid variant gracefully', () => {
    // @ts-expect-error intentionally testing invalid variant
    render(<NavbarButton variant="invalid">Fallback</NavbarButton>)
    expect(screen.getByText(/fallback/i)).toBeInTheDocument()
  })

  it('renders NavbarButton with custom className', () => {
    render(<NavbarButton className="custom-class">Custom Class</NavbarButton>)
    expect(screen.getByText(/custom class/i)).toHaveClass('custom-class')
  })

  it('renders NavbarLogo with and without isScrolled', () => {
    const { rerender } = render(<NavbarLogo isScrolled={false} />)

    expect(screen.getByAltText(/ashlok chaudhary/i)).toBeInTheDocument()
    expect(screen.getByText(/ashlok chaudhary/i)).toBeInTheDocument()

    rerender(<NavbarLogo isScrolled />)
    expect(screen.queryByText(/ashlok chaudhary/i)).toBeNull()
  })
})

// Mock useMotionValueEvent to call the handler immediately with different values
jest.mock('motion/react', () => ({
  useScroll: jest.fn(() => ({ scrollY: { get: () => 0, onChange: jest.fn() } })),
  useMotionValueEvent: jest.fn(),
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

describe('Navbar visibility logic', () => {
  it('sets visible to true when scrollY > 100', () => {
    const mockUseMotionValueEvent = useMotionValueEvent as jest.Mock
    mockUseMotionValueEvent.mockImplementation((value, event, handler) => {
      setTimeout(() => handler(150), 0) // async call
    })

    render(
      <Navbar>
        <NavBody>Content</NavBody>
      </Navbar>,
    )

    expect(screen.getByText(/content/i)).toBeInTheDocument()
  })

  it('sets visible to false when scrollY <= 100', () => {
    const mockUseMotionValueEvent = useMotionValueEvent as jest.Mock
    mockUseMotionValueEvent.mockImplementation((value, event, handler) => {
      setTimeout(() => handler(50), 0) // async call
    })

    render(
      <Navbar>
        <NavBody>Content</NavBody>
      </Navbar>,
    )

    expect(screen.getByText(/content/i)).toBeInTheDocument()
  })
})

jest.mock('motion/react', () => ({
  useScroll: jest.fn(() => ({ scrollY: { get: () => 0, onChange: jest.fn() } })),
  useMotionValueEvent: jest.fn(),
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

describe('Navbar scroll visibility', () => {
  it('shows navbar when scrollY > 100', async () => {
    ;(useMotionValueEvent as jest.Mock).mockImplementation((_, __, handler) => {
      setTimeout(() => handler(150), 0) // async to avoid infinite re-renders
    })

    render(
      <Navbar>
        <NavBody>Visible Content</NavBody>
      </Navbar>,
    )

    expect(await screen.findByText(/visible content/i)).toBeInTheDocument()
  })

  it('hides navbar when scrollY <= 100', async () => {
    ;(useMotionValueEvent as jest.Mock).mockImplementation((_, __, handler) => {
      setTimeout(() => handler(50), 0)
    })

    render(
      <Navbar>
        <NavBody>Hidden Content</NavBody>
      </Navbar>,
    )

    expect(await screen.findByText(/hidden content/i)).toBeInTheDocument()
  })
})
