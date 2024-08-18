import Image from "next/image";
import Hello from "./_components/Hello";
import About from "./_components/About";
import Nav from "@/app/_components/Nav";
import Experience from "./_components/Experience";
import Stack from "./_components/Stack";
import Projects from "./_components/Projects";
import Contact from "./_components/Contact";

export default async function Home() {
  // for loading state
  await new Promise((resolver) => setTimeout(resolver, 3500));

  return (
    <div className=" dark:text-foreground text-gray-700  font-normal overflow-x-hidden  dark:bg-background    ">
      <div className="mx-auto items-center justify-center  flex flex-col">
        <Nav />
        <Hello />
        <About />
        <Experience />
        <Stack />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

// max-w-[1440px]
