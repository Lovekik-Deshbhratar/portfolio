import { BsGrid } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import ProjectCard from "@/components/ProjectCard";
import { SiTypescript } from "react-icons/si";
import TechCard from "@/components/TechCard";
import { RiNextjsFill, RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="">
      <div>
        {/* <div className="border-">
          <BsGrid size={25} />
        </div> */}
      </div>
      <div>
        <div className="flex items-center bg-green-500/25 w-fit rounded-full text-green-400 p-1">
          <div className="ml-1">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <h1 className="text-xs md:text-sm pr-2 font-semibold ml-2">
            Online.
          </h1>
        </div>
        <div className="mt-3">
          <h1 className="relative text-4xl font-extrabold tracking-wide after:absolute after:w-[8.8rem] after:h-4 after:bg-violet-500 after:bottom-0 after:left-[9.4rem] after:-rotate-[1.5deg] after:-z-10">
            Hey, I'm Lovekik
          </h1>
        </div>
        <div className="mt-2">
          <h1 className="text-4xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r to-pink-500 from-violet-500">
            Fullstack Developer.
          </h1>
        </div>
        <div className="flex gap-3 text-xs mt-7">
          <a
            href="https://www.linkedin.com/in/lovekik-deshbhratar-6b5b7923a"
            target="_blank"
            className="flex items-center space-x-2 bg-[#2D2F33] w-fit rounded-full py-2.5 px-4 hover:scale-110 hover:text-black hover:bg-white transition-transform duration-200"
          >
            <IoLogoLinkedin size={20} /> <span>LinkedIn</span>
          </a>
          <a
            href="https://www.linkedin.com/in/lovekik-deshbhratar-6b5b7923a"
            target="_blank"
            className="flex items-center space-x-2 bg-[#2D2F33] w-fit rounded-full py-2.5 px-4 hover:scale-110 hover:text-black hover:bg-white transition-transform duration-200"
          >
            <FaGithub size={20} /> <span>Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/lovekik-deshbhratar-6b5b7923a"
            target="_blank"
            className="flex items-center space-x-2 bg-[#2D2F33] w-fit rounded-full py-2.5 px-4 hover:scale-110 hover:text-black hover:bg-white transition-transform duration-200"
          >
            <LuMail size={20} /> <span>Mail</span>
          </a>
        </div>
        <div className="mt-7">
          <h1 className="text-[#969698] tracking-wide">
            Hi, I am Lovekik, a full stack developer skilled in React, Next.js,
            Node.js, and Spring Boot. I started with the basics and quickly
            embraced full-stack development. Ready to create innovative web
            solutions!
          </h1>
        </div>
        <hr className="border-breaker mt-6" />
        <div className="mt-5">
          <h1 className="text-2xl font-semibold tracking-wide">My Timeline</h1>
          <div className="mt-6 ">
            <div className="">
              {/* stack 1 */}
              <div className="grid grid-cols-17 h-[6rem]">
                <div className="col-span-8"></div>
                <div className="flex justify-center">
                  <div className="absolute w-3 h-3 rounded-full bg-[#D5D5D5] z-10 text-[#D5D5D5] text-center"></div>
                  <div className="h-full w-0.5 bg-[#D5D5D5]"></div>
                </div>
                <div className="col-span-8 -mt-1 pl-1 text-sm text-[#D5D5D5] font-[450]">
                  <p>2023-45-45</p>
                  <p className="mt-1">Graduated BTECH in computer science</p>
                </div>
              </div>
              {/* stack 2 */}
              <div className="grid grid-cols-17 h-[6rem]">
                <div className="col-span-8 -mt-1 text-sm text-[#D5D5D5] font-[450] pr-1 text-end">
                  <p>2023-45-45</p>
                  <p className="mt-1">Graduated BTECH in computer science</p>
                </div>
                <div className="flex justify-center">
                  <div className="absolute w-3 h-3 rounded-full bg-[#D5D5D5] z-10 text-[#D5D5D5] text-center"></div>
                  <div className="h-full w-0.5 bg-[#D5D5D5]"></div>
                </div>
                <div className="col-span-8"></div>
              </div>
              {/* stack 3 */}
              <div className="grid grid-cols-17 h-[6rem]">
                <div className="col-span-8"></div>
                <div className="flex justify-center">
                  <div className="absolute w-3 h-3 rounded-full bg-[#D5D5D5] z-10 text-[#D5D5D5] text-center"></div>
                  <div className="h-full w-0.5 bg-[#D5D5D5]"></div>
                </div>
                <div className="col-span-8 -mt-1 pl-1 text-sm text-[#D5D5D5] font-[450]">
                  <p>2023-45-45</p>
                  <p className="mt-1">Graduated BTECH in computer science</p>
                </div>
              </div>
              {/* stack 4 */}
              <div className="grid grid-cols-17 h-[5rem]">
                <div className="col-span-8 -mt-1 pr-1 text-end text-sm text-[#D5D5D5] font-[450]">
                  <p>2023-45-45</p>
                  <p className="mt-1">Graduated BTECH in computer science</p>
                </div>
                <div className="flex justify-center">
                  <div className="absolute w-3 h-3 rounded-full bg-[#D5D5D5] z-10 text-[#D5D5D5] text-center"></div>
                </div>
                <div className="col-span-8"></div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-breaker mt-1" />
        <div className="mt-5">
          <h1 className="text-2xl font-semibold tracking-wide">Projects</h1>
          <div className="grid grid-cols-2 grid-rows-2 gap-3 mt-4">
            <ProjectCard
              title={"One QR"}
              description={
                "Personla portfolio website developed using Next.js and TailwindCSS and CSS animations."
              }
              skillsLogo={[
                <SiTypescript size={17} />,
                <SiTypescript size={17} />,
                <SiTypescript size={17} />,
                <SiTypescript size={17} />,
              ]}
            />
            <ProjectCard
              title={"Portfolio"}
              description={
                "Personla portfolio website developed using Next.js and TailwindCSS and CSS animations."
              }
              skillsLogo={[
                <SiTypescript size={17} />,
                <SiTypescript size={17} />,
                <SiTypescript size={17} />,
                <SiTypescript size={17} />,
              ]}
            />
            <ProjectCard
              title={"Portfolio"}
              description={
                "Personla portfolio website developed using Next.js and TailwindCSS and CSS animations."
              }
              skillsLogo={[
                <SiTypescript size={17} />,
                <SiTypescript size={17} />,
                <SiTypescript size={17} />,
                <SiTypescript size={17} />,
              ]}
            />
            <ProjectCard
              title={"Portfolio"}
              description={
                "Personla portfolio website developed using Next.js and TailwindCSS and CSS animations."
              }
              skillsLogo={[
                <SiTypescript size={18} />,
                <SiTypescript size={18} />,
                <SiTypescript size={18} />,
                <SiTypescript size={18} />,
              ]}
            />
          </div>
        </div>
        <hr className="border-breaker mt-6" />
        <div className="mt-5">
          <h1 className="text-2xl font-semibold tracking-wide">Tech</h1>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <TechCard icon={<RiNextjsFill />} title="Next" />
            <TechCard icon={<RiTailwindCssFill />} title="Tailwind" />
            <TechCard icon={<RiReactjsFill />} title="React " />
            <TechCard icon={<RiNextjsFill />} title="Next" />
            <TechCard icon={<RiTailwindCssFill />} title="Tailwind" />
            <TechCard icon={<RiReactjsFill />} title="React " />
            <TechCard icon={<RiNextjsFill />} title="Next" />
            <TechCard icon={<RiTailwindCssFill />} title="Tailwind" />
            <TechCard icon={<RiReactjsFill />} title="React " />
            <TechCard icon={<RiNextjsFill />} title="Next" />
            <TechCard icon={<RiTailwindCssFill />} title="Tailwind" />
            <TechCard icon={<RiReactjsFill />} title="React " />
            <TechCard icon={<RiNextjsFill />} title="Next" />
            <TechCard icon={<RiTailwindCssFill />} title="Tailwind" />
            <TechCard icon={<RiReactjsFill />} title="React " />
          </div>
        </div>
        <hr className="border-breaker mt-6" />
        <div className="mt-5">
          <h1 className="text-2xl font-semibold tracking-wide">Uses</h1>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <TechCard icon={<RiNextjsFill />} title="Next" />
            <TechCard icon={<RiTailwindCssFill />} title="Tailwind" />
            <TechCard icon={<RiReactjsFill />} title="React " />
            <TechCard icon={<RiNextjsFill />} title="Next" />
            <TechCard icon={<RiTailwindCssFill />} title="Tailwind" />
            <TechCard icon={<RiReactjsFill />} title="React " />
            <TechCard icon={<RiNextjsFill />} title="Next" />
            <TechCard icon={<RiTailwindCssFill />} title="Tailwind" />
            <TechCard icon={<RiReactjsFill />} title="React " />
            <TechCard icon={<RiNextjsFill />} title="Next" />
            <TechCard icon={<RiTailwindCssFill />} title="Tailwind" />
            <TechCard icon={<RiReactjsFill />} title="React " />
          </div>
        </div>
        <hr className="border-breaker mt-6" />
        <div className="mt-5">
          <h1 className="text-xl font-semibold tracking-wide">
            Thanks for scrolling.
          </h1>
          <a
            href="https://www.linkedin.com/in/lovekik-deshbhratar-6b5b7923a"
            target="_blank"
            className="flex items-center space-x-2 bg-gray-500/25 w-fit rounded-full py-2.5 px-4 hover:scale-110 hover:text-black hover:bg-white transition-transform duration-200 mt-4"
          >
            <span>Resume </span>{" "}
            <span className="">
              <ArrowUpRight size={20} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
