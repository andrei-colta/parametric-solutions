'use client';

import { fetchFilesFromFolder, Image } from "@/service/file.service";
import { useEffect, useState } from "react";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<Image[]>([]);
  

  function prevSlide() {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  function nextSlide() {
    setCurrentIndex((prevIndex) => (prevIndex > images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
      async function loadImages() {
        const files = await fetchFilesFromFolder(`images/builds`); // Adjust to your Firebase folder
        // const files2 = await fetchFilesFromFolder(`images/metal`); // Adjust to your Firebase folder
        // const files3 = await fetchFilesFromFolder(`images/woodworking`); // Adjust to your Firebase folder
        setImages([...files]);
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

  return (
    <div className="relative flex flex-1 justify-center items-center group">
      {/* Image Container */}
      <div className={`relative w-[45vw] h-[65vh] flex items-center justify-center overflow-hidden bg-[rgba(201,173,167,0.1)] shadow`}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.name}
            className={`absolute rounded max-w-[45vw] max-h-[65vh] object-contain mx-2 transition-opacity duration-500 ease-in-out border-[1px] border-[rgba(201,173,167,0.1)] ${index === currentIndex ? "opacity-85 z-10" : "opacity-0 pointer-events-none"}`}
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
      <div className="absolute top-full mt-[-2rem] left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
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
