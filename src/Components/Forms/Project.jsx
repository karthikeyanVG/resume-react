import React, { useState } from "react";

const Project = () => {
  const [projects, setProjects] = useState([
    {
      name: "",
      description: "",
    },
  ]);
  const handleAddProject = () => {
    setProjects([...projects, { name: "", description: "" }]);
  };

  const handleRemoveProject = (index) => {
    const temp = [...projects];
    temp.splice(index, 1);
    setProjects(temp);
  };

  const handleProjectChange = (e, index, key) => {
    const temp = [...projects];
    temp[index][key] = e.target.value;
    setProjects(temp);
  };

  return (
    <div>
      <form>
        {projects.map((pro, index) => (
          <div key={index}>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="projectName"
              >
                Project Name
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-md"
                type="text"
                id="projectName"
                value={pro.name}
                onChange={(e) =>
                  setProjects((prevState) => [
                    ...prevState.slice(0, index),
                    { ...pro, name: e.target.value },
                    ...prevState.slice(index + 1),
                  ])
                }
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="description"
              >
                Description
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-md"
                type="text"
                id="description"
                value={pro.description}
                onChange={(e) =>
                  setProjects((prevState) => [
                    ...prevState.slice(0, index),
                    { ...pro, description: e.target.value },
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

export default Project;
