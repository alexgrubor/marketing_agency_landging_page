import FAQItem from "./components/FAQItem"
const FAQsPage = () => {
    const FAQs = [
        {
          question: "What is the best thing about our company?",
          answer: "The best thing about our company is that we are the best."
        },
        {
          question: "What is the worst thing about our company?",
          answer: "The worst thing about our company is that we are the worst."
        },
        {
          question: "What is the most average thing about our company?",
          answer: "The most average thing about our company is that we are the most average."
        }, 
        { 
            question: 'What sets your marketing agency apart from others?', 
            answer: 'We specialize in data-driven strategies and a deep understanding of your target audience. Our focus is not just on campaigns, but on building long-term growth for your brand.' 
          },
          { 
            question: 'Do you offer SEO and content marketing services?', 
            answer: 'Yes! SEO and content marketing are core components of our service offerings. We can help you improve search rankings, create engaging content, and reach a wider audience.' 
          },
          { 
            question: 'How do you handle project management and communication?', 
            answer: 'We use dedicated project management tools and have regular check-ins with clients.  Transparency and collaboration are essential to our success.' 
          },
          { 
            question: 'Can you provide examples of successful campaigns you have run?', 
            answer: 'Absolutely. We have a portfolio of case studies showcasing results across various industries. We’d be happy to share those relevant to your business.' 
          },
          { 
            question: 'What is your pricing structure like?', 
            answer: 'We offer customized pricing plans based on your specific needs and goals. Let’s schedule a consultation to discuss your project and provide a tailored quote.' 
          },
          { 
            question: 'Do you work with businesses in specific industries?', 
            answer: "While we have experience in a range of industries, our expertise lies in [your areas of strength]. However, we're always open to exploring new partnerships."
          },
          { 
            question: 'How do you stay up-to-date with the latest marketing trends?', 
            answer: 'Our team is committed to ongoing learning and development. We attend industry conferences, participate in training, and constantly monitor the evolving marketing landscape.' 
          },
          { 
            question: 'What is the typical timeframe for seeing results?', 
            answer: 'While some results can be seen quickly, sustainable marketing success takes time. We’ll outline realistic expectations and provide regular progress reports.' 
          },
          { 
            question: 'Do you offer social media advertising services?', 
            answer: 'Yes, we specialize in developing and managing paid social media campaigns across various platforms to reach your ideal target audience.' 
          },
          { 
           question: 'How do you ensure brand consistency across all marketing efforts?', 
           answer: 'We’ll work closely with you to understand your brand voice and guidelines. We ensure all our marketing materials align perfectly with your overall branding.' 
          }, 

    ]
   
  return (
    <div className="container mx-auto py-12 px-4">
    <h1 className="text-secondBg text-3xl font-bold mb-8">Frequently Asked Questions</h1>
    <div className="space-y-4">
      {FAQs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
    <div>
        <h2 className="text-secondBg text-3xl font-bold my-8">Still have questions?</h2>
        <p className="text-secondBg">
            We are here to help. If you have any other questions, feel free to reach out to us at
            <a href="mailto:info@yourcompany.com" className="ml-2 text-myPurple-600 underline">
                info@yourcompany.com
            </a>
        </p>
        

    </div>
  </div>
  )
}
export default FAQsPage