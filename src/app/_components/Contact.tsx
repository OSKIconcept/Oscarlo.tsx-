import Image from "next/image";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaAngleDoubleUp, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

function Contact() {
  return (
    <div id="contact" className=" w-full flex flex-col">
      <div className="justify-center items-center flex flex-col gap-8 md:gap-14 py-16 md:py-28">
        <h3 className="text-2xl md:text-4xl dark:text-white text-red-700  font-black ">
          Contact
        </h3>

        <div className="text-center">
          <h3 className="text-center text-[14px] md:text-[16px] px-[24px] md:px-[40px] max-w-[700px]">
            You have made it this far, thanks for the visit. If you have any
            questions, comments or just want to say hello, i will do my best to
            get back to you as soon as possible, Looking forward to hearing from
            you
          </h3>

          <a href="mailto:oscarjoseph7991@gmail.co">
            <button className=" mt-6 md:mt-10 inline-flex gap-3 md:gap-4  cursor-pointer bg-gradient-to-br from-[#088395] to-[#088395] dark:from-[#B31312] dark:to-[#BE3144] dark:hover:bg-[#BE3144] hover:bg-[#37B7C3] hover:bg-none font-normal text-[#F3F3F3] py-2 px-5 md:py-3 md:px-6 md:text-[20px] italic text-sm ">
              Say hello
            </button>
          </a>
        </div>

        <div className=" flex gap-3.5 md:gap-4 items-center justify-center md:text-2xl ">
          <a href="https://github.com/OSKIconcept">
            <FiGithub className="dark:hover:text-white hover:text-red-700 " />
          </a>

          <a href="#">
            <FaLinkedinIn className="dark:hover:text-white hover:text-red-700 " />
          </a>

          <a href="https://x.com/iamOskiDev">
            <BsTwitterX className="dark:hover:text-white hover:text-red-700 " />
          </a>

          <a href="https://wa.link/dgrhp0">
            <FaWhatsapp className="dark:hover:text-white hover:text-red-700 " />
          </a>
        </div>

        <a href="#hello">
          <div className="cursor-pointer hover:bg-slate-300  dark:hover:bg-slate-800  hover:md:w-[42px] hover:md:h-[42px]  hover:w-[35px] hover:h-[35px] flex items-center justify-center animate-bounce md:text-2xl hover:rounded-full">
            <FaAngleDoubleUp />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
