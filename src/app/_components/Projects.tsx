import React, { lazy } from "react";
import Works from "./Data";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <div
      id="projects"
      className="border-b dark:border-gray-900 border-gray-300 w-full flex flex-col  "
    >
      <div className="flex  max-w-[1200px] px-[24px] md:px-[40px]  mx-auto w-full ">
        <div className="justify-start flex flex-col gap-8 md:gap-14 py-16 md:py-28   ">
          <h3 className="text-2xl md:text-4xl dark:text-white text-red-700  font-black ">
            Projects
          </h3>

          {/* projects */}

          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full ">
            {Works.map((work, i) => (
              <div
                key={i}
                className="p-4 md:p-5 mx-auto rounded-sm border dark:border-gray-800 dark:hover:border-gray-400 border-gray-400 hover:border-red-700 group w-full"
              >
                <div className="flex flex-col gap-3 ">
                  <div className="w-full">
                    <Image
                      loading="lazy"
                      src={work.image}
                      alt="image"
                      width={300}
                      height={100}
                      className="w-[420px] group-hover:scale-105 ease-in-out duration-500 object-cover dark:opacity-60 dark:hover:opacity-70 opacity-100 hover:opacity-90 h-[220px] "
                    />
                  </div>
                  <h3 className="pt-3 md:pt-3.5 text-[16px] md:text-[24px]  dark:text-white text-[#088395] font-bold">
                    {work.title}
                  </h3>
                  <p className="w-[80%] text-[12px] md:text-[14px] font-bold">
                    {work.details}
                  </p>
                  <p className="text-[#088395] dark:text-foreground font-bold text-[11px] md:text-[13px]">
                    {work.stack}
                  </p>

                  <div className="flex items-center justify-between">
                    {work.completed ? (
                      <div className="flex gap-2 items-center ">
                        {" "}
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
                        </span>
                        <p className="dark:text-white text-black font-light text-[10.8px] md:text-[11.3px]">
                          Completed
                        </p>
                      </div>
                    ) : (
                      <div className="flex gap-2 items-center ">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                        </span>

                        <p className="dark:text-white text-black font-light text-[10.8px] md:text-[11.3px]">
                          In progress
                        </p>
                      </div>
                    )}

                    <div className="flex gap-3 justify-center items-center cursor-pointer text-xl ">
                      <a href={work.github}>
                        {" "}
                        <FiGithub className="dark:hover:text-white hover:text-red-700" />
                      </a>
                      <a href={work.link}>
                        <FiExternalLink className="dark:hover:text-white hover:text-red-700" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
