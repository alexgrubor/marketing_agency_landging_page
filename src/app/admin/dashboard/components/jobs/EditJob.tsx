import { useState, useEffect } from "react";
import { Job } from "./Jobs";

interface EditJobProps {
  job_id: string;
}

const EditJob = ({ job_id }: EditJobProps) => {
  const [job, setJob] = useState<Job | null>(null);
  useEffect(() => {
    const fetchJob = async () => {
      const response = await fetch(
        `/api/admin/jobs/${job_id}`
      );
      const data = await response.json();
      setJob(data);
    };
    fetchJob();
  }, [job_id]);
  if (!job) return null;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
  };
  return (
    <div className="w-[45vw] mx-auto">
      <h2>Edit Job</h2>


      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={job.title} onChange={(e) => setJob({ ...job, title: e.target.value })} />

        <label htmlFor="company_intro">Company Introduction</label>
        <textarea name="company_intro" id="company_intro" value={job.company_intro} onChange={(e) => setJob({ ...job, company_intro: e.target.value })}> </textarea>

        <label htmlFor="benefits">Benefits</label>
        <textarea name="benefits" id="benefits" value={job.benefits} onChange={(e) => setJob({ ...job, benefits: e.target.value })}></textarea>

        <label htmlFor="responsibilities">Responsibilities</label>
        <textarea name="responsibilities" id="responsibilities" value={job.responsibilities} onChange={(e) => setJob({ ...job, responsibilities: e.target.value })}></textarea>

        <label htmlFor="requirements">Requirements</label>
        <textarea name="requirements" id="requirements" value={job.requirements} onChange={(e) => setJob({ ...job, requirements: e.target.value })}></textarea>

        <label htmlFor="status">Status</label>
        <select name="status" id="status" value={job.status === null ? 'open' : job.status} onChange={(e) => setJob({ ...job, status: e.target.value })}>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>

        <label htmlFor="contact_email">Contact Email</label>
        <input type="email" name="contact_email" id="contact_email" value={job.contact_email} onChange={(e) => setJob({ ...job, contact_email: e.target.value })} />

        <label htmlFor="contact_person">Contact Person</label>
        <input type="text" name="contact_person" id="contact_person" value={job.contact_person} onChange={(e) => setJob({ ...job, contact_person: e.target.value })} />

        <button type="submit" className="bg-green-700 text-secondBg p-2 rounded-md">Save</button>
      </form>
    </div>
  );
};
export default EditJob;
