"use client";

import { useState } from "react";
import BookCard from "./BookCard";
import MusicCard from "./MusicCard";

type Book = {
  type: "book";
  title: string;
  author: string;
  description: string;
};

type Music = {
  type: "music";
  title: string;
  artist: string;
  genre: string;
};

// Union type for CardSlider items
type CardItem = Book | Music;

const CardSlider = () => {
  // Dummy data for data
  const data: CardItem[] = [
    {
      type: "book",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A novel about the American dream and the roaring twenties.",
    },
    {
      type: "music",
      title: "Bohemian Rhapsody",
      artist: "Queen",
      genre: "Rock",
    },
    {
      type: "book",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description:
        "A story of racial injustice and childhood in the Deep South.",
    },
    {
      type: "music",
      title: "Thriller",
      artist: "Michael Jackson",
      genre: "Pop",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Update the slider index for previous and next navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <div>
      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600"
      >
        Previous
      </button>
      <div className="flex ">
        {/* Card Content */}
        {data[currentIndex].type === "book" ? (
          <BookCard
            title={data[currentIndex].title}
            author={data[currentIndex].author}
            description={data[currentIndex].description}
          />
        ) : (
          <MusicCard
            title={data[currentIndex].title}
            artist={data[currentIndex].artist}
            genre={data[currentIndex].genre}
          />
        )}
        {/* Dots Indicator */}
        <div className="flex flex-col items-center space-y-2 border-2">
          {data.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
      {/* Next Button */}
      <button
        onClick={goToNext}
        className=" bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};

export default CardSlider;
