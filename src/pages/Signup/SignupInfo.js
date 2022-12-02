import React from "react";

const SignupInfo = ({ setFormData, formData }) => {
  return (
    <div>
      <div className="pb-16 flex gap-2">
        <input
          onChange={(e) =>
            setFormData({ ...formData, numberCode: e.target.value })
          }
          type="text"
          placeholder="+880"
          className="w-[20%] border-b border-[#A4A4A4] px-2 outline-none placeholder-[#B4B4B4] placeholder:text-base"
        />
        <input
          onChange={(e) =>
            setFormData({ ...formData, phone_number: e.target.value })
          }
          type="number"
          placeholder="Write First Name"
          className="border-b w-[80%] border-[#A4A4A4] px-2 outline-none placeholder-[#B4B4B4] placeholder:text-base"
        />
      </div>
      <div className="pb-16">
        <input
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="email"
          placeholder="Write Email Address"
          className="border-b w-full border-[#A4A4A4] px-2 outline-none placeholder-[#B4B4B4] placeholder:text-base"
        />
      </div>
    </div>
  );
};

export default SignupInfo;
