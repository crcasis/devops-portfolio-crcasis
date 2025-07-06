import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '../dropdown-menu'

describe('<DropdownMenu />', () => {
  const user = userEvent.setup()

  it('renders and opens DropdownMenu', async () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Content</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    )

    await user.click(screen.getByText(/open/i))

    await waitFor(() => {
      expect(screen.getByText(/content/i)).toBeVisible()
    })
  })

  it('renders DropdownMenuGroup with items', async () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>,
    )

    await user.click(screen.getByText(/open/i))

    expect(await screen.findByText(/item 1/i)).toBeVisible()
    expect(screen.getByText(/item 2/i)).toBeVisible()
  })

  it('renders CheckboxItem and toggles', async () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem>Checkbox</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    )

    await user.click(screen.getByText(/open/i))

    const checkbox = await screen.findByText(/checkbox/i)
    expect(checkbox).toBeVisible()
    await user.click(checkbox)
  })

  it('renders RadioGroup with items and selects one', async () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup>
            <DropdownMenuRadioItem value="1">One</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="2">Two</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>,
    )

    await user.click(screen.getByText(/open/i))

    const one = await screen.findByText(/one/i)
    expect(one).toBeVisible()
    await user.click(one)
  })

  it('renders label, separator, and shortcut', async () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Label</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Item <DropdownMenuShortcut>Ctrl+X</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    )

    await user.click(screen.getByText(/open/i))

    expect(await screen.findByText(/label/i)).toBeVisible()
    expect(screen.getByText(/ctrl\+x/i)).toBeVisible()
  })

  it('renders Submenu and shows content', async () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Sub Item</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>,
    )

    await user.click(screen.getByText(/open/i))

    const more = await screen.findByText(/more/i)
    expect(more).toBeVisible()
    await user.hover(more)

    expect(await screen.findByText(/sub item/i)).toBeVisible()
  })
})
