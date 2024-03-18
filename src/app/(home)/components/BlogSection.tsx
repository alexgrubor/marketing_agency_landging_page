import Image from "next/image"
import Link from "next/link"
import SingleBlogPostCard from "./SingleBlogPostCard"
const BlogSection = () => {
  return (
    <section className="text-secondBg">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
			<Image src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500 hover:scale-110 transition-all duration-500" width={700} height={700} />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold text-myPurple-900 sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
				<span className="text-xs dark:text-gray-400">February 19, 2021</span>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt repellat rerum cupiditate porro. Repellendus dolorem natus recusandae perferendis voluptates numquam neque deserunt error minima! Ad incidunt unde tenetur, animi error officia dignissimos, architecto recusandae ipsa ab optio earum pariatur perspiciatis ea deserunt et? Ut, nihil totam, odit maxime natus eius officiis blanditiis magnam enim facere itaque esse similique tempora iusto!</p>
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SingleBlogPostCard
        imageSrc="https://images.pexels.com/photos/19597529/pexels-photo-19597529/free-photo-of-man-playing-with-dogs-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        title="In usu laoreet repudiare legendos"
        date="January 21, 2021"
        description="Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri."
      />
      <SingleBlogPostCard
        imageSrc="https://images.pexels.com/photos/3758104/pexels-photo-3758104.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="In usu laoreet repudiare legendos"
        date="January 22, 2021"
        description="Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri."
      />
       <SingleBlogPostCard
        imageSrc="https://images.pexels.com/photos/2977581/pexels-photo-2977581.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="In usu laoreet repudiare legendos"
        date="January 22, 2021"
        description="Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri."
      />

		</div>
		<div className="flex justify-center">
			<Link href={'/blogs'} className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Read more posts </Link>
		</div>
	</div>
</section>
  )
}
export default BlogSection