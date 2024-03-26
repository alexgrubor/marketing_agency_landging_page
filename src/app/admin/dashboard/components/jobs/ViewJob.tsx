import axios from "axios";
import { useState, useEffect } from "react";
import { Job } from "./Jobs";
interface ViewJobProps {
  job_id: string;
}
const ViewJob = ({ job_id }: ViewJobProps) => {
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      const response = await axios.get(`http://localhost:3000/api/admin/jobs/${job_id}`);
      setJob(response.data);
    };
    fetchJob();
  }, [job_id]);

  if (!job) return null;

  return (
    <div>
      <h2 className="text-2xl font-semibold my-3">{job.title}</h2>
      <p className="text-lg my-3">{job.company_intro}</p>
      <h3 className="text-xl font-semibold my-3">Benefits</h3>
      <p className="my-3">{job.benefits}</p>
      <h3 className="text-xl font-semibold my-3">Responsibilities</h3>
      <p className="my-3">{job.responsibilities}</p>
      <h3 className="text-xl font-semibold my-3">Requirements</h3>
      <p className="my-3">{job.requirements}</p>
      <h3 className="text-xl font-semibold my-3">Status</h3>
      <p className="my-3">{job.status}</p>
      <h3 className="text-xl font-semibold my-3">Contact Email</h3>
      <p className="my-3">{job.contact_email}</p>
      <h3 className="text-xl font-semibold my-3">Contact Person</h3>
      <p className="my-3">{job.contact_person}</p>
    </div>
  )
}
export default ViewJob