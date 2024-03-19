'use client'
import { useState } from "react"
const Jobs = () => {
  const initialJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      location: "Remote",
      hr: "John Doe",
      applicants: 10
    },
    {
      id: 2,
      title: "Backend Developer",
      skills: ["Node.js", "Express", "MongoDB"],
      location: "Remote",
      hr: "Jane Smith",
      applicants: 8
    },
    {
      id: 3,
      title: "UI/UX Designer",
      skills: ["UI Design", "UX Design", "Adobe XD"],
      location: "Remote",
      hr: "Alex Johnson",
      applicants: 5
    }
  ];
  const [jobs, setJobs] = useState(initialJobs);


  const removeJob = (id: number) => {
    const updatedJobs = jobs.filter(job => job.id !== id);
    setJobs(updatedJobs);
  };
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold mb-4">Manage Job Offers</h1>
    <div>
      {/* List of job offers */}
      {jobs.map(job => (
        <div key={job.id} className="bg-secondBg shadow-md rounded-md p-6 mb-4">
          <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
          <p><strong>Skills:</strong> {job.skills.join(', ')}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>HR:</strong> {job.hr}</p>
          <p><strong>Applicants:</strong> {job.applicants}</p>
    
          <button
            className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => removeJob(job.id)}
          >
            Remove
          </button>
          <button className="m-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            <a href={`/admin/dashboard/edit-job/${job.id}`}>Edit</a>
          </button>
        </div>
      ))}
    </div>
  </div>
  )
}
export default Jobs