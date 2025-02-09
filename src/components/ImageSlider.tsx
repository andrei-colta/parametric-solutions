'use client';

import { fetchFilesFromFolder, Image } from "@/service/file.service";
import { useEffect, useRef, useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function ImageSlider({ paths }: { paths: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<Image[]>([]);

  function prevSlide() {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  function nextSlide() {
    setCurrentIndex((prevIndex) => (prevIndex >= images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    async function loadImages() {
      const result = (await Promise.all(paths.map(path => fetchFilesFromFolder(path)))).flat();
      setImages(result);
    }

    loadImages();
  }, []);


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") prevSlide();
      if (event.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const navButtonClasses = 'absolute bg-gray-800 bg-opacity-30 text-white p-2 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300';

  return (
    <div className="w-full h-full lg:w-1/2 relative flex flex-1 justify-center items-center group">
      {/* Image Container */}
      <div className={`relative h-full w-full flex items-center justify-center overflow-hidden bg-[rgba(201,173,167,0.1)] shadow`}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.name}
            className={`absolute rounded max-h-[40vh] lg:max-w-[45vw] lg:max-h-[75vh] object-contain mx-2 transition-opacity duration-500 ease-in-out border-[1px] border-[rgba(201,173,167,0.1)] ${index === currentIndex ? "opacity-85 z-10" : "opacity-0 pointer-events-none"}`}
          />
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className={`left-4 ${navButtonClasses}`}
        >
          <ArrowBack />
        </button>
        <button
          onClick={nextSlide}
          className={`right-4 ${navButtonClasses}`}
        >
          <ArrowForward />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute top-full mt-[-1rem] lg:mt-[-2rem] left-1/2 transform -translate-x-1/2 w-full max-w-[80%] lg:max-w-[50%] overflow-hidden flex justify-center">
        <div className="flex space-x-1 lg:space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 overflow-x-auto scrollbar-hide">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1 h-1 sm:w-2 sm:h-2 lg:w-3 lg:h-3 rounded-full bg-opacity-70 ${index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
