import Image from "next/image";
import React from "react";
import logo from "@/public/announce.png";
const Login = () => {
  return (
    <div>
      <div className="">
        <Image
          className=" -translate-x-16"
          src={logo}
          alt="logo"
          width={200}
          height={100}
        />
        <h1 className="text-2xl font-bold -translate-y-10 pl-10">
          The Voice <br /> Of Bengal
        </h1>
      </div>
    </div>
  );
};

export default Login;
