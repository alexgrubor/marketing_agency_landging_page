const Step2 = ({ formData, handleChange }: any) => {
  return (
    <div>
          <div className="p-2 w-full md:w-1/2">
          <label htmlFor="portfolio" className="block text-sm font-medium text-gray-900">
            Portfolio Link
          </label>
          <input
            type="text"
            name="portfolio"
            id="portfolio"
            defaultValue={formData.portfolioLink}
            placeholder="https://www.johndoe.com"
            required
            className="mt-1 p-2 focus:outline-none focus:ring focus:ring-myPurple-600 block w-full shadow-sm border-gray-300 rounded-md placeholder-gray-400"
          />
        </div>
      <div className="p-2 w-full md:w-1/2">
        <label
          htmlFor="cover_letter"
          className="block text-sm font-medium text-gray-900"
        >
          Cover Letter
        </label>
        <p className="text-gray-600 text-sm mb-6 ">
        *Provide a brief introduction and highlight key points from your resume that demonstrate your suitability for the position.
        </p>
        <textarea
          name="cover_letter"
          id="cover_letter"
          value={formData.cover_letter}
          onChange={handleChange}
          placeholder="Tell us why you are the best candidate for this position."
          required
          className="mt-1 p-2 focus:outline-none focus:ring focus:ring-myPurple-600 block w-full shadow-sm border-gray-300 rounded-md placeholder-gray-400"
        />
      </div>
      <div className="p-2 w-full md:w-1/2">
        <label
          htmlFor="resume"
          className="block text-sm font-medium text-gray-900"
        >
          Resume
        </label>
        <input
          type="file"
          name="resume"
          id="resume"
          onChange={handleChange}
          required
          className="mt-1 p-2 focus:outline-none focus:ring focus:ring-myPurple-600 block w-full shadow-sm border-gray-300 rounded-md placeholder-gray-400"
        />
      </div>
    </div>
  );
};
export default Step2;
