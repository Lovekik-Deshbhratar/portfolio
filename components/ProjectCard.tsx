import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  skillsLogo: Array<JSX.Element>;
  link: string;
}

const ProjectCard = ({ title, description, skillsLogo, link }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      className="group bg-[#26282B] rounded-lg p-3 hover:bg-[#1B1E1F] tracking-wide lg:px-6 lg:pt-7 lg:pb-6 md:px-4 md:pt-5 md:pb-4 transition ease-in-out duration-500"
    >
      <div className="flex justify-between">
        <h1 className="font-semibold lg:text-xl md:text-lg">{title}</h1>
        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300" />
      </div>
      <p className="text-sm md:text-[0.93rem] lg:text-base 2xl:text-lg mt-2 lg:mt-4 text-[#abacb3] group-hover:text-white leading-relaxed h-[8.55rem] xs:h-[7.15rem] lg:h-[6.1rem] 2xl:h-[7.14rem]">
        {description}
      </p>
      <div className="flex mt-2.5 gap-2.5 md:gap-3 lg:gap-3.5 lg:mt-3 md:mt-[0.65rem]">
        {skillsLogo.map((item, key) => {
          return (
            <span key={key} className="text-[1.05rem] md:text-lg lg:text-xl">
              {item}
            </span>
          );
        })}
      </div>
    </a>
  );
};

export default ProjectCard;
