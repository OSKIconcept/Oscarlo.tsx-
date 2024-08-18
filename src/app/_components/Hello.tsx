"use client";

import React from "react";
import { ReactTyped } from "react-typed";

const Hello = () => {
  return (
    <div className="h-screen flex flex-col gap-5 md:gap-8 items-center justify-center px-[40px] py-40 md:py-48">
      <h3 className="md:text-2xl text-[16px] font-medium">Hello it&apos;s</h3>
      <div className="md:text-7xl text-4xl font-black text-transparent bg-clip-text bg-gradient-to-tr dark:from-gray-500 dark:to-white from-red-900 to-red-600 tracking-tighter">
        <ReactTyped
          strings={["Oscarlo.tsx"]}
          typeSpeed={80}
          loop
          backSpeed={50}
          showCursor={true}
          backDelay={3000}
          startDelay={100}
          smartBackspace
        />
      </div>
      <button className=" inline-flex gap-3 md:gap-4  cursor-pointer bg-gradient-to-br from-[#088395] to-[#37B7C3] dark:from-[#B31312] dark:to-[#BE3144] dark:hover:bg-[#BE3144] hover:bg-[#37B7C3] hover:bg-none font-bold text-[#F3F3F3] py-2 px-5 md:py-3 md:px-6 md:text-[20px] italic text-sm">
        Welcome!!{" "}
      </button>

      <div className="hidden  fixed right-[-120px] bottom-[140px] z-10 lg:flex rotate-90  ">
        <p className="after:content-[''] after:bg-gray-500 after:ml-2 after:w-[180px] after:h-[1.5px] inline-flex items-center ">
          oscarjoseph7991@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Hello;
