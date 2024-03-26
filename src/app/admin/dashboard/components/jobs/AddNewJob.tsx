import { AiOutlineCloseCircle } from "react-icons/ai";


interface AddNewJobProps {
  onClose: () => void;
}
const AddNewJob = ({onClose} : AddNewJobProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-lg relative">

      <button className="absolute top-2 right-2" onClick={onClose}>
          <AiOutlineCloseCircle size={30} />
        </button>

        <h1 className="text-2xl font-bold mb-4">Add New Job</h1>
        <form>
          <div className="flex flex-col mb-4">
            <label htmlFor="title" className="font-semibold text-sm mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border border-gray-200 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="contact_person" className="font-semibold text-sm mb-2">
              Contact Person
            </label>
            <input
              type="text"
              id="contact_person"
              name="contact_person"
              className="border border-gray-200 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="status" className="font-semibold text-sm mb-2">
              Status
            </label>
            <select
              name="status"
              id="status"
              className="border border-gray-200 p-2 rounded-md"
            >
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-3 py-2 rounded-md"
            >
              Add Job
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-3 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>


      </div>
    </div>
  );
};
export default AddNewJob;
