import { BsFillTelephoneFill, BsGlobeAsiaAustralia } from "react-icons/bs";
const Address = () => {
  return (
    <div className="bg-bg w-full text-secondBg p-4">
      <h2 className="text-3xl text-center text-myPurple-600 font-semibold mb-4">
        Contact Information
      </h2>
      <div className="container mx-auto px-4 flex justify-center">
        <div className="px-4 grid content-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Call us</h3>
            <p>Reach out to our support team between 9 am and 5 pm PST.</p>
            <div className="flex items-center gap-3 mb-1">
              <BsFillTelephoneFill />
              <p>+49 (030) 123-4567</p>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Email us</h3>
            <p>Our team will get back to you within 24 hours.</p>
            <div className="flex items-center mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M1.406 4.594A2 2 0 0 1 3 4h14a2 2 0 0 1 1.594.781L10 12 1.406 4.594zM1 6.236V15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.236l-6.293 6.293a3 3 0 0 1-3.414 0L1 6.236z"
                  clipRule="evenodd"
                />
              </svg>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-1">
            <div>
              <p className="text-right"> 1234, Street Name</p>
              <p className="flex items-center gap-4">
                <BsGlobeAsiaAustralia /> Berlin, Germany
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Address;
