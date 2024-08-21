"use client";

import { AlignJustify, X } from "lucide-react";
import React, { useState } from "react";
import { ModeToggle } from "./Toggle";

const Nav = () => {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" shadow-sm py-[20px] md:py-6 px-[24px] md:px-[40px] fixed top-0 backdrop-blur-xl w-full z-10 blur-nav bg-opacity-25 bg-clip-padding">
      <div className="flex justify-between items-center  max-w-[1440px] mx-auto">
        <div className="bg-[#B31312] text-white font-black italic md:px-4 px-3 md:py-2.5 py-1.5 text-[14px] md:text-[16px]">
          Oscarlo.tsx
        </div>
        <div className="flex md:gap-10 gap-6 items-center justify-center">
          <ul className="hidden md:flex gap-8 items-start justify-center cursor-pointer ">
            <a href="#about">
              <li
                className={`${
                  active === "L1" && "dark:text-white text-red-700"
                }`}
                onClick={() => setActive("L1")}
              >
                About
              </li>
            </a>

            <a href="#experience">
              <li
                className={`${
                  active === "L2" && "dark:text-white text-red-700"
                }`}
                onClick={() => setActive("L2")}
              >
                Experience
              </li>
            </a>

            <a href="#stack">
              <li
                className={`${
                  active === "L3" && "dark:text-white text-red-700"
                }`}
                onClick={() => setActive("L3")}
              >
                Stack
              </li>
            </a>

            <a href="#projects">
              <li
                className={`${
                  active === "L4" && "dark:text-white text-red-700"
                }`}
                onClick={() => setActive("L4")}
              >
                Projects
              </li>
            </a>

            <a href="#contact">
              <li
                className={`${
                  active === "L5" && "dark:text-white text-red-700"
                }`}
                onClick={() => setActive("L5")}
              >
                Contact
              </li>
            </a>
          </ul>

          <div
            className="cursor-pointer dark:text-white text-gray-700 text-xl block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <AlignJustify />}
          </div>

          <div className="text-2xl">
            <ModeToggle />
          </div>

          <div
            className={
              isOpen
                ? " fixed top-0 left-0 h-screen    w-full px-10  py-8 flex flex-col gap-10  ease-in-out duration-500 isolate bg-neutral-900 md:hidden"
                : " fixed left-[-100%] ease-in-out duration-500 h-screen top-0    full px-10  py-8 flex flex-col gap-10 z-10 isolate bg-neutral-900 md:hidden"
            }
          >
            <div className="flex  justify-between items-center">
              <div className="bg-[#B31312] text-white font-black italic  px-3 md:py-2.5 py-1.5 text-[14px] w- ">
                Oscarlo.tsx
              </div>

              <div
                className="cursor-pointer text-white text-xl block md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X /> : <AlignJustify />}
              </div>
            </div>

            <ul className="flex flex-col gap-8 items-start justify-center cursor-pointer pt-4 ">
              <a href="#about">
                <li
                  className={`${active === "L1" && "text-white"}`}
                  onClick={() => setActive("L1")}
                >
                  About
                </li>
              </a>

              <a href="#experience">
                <li
                  className={`${active === "L2" && "text-white"}`}
                  onClick={() => setActive("L2")}
                >
                  Experience
                </li>
              </a>

              <a href="#stack">
                <li
                  className={`${active === "L3" && "text-white"}`}
                  onClick={() => setActive("L3")}
                >
                  Stack
                </li>
              </a>

              <a href="#projects">
                <li
                  className={`${active === "L4" && "text-white"}`}
                  onClick={() => setActive("L4")}
                >
                  Projects
                </li>
              </a>

              <a href="#contact">
                <li
                  className={`${active === "L5" && "text-white"}`}
                  onClick={() => setActive("L5")}
                >
                  Contact
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
