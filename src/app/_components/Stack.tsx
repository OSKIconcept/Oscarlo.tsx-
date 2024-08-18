import React from "react";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { FaGitSquare, FaReact } from "react-icons/fa";
import { RiFirebaseFill, RiNextjsFill } from "react-icons/ri";
import {
  SiClerk,
  SiEslint,
  SiPrettier,
  SiRedux,
  SiTypescript,
  SiVitest,
} from "react-icons/si";

const Stack = () => {
  return (
    <div
      id="stack"
      className="border-b dark:border-gray-900 border-gray-300 w-full flex flex-col  "
    >
      <div className="flex  min-w-[1200px] px-[40px]  mx-auto">
        <div className="justify-start flex flex-col gap-8 md:gap-14 py-16 md:py-28   ">
          <h3 className=" text-2xl md:text-4xl dark:text-white text-red-700  font-black">
            Stack
          </h3>
          <div className="text-[14px] md:text-[16px] gap-8 md:gap-32  flex  items-start">
            <div className="flex flex-col gap-5 md:gap-8 items-start">
              <div className="flex gap-2 items-center justify-center dark:hover:text-white hover:text-red-700 cursor-pointer">
                <FaReact className="text-[22px] md:text-[24px]" />
                <p>React</p>
              </div>

              <div className="flex gap-2 items-center justify-center dark:hover:text-white hover:text-red-700 cursor-pointer">
                <SiRedux className="text-[22px] md:text-[24px]" />
                <p>Redux</p>
              </div>

              <div className="flex gap-2 items-center justify-center dark:hover:text-white hover:text-red-700 cursor-pointer">
                <BiLogoTailwindCss className="text-[22px] md:text-[24px]" />
                <p>Tailwind</p>
              </div>

              <div className="flex gap-2 items-center justify-center dark:hover:text-white hover:text-red-700 cursor-pointer">
                <FaGitSquare className="text-[22px] md:text-[24px]" />
                <p>Github</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 md:gap-8 items-start">
              <div className="flex gap-2 items-center justify-center dark:hover:text-white hover:text-red-700 cursor-pointer">
                <SiVitest className="text-[22px] md:text-[24px]" />
                <p>Vitest</p>
              </div>

              <div className="flex gap-2 items-center justify-center dark:hover:text-white hover:text-red-700 cursor-pointer">
                <RiNextjsFill className="text-[22px] md:text-[24px]" />
                <p>Next.Js</p>
              </div>

              <div className="flex gap-2 items-center justify-center dark:hover:text-white hover:text-red-700 cursor-pointer">
                <BiLogoTypescript className="text-[22px] md:text-[24px]" />
                <p>Typescript</p>
              </div>

              <div className="flex gap-2 items-center justify-center dark:hover:text-white hover:text-red-700 cursor-pointer">
                <SiClerk className="text-[22px] md:text-[24px]" />
                <p>Clerk</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 md:gap-8 items-start">
              <div className="flex gap-2 items-center justify-center dark:hover:text-white hover:text-red-700 cursor-pointer">
                <SiEslint className="text-[22px] md:text-[24px]" />
                <p>Eslint</p>
              </div>

              <div className="flex gap-2 items-center justify-center dark:hover:text-white hover:text-red-700 cursor-pointer">
                <SiPrettier className="text-[22px] md:text-[24px]" />
                <p>Prettier</p>
              </div>

              <div className="flex gap-2 items-center justify-center dark:hover:text-white hover:text-red-700 cursor-pointer">
                <RiFirebaseFill className="text-[22px] md:text-[24px]" />
                <p>Firebase</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-5 items-start"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
