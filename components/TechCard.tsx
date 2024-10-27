interface Props {
  icon: JSX.Element;
  title: string;
  className: string;
}

const TechCard = ({ icon, title, className }: Props) => {
  return (
    <div
      className={`rounded-lg bg-[#26282B] hover:bg-[#1B1E1F] transition ease-in-out duration-300 py-6  lg:px-5 lg:py-10 ${className}`}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl">{icon}</h1>
        <h1 className="text-xs font-semibold mt-2 md:mt-3 md:text-sm text-white">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TechCard;
