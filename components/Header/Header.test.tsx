import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('renders a component', () => {
    render(<Header />)
    const heading = screen.getByText(/instagram/i);
    expect(heading).toBeInTheDocument()

    const likedCta = screen.getByText("View Liked Photos");
    expect(likedCta).toBeInTheDocument()
  })
})
