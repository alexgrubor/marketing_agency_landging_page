"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Job } from "@/app/admin/dashboard/components/jobs/Jobs";
import Link from "next/link";

const JobOpenings = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  useEffect(() => {
    axios.get("/api/admin/jobs").then((response) => {
      setJobs(response.data);
    });
  }, []);

  if (jobs.length === 0) return;

  return (
    <div className="bg-secondBg p-6 container mx-auto my-5"> 
      <h1 className="text-3xl font-bold text-myPurple-600 mb-6">Job Openings</h1> 
      <p className="text-gray-500 mb-8"> 
      We are always looking for talented individuals to join our team. Check
        out our current job openings below. If you're interested in a role and
        think you'd be a good fit, we'd love to hear from you.

      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> 
        {jobs.map((job) => (
          <div key={job.job_id} className="bg-white rounded-lg p-6 shadow-md"> 
            <h2 className="text-xl font-semibold text-myPurple-800 mb-2"> 
              {job.title}
            </h2>
            <p className="text-gray-700 mb-4">{job.company_intro}</p>
            <Link
              href={`/careers/${job.job_id}`}
              className="bg-myPurple-600 text-white px-5 py-3 rounded-md 
                       hover:bg-myPurple-700 inline-block" 
            >
              Apply Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default JobOpenings;
