import Image from "next/image";
import { SiSpotify } from "react-icons/si";

interface Props {
  description: string;
}

const MusicCard = ({ description }: Props) => {
  return (
    <a
      href="https://open.spotify.com/playlist/6ejuVoYwmeruaHIAJllQm0?si=Z6bEZzqWTeGtHC0voeomnA&pi=a-cbbMt4M_TOqH"
      target="_blank"
      className="block text-white bg-gradient-to-tl from-[#A8E6CE] to-[#1ED760] rounded-lg w-[18rem] xs:w-[20rem] md:w-[23rem] lg:w-[27rem] xl:w-[29rem] 2xl:w-[29rem] overflow-hidden group h-[25rem] xs:h-[27rem] md:h-[31rem] lg:h-[33rem] xl:h-[38rem] 2xl:h-[38rem] py-5 lg:py-8 xl:py-9 no-underline transition duration-300  hover:opacity-90"
    >
      <div className="flex justify-center">
        <SiSpotify className="text-[#12813a] text-[3rem] xs:text-[4rem] sm:text-[5rem] lg:text-[5.5rem]" />
      </div>
      <div className="p-5 xs:p-7 md:p-9 lg:p-10">
        <div className="flex justify-center mb-2">
          <span className="font-extrabold tracking-wide text-[#0A0A0A] text-xs md:text-sm">
            Listening Music
          </span>
        </div>
        <p className="mt-4 xs:mt-5 lg:mt-7 xl:mt-8 font-medium tracking-wide md:text-lg lg:text-xl xl:text-2xl text-[#0A0A0A]">
          {description}
        </p>
      </div>
    </a>
  );
};

export default MusicCard;
