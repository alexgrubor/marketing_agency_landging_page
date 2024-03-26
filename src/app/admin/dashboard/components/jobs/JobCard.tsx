import { Job } from "./Jobs";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import JobModal from "./JobModal";
interface JobCardProps {
  job: Job;
  isOpen: boolean;
  onMenuClick: () => void;
}
const JobCard = ({ job, isOpen, onMenuClick }: JobCardProps) => {
  const actions = [
    { label: "View", type: "view" },
    { label: "Edit", type: "edit" },
    { label: "Delete", type: "delete" },
  ];

  const [modalType, setModalType] = useState<null | "edit" | "delete" | "view">(
    null
  );
  const [openModal, setModalOpen] = useState(false);

  const handleOpeningModal = (modalType: "edit" | "delete" | "view") => {
    setModalType(modalType);
    setModalOpen(true);
  };

  return (
    <div className="border border-gray-200 p-4 rounded-lg mb-4 relative shadow-md">
      <p
        className={`${job.status === null || job.status === "open"
          ? "bg-green-600"
          : "bg-red-600"
          } w-12 py-1 text-center rounded-lg text-sm`}
      >
        {job.status === null ? "Open" : job.status}
      </p>
      <h2 className="text-lg font-bold mt-3">{job.title}</h2>
      <p className="text-gray-600">{job.contact_person}</p>

      <button
        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-3 rounded-md absolute top-2 right-2"
        onClick={onMenuClick}
      >
        <BsThreeDotsVertical />
      </button>

      {isOpen && (
        <div className="absolute top-10 right-[-3rem] bg-white border border-gray-200 p-4 rounded-md shadow-md">
          <ul>
            {actions.splice(1).map((action) => (
              <li
                key={action.type}
                className="cursor-pointer hover:text-myPurple-700 p-2 rounded-md"
                onClick={() =>
                  handleOpeningModal(action.type as "edit" | "delete" | "view")
                }
              >
                {action.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-3 py-2 rounded-md"
          onClick={() =>
            handleOpeningModal(actions[0].type as "edit" | "delete" | "view")
          }
        >
          {actions[0].label}
        </button>
      </div>

      <JobModal
        isOpen={openModal}
        onClose={() => setModalOpen(false)}
        type={modalType}
        job_id={job.job_id}
      />
    </div>
  );
};

export default JobCard;
