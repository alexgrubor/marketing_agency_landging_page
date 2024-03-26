'use client'
import axios from "axios";
import { useState, useEffect } from "react";
import { BsPlusCircle, } from "react-icons/bs";
import JobCard from "./JobCard";
import AddNewJob from "./AddNewJob";

export interface Job {
  job_id: string;
  title: string;
  company_intro: string;
  benefits: string;
  responsibilities: string;
  requirements: string;
  status: string | null;
  contact_email: string;
  contact_person: string;
}

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [showMenuId, setShowMenuId] = useState<string | null>(null);
  const [addNewJobModalOpen, secondBgModalOpen] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/admin/jobs")
      .then((response) => {
        setJobs(response.data);
      });
  }, []);

  const handleMenuClick = (job_id: string) => {
    setShowMenuId((prevId) => (prevId === job_id ? null : job_id));
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <h1 className="text-2xl font-bold mb-4">Manage Job Offers</h1>
      <div className="hidden lg:block absolute top-2 right-3">
        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-md"
          onClick={() => secondBgModalOpen(true)}
        >
          <BsPlusCircle style={{ color: "white" }} /> Add new job
        </button>
      </div>
      <div className="absolute lg:hidden top-2 right-2 cursor-pointer">
        <BsPlusCircle style={{ color: "green" }} size={25} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {jobs.map((job) => (
          <JobCard
            key={job.job_id}
            job={job}
            isOpen={showMenuId === job.job_id}
            onMenuClick={() => handleMenuClick(job.job_id)}
          />
        ))}
      </div>
      {addNewJobModalOpen && <AddNewJob onClose={() => secondBgModalOpen(false)} />}
    </div>
  );
};

export default Jobs;
