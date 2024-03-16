import React, { useState,useEffect } from "react";

const ProfessionalSummary = ({ initialSummary,onSummary }) => {
  const [summary, setSummary] = useState(initialSummary || "");
   
  useEffect(() => {
    onSummary(summary);
  }, [summary]);

  return (
    <div className="flex bg-slate-800 justify-center items-center ">
      <div>
        <label className="block mb-2 font-bold text-gray-200" htmlFor="summary">
          summary
        </label>
        <textarea
          className="w-[632px] h-60"
          spellCheck="true"
          value={summary}
          onChange={(e)=> setSummary(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default ProfessionalSummary;
