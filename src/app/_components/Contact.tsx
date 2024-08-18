import Image from "next/image";
import React from "react";
import { GoMail } from "react-icons/go";
import { MdMarkEmailRead } from "react-icons/md";

function Contact() {
  return (
    <div id="contact" className=" w-full flex flex-col">
      <div className="justify-center items-center flex flex-col gap-8 md:gap-14 py-16 md:py-28">
        <h3 className="text-2xl md:text-4xl dark:text-white text-red-700  font-black ">
          Contact
        </h3>

        <div className="text-center">
          <h3 className="text-center text-[14px] md:text-[16px] px-[40px] max-w-[800px]">
            You have made it this far, thanks for the visit. If you have any
            questions, comments or just want to say hello, i will do my best to
            get back to you as soon as possible Looking forward to hearing from
            you
          </h3>

          <a href="mailto:oscarjoseph7991@gmail.co">
            <button className=" mt-6 md:mt-10 inline-flex gap-3 md:gap-4  cursor-pointer bg-gradient-to-br from-[#088395] to-[#37B7C3] dark:from-[#B31312] dark:to-[#BE3144] dark:hover:bg-[#BE3144] hover:bg-[#37B7C3] hover:bg-none font-bold text-[#F3F3F3] py-2 px-5 md:py-3 md:px-6 md:text-[20px] italic text-sm ">
              Say hello
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
