import { render, screen } from '@testing-library/react'
import Projects from '../Projects'

describe('<Projects />', () => {
  test('renders heading and description', () => {
    render(<Projects />)

    expect(screen.getByRole('heading', { name: /my projects/i })).toBeInTheDocument()
    expect(screen.getByText(/a collection of innovative projects/i)).toBeInTheDocument()
  })

  test('renders all project titles', () => {
    render(<Projects />)

    const titles = ['ShopXIndia', 'SocialPedia', 'FileShareX', 'Portfolio', 'Scheduly.AI']

    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  test('renders all GitHub and Live links', () => {
    render(<Projects />)

    const githubLinks = screen.getAllByRole('link', { name: /github/i })
    const liveLinks = screen.getAllByRole('link', { name: /live/i })

    expect(githubLinks.length).toBeGreaterThan(0)
    expect(liveLinks.length).toBeGreaterThan(0)

    githubLinks.forEach((link) => {
      expect(link).toHaveAttribute('href')
      expect(link).toHaveAttribute('target', '_blank')
    })

    liveLinks.forEach((link) => {
      expect(link).toHaveAttribute('href')
      expect(link).toHaveAttribute('target', '_blank')
    })
  })

  test('renders project images with correct alt text', () => {
    render(<Projects />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(0)

    images.forEach((img) => {
      expect(img).toHaveAttribute('alt')
      expect(img.getAttribute('alt')).not.toBe('')
    })
  })
})
