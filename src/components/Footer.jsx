import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="h-[125px] w-full bg-[#2d2e32] text-white flex flex-col md:flex-row items-center justify-around p-6 ">
      <h1 className="text-xl font-bold">
        Copyright © 2024. All rights are reserved{" "}
      </h1>
      <div className="flex gap-4 text-[26px]  ">
        <a href="https://github.com/Pawansingh121" target="_blank">
          <BsGithub className="hover:text-blue-500 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/pawan-airy-b73228213/"
          target="_blank"
        >
          <BsLinkedin className="hover:text-blue-500 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
