'use client'
import React, { useState } from 'react';
const CallInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    serviceInterest: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 
  };
  return (
    <div className="max-w-md mx-auto  text-secondBg  p-4  my-4">
    <h2 className="text-2xl font-semibold  mb-4">Would You Like to Work With Us?</h2>
    <p className=" mb-4">We're excited to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.</p>
    <form className=' p-3 ' onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="name" className="block mb-1">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-myPurple-900 focus:outline-none focus:border-purple-500" required />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-myPurple-900 focus:outline-none focus:border-purple-500" required />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="phone" className="block mb-1">Phone</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-myPurple-900 focus:outline-none focus:border-purple-500" required />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="company" className="block mb-1">Company Name</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-myPurple-900 focus:outline-none focus:border-purple-500" />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="website" className="block mb-1">Company Website</label>
            <input type="url" id="website" name="website" value={formData.website} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-myPurple-900 focus:outline-none focus:border-purple-500" />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="serviceInterest" className="block mb-1">Service of Interest</label>
            <input type="text" id="serviceInterest" name="serviceInterest" value={formData.serviceInterest} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-myPurple-900 focus:outline-none focus:border-purple-500" />
          </div>
          <div className="w-full px-2 mb-4">
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-2 rounded-lg border border-myPurple-900 focus:outline-none focus:border-purple-500" required />
          </div>
        </div>
        <button type="submit" className="w-full bg-myPurple-600 text-white py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:bg-purple-700">Submit</button>
      </form>
  </div>
  )
}
export default CallInquiryForm