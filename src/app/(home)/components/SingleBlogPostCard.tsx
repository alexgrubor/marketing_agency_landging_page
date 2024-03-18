import Image from "next/image"
import Link from "next/link"
interface SingleBlogPostCardProps {
    imageSrc : string;
    title : string;
    date : string;
    description : string;
}
const SingleBlogPostCard = ({ imageSrc, title, date, description }:SingleBlogPostCardProps) => {
  return (
    <Link href='/blogs'className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hover:scale-110 transition-all duration-500">
        <Image src={imageSrc} alt={title} className="object-cover w-full h-64 rounded sm:h-96 dark:bg-gray-500" height={500} width={600} />
        <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold text-myPurple-900 group-hover:underline group-focus:underline">{title}</h3>
        <span className="text-xs dark:text-gray-400">{date}</span>
        <p>{description}</p>
      </div>
    </Link>
  )
}
export default SingleBlogPostCard