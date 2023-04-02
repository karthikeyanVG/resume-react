import React, { useState } from "react";

const SocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState([
    {
      platform: "",
      url: "",
    },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the form data
  };
  const handleAddSocialLink = () => {
    setSocialLinks([...socialLinks, { platform: "", url: "" }]);
  };

  const handleRemoveSocialLink = (index) => {
    const temp = [...socialLinks];
    temp.splice(index, 1);
    setSocialLinks(temp);
  };

  const handleSocialLinkChange = (e, index, key) => {
    const temp = [...socialLinks];
    temp[index][key] = e.target.value;
    setSocialLinks(temp);
  };
  return (
    <div className="flex bg-slate-800 justify-center items-center h-screen">
      <form onSubmit={handleSubmit}> 
        {socialLinks.map((social, index) => (
          <div className="flex gap-14" key={index}>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-300"
                htmlFor="platform"
              >
               Platform
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-md"
                type="text"
                id="platform"
                value={social.platform}
                onChange={(e) =>
                  setSocialLinks((prevState) => [
                    ...prevState.slice(0, index),
                    { ...social, platform: e.target.value },
                    ...prevState.slice(index + 1),
                  ])
                }
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-300"
                htmlFor="url"
              >
                Url
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-md"
                type="text"
                id="url"
                value={social.url}
                onChange={(e) =>
                  setSocialLinks((prevState) => [
                    ...prevState.slice(0, index),
                    { ...social, url: e.target.value },
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

export default SocialLinks;
