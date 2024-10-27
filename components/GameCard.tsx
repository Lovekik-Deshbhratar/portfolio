import { FaGamepad } from "react-icons/fa";

interface Props {
  description: string;
}

const GameCard = ({ description }: Props) => {
  return (
    <a
      href="https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/"
      target="_blank"
      className="block text-white bg-gradient-to-br from-[#4A00E0] via-[#8E2DE2] to-[#00C9FF] rounded-lg w-[18rem] xs:w-[20rem] md:w-[23rem] lg:w-[27rem] xl:w-[29rem] 2xl:w-[29rem] overflow-hidden group h-[25rem] xs:h-[27rem] md:h-[31rem] lg:h-[33rem] xl:h-[38rem] 2xl:h-[38rem] py-5 lg:py-8 xl:py-9 no-underline transition duration-300 hover:opacity-90"
    >
      <div className="flex justify-center">
        <FaGamepad className="text-[#FF1053] text-[3rem] xs:text-[4rem] sm:text-[5rem] lg:text-[5.5rem]" />
      </div>
      <div className="p-5 xs:p-7 md:p-9 lg:p-10">
        <div className="flex justify-center mb-2">
          <span className="font-extrabold tracking-wide text-[#FF1053] text-xs md:text-sm">
            Gaming
          </span>
        </div>
        <p className="mt-4 xs:mt-5 lg:mt-7 xl:mt-8 font-medium tracking-wide md:text-lg lg:text-xl xl:text-2xl text-gray-200">
          {description}
        </p>
      </div>
    </a>
  );
};

export default GameCard;
