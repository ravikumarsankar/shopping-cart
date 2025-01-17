import React from "react";

export const LoginPage = () => {
  return (
    <div className="h-[300px] flex flex-col items-center justify-evenly p-[20px] bg-[#f7f7f7]">
      <label className="h-[20px] font-semibold">LOGIN</label>
      <div className="h-[80px] flex flex-col justify-between">
        <div className="pt-[10px] font-medium">Email</div>
        <input
          type="text"
          placeholder="Email"
          className="w-100 h-[40px] text-[15px] p-[5px]  border-none"
        />
      </div>

      <div className="h-[80px] flex flex-col justify-between">
        <div className="pt-[10px] font-medium">Password</div>
        <input
          type="password"
          placeholder="Password"
          className="w-100 h-[40px] text-[15px] p-[5px]  border-none"
        />
      </div>
      <div>
        <button  type="submit" className="border-1 bg-[#018de4] text-[#fff] font-light rounded-sm w-[100px]">
          Submit
        </button>
      </div>
    </div>
  );
};
