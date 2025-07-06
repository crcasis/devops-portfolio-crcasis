import { render, screen } from '@testing-library/react'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from '../card'

describe('<Card /> suite', () => {
  it('renders Card with children', () => {
    render(<Card>content</Card>)
    expect(screen.getByText('content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Card className="custom">hi</Card>)
    expect(container.firstChild).toHaveClass('custom')
  })

  it('renders children inside Card', () => {
    render(
      <Card>
        <div>child element</div>
      </Card>,
    )
    expect(screen.getByText('child element')).toBeInTheDocument()
  })
})

describe('Card subcomponents', () => {
  it('renders CardHeader with children', () => {
    render(<CardHeader>Header</CardHeader>)
    expect(screen.getByText('Header')).toBeInTheDocument()
  })

  it('renders CardTitle with children', () => {
    render(<CardTitle>Title</CardTitle>)
    expect(screen.getByText('Title')).toBeInTheDocument()
  })

  it('renders CardDescription with children', () => {
    render(<CardDescription>Description</CardDescription>)
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('renders CardContent with children', () => {
    render(<CardContent>Content</CardContent>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders CardAction with children', () => {
    render(<CardAction>Action</CardAction>)
    expect(screen.getByText('Action')).toBeInTheDocument()
  })

  it('renders CardFooter with children', () => {
    render(<CardFooter>Footer</CardFooter>)
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })
})
