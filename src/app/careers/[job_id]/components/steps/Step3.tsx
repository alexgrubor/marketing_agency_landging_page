import { useState } from "react";
const Step3 = ({ formData, handleChange }: any) => {
  const [selectedSkills, setSelectedSkills] = useState([]);

    const handleSelect = (e: any) => {
        if (selectedSkills.length < 3) {
        
        }
    };

  return (
    <div>
      <div className="p-2">
        <h2 className="text-lg font-medium">Select Your Top Skills:</h2>
        <p className="text-gray-600 text-sm mb-6 ">
          *Select up to 3 skills that best describe you.
        </p>
      </div>
    <div>
        <input type="checkbox" value="SEO" onChange={handleSelect} /> Search Engine Optimization<br/>
        <input type="checkbox" value="Marketing" onChange={handleSelect} /> Marketing<br/>
        <input type="checkbox" value="Design" onChange={handleSelect} /> Design<br/>
        <input type="checkbox" value="Development" onChange={handleSelect} /> Development<br/>
        <input type="checkbox" value="Content" onChange={handleSelect} /> Content<br/>
        <input type="checkbox" value="Management" onChange={handleSelect} /> Management<br/>
        <input type="checkbox" value="Leadership" onChange={handleSelect} /> Leadership<br/>
        <input type="checkbox" value="Communication" onChange={handleSelect} /> Communication<br/>
        <input type="checkbox" value="Problem Solving" onChange={handleSelect} /> Problem Solving<br/>
        <input type="checkbox" value="Teamwork" onChange={handleSelect} /> Teamwork<br/>
        <input type="checkbox" value="Organization" onChange={handleSelect} /> Organization<br/>

    </div>

    </div>
  );
};
export default Step3;
