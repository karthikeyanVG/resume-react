import React, { useState } from "react";
const Education = () => {
  const [education, setEducation] = useState([
    {
      college: "",
      degree: "",
      startDate: "",
      endDate: "",
      summary: "",
    },
  ]);
  
  return (
    <div>
      <form>
        {education.map((edu, index) => {
          <div key={index}>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-300"
                htmlFor="college"
              >
                college
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-md"
                type="text"
                value={edu.college}
                onChange={(e) =>
                  setEducation((prevState) => [
                    ...prevState.slice(0, index),
                    { ...edu, college: e.target.value },
                    ...prevState.slice(index + 1),
                  ])
                }
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-300"
                htmlFor="degree"
              >
                degree
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-md"
                type="text"
                value={edu.degree}
                onChange={(e) =>
                  setEducation((prevState) => [
                    ...prevState.slice(0, index),
                    { ...edu, degree: e.target.value },
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
          </div>;
        })}
      </form>
    </div>
  );
};

export default Education;
