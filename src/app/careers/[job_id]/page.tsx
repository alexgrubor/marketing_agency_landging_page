"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Job } from "@/app/admin/dashboard/components/jobs/Jobs";
import JobApplication from "./components/JobApplication";
import Image from "next/image";
import { motion } from "framer-motion";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsFillStarFill, BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const JobPage = () => {
  const { job_id } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [isApplicationStarted, setIsApplicationStarted] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      const response = await fetch(`/api/admin/jobs/${job_id}`);
      const data = await response.json();
      setJob(data);
    };
    fetchJob();
  }, [job_id]);

  if (!job) return null;

  return (
    <div className="bg-secondBg min-h-screen flex flex-col items-center justify-start p-4">
      <motion.h1
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-3xl text-myPurple-600 mb-3"
      >
        {job.title}
      </motion.h1>
      <Image
        src="https://images.pexels.com/photos/652355/pexels-photo-652355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Careers"
        width={600}
        height={400}
        className=" shadow-myPurple-800 my-3"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-white w-full md:w-3/5 bg-bg p-6 rounded-lg shadow-md"
      >
        <p>{job.company_intro}</p>
        <hr />

        <h2>Requirements</h2>
        <ul className="mb-3">
          {job.requirements.split(",").map((requirement, index) => (
            <li key={index}>
              <BiRightArrowAlt className="inline-block mx-3" size={20} />{" "}
              {requirement[0].toUpperCase() + requirement.slice(1)}
            </li>
          ))}
        </ul>
        <hr />
        <h2>Responsibilities</h2>
        <ul className="mb-3">
          {job.responsibilities.split(",").map((responsibility, index) => (
            <li key={index}>
              <BiRightArrowAlt className="inline-block mx-3" size={20} />{" "}
              {responsibility[0].toUpperCase() + responsibility.slice(1)}
            </li>
          ))}
        </ul>
        <hr />
        <h2>Benefits</h2>
        <ul className="mb-3">
          {job.benefits.split(",").map((benefit, index) => (
            <li key={index}>
              <BsFillStarFill className="inline-block mx-3" size={15} />{" "}
              {benefit[0].toUpperCase() + benefit.slice(1)}
            </li>
          ))}
        </ul>
        <hr />
        <p className=" ">
          <strong className="flex items-center text-xl font-bold gap-2">
            <BsFillPersonFill className="inline-block" size={20} />
            Contact person:
          </strong>{" "}
          {job.contact_person}
          <br />
          <strong className="flex items-center text-xl font-bold gap-2">
            <MdEmail className="inline-block" size={20} />
            Contact email:
          </strong>{" "}
          {job.contact_email}
        </p>

        <button
          className="bg-myPurple-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-myPurple-700"
          onClick={() => setIsApplicationStarted(!isApplicationStarted)}
        >
          Apply
        </button>
      </motion.div>
      {isApplicationStarted && (
        <JobApplication
          isOpen={isApplicationStarted}
          onClose={() => setIsApplicationStarted(false)}
          job_id={job_id}
        />
      )}
    </div>
  );
};
export default JobPage;
