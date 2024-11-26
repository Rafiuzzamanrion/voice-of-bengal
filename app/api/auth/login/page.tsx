import Image from "next/image";
import React from "react";
import logo from "@/public/announce.png";
import google from "@/public/flat-color-icons_google.svg";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Link from "next/link";
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
      <h1 className="text-3xl font-bold text-center">
        Sign in to your Account
      </h1>
      <div className="flex flex-col gap-3 my-10 lg:flex-row justify-center items-center">
        <div className="flex gap-2 border-2 border-gray-600 py-2 px-10 rounded-lg">
          <Image className="" src={google} alt="logo" width={25} height={25} />
          <h1 className="text-xl">Signup with apple</h1>
        </div>
        <div className="flex gap-2 border-2 border-gray-600 py-2 px-10 rounded-lg">
          <Image className="" src={google} alt="logo" width={25} height={25} />
          <h1 className="text-xl">Signup with apple</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold my-3">Sign in to your Account</h1>
        <form className="flex flex-col gap-4 w-[400px]">
          <Input size="sm" type="email" variant="bordered" label="Email" />
          <Input
            size="sm"
            type="password"
            variant="bordered"
            label="Password"
          />
          <Button variant='shadow' color="primary" className="w-[400px] bg-yellow-300 rounded-full my-6">
            Login
          </Button>
          <Link href={"/forgotPassword"} className="text-center">
            Forgot password ?
          </Link>
          <h1 className="text-center">
            Don&apos;t have an account?{" "}
            <Link
              className="text-blue-400 border-b-2 border-blue-400"
              href={"/api/auth/signup"}
            >
              Signup
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
