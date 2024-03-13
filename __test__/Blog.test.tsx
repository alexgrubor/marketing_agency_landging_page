import React from 'react'
import { render, screen } from '@testing-library/react'
import Blog from '../src/app/blogs/page'
import Blogs from '@/app/blogs/components/Blogs';
import BlogCard from '@/app/blogs/components/BlogCard';

import '@testing-library/jest-dom'; 
test('renders the title', () => {
  render(<Blog />)
    const title = screen.getByText(/Blogs/i)
    expect(title).toBeInTheDocument();
})

//snapshot 
test('expect to render BlogCard', () => {
    const blog = {
        id: 1,
        title: 'title',
        body: 'body'
        
    }
    const { container } = render(<BlogCard blog={blog} />)
    expect(container).toMatchSnapshot()

}) 


