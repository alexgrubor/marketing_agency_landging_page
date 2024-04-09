"use client";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const ContactFormData = () => {
  const { userId } = useAuth();

  const [contactFormData, setContactFormData] = useState([]);

  useEffect(() => {
    const fetchContactFormData = async () => {
      const { data } = await axios.get("/api/admin/submit-form", {
        headers: {
          Authorization: `Bearer ${userId}`,
        },
      });
      setContactFormData(data);
    };
    fetchContactFormData();
  }, []);

  const handleDelete = async (id: string) => {
    await axios.delete(`/api/admin/submit-form/${id}`, {
      headers: {
        Authorization: `Bearer ${userId}`,
      },
    });
    setContactFormData(
      contactFormData.filter((contact: any) => contact.id !== id)
    );
  };

  return (
    <div className="min-h-svh">
      {contactFormData.map((contact: any) => (
        <div
          key={contact.id}
          className="bg-white p-4 my-2 rounded-md border relative border-gray-200 shadow-sm"
        >
          <p className="font-medium">Name: {contact.name}</p>
          <p className="text-blue-500 hover:underline cursor-pointer">
            Email: {contact.email}
          </p>
          <p>Company: {contact.company}</p>
          <p>Company Stage: {contact.company_stage}</p>
          <p>Interested In: {contact.interested_in}</p>
          <p>Budget: {contact.budget}</p>
          <p>Message: {contact.message}</p>
          <p>How did you hear: {contact.how_did_you_hear}</p>
          <button
            className="text-red-500 hover:text-red-700 absolute top-2 right-5"
            onClick={() => handleDelete(contact.id)}
          >
            <FaTrashAlt size={28} />
          </button>
        </div>
      ))}
    </div>
  );
};
export default ContactFormData;
