'use client';

import { Theme } from "@/app/shared/theme";
import { useEffect, useState } from "react";

export default function ImageSlider({ images }: { images: { name: string; url: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") prevSlide();
      if (event.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative flex justify-center items-center group">
      {/* Image Container */}
      <div className="relative w-[50vw] h-[50vh] flex items-center justify-center overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.name}
            className={`absolute max-w-[50vw] max-h-[50vh] object-contain mx-2 transition-opacity duration-500 ease-in-out border-[6px] border-[${Theme.LIGHT}] ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 pointer-events-none"
              }`}
          />
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 bg-gray-800 text-white p-2 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 bg-gray-800 text-white p-2 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          &#8594;
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
