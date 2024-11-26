import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";
import img from "@/public/11 3.png";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { MdOutlineStars } from "react-icons/md";
import { IoHeartCircle } from "react-icons/io5";
import img2 from "@/public/download 3.png";
import left from "@/public/Back.png";
import right from "@/public/Right.png";
import { FaRegComment } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";

const HomePage = () => {
  return (
    <div className="mx-5 lg:mx-10 my-10">
      <h1 className="font-bold text-3xl text-gray-600">Our Voice</h1>
      {/* mother div */}
      <div className="max-w-screen-2xl">
        {/* avatar mother div */}
        <div className="my-10">
          <div className="flex items-center gap-3">
            <div>
              {" "}
              <Image
                src={img}
                quality={100}
                alt="homeImage"
                width={150}
                height={150}
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                {" "}
                <h1 className="text-blue-300">@userName </h1>{" "}
                <Button className="rounded-full" size="sm" variant="ghost">
                  follow+
                </Button>
              </div>
              <div className="flex gap-8 items-center">
                <h1>Date</h1>
                <h1 className="flex gap-1 items-center">
                  <AiOutlineLike size={23} />3
                </h1>
                <h1 className="flex gap-1 items-center">
                  <BiDislike size={23} />5
                </h1>
                <h1 className="flex gap-1 items-center">
                  <MdOutlineStars color="orange" size={23} />2
                </h1>
                <h1 className="flex gap-1 items-center">
                  <IoHeartCircle color="red" size={23} />4
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* image and topic div */}
        <div>
          <h1 className="bg-gray-300 p-5 rounded-md my-5">Topic: </h1>
          <Image
            src={img2}
            width={1200}
            height={500}
            quality={100}
            alt="home image"
          />
          <div className="bg-gray-300 rounded-lg p-5 py-16 my-10">
            <h1 className="font-bold text-gray-600 text-xl">Details: </h1>
            <h1>
              In the midst of daily chaos, let your ideas shine and make waves.
              Your voice has the power to spark change and inspire new
              possibilities.
            </h1>
          </div>
          <div className="space-y-12 pt-10">
            <div>
              <h1 className="bg-gray-300 p-5 rounded-md my-5">Sub Topic: </h1>
              <div className="flex gap-10 justify-end mr-5">
                {" "}
                <h1 className="flex gap-1 items-center">
                  <AiOutlineLike size={25} />
                  Like
                </h1>
                <h1 className="flex gap-1 items-center">
                  <BiDislike size={25} />
                  Dislike
                </h1>
                <h1 className="flex gap-1 items-center">
                  <FaRegComment size={25} /> Comment{" "}
                </h1>
              </div>
            </div>
            <div>
              <h1 className="bg-gray-300 p-5 rounded-md my-5">Sub Topic: </h1>
              <div className="flex gap-10 justify-end mr-5">
                {" "}
                <h1 className="flex gap-1 items-center">
                  <AiOutlineLike size={25} />
                  Like
                </h1>
                <h1 className="flex gap-1 items-center">
                  <BiDislike size={25} />
                  Dislike
                </h1>
                <h1 className="flex gap-1 items-center">
                  <FaRegComment size={25} /> Comment{" "}
                </h1>
              </div>
            </div>
            <div>
              <h1 className="bg-gray-300 p-5 rounded-md my-5">Sub Topic: </h1>
              <div className="flex gap-10 justify-end mr-5">
                {" "}
                <h1 className="flex gap-1 items-center">
                  <AiOutlineLike size={25} />
                  Like
                </h1>
                <h1 className="flex gap-1 items-center">
                  <BiDislike size={25} />
                  Dislike
                </h1>
                <h1 className="flex gap-1 items-center">
                  <FaRegComment size={25} /> Comment{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* like comment div */}
        <div className="mt-10 mx-5">
          <div className="flex justify-between">
            <Image
              src={left}
              quality={100}
              alt="homeImage"
              width={50}
              height={50}
            />
            <Image
              src={right}
              quality={100}
              alt="homeImage"
              width={50}
              height={50}
            />
          </div>
          <div>
            <div className="flex gap-10 justify-between border-1 border-black p-3 rounded-lg px-4">
              {" "}
              <h1 className="flex gap-1 items-center">
                <AiOutlineLike size={25} />
                Like
              </h1>
              <h1 className="flex gap-1 items-center">
                <BiDislike size={25} />
                Dislike
              </h1>
              <h1 className="flex gap-1 items-center">
                <FaRegComment size={25} /> Comment{" "}
              </h1>
              <h1 className="flex gap-1 items-center">
                <IoMdShareAlt className="flex gap-1 items-center" size={25} />{" "}
                Share
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
