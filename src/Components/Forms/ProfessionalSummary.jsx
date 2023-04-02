import React, { useState } from "react";

const ProfessionalSummary = () => {
  const [summary, setSummary] = useState("");
  const onSummaryChange = (e) => {
    setSummary(e.target.value);
  };
  return (
    <div className="flex bg-slate-800 justify-center items-center h-screen">
      <div>
        <label className="block mb-2 font-bold text-gray-200" htmlFor="summary">
          summary
        </label>
        <textarea
          className=" w-96 h-60"
          spellCheck='true'
          value={summary}
          onChange={onSummaryChange}
        ></textarea>
      </div>
    </div>
  );
};

export default ProfessionalSummary;
