import { render, screen } from '@testing-library/react'
import { Search } from './Search'
import user from '@testing-library/user-event';

describe('Search', () => {
  it('renders a component', () => {
    render(<Search setSearchData={jest.fn()}/>)
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument()
  })

  it('takes input', async () => {
    user.setup();
    render(<Search setSearchData={jest.fn()}/>)
    const inputElement = screen.getByRole('textbox');
    await user.type(inputElement, 'tree')
    expect(inputElement).toHaveValue('tree')
  })
})
