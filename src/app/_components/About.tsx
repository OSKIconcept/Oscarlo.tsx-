import Image from "next/image";
import React from "react";

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

            <div className="flex flex-col text-left  ">
              <h3 className=" ">
                Greetings! I&apos;m{" "}
                <span className="dark:text-white text-[#088395] font-bold ">
                  Oscar Chilaka
                </span>
                , a passionate Frontend Developer with a fervent obsession for
                creating pixel-perfect, high-performance web experiences. With a
                robust foundation in modern JavaScript frameworks and libraries,
                I thrive on transforming intricate UI/UX designs into dynamic,
                interactive web applications that dazzle and perform.
              </h3>

              <h3 className="mt-3 md:mt-6  ">
                Currently, I&apos;m exploring the intricacies of server-side
                rendering with Next.js and the robust nature of Typescript. My
                focus is on building scalable and maintainable applications.
                When im not coding, i actively participate in sports and enjoy
                self-driven research and personal improvement.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
