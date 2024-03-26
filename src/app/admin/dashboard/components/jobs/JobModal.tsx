import { AiOutlineCloseCircle } from "react-icons/ai";
import EditJob from "./EditJob";
import DeleteJob from "./DeleteJob";
import ViewJob from "./ViewJob";
interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  type: 'edit' | 'delete' | 'view' | null
  job_id: string

}

const JobModal = ({ isOpen, onClose, job_id, type, children }: JobModalProps) => {
  if (!isOpen) return null
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-lg relative">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <AiOutlineCloseCircle size={30} />
        </button>
        {
          type === 'edit' ? <EditJob job_id={job_id} /> : children
        }
        {
          type === 'delete' ? <DeleteJob /> : children
        }
        {
          type === 'view' ? <ViewJob job_id={job_id} /> : children
        }

      </div>
    </div>
  )
}
export default JobModal