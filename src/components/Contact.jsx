import React from "react";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact" className="h-full w-full bg-white pt-24">
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-bold text-blue-600 text-xl">CONTACT</h2>
        <p className=" text-2xl font-bold">Don't be shy! Hit me up! 👇</p>
      </div>

      <div className=" flex flex-col gap-6 items-center md:flex-row  md:justify-around pb-16 pt-8 ">
        <div className="flex   items-center gap-6">
          <div className="w-[76px] h-[76px] bg-white rounded-full flex items-center justify-center">
            <ImLocation2 className="text-blue-600" size={28} />
          </div>
          <div className="w-[200px]">
            <p className="font-bold text-lg">Location</p>
            <p className="text-lg text-[#767676]">JNU New-Delhi, India</p>
          </div>
        </div>

        <div className="flex  items-center gap-6">
          <div className="w-[76px] h-[76px] bg-white rounded-full flex items-center justify-center">
            <AiOutlineMail className="text-blue-600" size={28} />
          </div>
          <div className="w-[200px]">
            <p className="font-bold text-lg">Mail</p>
            <p className="text-lg text-[#767676]">Kanish49_soe@jnu.ac.n</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
