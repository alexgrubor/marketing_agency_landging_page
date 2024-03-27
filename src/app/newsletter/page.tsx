import SocialMediaContainer from "../components/ui/SocialMediaContainer"

const NewsletterPage = () => {
  return (
    <div className="min-h-screen bg-secondBg p-8 h-screen flex flex-col justify-center items-center overflow-x-hidden">
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-myPurple-600 mb-4">Stay Connected with Our Newsletter</h1>
      <p className="text-gray-600">Subscribe to our newsletter to receive the latest updates, insights, and exclusive offers from our marketing experts.</p>
      <form className="mt-6">
        <div className="flex items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:border-myPurple-800"
          />
          <button
            type="submit"
            className="bg-myPurple-800 text-white px-6 py-2 rounded-r hover:bg-myPurple-600 focus:outline-none"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
    <div className="mt-8 text-center text-gray-600">
        <p>Join our community and stay informed about the latest trends, marketing strategies, and success stories.</p>
        <p className="text-sm">*We promise not to spam your inbox! Your trust is important to us.</p>
        <p className="text-xl my-3">Follow us on social media for more updates and behind-the-scenes content:</p>
      <SocialMediaContainer className="flex justify-center my-4"/>
      </div>
  </div>
  )
}
export default NewsletterPage