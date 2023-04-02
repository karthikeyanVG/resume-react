import React, { useState } from "react";

const EmploymentHistory = () => {
  const [education, setEducation] = useState([
    {
      jobTitle: "",
      employer: "",
      startDate: "",
      endDate: "",
      summary: "",
    },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the form data
  };

  return (
    <div className="flex bg-slate-800 justify-center items-center h-screen">
      <form onSubmit={handleSubmit}>
        {education.map((edu, index) => (
          <div key={index}>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-300"
                htmlFor="jobTitle"
              >
                jobTitle
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-md"
                type="text"
                value={edu.jobTitle}
                onChange={(e) =>
                  setEducation((prevState) => [
                    ...prevState.slice(0, index),
                    { ...edu, jobTitle: e.target.value },
                    ...prevState.slice(index + 1),
                  ])
                }
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-300"
                htmlFor="employer"
              >
                employer
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-md"
                type="text"
                value={edu.employer}
                onChange={(e) =>
                  setEducation((prevState) => [
                    ...prevState.slice(0, index),
                    { ...edu, employer: e.target.value },
                    ...prevState.slice(index + 1),
                  ])
                }
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-300"
                htmlFor="startDate"
              >
                startDate
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-md"
                type="date"
                value={edu.startDate}
                onChange={(e) =>
                  setEducation((prevState) => [
                    ...prevState.slice(0, index),
                    { ...edu, startDate: e.target.value },
                    ...prevState.slice(index + 1),
                  ])
                }
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-300"
                htmlFor="endDate"
              >
                endDate
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-md"
                type="date"
                value={edu.endDate}
                onChange={(e) =>
                  setEducation((prevState) => [
                    ...prevState.slice(0, index),
                    { ...edu, endDate: e.target.value },
                    ...prevState.slice(index + 1),
                  ])
                }
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-300"
                htmlFor="summary"
              >
                summary
              </label>
              <textarea
                className=" w-96 h-40"
                value={edu.summary}
                onChange={(e) =>
                  setEducation((prevState) => [
                    ...prevState.slice(0, index),
                    { ...edu, summary: e.target.value },
                    ...prevState.slice(index + 1),
                  ])
                }
              />
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default EmploymentHistory;
