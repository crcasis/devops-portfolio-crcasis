import { render, screen } from '@testing-library/react'
import { Badge } from '../badge'

describe('<Badge />', () => {
  it('renders with default variant', () => {
    render(<Badge>Default Badge</Badge>)
    const badge = screen.getByText(/default badge/i)
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveAttribute('data-slot', 'badge')
  })

  it('renders with all variants', () => {
    const variants = ['default', 'secondary', 'destructive', 'outline'] as const

    variants.forEach((variant) => {
      const { getByText, unmount } = render(<Badge variant={variant}>{variant} Badge</Badge>)
      expect(getByText(new RegExp(`${variant} badge`, 'i'))).toBeInTheDocument()
      unmount()
    })
  })

  it('merges custom className', () => {
    render(<Badge className="custom-class">With Class</Badge>)
    const badge = screen.getByText(/with class/i)
    expect(badge.className).toMatch(/custom-class/)
  })

  it('renders asChild with Slot', () => {
    render(
      <Badge asChild>
        <a href="/test">Link Badge</a>
      </Badge>,
    )
    const badge = screen.getByText(/link badge/i)
    expect(badge).toBeInTheDocument()
    expect(badge.tagName).toBe('A')
  })
})
