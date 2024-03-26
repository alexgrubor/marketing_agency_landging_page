const DeleteJob = () => {
  return (
    <div>
      <p className="
            text-red-600
            font-semibold
            text-lg
            my-5
        
      ">Are you sure you want to delete this job?</p>
      <div className="flex justify-between my-3">
        <button className="bg-red-600 p-2
            text-secondBg
            hover:bg-red-700
            transition-colors
            duration-300
            ease-in-out
        ">Delete</button>
        <button className="
            bg-gray-600
            text-secondBg
            p-2
            hover:bg-gray-700
            transition-colors
            duration-300
            ease-in-out
        ">Cancel</button>
      </div>
    </div>
  );
};
export default DeleteJob;
