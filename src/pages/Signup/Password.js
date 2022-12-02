import React from "react";

const Password = ({ setFormData, formData }) => {
  return (
    <div>
      <div className="pb-16">
        <input
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
          type="password"
          placeholder="Write Password"
          className="border-b w-full border-[#A4A4A4] px-2 outline-none placeholder-[#B4B4B4] placeholder:text-base"
        />
        <p className="text-xs text-[#7E7E7E] px-2">
          Your password must be 8 character
        </p>
      </div>
    </div>
  );
};

export default Password;
