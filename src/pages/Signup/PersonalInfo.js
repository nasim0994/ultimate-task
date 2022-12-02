import React from "react";

const PersonalInfo = ({ setFormData, formData }) => {
  return (
    <div>
      <div className="pb-16">
        <input
          onBlur={(e) =>
            setFormData({ ...formData, first_name: e.target.value })
          }
          type="text"
          placeholder="Write First Name"
          className="border-b w-full border-[#A4A4A4] px-2 outline-none placeholder-[#B4B4B4] placeholder:text-base"
        />
      </div>
      <div className="pb-16">
        <input
          onChange={(e) =>
            setFormData({ ...formData, last_Name: e.target.value })
          }
          type="text"
          placeholder="Write Last Name"
          className="border-b w-full border-[#A4A4A4] px-2 outline-none placeholder-[#B4B4B4] placeholder:text-base"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
