import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggle = () => {
    setMenu(!menu);
    if (!menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <nav className="relative h-[80px] w-full  flex  items-center justify-between pl-16 mt-2">
        <h3 className="text-[#2d2e32] font-sans text-xl font-bold ">
          Kanishk Gaur
        </h3>
        <div className="fixed right-12 z-[10] ">
          <button
            onClick={toggle}
            className={
              menu
                ? " h-[3rem] w-[3rem] bg-[#e94f26] rounded-xl transition-all duration-200 shadow-lg outline-none  "
                : "h-[3rem] w-[3rem] rounded-xl transition-all duration-200 shadow-lg bg-[#e94f26] hover:bg-[#2563eb] outline-none"
            }
          >
            {!menu ? (
              <IoMenuSharp
                size={26}
                className="text-white absolute left-3 bottom-3"
              />
            ) : (
              <IoCloseSharp
                size={26}
                className="text-white absolute left-3 bottom-3 "
              />
            )}
          </button>
        </div>

        <div
          className={
            menu
              ? "fixed z-[2] top-5 left-2 w-full h-full bg-blue-800 transition-all duration-2000 animate-mobNav flex flex-col gap-10  md:grid   md:grid-cols-5 justify-items-center pt-[15vh]   md:pt-[25vh] text-white menu_clip shadow-xl"
              : "hidden"
          }
        >
          <div className="relative md:h-[7rem] md:w-[12rem] text-white md:border-dashed md:border-2  flex justify-center items-center rounded-xl md:shadow-xl ">
            <p className="hidden md:block absolute top-2 left-2 text-sm ">01</p>
            <h3 className="text-lg md:text-lg cursor-pointer hover:underline decoration-[#e94f26] decoration-2">
              <Link
                to="home"
                spy={true}
                offset={-100}
                smooth={true}
                duration={500}
                onClick={toggle}
              >
                HOME
              </Link>
            </h3>
          </div>
          <div className="relative md:h-[7rem] md:w-[12rem] text-white md:border-2 md:border-dashed flex justify-center items-center text-xl rounded-xl md:shadow-xl">
            <p className="hidden md:block absolute top-2 left-2 text-sm">02</p>

            <h3 className="text-lg md:text-lg cursor-pointer hover:underline decoration-[#e94f26] decoration-2">
              <Link
                to="about"
                spy={true}
                offset={-100}
                smooth={true}
                duration={500}
                onClick={toggle}
              >
                ABOUT
              </Link>
            </h3>
          </div>{" "}
          <div className="relative md:h-[7rem] md:w-[12rem] text-white md:border-2 md:border-dashed flex justify-center items-center text-xl rounded-xl md:shadow-xl">
            <p className="hidden md:block absolute top-2 left-2 text-sm">03</p>

            <h3 className="text-lg md:text-lg cursor-pointer hover:underline decoration-[#e94f26] decoration-2">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                onClick={toggle}
              >
                PROJECTS
              </Link>
            </h3>
          </div>{" "}
          <div className="relative md:h-[7rem] md:w-[12rem] text-white md:border-2  md:border-dashed flex justify-center items-center text-xl rounded-xl md:shadow-xl">
            <p className="hidden md:block absolute top-2 left-2 text-sm">04</p>

            <h3 className="text-lg md:text-lg cursor-pointer hover:underline decoration-[#e94f26] decoration-2">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                onClick={toggle}
              >
                CONTACT
              </Link>
            </h3>
          </div>
          <div className="relative md:h-[7rem] md:w-[12rem] text-white md:border-2 md:border-dashed flex justify-center items-center text-xl rounded-xl md:shadow-xl">
            <p className="hidden md:block absolute top-2 left-2 text-sm">04</p>

            <h3 className="text-lg md:text-lg cursor-pointer hover:underline decoration-[#e94f26] decoration-2">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                onClick={toggle}
              >
                ACHIVEMENT
              </Link>
            </h3>
          </div>{" "}
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
