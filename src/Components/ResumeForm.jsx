import React, { useState } from "react";
import PersonalDetails from "./Forms/PersonalDetails";
import ProfessionalSummary from "./Forms/ProfessionalSummary";
import EmploymentHistory from "./Forms/EmploymentHistory";
import Education from "./Forms/Education";
import SocialLinks from "./Forms/SocialLinks";
import Skills from "./Forms/Skills";
import Project from "./Forms/Project.jsx";

const ResumeForm = () => {
  const [parentProjects, setParentProjects] = useState([{ name: "", description: "" }]);
  const [platformData, setPlatformData] = useState([{platForm:"",url:""}]);
  const [employmentData, setEmploymentData] = useState([
    {
      jobTitle: "",
      employer: "",
      startDate: "",
      endDate: "",
      summary: "",
    },
  ]);

  const addEmploymentEntry = () => {
    setEmploymentData((prevData) => [
      ...prevData,
      {
        jobTitle: "",
        employer: "",
        startDate: "",
        endDate: "",
        summary: "",
      },
    ]);
  };

  const removeEmploymentEntry = (index) => {
    setEmploymentData((prevData) => [
      ...prevData.slice(0, index),
      ...prevData.slice(index + 1),
    ]);
  };

  const handleEmploymentDataChange = (index, newData) => {
    setEmploymentData((prevData) => [
      ...prevData.slice(0, index),
      newData,
      ...prevData.slice(index + 1),
    ]);
  };
  const onPersonalDetailSubmit = (e) => {
    console.log('e: ', e); 
  };
  const handleUpdateProjects = (updatedProjects) => {
    setParentProjects(updatedProjects);
  };
  const handleUpdatePlatForms = (platforms) => {
    setPlatformData(platforms);
  };
  const handleSummaryChange = (updatedSummary) => {
    console.log(updatedSummary);
  };

  return (
    <div className="flex bg-slate-800 flex-col items-center p-10 h-[100vh] overflow-y-scroll">
      <PersonalDetails onSubmitValues={onPersonalDetailSubmit} />
      <ProfessionalSummary  initialSummary={""} onSummary={handleSummaryChange}/>
      <EmploymentHistory
        employmentData={employmentData}
        onAddEntry={addEmploymentEntry}
        onRemoveEntry={removeEmploymentEntry}
        onDataChange={handleEmploymentDataChange}
      />
      <Education />
      <SocialLinks platformData={platformData} onUpdatePlatForm={handleUpdatePlatForms}/>
      <Skills />
      <Project projects={parentProjects} onUpdateProjects={handleUpdateProjects} />
    </div>
  );
};

export default ResumeForm;
