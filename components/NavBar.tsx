"use client";

import React, { useState } from "react";
import { BsGrid, BsPen } from "react-icons/bs";
import { PiSuitcaseSimple } from "react-icons/pi";
import { LuMail } from "react-icons/lu";
import Link from "next/link";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("#home");

  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="flex justify-center md:fixed md:left-1 lg:left-4 xl:left-5 2xl:left-10 md:top-1/2 md:transform md:-translate-y-1/2">
      <div className="w-fit rounded-full px-4 py-2 md:px-2 bg-[#2D2F33] shadow-2xl">
        <div className="flex md:flex-col text-[1.2rem] md:text-[1.5rem] justify-center gap-7">
          <Link
            href={"#home"}
            onClick={() => handleSetActive("#home")}
            className="relative group"
          >
            <div
              className={`flex items-center rounded-full transition-all ease-in-out duration-300 ${
                activeSection === "#home"
                  ? "bg-white text-black"
                  : "bg-transparent text-white group-hover:bg-[#1B1E1F]"
              } p-2.5 md:p-3`}
            >
              <BsPen className="z-10" />
              <span
                className={`opacity-0 group-hover:opacity-100 absolute -left-5 top-10 md:top-0  md:-left-2 ml-3 text-xs md:text-sm ${
                  activeSection === "#home"
                    ? "md:bg-white md:text-black text-white"
                    : "text-white bg-[#1B1E1F]"
                }  md:rounded-full md:pl-12 md:pt-[0.9rem] md:pb-[0.9rem] p-3 transition-opacity ease-in-out duration-300`}
              >
                Home
              </span>
            </div>
          </Link>
          <Link
            href={"#project"}
            onClick={() => handleSetActive("#project")}
            className="relative group"
          >
            <div
              className={`flex items-center rounded-full transition-all ease-in-out duration-300 ${
                activeSection === "#project"
                  ? "bg-white text-black"
                  : "bg-transparent text-white group-hover:bg-[#1B1E1F]"
              } p-2.5 md:p-3`}
            >
              <BsGrid className="z-10" />
              <span
                className={`opacity-0 group-hover:opacity-100 absolute -left-7 top-10 md:top-0  md:-left-2 ml-3 text-xs md:text-sm ${
                  activeSection === "#project"
                    ? "md:bg-white md:text-black text-white"
                    : "text-white bg-[#1B1E1F]"
                }  md:rounded-full md:pl-12 md:pt-[0.9rem] md:pb-[0.9rem] p-3 transition-opacity ease-in-out duration-300`}
              >
                Projects
              </span>
            </div>
          </Link>
          <Link
            href={"#skill"}
            onClick={() => handleSetActive("#skill")}
            className="relative group"
          >
            <div
              className={`flex items-center rounded-full transition-all ease-in-out duration-300 ${
                activeSection === "#skill"
                  ? "bg-white text-black"
                  : "bg-transparent text-white group-hover:bg-[#1B1E1F]"
              } p-2.5 md:p-3`}
            >
              <PiSuitcaseSimple className="z-10" />
              <span
                className={`opacity-0 group-hover:opacity-100 absolute -left-5 top-10 md:top-0  md:-left-2 ml-3 text-xs md:text-sm ${
                  activeSection === "#skill"
                    ? "md:bg-white md:text-black text-white"
                    : "text-white bg-[#1B1E1F]"
                }  md:rounded-full md:pl-12 md:pt-[0.9rem] md:pb-[0.9rem] p-3 transition-opacity ease-in-out duration-300`}
              >
                Skills
              </span>
            </div>
          </Link>
          <Link
            href={"#contact"}
            onClick={() => handleSetActive("#contact")}
            className="relative group"
          >
            <div
              className={`flex items-center rounded-full transition-all ease-in-out duration-300 ${
                activeSection === "#contact"
                  ? "bg-white text-black"
                  : "bg-transparent text-white group-hover:bg-[#1B1E1F]"
              } p-2.5 md:p-3`}
            >
              <LuMail className="z-10" />
              <span
                className={`opacity-0 group-hover:opacity-100 absolute -left-6 top-10 md:top-0  md:-left-2 ml-3 text-xs md:text-sm ${
                  activeSection === "#contact"
                    ? "md:bg-white md:text-black text-white"
                    : "text-white bg-[#1B1E1F]"
                }  md:rounded-full md:pl-12 md:pt-[0.9rem] md:pb-[0.9rem] p-3 transition-opacity ease-in-out duration-300`}
              >
                Contact
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
