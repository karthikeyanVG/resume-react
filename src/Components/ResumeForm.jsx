import React, { useState } from "react";
import PersonalDetails from "./Forms/PersonalDetails";
import ProfessionalSummary from "./Forms/ProfessionalSummary";
import EmploymentHistory from "./Forms/EmploymentHistory";
import Education from './Forms/Education';
import SocialLinks from "./Forms/SocialLinks";
import Skills from "./Forms/Skills";
import Project from "./Forms/Project.jsx";

const ResumeForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the form data
  };

  return (
    <div className="flex bg-slate-800 flex-col justify-center items-center">
   
     <PersonalDetails/>
     <ProfessionalSummary/>
     <EmploymentHistory/>
     <Education/>
     <SocialLinks/>
     <Skills/>
     <Project/>

    </div>  
  );
};

export default ResumeForm;
