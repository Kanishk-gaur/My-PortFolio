import React, { useEffect } from "react";
import about from "../assets/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section
      id="about"
      className="bg-white w-full  h-[75vh]  flex flex-col items-center justify-center  md:flex-row md:justify-center gap-10 md:gap-20 mt-6 md:mt-0   "
    >
      <div data-aos="zoom-in">
        <img
          className="w-[310px] h-[250px] md:w-[410px] md:h-[350px] rounded-3xl"
          src={about}
          alt=""
        />
      </div>
      <div
        data-aos="zoom-in"
        className=" flex flex-col items-center justify-center md:flex-col md:items-start "
      >
        <h2 className="font-bold text-lg text-blue-600  ">ABOUT ME</h2>
        <h3 className="font-bold text-2xl mt-2 max-w-[380px]">
          A dedicated full-stack developer based in Delhi, India 📍
        </h3>
        <p className="text-[#767676] mt-6 mx-4 md:mx-0 text-xl max-w-[400px] md:max-w-[500px]">
          I am innovative and hardworking full-stack developer. Proficient in
          HTML, CSS , JAVASCRIPT and REACT JS. I am passionate about building
          execellent web applications that improves the lives of those around
          me.
        </p>
      </div>
    </section>
  );
};

export default About;
