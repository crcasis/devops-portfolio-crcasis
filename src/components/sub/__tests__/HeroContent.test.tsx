/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react'
import HeroContent from '../HeroContent'

jest.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
}))

jest.mock('react-icons/fa', () => ({
  FaGithub: () => <div data-testid="github-icon" />,
}))

jest.mock('react-icons/tb', () => ({
  TbDeviceLaptop: () => <div data-testid="laptop-icon" />,
}))

jest.mock('@/components/ui/pointer-highlight', () => ({
  PointerHighlight: ({ children }: any) => <div data-testid="pointer-highlight">{children}</div>,
}))

jest.mock('@/components/ui/resizable-navbar', () => ({
  NavbarButton: ({ children, href }: any) => (
    <a href={href} data-testid="navbar-button">
      {children}
    </a>
  ),
}))

describe('HeroContent', () => {
  it('renders the hero section with all elements', () => {
    render(<HeroContent />)

    expect(screen.getByTestId('laptop-icon')).toBeInTheDocument()
    expect(screen.getByText('The Developer')).toBeInTheDocument()

    expect(screen.getByText('Ashlok Chaudhary')).toBeInTheDocument()
    expect(screen.getByText('Full-Stack Developer')).toBeInTheDocument()
    expect(
      screen.getByText(/Crafting clean, performant & responsive web experiences/),
    ).toBeInTheDocument()

    expect(screen.getByText("Let's Connect ↓")).toBeInTheDocument()
    expect(screen.getByTestId('github-icon')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
  })

  it('has correct links', () => {
    render(<HeroContent />)
    const githubLink = screen.getByText('GitHub').closest('a')
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Ashlok2003')
  })
})
