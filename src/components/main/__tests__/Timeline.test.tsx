/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import { render, screen } from '@testing-library/react'
import Timeline from '../Timeline'

jest.mock('next/image', () => {
  return ({ alt = '', ...rest }) => <img alt={alt} {...rest} />
})

jest.mock('framer-motion', () => {
  return {
    motion: {
      div: ({
        children,
        style,
        ...props
      }: {
        children: React.ReactNode
        style: React.CSSProperties
        [key: string]: any
      }) => (
        <div style={style} {...props}>
          {children}
        </div>
      ),
    },
    useScroll: jest.fn(() => ({
      scrollYProgress: {
        onChange: jest.fn(),
        get: jest.fn().mockReturnValue(0),
      },
    })),
    useTransform: jest.fn(() => 0),
  }
})

describe('Timeline component', () => {
  test('renders main heading and subtitle', () => {
    render(<Timeline />)
    expect(
      screen.getByRole('heading', { name: /professional experience & projects/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/highlights of my career and key projects showcasing my skills & impact./i),
    ).toBeInTheDocument()
  })

  test('renders all timeline items with correct info and achievements', () => {
    render(<Timeline />)

    expect(screen.getByText(/apr 2025 - present/i)).toBeInTheDocument()
    expect(screen.getByText(/feb 2024 - sep 2025/i)).toBeInTheDocument()

    expect(screen.getByText(/full stack developer intern/i)).toBeInTheDocument()
    expect(screen.getByText(/talent corner hr services pvt\. ltd\./i)).toBeInTheDocument()
    expect(screen.getByText(/remote/i)).toBeInTheDocument()
    expect(screen.getByText(/building a scalable lead management platform\./i)).toBeInTheDocument()
    expect(
      screen.getByText(
        /developed lead verification & enrichment services with node\.js & mysql\./i,
      ),
    ).toBeInTheDocument()

    expect(screen.getByText(/architect & developer of shopxindia/i)).toBeInTheDocument()
    expect(screen.getByText(/personal project/i)).toBeInTheDocument()

    expect(screen.getByAltText(/talent corner hr services pvt\. ltd\. logo/i)).toBeInTheDocument()
    expect(
      screen.getByAltText(/architect & developer of shopxindia architecture/i),
    ).toBeInTheDocument()
  })
})
