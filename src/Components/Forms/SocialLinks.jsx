import React, { useState ,useEffect} from "react";

const SocialLinks = ({platformData,onUpdatePlatForm}) => {
  const [platform, setPlatform] = useState(platformData);

  const handleAddProject = () => {
    setPlatform([...platform, { name: "", description: "" }]);
  };

  const handleRemoveProject = (index) => {
    const temp = [...platform];
    temp.splice(index, 1);
    setPlatform(temp);
  };

  const handleProjectChange = (e, index, key) => {
    const temp = [...platform];
    temp[index][key] = e.target.value;
    setPlatform(temp);
  };

  useEffect(() => {
    onUpdatePlatForm(platform);
  }, [platform, onUpdatePlatForm]);

  return (
    <div className="p-4">
      <form>
        {platformData.map((pro, index) => (
          <div key={index} className="mb-4 flex items-center">
            <div className="flex-grow mr-2">
              <label
                className="block mb-2 font-bold text-gray-300"
                htmlFor={`platform-${index}`}
              >
                Platform
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-md"
                type="text"
                id={`platform-${index}`}
                value={pro.platform}
                onChange={(e) => handleProjectChange(e, index, "platform")}
              />
            </div>
            <div className="flex-grow mr-2">
              <label
                className="block mb-2 font-bold text-gray-300"
                htmlFor={`url-${index}`}
              >
                Url
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-md"
                type="text"
                id={`Url-${index}`}
                value={pro.Url}
                onChange={(e) => handleProjectChange(e, index, "url")}
              />
            </div>
            <div className="flex gap-2 mt-8">
              {platformData.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveProject(index)}
                  className="bg-red-500 text-white px-2 py-2 rounded-md"
                >
                  Remove
                </button>
              )}
              {platformData.length === index + 1 && (
                <button
                  type="button"
                  onClick={handleAddProject}
                  className="bg-blue-500 text-white px-2 py-2 rounded-md "
                >
                  Add
                </button>
              )}
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};
export default SocialLinks;
