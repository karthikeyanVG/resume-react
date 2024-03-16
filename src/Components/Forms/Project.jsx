import React, { useState ,useEffect} from "react";

const Project = ({ projects, onUpdateProjects }) => {
  const [localProjects, setLocalProjects] = useState(projects);

  const handleAddProject = () => {
    setLocalProjects([...localProjects, { name: "", description: "" }]);
  };

  const handleRemoveProject = (index) => {
    const temp = [...localProjects];
    temp.splice(index, 1);
    setLocalProjects(temp);
  };

  const handleProjectChange = (e, index, key) => {
    const temp = [...localProjects];
    temp[index][key] = e.target.value;
    setLocalProjects(temp);
  };

  // Update parent component when localProjects change
  useEffect(() => {
    onUpdateProjects(localProjects);
  }, [localProjects, onUpdateProjects]);

  return (
    <div className="p-4">
      <form>
        {projects.map((pro, index) => (
          <div key={index} className="mb-4 flex items-center">
            <div className="flex-grow mr-2">
              <label
                className="block mb-2 font-bold text-gray-300"
                htmlFor={`name-${index}`}
              >
                Project Name
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-md"
                type="text"
                id={`name-${index}`}
                value={pro.name}
                onChange={(e) =>  handleProjectChange(e, index, "name")}
              />
            </div>
            <div className="flex-grow mr-2">
              <label
                className="block mb-2 font-bold text-gray-300"
                htmlFor={`description-${index}`}
              >
                Description
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-md"
                type="text"
                id={`description-${index}`}
                value={pro.description}
                onChange={(e) => handleProjectChange(e, index, "description")}
              />
            </div>
            <div className="flex gap-2 mt-8" >
             {localProjects.length > 1 && <button
                type="button"
                onClick={() => handleRemoveProject(index)}
                className="bg-red-500 text-white px-2 py-2 rounded-md"
              >
                Remove
              </button>}
             {localProjects.length === index +1 && <button
                type="button"
                onClick={handleAddProject}
                className="bg-blue-500 text-white px-2 py-2 rounded-md "
              >
                Add 
              </button>}
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Project;
