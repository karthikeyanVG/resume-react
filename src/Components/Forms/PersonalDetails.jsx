import React, { useState } from "react";

const PersonalDetails = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [jobTitle, setJobTitle] = useState();
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the form data
    console.log(name);
  };
  return (
    <div className="flex bg-slate-800 justify-center items-center h-screen">
      <form
        className="flex gap-20"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-gray-300"
              htmlFor="name"
            >
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
            <label
              className="block mb-2 font-bold text-gray-300"
              htmlFor="jobTitle"
            >
              jobTitle
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-md"
              type="text"
              id="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-gray-300"
              htmlFor="phone"
            >
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
            <label
              className="block mb-2 font-bold text-gray-300"
              htmlFor="email"
            >
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
              className="block mb-2 font-bold text-gray-300"
              htmlFor="dateOfBirth"
            >
              dateOfBirth
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-md"
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-gray-300"
              htmlFor="profilePhoto"
            >
              profilePhoto
            </label>
            <input
              className=" w-72 border border-gray-400 p-2 rounded-md"
              type="file"
              id="profilePhoto"
              accept="image/png, image/gif, image/jpeg" 
              value={profilePhoto}
              onChange={(e) => setProfilePhoto(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-gray-300"
              htmlFor="state"
            >
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
            <label
              className="block mb-2 font-bold text-gray-300"
              htmlFor="city"
            >
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
              className="block mb-2 font-bold text-gray-300"
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
              className="block mb-2 font-bold text-gray-300"
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
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
