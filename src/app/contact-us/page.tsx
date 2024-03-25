import Address from "./components/Address";
import Form from "./components/Form";
import MapComponent from "./components/Map";

const page = () => {
  return (
    <div className="bg-secondBg flex flex-col items-center justify-start gap-5 p-4 pb-0">
      <h2 className="text-3xl text-myPurple-600 font-bold">
        Want to discuss a marketing engagement?
      </h2>
      <p>
        Let us know about your company and the project you have in mind, and
        we’ll be in touch as soon as possible!
      </p>
      <Form />
      <MapComponent />
      <Address/>
      <section className=" px-4 py-12">
        <h2 className="text-center text-2xl font-bold mb-8">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className=" p-6 rounded-md">
            <h3 className="text-xl font-medium mb-2">SUPPORT</h3>
            <p className="mb-4">For Questions Or To Talk To A Rep Call</p>
            <p className="font-bold">Toll Free: 866.977.6668</p>
            <button className="my-4 bg-myPurple-600 p-3 px-5 border border-bg transition-all duration-300 hover:bg-bg hover:text-myPurple-600 hover:border-myPurple-600">
              Contact Support
            </button>
          </div>

          <div className=" p-6 rounded-md">
            <h3 className="text-xl font-medium mb-2">SALES</h3>
            <p className="mb-4">sales@ourcompany.com</p>
            <p className="font-bold">Toll Free: 800.619.1570</p>
            <p className="font-bold">Direct: 310.683.0393</p>
            <button className="my-4 bg-myPurple-600 p-3 px-5 border border-bg transition-all duration-300 hover:bg-bg hover:text-myPurple-600 hover:border-myPurple-600">
              Request Consultation
            </button>
          </div>

          <div className=" p-6 rounded-md">
            <h3 className="text-xl font-medium mb-2">CAREERS</h3>
            <p className="mb-4">
              John Doe
              <br />
              Head of Talent Acquisition <br />
              johndoe@ourcompany.com
            </p>
            <button className="my-4 bg-myPurple-600 p-3 px-5 border border-bg transition-all duration-300 hover:bg-bg hover:text-myPurple-600 hover:border-myPurple-600">
              View Openings
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default page;
