import { Blog } from "./Blogs";
import Image from "next/image";

interface BlogCardProps {
    blog: Blog;
}
const BlogCard = ({ blog }: BlogCardProps) => {
    const truncatedBody = blog.body.length > 140 ? blog.body.slice(0, 140) + '...' : blog.body;
    const truncatedTitle = blog.title.length > 20 ? blog.title.slice(0, 20) + '...' : blog.title;
  
    return (
      <div
        key={blog.id}
        className="bg-myPurple-600  w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4 flex flex-col h-full overflow-hidden rounded-lg"
      >
        <h2 className="text-2xl my-2 font-bold">{truncatedTitle}</h2>
        <Image
          src={blog.id % 2 === 0 ? "/images/event1.jpg" : "/images/event2.jpg"}
          alt="Blog_item"
          width={600}
          height={400}
        />
        <p>{truncatedBody}</p>
        <button className="bg-secondBg py-2 my-2 px-3">Read More</button>
      </div>
    );
}

export default BlogCard;