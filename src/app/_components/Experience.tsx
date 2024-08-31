"use client";
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div
      id="experience"
      className="border-b dark:border-gray-900 border-gray-300 w-screen flex flex-col  "
    >
      <div className="flex   max-w-[1200px] w-full px-[24px] md:px-[40px]  mx-auto  items-start ">
        <div className=" flex flex-col gap-8 md:gap-14 py-16 md:py-28  ">
          <h3 className="text-2xl md:text-4xl dark:text-white text-red-700  font-black ">
            Experience
          </h3>
          <div className="text-[12px] md:text-[14px] gap-2.5 flex flex-col md:gap-4">
            <p className="pb-2 text-[14px] md:text-[16px] dark:text-white text-[#088395] font-bold">
              Frontend Engineer - Internship
            </p>
            <p className="dark:text-white  font-bold underline">HNG</p>
            <p className=" ">July 2024 - August 2024</p>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "backIn" }}
              viewport={{ margin: "-100px", once: true }}
              className="dark:text-white font-normal pt-2 md:pt-4 flex flex-col gap-2.5 "
            >
              <p>
                - I collaborated with teams to create necessary components which
                helped improve user experience
              </p>
              <p>
                - I built and deployed projects and optimized SEO experience for
                users
              </p>
              <p>
                - I built and tested components and features which helped to
                reduce code bugs and improve code quality
              </p>
              <p>
                - I leveraged upon nextjs and Typescript to build an optimized
                E-commerce site which improved user experience
              </p>
              <p>
                - I made contributions to repos in HNG and helped build scalable
                Frontend features and components.
              </p>
              <p></p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
