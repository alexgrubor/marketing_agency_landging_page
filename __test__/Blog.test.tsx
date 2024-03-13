import React from 'react'
import { render, screen } from '@testing-library/react'
import Blogs from '../src/app/blogs/page'
import '@testing-library/jest-dom'; 
test('renders the title', () => {
  render(<Blogs />)
    const title = screen.getByText(/Blogs/i)
    expect(title).toBeInTheDocument();
})

