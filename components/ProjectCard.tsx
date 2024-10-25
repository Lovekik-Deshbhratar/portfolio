import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  skillsLogo: Array<JSX.Element>;
}

const ProjectCard = ({ title, description, skillsLogo }: Props) => {
  return (
    <a
      href=""
      target="_blank"
      className="group bg-[#26282B] rounded-lg p-3 hover:bg-white hover:text-black tracking-wide"
    >
      <div className="flex justify-between">
        <h1 className="font-semibold">{title}</h1>
        <ArrowUpRight className="hidden group-hover:block" />
      </div>
      <p className="text-sm mt-2 text-[#9697A0]/80 leading-relaxed">
        {description}
      </p>
      <div className="flex mt-2.5 gap-2.5">
        {skillsLogo.map((item, key) => {
          return <span key={key}>{item}</span>;
        })}
      </div>
    </a>
  );
};

export default ProjectCard;
