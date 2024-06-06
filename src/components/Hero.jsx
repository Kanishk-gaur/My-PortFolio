import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import me from "../assets/kanishk.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import tc from "../assets/tailwind.png";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <section id="home" className=" w-full h-full md:h-screen pt-10 md:mt-20 ">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-6">
        <div className=" flex flex-col items-center md:flex md:items-start">
          <h1 className=" text-4xl max-w-[20rem] md:text-6xl font-bold md:max-w-[34rem]  ">
            Full-Stack Mern Developer👋
          </h1>
          <p className="text-xl max-w-[27rem]  md:max-w-[30rem] pt-8 mx-2 md:mx-0 text-[#767676]">
            Hi, I'm Kanishk Gaur. A passionate Full-Stack Mern Developer based
            in Delhi , India. 📍
          </p>
          <div className="flex gap-4 text-[26px] pt-4 md:pt-8">
            <a href="https://github.com/Pawansingh121" target="_blank">
              <BsGithub className="hover:text-blue-800 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/pawan-airy-b73228213/"
              target="_blank"
            >
              <BsLinkedin className="hover:text-blue-800 cursor-pointer" />
            </a>
          </div>
          <Link to="projects" spy={true} smooth={true} duration={500}>
            <div className="hidden group relative md:flex items-center mt-6 gap-4  text-black hover:text-white  font-medium rounded-lg cursor-pointer ">
              <AiOutlineArrowDown size={22} />
              <p>PROJECTS</p>
              <div className="h-[30px] w-[60px] bg-[#e94f26] absolute top-[-2] z-[-1] rounded-lg rotate-[-20deg] transition-all ease-in-out group-hover:w-[150px] group-hover:rotate-0 duration-500 " />
            </div>
          </Link>
        </div>

        <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-tl-[30%] rounded-tr-[20%] rounded-br-2xl rounded-bl-3xl border-2 border-black">
          <img
            className="w-[230px] h-[230px] md:w-[280px] md:h-[280px] object-contain"
            src={me}
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 pb-6 mt-6 md:flex-row md:mt-28  md:gap-8  ">
        <p className="text-xl font-semibold underline">Tech Stack </p>
        <div className="md:flex gap-2 md:gap-6 grid grid-cols-3">
          <div className="w-[65px] h-[65px] rounded-full bg-white flex items-center justify-center">
            <img
              className="w-[34px] h-[34px] cursor-pointer"
              src={html}
              alt=""
              title="HTML"
            />
          </div>
          <div className="w-[65px] h-[65px] rounded-full bg-white flex items-center justify-center">
            <img
              className="w-[34px] h-[34px] cursor-pointer"
              src={css}
              alt=""
              title="CSS"
            />
          </div>
          <div className="w-[65px] h-[65px] rounded-full bg-white flex items-center justify-center">
            <img
              className="w-[34px] h-[34px] cursor-pointer"
              src={js}
              alt=""
              title="JAVASCRIPT"
            />
          </div>
          <div className="w-[65px] h-[65px] rounded-full bg-white flex items-center justify-center">
            <img
              className="w-[34px] h-[34px] cursor-pointer"
              src={react}
              alt=""
              title="REACT"
            />
          </div>
          <div className="w-[65px] h-[65px] rounded-full bg-white flex items-center justify-center">
            <img
              className="w-[34px] h-[34px] cursor-pointer"
              src={redux}
              alt=""
              title="REDUX"
            />
          </div>
          <div className="w-[65px] h-[65px] rounded-full bg-white flex items-center justify-center">
            <img
              className="w-[34px] h-[34px] cursor-pointer"
              src={tc}
              alt=""
              title="TAILWIND CSS"
            />
            
          </div>
               
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
