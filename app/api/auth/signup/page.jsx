"use client";
import React from "react";
import logo from "@/public/announce.png";
import Image from "next/image";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Signup = () => {
  return (
    <div className="">
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
      
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold my-10">Create New Account</h1>
        <form className="flex flex-col justify-center items-center">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-4 w-[400px]">
              <Input
                size="sm"
                className=""
                type="text"
                variant="bordered"
                label="Name"
              />
              <Input size="sm" type="email" variant="bordered" label="Email" />
              <Input
                size="sm"
                type="number"
                variant="bordered"
                label="Contact no"
              />
            </div>
            <div className="space-y-4 w-[400px]">
              <Input
                size="sm"
                className=""
                type="number"
                variant="bordered"
                label="Age"
              />

              <Input size="sm" type="text" variant="bordered" label="Gender" />
              <Select>
                <SelectTrigger className="w-[400px] h-[48px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="w-[400px] my-5 space-y-4">
            <Input
              size="sm"
              type="password"
              variant="bordered"
              label="Password"
            />
            <Input
              size="sm"
              type="password"
              variant="bordered"
              label="Re-write Password"
            />
          </div>
          <h1>
            Already have an account?{" "}
            <Link
              className="text-blue-400 border-b-2 border-blue-400"
              href={"/api/auth/login"}
            >
              Login
            </Link>
          </h1>
          <Button className="w-[400px] bg-yellow-300 rounded-full mt-10">
            Send OTP
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
