import { useState } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
interface MultiStepApplicationFormProps {
  job_id: string | string[];
}

const MultiStepApplicationForm = ({
  job_id,
}: MultiStepApplicationFormProps) => {
  const [formData, setFormData] = useState({} as any);
  const handleChange = (e: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const steps = [1, 2, 3, 4];
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div>
      <div>
        {currentStep === 1 && (
          <Step1 formData={formData} handleChange={handleChange} />
        )}
        {currentStep === 2 && <Step2 formData={formData} handleChange={handleChange}/>}
        {currentStep === 3 && <Step3 formData={formData} handleChange={handleChange} />}
        {currentStep === 4 && <Step4 formData={formData} handleChange={handleChange} />}
      </div>
      <div className="flex justify-between my-3 ">
        <button onClick={prevStep} disabled={currentStep === 1}>
          Previous
        </button>
        <button onClick={nextStep} disabled={currentStep === steps.length}>
          Next
        </button>
      </div>
    </div>
  );
};
export default MultiStepApplicationForm;
