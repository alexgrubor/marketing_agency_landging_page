import { AiOutlineCloseCircle } from "react-icons/ai";
import MultiStepApplicationForm from "./MultiStepApplicationForm";
interface JobApplicationProps {
  isOpen: boolean;
  onClose: () => void;
  job_id: string | string[];
}
const JobApplication = ({ isOpen, onClose, job_id }: JobApplicationProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md  w-1/2 shadow-lg relative">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <AiOutlineCloseCircle size={30} />
        </button>
       <MultiStepApplicationForm job_id={job_id}/>
      </div>
    </div>
  );
};
export default JobApplication;
