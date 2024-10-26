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
import CardSlider from "@/components/CardSlider";

export default function Home() {
  return (
    <div className="">
      {/* <div>
        <div className="border-">
          <BsGrid size={25} />
        </div>
      </div> */}
      <div className=" md:flex md:justify-center md:items-center md:mt-[7rem]">
        <div className="md:w-[28rem] lg:w-[36rem] 2xl:w-[39rem] md:ml-5 lg:ml-0">
          <div className="flex items-center bg-green-500/25 w-fit rounded-full text-green-400 p-1">
            <div className="ml-1">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </div>
            <h1 className="text-xs 2xl:text-sm pr-2 font-semibold ml-2 2xl:ml-3">
              Online.
            </h1>
          </div>
          <div className="text-3xl xs:text-4xl md:text-[2.6rem] lg:text-5xl 2xl:text-6xl mt-5">
            <div className="">
              <h1 className="relative font-extrabold tracking-wide after:absolute after:w-[7.5rem] after:h-4 after:bg-violet-500 after:bottom-0 after:left-[7.99rem] after:-rotate-[1.5deg] after:-z-10 xs:after:absolute xs:after:w-[8.8rem] xs:after:h-4 xs:after:bg-violet-500 xs:after:bottom-0 xs:after:left-[9.68rem] xs:after:-rotate-[1.5deg] xs:after:-z-10">
                Hey, I'm Lovekik
              </h1>
            </div>
            <div className="mt-2 md:mt-3">
              <h1 className="font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r to-pink-500 from-violet-500">
                Fullstack Developer.
              </h1>
            </div>
          </div>
          <div className="flex gap-3 text-xs md:text-sm 2xl:text-base mt-7 md:mt-9  2xl:mt-11">
            <a
              href="https://www.linkedin.com/in/lovekik-deshbhratar-6b5b7923a"
              target="_blank"
              className="flex items-center space-x-2 bg-[#2D2F33] w-fit rounded-full py-2.5 2xl:py-3.5 md:py-3 px-4 md:px-6 2xl:px-7 hover:scale-110 hover:text-black hover:bg-white transition-transform duration-200"
            >
              <IoLogoLinkedin size={20} /> <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Lovekik-Deshbhratar"
              target="_blank"
              className="flex items-center space-x-2 bg-[#2D2F33] w-fit rounded-full py-2.5 2xl:py-3.5 md:py-3 px-4 md:px-6 2xl:px-7 hover:scale-110 hover:text-black hover:bg-white transition-transform duration-200"
            >
              <FaGithub size={20} /> <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lovekik-deshbhratar-6b5b7923a"
              target="_blank"
              className="flex items-center space-x-2 bg-[#2D2F33] w-fit rounded-full py-2.5 2xl:py-3.5 md:py-3 px-4 md:px-6 2xl:px-7 hover:scale-110 hover:text-black hover:bg-white transition-transform duration-200"
            >
              <LuMail size={20} /> <span>Mail</span>
            </a>
          </div>
          <div className="mt-7 md:text-base lg:text-lg 2xl:text-xl 2xl:mt-9">
            <h1 className="text-[#969698] tracking-wide">
              Hi, I am Lovekik, a full stack developer skilled in React,
              Next.js, Node.js, and Spring Boot. I started with the basics and
              quickly embraced full-stack development. Ready to create
              innovative web solutions!
            </h1>
          </div>
          <hr className="border border-breaker mt-6" />
          <div className="mt-5 md:mt-6">
            <h1 className="text-2xl font-semibold tracking-wide lg:text-[1.55rem] 2xl:text-[1.67rem]">
              My Timeline
            </h1>
            <div className="mt-6 md:mt-7">
              <div className="">
                {/* stack 1 */}
                <div className="grid grid-cols-17 h-[6rem]">
                  <div className="col-span-8"></div>
                  <div className="flex justify-center">
                    <div className="absolute w-3 h-3 rounded-full bg-[#D5D5D5] z-10 text-[#D5D5D5] text-center"></div>
                    <div className="h-full w-0.5 bg-[#D5D5D5]"></div>
                  </div>
                  <div className="col-span-8 -mt-1 pl-1 text-sm md:text-base text-[#D5D5D5] font-[450]">
                    <p>2020-07-05</p>
                    <p className="mt-1">
                      Completed Diploma in Computer Engineering
                    </p>
                  </div>
                </div>
                {/* stack 2 */}
                <div className="grid grid-cols-17 h-[6rem]">
                  <div className="col-span-8 -mt-1 text-sm md:text-base text-[#D5D5D5] font-[450] pr-1 text-end">
                    <p>2023-07-05</p>
                    <p className="mt-1">
                      Graduated with a B.Tech in Computer Science
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="absolute w-3 h-3 rounded-full bg-[#D5D5D5] z-10 text-[#D5D5D5] text-center"></div>
                    <div className="h-full w-0.5 bg-[#D5D5D5]"></div>
                  </div>
                  <div className="col-span-8"></div>
                </div>
                {/* stack 3 */}
                <div className="grid grid-cols-17 h-[7rem]">
                  <div className="col-span-8"></div>
                  <div className="flex justify-center">
                    <div className="absolute w-3 h-3 rounded-full bg-[#D5D5D5] z-10 text-[#D5D5D5] text-center"></div>
                    <div className="h-full w-0.5 bg-[#D5D5D5]"></div>
                  </div>
                  <div className="col-span-8 -mt-1 pl-1 text-sm md:text-base text-[#D5D5D5] font-[450]">
                    <p>2024-04-25</p>
                    <p className="mt-1">
                      Completed Java Full Stack Certification from VibrantMinds
                      Technologies Pvt. Ltd, Pune
                    </p>
                  </div>
                </div>
                {/* stack 4 */}
                <div className="grid grid-cols-17 h-[5rem]">
                  <div className="col-span-8 -mt-1 pr-1 text-end text-sm md:text-base text-[#D5D5D5] font-[450]">
                    <p>Present</p>
                    <p className="mt-1">Self-learning and Freelancing</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="absolute w-3 h-3 rounded-full bg-[#D5D5D5] z-10 text-[#D5D5D5] text-center"></div>
                  </div>
                  <div className="col-span-8"></div>
                </div>
              </div>
            </div>
          </div>
          <hr className="border border-breaker mt-1 md:mt-4" />
          <div className="mt-5 md:mt-6">
            <h1 className="text-2xl font-semibold tracking-wide lg:text-[1.55rem] 2xl:text-[1.67rem]">
              Projects
            </h1>
            <div className="grid grid-cols-2 grid-rows-2 gap-3 mt-4 md:mt-5 lg:mt-6">
              <ProjectCard
                title={"Tours & Travel"}
                description={
                  "Tour Booking web application with features like real-time booking, authentication and more."
                }
                skillsLogo={[
                  <SiTypescript />,
                  <SiTypescript className="text-red-400" />,
                  <SiTypescript />,
                  <SiTypescript />,
                ]}
                link="https://tours-and-travel-ten.vercel.app/"
              />
              <ProjectCard
                title={"StudentEase"}
                description={
                  "Educational app for swift certificate and form issuance with streamlined verification."
                }
                skillsLogo={[
                  <SiTypescript />,
                  <SiTypescript />,
                  <SiTypescript />,
                  <SiTypescript />,
                ]}
                link=""
              />
              <ProjectCard
                title={"Portfolio"}
                description={
                  "Personla portfolio website developed using Next.js and TailwindCSS and CSS animations."
                }
                skillsLogo={[
                  <SiTypescript />,
                  <SiTypescript />,
                  <SiTypescript />,
                  <SiTypescript />,
                ]}
                link="https://portfolio-lovekik-deshbhratar.vercel.app/"
              />
              <ProjectCard
                title={"Task Manage"}
                description={
                  "Task manager app with title, description fields, validation, and local storage for organizing."
                }
                skillsLogo={[
                  <SiTypescript />,
                  <SiTypescript />,
                  <SiTypescript />,
                  <SiTypescript />,
                ]}
                link="https://task-manage-omega.vercel.app/"
              />
            </div>
          </div>
          <hr className="border border-breaker mt-6 lg:mt-7" />
          <div className="mt-5 md:mt-6">
            <h1 className="text-2xl font-semibold tracking-wide lg:text-[1.55rem] 2xl:text-[1.67rem]">
              Tech
            </h1>
            <div className="grid grid-cols-3 gap-3 mt-4 md:mt-5 lg:mt-6">
              <TechCard icon={<RiNextjsFill />} title="Next" />
              <TechCard
                icon={<RiTailwindCssFill className="hover:text-blue-400" />}
                title="Tailwind"
              />
              <TechCard icon={<RiReactjsFill />} title="React" />
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
          <hr className="border border-breaker mt-6 lg:mt-7" />
          <div className="mt-5 md:mt-6">
            <h1 className="text-2xl font-semibold tracking-wide lg:text-[1.55rem] 2xl:text-[1.67rem]">
              Uses
            </h1>
            <div className="grid grid-cols-3 gap-3 mt-4 md:mt-5 lg:mt-6">
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
          <hr className="border border-breaker mt-6 lg:mt-7" />
          <div className="mt-5 md:mt-6">
            <h1 className="text-2xl font-semibold tracking-wide lg:text-[1.55rem] 2xl:text-[1.67rem]">
              Hobbies
            </h1>
            <div className="mt-4 md:mt-5 lg:mt-6">
              <CardSlider />
            </div>
          </div>
          <hr className="border border-breaker mt-6 lg:mt-7" />
          <div className="mt-5 md:mt-5 lg:mt-6">
            <h1 className="xs:text-xl text-lg font-semibold tracking-wide">
              Thanks for scrolling.
            </h1>
            <a
              href="https://www.linkedin.com/in/lovekik-deshbhratar-6b5b7923a"
              target="_blank"
              className="flex items-center space-x-2 bg-[#2D2F33] w-fit rounded-full py-2.5 px-4 hover:scale-110 hover:text-black hover:bg-white transition-transform duration-200 mt-4"
            >
              <span>Resume </span>{" "}
              <span className="">
                <ArrowUpRight size={20} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
