import { render, screen } from '@testing-library/react'
import SkillText from '../SkillText'

jest.mock('@heroicons/react/24/solid', () => ({
  SparklesIcon: () => <div data-testid="sparkles-icon" />,
}))

describe('SkillText', () => {
  it('renders all text elements with animations', () => {
    render(<SkillText />)

    expect(screen.getByTestId('sparkles-icon')).toBeInTheDocument()
    expect(screen.getByText('Think better with Next js 13')).toBeInTheDocument()

    expect(screen.getByText('Making apps with modern technologies')).toBeInTheDocument()
    expect(screen.getByText('Never miss a task, deadline or idea')).toBeInTheDocument()
  })

  it('has correct styling classes', () => {
    render(<SkillText />)

    const welcomeBox = screen.getByText('Think better with Next js 13').parentElement
    expect(welcomeBox).toHaveClass('Welcome-box')
    expect(welcomeBox).toHaveClass('border-[#7042f88b]')

    const mainText = screen.getByText('Making apps with modern technologies')
    expect(mainText).toHaveClass('text-[30px]')

    const cursiveText = screen.getByText('Never miss a task, deadline or idea')
    expect(cursiveText).toHaveClass('cursive')
  })
})
