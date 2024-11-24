import React from "react";
import logo from "@/public/announce.png";
import Image from "next/image";
const Signup = () => {
  return (
    <div className="h-[2000px] bg-red-400">
      <div className="mx-10">
        <Image src={logo} alt="logo" width={200} height={200} />
        <h1 className="text-2xl font-bold">The Voice Of Bengal</h1>
      </div>
      <div className="flex flex-col justify-center items-center w-full mx-auto">
        <h1>Create New Account</h1>
      </div>
    </div>
  );
};

export default Signup;
