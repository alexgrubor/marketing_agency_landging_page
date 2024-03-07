import type { NextPage } from 'next';
import Head from 'next/head'
import LetsChatButton from '../components/ui/LetsChatButton';
const PolicyPage : NextPage= () => {
  return (
    <div className='container mx-auto px-4 py-12 bg-secondBg'>
      <Head>
        <title>Our Agency - Privacy Policy</title>
        <meta name="description" content="Privacy policy for Our Agency website." />
      </Head>
      <main>
      <h1 className="text-3xl font-bold text-myPurple-600 mb-6">Our Agency - Privacy Policy</h1>
    <p><b>Effective Date:</b> March 7, 2024</p>

    <section className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
      <p>We collect two types of information on the Website:</p>
      <ul className="list-disc ml-8">
        <li>
          <b>Personal Information:</b> This information can be used to identify you as an individual. It may include your name, email address, phone number, and company name. We only collect personal information that you voluntarily provide to us, such as when you contact us through a form on the Website.
        </li>
        <li>
          <b>Non-Personal Information:</b> This information cannot be used to identify you as an individual. It may include information about your device, browsing activity on the Website, and demographic information. We collect non-personal information automatically through cookies and other tracking technologies.
        </li>
      </ul>
    </section>

    <section className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Use of Information</h2>
      <p>We use the information we collect for the following purposes:</p>
      <ul className="list-disc ml-8">
        <li>To provide and operate the Website</li>
        <li>To process and respond to your inquiries</li>
        <li>To send you marketing materials (with your consent)</li>
        <li>To improve the Website and our services</li>
        <li>To comply with legal and regulatory requirements</li>
      </ul>
    </section>

    <section className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Sharing of Information</h2>
      <p>We will not sell, trade, or otherwise transfer your personal information to third parties without your consent. However, we may share your information with third-party service providers who help us operate the Website and provide our services. These service providers are contractually obligated to keep your information confidential.</p>
      <p>We may also disclose your information if we are required to do so by law or if we believe that such disclosure is necessary to protect our rights, property, or safety, or the rights, property, or safety of others.</p>
    </section>

    <section className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Your Choices</h2>
      <p>You can opt out of receiving marketing communications from us by following the unsubscribe instructions in those communications.</p>
      <p>You can also control the use of cookies by adjusting your browser settings. However, please note that if you disable cookies, you may not be able to use all of the features of the Website.</p>
    </section>

    <section className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Security</h2>
      <p>We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no website or internet transmission is completely secure.</p>
    </section>

    <section className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
      <p>The Website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.</p>
    </section>

    <section className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Changes to this Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the Website. You are advised to review this Privacy Policy periodically for any changes.</p>
    </section>

    <section className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className='mb-4'>If you have any questions about this Privacy Policy, please contact us</p>
      <LetsChatButton text='Contact Us' href='/contact-us'/>
    </section>
      </main>
    </div>
  )
}
export default PolicyPage;