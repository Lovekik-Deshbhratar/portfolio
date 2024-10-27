"use client";

import { useState } from "react";
import BookCard from "./BookCard";
import MusicCard from "./MusicCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import GameCard from "./GameCard";
import GuitarCard from "./GuitarCard";

type Book = {
  type: "book";
  description: string;
};

type Music = {
  type: "music";
  description: string;
};
type Game = {
  type: "game";
  description: string;
};
type Guitar = {
  type: "guitar";
  description: string;
};

type CardItem = Book | Music | Game | Guitar;

const CardSlider = () => {
  const data: CardItem[] = [
    {
      type: "book",
      description:
        "I picked up reading as a hobby when I started with comics——mostly Korean, Chinese, and Japanese, obviously English translated. Recently, I moved on to actual books. I began with 'Life is What You Make It' by Preeti Shenoy and have read a few more since. My recent favorite is 'The Almanack of Naval Ravikant'.",
    },
    {
      type: "music",
      description:
        "I love listening to music. It’s my go-to for unwinding and finding a bit of calm. It just helps everything feel a bit lighter. Well most of my song choices depends on mood but recently i have been into Maria Maria, Aayat, Chaand Ne Kaho, Kalank, and In Dino. You can check more on my playlist!",
    },
    {
      type: "game",
      description:
        "Since I can remember, around age 4, I’ve loved games. My dad would download them onto his keypad phone. Then I got a console and later a laptop. My interest in CSE comes from gaming, and I wanted to be a game developer. Favorite series is Alan Wake. Yes there is suggestion!",
    },
    {
      type: "guitar",
      description:
        "I bought my first guitar in September 2024. I used to think instruments were pretty expensive, but cheap beginner-friendly ones don’t cost much. So, yeah, I bought a cheap one, but it sounds good. I'm still learning, though. Favorite style is Flamenco. Reel I like.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <div className="space-y-6">
      <button
        onClick={goToPrevious}
        className="border border-[#2c2c2c] ml-5 xs:ml-6 lg:ml-14 xl:ml-9 2xl:ml-[3.9rem] text-[#494949] py-2 px-2 xs:py-2.5 xs:px-2.5 md:py-3 md:px-3 lg:py-3.5 lg:px-3.5 text-[1.7rem] rounded-full hover:bg-[#2c2c2c] hover:text-black transition ease-in-out duration-300"
      >
        <IoIosArrowBack />
      </button>
      <div className="flex justify-between ">
        <div></div>
        <div className="ml-4">
          {data[currentIndex].type === "book" ? (
            <BookCard description={data[currentIndex].description} />
          ) : data[currentIndex].type === "music" ? (
            <MusicCard description={data[currentIndex].description} />
          ) : data[currentIndex].type === "game" ? (
            <GameCard description={data[currentIndex].description} />
          ) : (
            <GuitarCard description={data[currentIndex].description} />
          )}
        </div>
        {/* Dots Indicator */}
        <div className="flex items-center">
          <div className="flex flex-col gap-2">
            {data.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 xs:w-2.5 xs:h-2.5 md:w-3 md:h-3 rounded-full ${
                  currentIndex === index
                    ? "bg-[#494949]"
                    : "border border-[#2c2c2c]"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={goToNext}
        className="border border-[#2c2c2c] ml-5 xs:ml-6 lg:ml-14 xl:ml-9 2xl:ml-[3.9rem] text-[#494949] py-2 px-2 xs:py-2.5 xs:px-2.5 md:py-3 md:px-3 lg:py-3.5 lg:px-3.5 text-[1.7rem] rounded-full hover:bg-[#2c2c2c] hover:text-black transition ease-in-out duration-300"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default CardSlider;
