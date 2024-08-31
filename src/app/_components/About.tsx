"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Files } from "lucide-react";
import { FaRegFilePdf } from "react-icons/fa";
import { BsFileEarmarkPdf, BsFiletypePdf } from "react-icons/bs";

const About = () => {
  return (
    <div
      id="about"
      className="border-y dark:border-gray-900 border-gray-300 w-full  flex flex-col justify-center items-center   "
    >
      <div
        id="abt"
        className=" py-16 md:py-28    text-[14px] md:text-[16px] px-[24px] md:px-[40px] max-w-[1200px] w-full  "
      >
        <div>
          <h3 className="pb-8 md:pb-14 text-2xl md:text-4xl dark:text-white text-red-700  font-black ">
            About Me
          </h3>
          <div className="md:flex-row flex flex-col  items-start gap-10 md:gap-16">
            <div className="">
              <Image
                src={"/osc.jpg"}
                alt="oscar Chilaka"
                width={320}
                height={280}
                quality={100}
                className="cursor-pointer hover:opacity-95  max-w-[400px] max-h-[380px]  object-cover rounded-xl shadow-xl transition-colors"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "backIn" }}
              viewport={{ margin: "-100px", once: true }}
              className="flex flex-col text-left  "
            >
              <h3 className=" ">
                Greetings! I&apos;m{" "}
                <span className="dark:text-white text-[#088395] font-bold ">
                  Oscar Chilaka
                </span>
                , a passionate{" "}
                <span className="dark:text-white text-[#088395] font-bold ">
                  Frontend Developer
                </span>{" "}
                with a fervent obsession for creating pixel-perfect,
                high-performance web experiences. With a robust foundation in
                modern{" "}
                <span className="dark:text-white text-[#088395] font-bold ">
                  JavaScript frameworks and libraries
                </span>
                , I thrive on transforming intricate UI/UX designs into dynamic,
                interactive web applications that dazzle and perform.
              </h3>

              <h3 className="mt-3 md:mt-6  ">
                Currently, I&apos;m exploring the intricacies of server-side
                rendering with{" "}
                <span className="dark:text-white text-[#088395] font-bold ">
                  Next.js
                </span>{" "}
                and the robust nature of{" "}
                <span className="dark:text-white text-[#088395] font-bold ">
                  Typescript.
                </span>{" "}
                My focus is on building scalable and maintainable applications.
                When im not coding, i actively participate in sports and enjoy
                self-driven research and{" "}
                <span className="dark:text-white text-[#088395] font-bold ">
                  personal improvement.
                </span>
              </h3>

              <motion.button
                whileTap={{ scale: 0.96, rotate: "2deg" }}
                className="flex mt-6 md:mt-10"
              >
                <div className="outline-none flex items-center justify-center gap-3 md:gap-4  cursor-pointer bg-gradient-to-br from-[#088395] to-[#088395] dark:bg-none dark:border dark:border-white dark:hover:bg-[#BE3144] hover:bg-[#37B7C3] hover:bg-none font-bold text-[#F3F3F3] py-2 px-5 md:py-2.5 md:px-5.5 md:text-[20px] italic dark:hover:border-none  text-sm ">
                  Resume
                  <BsFiletypePdf className="text-[16px] md:text-[24px]" />
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
