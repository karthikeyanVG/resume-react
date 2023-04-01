import React, { useState } from "react";

const ResumeForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [summary, setSummary] = useState("");
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    pinCode: "",
  });
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState([
    {
      college: "",
      degree: "",
      startDate: "",
      endDate: "",
      summary: "",
    },
  ]);
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([
    {
      name: "",
      description: "",
    },
  ]);
  const [socialLinks, setSocialLinks] = useState([
    {
      platform: "",
      url: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the form data
    console.log(name);
  };

  return (
    <div className="flex bg-slate-800 justify-center items-center h-screen">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-md"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="phone">
            Phone
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-md"
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-md"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 font-bold text-gray-700"
            htmlFor="profilePhoto"
          >
            profilePhoto
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-md"
            type="text"
            id="profilePhoto"
            value={profilePhoto}
            onChange={(e) => setProfilePhoto(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 font-bold text-gray-700"
            htmlFor="summary"
          >
            summary
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-md"
            type="summary"
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="state">
            state
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-md"
            type="state"
            id="state"
            value={address.state}
            onChange={(e) => setAddress({ state: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="city">
            city
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-md"
            type="city"
            id="city"
            value={address.city}
            onChange={(e) => setAddress({ city: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 font-bold text-gray-700"
            htmlFor="street"
          >
            street
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-md"
            type="street"
            id="street"
            value={address.street}
            onChange={(e) => setAddress({ street: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 font-bold text-gray-700"
            htmlFor="pincode"
          >
            pincode
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-md"
            type="pincode"
            id="pincode"
            value={address.pinCode}
            onChange={(e) => setAddress({ pinCode: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 font-bold text-gray-700"
            htmlFor="experience"
          >
            experience
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-md"
            type="experience"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        {education.map((edu, index) => (
          <div key={index}>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700"
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
                className="block mb-2 font-bold text-gray-700"
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
                className="block mb-2 font-bold text-gray-700"
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
                className="block mb-2 font-bold text-gray-700"
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
                className="block mb-2 font-bold text-gray-700"
                htmlFor="summary"
              >
                summary
              </label>
              <textarea
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
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="description">
            description
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-md"
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="skills">
            skills
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-md"
            type="text"
            id="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>
        {projects.map((pro,index)=>{
                <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700" htmlFor="projectName">
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
            })
        }
         <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
           submit
          </button>
        </div>
      </form>
     
    </div>
  );
};

export default ResumeForm;
