"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

export interface Blog {
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
      {
        currentBlogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))
      }
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
