const Step4 = ({ formData, handleChange }: any) => {
  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Review Your Application</h2>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="text-gray-600">Full Name:</p>
          <p>{formData.full_name}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Email:</p>
          <p>{formData.email}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Phone:</p>
          <p>{formData.phone}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Skills:</p>
          <p>{formData.skills}</p>
        </div>
      </div>
      <div className="mt-4">
        <input type="checkbox" id="consent" name="consent" required />
        <label htmlFor="consent" className="ml-2 text-sm">
          I confirm all information is accurate and agree to the Privacy Policy.
        </label>
      </div>
      <div className="mt-4 flex justify-end">
        <button type="submit" className="btn btn-primary">
          Submit Application
        </button>
      </div>
    </div>
  );
};
export default Step4;
