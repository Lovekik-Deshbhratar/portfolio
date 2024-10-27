import { FaGuitar } from "react-icons/fa";
import { GiGuitar } from "react-icons/gi";

interface Props {
  description: string;
}

const GuitarCard = ({ description }: Props) => {
  return (
    <a
      href="https://www.instagram.com/reel/C_LgLaxIRDu/?igsh=N2h2dmxmcW8yM2Y4"
      target="_blank"
      className="block text-white bg-gradient-to-tl from-[#3C2A1E] to-[#7A5743] rounded-lg w-[18rem] xs:w-[20rem] md:w-[23rem] lg:w-[27rem] xl:w-[29rem] 2xl:w-[29rem] overflow-hidden group h-[25rem] xs:h-[27rem] md:h-[31rem] lg:h-[33rem] xl:h-[38rem] 2xl:h-[38rem] py-5 lg:py-8 xl:py-9 no-underline transition duration-300 hover:opacity-90"
    >
      <div className="flex justify-center">
        <FaGuitar className="text-[#D19A66] text-[3rem] xs:text-[4rem] sm:text-[5rem] lg:text-[5.5rem]" />
      </div>
      <div className="p-5 xs:p-7 md:p-9 lg:p-10">
        <div className="flex justify-center mb-2">
          <span className="font-extrabold tracking-wide text-[#C9A35B] text-xs md:text-sm">
            Playing Guitar
          </span>
        </div>
        <p className="mt-4 xs:mt-5 lg:mt-7 xl:mt-8 font-medium tracking-wide md:text-lg lg:text-xl xl:text-2xl text-[#D3BFAE]">
          {description}
        </p>
      </div>
    </a>
  );
};

export default GuitarCard;
