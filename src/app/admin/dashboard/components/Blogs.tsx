'use client'
import { useState } from "react"
const Blogs = () => {
  const initialBlogs = [
    {
      id: 1,
      title: "10 Tips for Effective Content Marketing",
      author: "John Doe",
      date: "March 10, 2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 2,
      title: "The Importance of SEO in Digital Marketing",
      author: "Jane Smith",
      date: "March 15, 2024",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 3,
      title: "Social Media Marketing Strategies for 2024",
      author: "Alex Johnson",
      date: "March 20, 2024",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    }
  ];

  const [blogs, setBlogs] = useState(initialBlogs);
  const removeBlog = (id: number) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Manage Blogs</h1>
      <div>
    
        {blogs.map(blog => (
          <div key={blog.id} className="bg-secondBg shadow-md rounded-md p-6 mb-4">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p><strong>Author:</strong> {blog.author}</p>
            <p><strong>Date:</strong> {blog.date}</p>
            <p className="mt-2">{blog.content}</p>
       
            <div className="mt-4 flex justify-end">
              <button
                className="mr-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => removeBlog(blog.id)}
              >
                Delete
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                <a href={'#'}>Update</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Blogs