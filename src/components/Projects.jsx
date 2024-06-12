import React from "react";

import { BsGithub } from "react-icons/bs";
import { CiShare1 } from "react-icons/ci";
import { projectlist } from "../Data";

const Projects = () => {
  return (
    <section id="projects" className="w-full min-h-screen max-h-full  pt-36">
      <div className=" flex flex-col items-center  ">
        <h1 className="font-bold text-lg text-blue-600">PORTFOLIO</h1>
        <p className="text-2xl font-bold pt-4 text-center">
          Each project is a unique piece of development 🧩
        </p>
      </div>
      {projectlist.map((elm) => {
        return (
          <div
            key={elm.id}
            className="w-full h-full  flex items-center justify-center  mt-8 pb-8 "
          >
            <div className="w-[990px] h-auto bg-white rounded-3xl flex flex-col md:flex-row items-center justify-around pt-6 pb-6">
                <div className="w-[350px] h-[300px] md:w-[530px] md:h-[350px] cursor-pointer shadow-lg shadow-gray-500 transition-all ease-linear duration-[4000ms] rounded-3xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  src={elm.videoUrl} // Ensure videoUrl exists in achivelist data
                  controls
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
              <div className="flex flex-col items-center pt-10 md:pt-0">
                <h2 className="font-bold text-xl">{elm.title}</h2>
                <p className="text-[#767676] w-[300px] pt-4 text-lg text-center">
                  {elm.des}
                </p>
                <div className="flex gap-14 justify-center pt-6">
                  <a
                    className="flex items-center gap-2 text-lg text-gray-800 border px-3 py-1 rounded-xl shadow-xl hover:bg-blue-800 hover:text-white transition-all duration-150 "
                    href={elm.codeUrl}
                    target="_blank"
                  >
                    <p>Code</p>
                    <BsGithub />
                  </a>

                  <a
                    className="flex items-center gap-2 text-lg text-gray-800 border px-3 py-1 rounded-xl shadow-xl hover:bg-blue-800 hover:text-white transition-all duration-150"
                    href={elm.demoUrl}
                    target="_blank"
                  >
                    <p>Live Demo</p>
                    <CiShare1 />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
