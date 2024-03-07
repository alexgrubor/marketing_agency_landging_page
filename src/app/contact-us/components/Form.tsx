'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  email: z.string().email('Invalid email'),
  company: z.string().min(1, 'Company is required'),
  website: z.string().url('Invalid website URL').startsWith('http://'),
  companyStage: z.enum(['Early Stage (Pre-Seed / Seed)', 'Growth (Series A - C)', 'Public / Enterprise']),
  interestedIn: z.array(z.string()).min(1, 'Select at least one interest'),
  budget: z.string().min(1, "Budget is required"),
  message: z.string().min(1, 'Message is required'),
  howDidYouHear: z.string().min(1, 'Please tell us how you found us'),
});

type FormData = z.infer<typeof formSchema>; 

const FormComponent: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
    
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error(error); 
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:w-[60%]"> 
     
     <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name (required)
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full  focus:outline-none focus:ring-2 focus:ring-myPurple-700"
        />
      </div>

      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
          First Name (required)
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full  focus:outline-none focus:ring-2 focus:ring-myPurple-700"
        />
      </div>

      <div>
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
          Last Name (required)
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full  focus:outline-none focus:ring-2 focus:ring-myPurple-700"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email (required)
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full  focus:outline-none focus:ring-2 focus:ring-myPurple-700"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
          Company (required)
        </label>
        <input
          type="text"
          id="company"
          placeholder="Enter your company"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full  focus:outline-none focus:ring-2 focus:ring-myPurple-700"
        />
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium text-gray-700">
          Website (required) http://
        </label>
        <input
          type="text"
          id="website"
          placeholder="Enter your website"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full  focus:outline-none focus:ring-2 focus:ring-myPurple-700"
        />
      </div>

      <div>
        <label htmlFor="companyStage" className="block text-sm font-medium text-gray-700">
          Company Stage (required)
        </label>
        <select
          id="companyStage"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full  focus:outline-none focus:ring-2 focus:ring-myPurple-700"
        >
          <option value="">Please select</option>
          <option value="Early Stage (Pre-Seed / Seed)">Early Stage (Pre-Seed / Seed)</option>
          <option value="Growth (Series A - C)">Growth (Series A - C)</option>
          <option value="Public / Enterprise">Public / Enterprise</option>
        </select>
      </div>

      <div>
        <h2 className="block text-sm font-medium text-gray-700">
          Interested In (select all that apply) (required)
        </h2>
        <div className="mt-2 space-y-2">
          <div>
            <input type="checkbox" id="positioning" value="Positioning & Messaging" />
            <label htmlFor="positioning" className="ml-2 text-sm text-gray-700">
              Positioning & Messaging
            </label>
          </div>
          <div>
            <input type="checkbox" id="salesEnablement" value="Sales Enablement" />
            <label htmlFor="salesEnablement" className="ml-2 text-sm text-gray-700">
              Sales Enablement
            </label>
          </div>
        </div>
      </div>
        <p className='mt-3 text-gray-600 text-sm'>* By submitting I agree that Our Company may process my data in the manner described in updated Privacy Policy.</p>
      <button type="submit" className=" my-4 bg-myPurple-600 p-3 px-5 border border-bg transition-all duration-300 hover:bg-bg hover:text-myPurple-600 hover:border-myPurple-600">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;