import { act, render } from '@testing-library/react'
import { BentoGrid } from '../bento-grid'

jest.mock('../timeline', () => ({
  Timeline: () => <div data-testid="mock-timeline" />,
}))

test('renders BentoGrid', async () => {
  await act(async () => {
    render(<BentoGrid />)
  })
})
