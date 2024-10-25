interface Props {
  icon: JSX.Element;
  title: string;
}

const TechCard = ({ icon, title }: Props) => {
  return (
    <div className="p-7 rounded-lg bg-[#26282B] hover:bg-white hover:text-black">
      <div className="flex flex-col items-center ">
        <h1 className="w-fit text-4xl">{icon}</h1>
        <h1 className="w-fit text-xs font-semibold mt-2">{title}</h1>
      </div>
    </div>
  );
};

export default TechCard;
