"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

interface Blog {
  id: number;
  title: string;
  body: string;
  reactions?: number;
  tags?: string[];
  userId?: number;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;

  useEffect(() => {
    axios.get("https://dummyjson.com/posts").then((res) => {
      setBlogs(res.data.posts);
      setLoading(false);
    });
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-secondBg p-4">
      {loading && <div>loading.....</div>}
      
      <div className="flex flex-wrap justify-center gap-4 sm:gap-2 lg:gap-4">
        {currentBlogs.map((blog) => {
             const truncatedBody = blog.body.length > 140 ? blog.body.slice(0, 140) + '...' : blog.body;
             const truncatedTitile = blog.title.length > 20 ? blog.title.slice(0, 20) + '...' : blog.title;
          return (
            <div
              key={blog.id}
              className="bg-myPurple-600  w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4 flex flex-col h-full overflow-hidden rounded-lg"
            >
              <h2 className="text-2xl my-2 font-bold">{truncatedTitile}</h2>
              <Image
                src={
                  blog.id % 2 === 0
                    ? "/images/event1.jpg"
                    : "/images/event2.jpg"
                }
                alt="Blog_item"
                width={600}
                height={400}
              />
              <p>{truncatedBody}</p>
              <button className="bg-secondBg py-2 my-2 px-3">Read More</button>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-8 gap-3">
        {Array.from(
          { length: Math.ceil(blogs.length / blogsPerPage) },
          (_, i) => (
            <button
              className={`${
                i + 1 === currentPage
                  ? "bg-myPurple-600 text-white"
                  : "bg-white"
              } px-3 py-1 rounded-lg`}
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};
export default Blogs;
