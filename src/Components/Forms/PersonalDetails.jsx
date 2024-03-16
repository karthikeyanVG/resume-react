import React, { useState, useEffect } from "react";

const PersonalDetails = (props) => {
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    phone: "",
    email: "",
    profilePhoto: "",
    dateOfBirth: "",
    jobTitle: "",
    address: {
      street: "",
      city: "",
      state: "",
      pinCode: "",
    },
  });

  useEffect(() => {
    // Send updated values to the parent component whenever there's a change
    props.onSubmitValues(personalDetails);
  }, [personalDetails, props]);

  const onSubmit = (e) => {
    e.preventDefault();
    // Additional logic on form submission if needed
  };

  const handleInputChange = (e, field, subField) => {
    if (subField) {
      setPersonalDetails({
        ...personalDetails,
        [field]: {
          ...personalDetails[field],
          [subField]: e.target.value,
        },
      });
    } else {
      setPersonalDetails({
        ...personalDetails,
        [field]: e.target.value,
      });
    }
  };

  return (
    <div className="flex bg-slate-800 justify-center items-center">
      <form className="flex gap-20" onSubmit={onSubmit}>
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
              value={personalDetails.name}
              onChange={(e) => handleInputChange(e, "name")}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-gray-300"
              htmlFor="jobTitle"
            >
              Job Title
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-md"
              type="text"
              id="jobTitle"
              value={personalDetails.jobTitle}
              onChange={(e) => handleInputChange(e, "jobTitle")}
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
              value={personalDetails.phone}
              onChange={(e) => handleInputChange(e, "phone")}
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
              value={personalDetails.email}
              onChange={(e) => handleInputChange(e, "email")}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-gray-300"
              htmlFor="dateOfBirth"
            >
              Date of Birth
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-md"
              type="date"
              id="dateOfBirth"
              value={personalDetails.dateOfBirth}
              onChange={(e) => handleInputChange(e, "dateOfBirth")}
            />
          </div>
        </div>
        <div>
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-gray-300"
              htmlFor="profilePhoto"
            >
              Profile Photo
            </label>
            <input
              className=" w-72 border border-gray-400 p-2 rounded-md"
              type="file"
              id="profilePhoto"
              accept="image/png, image/gif, image/jpeg"
              value={personalDetails.profilePhoto}
              onChange={(e) => handleInputChange(e, "profilePhoto")}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-gray-300"
              htmlFor="state"
            >
              State
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-md"
              type="text"
              id="state"
              value={personalDetails.address.state}
              onChange={(e) => handleInputChange(e, "address", "state")}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-gray-300"
              htmlFor="city"
            >
              City
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-md"
              type="text"
              id="city"
              value={personalDetails.address.city}
              onChange={(e) => handleInputChange(e, "address", "city")}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-gray-300"
              htmlFor="street"
            >
              Street
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-md"
              type="text"
              id="street"
              value={personalDetails.address.street}
              onChange={(e) => handleInputChange(e, "address", "street")}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-gray-300"
              htmlFor="pinCode"
            >
              Pin Code
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-md"
              type="text"
              id="pinCode"
              value={personalDetails.address.pinCode}
              onChange={(e) => handleInputChange(e, "address", "pinCode")}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
