const Step1 = ({ formData, handleChange }: any) => {
  return (
    <div className="my-4">
      <div>
        <h2 className="text-xl text-gray-900 p-2">Personal Information</h2>
        <p className="text-gray-600 text-sm mb-6 p-2">
          Please provide your personal details so we can get to know you better.
        </p>
      </div>
      <div className="p-2 w-full md:w-1/2">
        <label htmlFor="">First Name</label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
            placeholder="John"
            required
            className="mt-1 p-2 focus:outline-none focus:ring focus:ring-myPurple-600 block w-full shadow-sm border-gray-300 rounded-md placeholder-gray-400"
        />
      </div>
      <div className="p-2 w-full md:w-1/2">
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="Doe"
          required
          className="mt-1 p-2 focus:outline-none focus:ring focus:ring-myPurple-600 block w-full shadow-sm border-gray-300 rounded-md placeholder-gray-400"
        />
      </div>
      <div className="p-2 w-full md:w-1/2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={formData.email}
            placeholder="john.doe@example.com"
            required
            className="mt-1 p-2 focus:outline-none focus:ring focus:ring-myPurple-600 block w-full shadow-sm border-gray-300 rounded-md placeholder-gray-400"
          />
        </div>
        <div className="p-2 w-full md:w-1/2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="(555) 555-1234"
            defaultValue={formData.phoneNumber}
            required
            className="mt-1 p-2 focus:outline-none focus:ring focus:ring-myPurple-600 block w-full shadow-sm border-gray-300 rounded-md placeholder-gray-400"
          />
        </div>
    </div>
  );
};
export default Step1;
