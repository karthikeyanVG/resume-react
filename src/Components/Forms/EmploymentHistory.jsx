import React, { useState, useEffect } from "react";

const EmploymentHistory = ({
  employmentData,
  onAddEntry,
  onRemoveEntry,
  onDataChange,
}) => {
  return (
    <div className="flex bg-slate-800 justify-center items-center">
      <form>
        {employmentData.map((edu, index) => (
          <div key={index}>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-300"
                htmlFor="jobTitle"
              >
                jobTitle
              </label>
              <input
                className="w-[632px] border border-gray-400 p-2 rounded-md"
                type="text"
                value={edu.jobTitle}
                onChange={(e) =>
                  onDataChange((prevState) => [
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
                className="w-[632px] border border-gray-400 p-2 rounded-md"
                type="text"
                value={edu.employer}
                onChange={(e) =>
                  onDataChange((prevState) => [
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
                className="w-[632px] border border-gray-400 p-2 rounded-md"
                type="date"
                value={edu.startDate}
                onChange={(e) =>
                  onDataChange((prevState) => [
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
                className="w-[632px] border border-gray-400 p-2 rounded-md"
                type="date"
                value={edu.endDate}
                onChange={(e) =>
                  onDataChange((prevState) => [
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
                className="w-[632px] h-40"
                value={edu.summary}
                onChange={(e) =>
                  onDataChange((prevState) => [
                    ...prevState.slice(0, index),
                    { ...edu, summary: e.target.value },
                    ...prevState.slice(index + 1),
                  ])
                }
              />
            </div>
            <div className="mb-4">
              <button
                type="button"
                className="bg-red-500 text-white px-2 py-2 rounded-md"
                onClick={() => onRemoveEntry(index)}
              >
                Remove Entry
              </button>
              
            </div>
          </div>
        ))}
        <div className="mb-4">
          <button
            type="button"
            className="bg-blue-500 text-white px-2 py-2 rounded-md "
            onClick={onAddEntry}
          >
            Add Entry
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmploymentHistory;
