"use client";

import PhotoGallery from "@/components/PhotoGallery";
import { fetchFilesFromFolder, Image } from "@/service/file.service";
import { useEffect, useState } from "react";

// const PhotoGallery = dynamic(() => import("@/components/PhotoGallery"), { ssr: false });

export default function U3dPrinting() {
  const [images, setImages] = useState<Image[]>([]);
  
  useEffect(() => {
    async function loadImages() {
      const files = await fetchFilesFromFolder(`images/3d-prints`); // Adjust to your Firebase folder
      console.log("Fetched Images:", files); // ✅ Confirm fetched images in console
      files.sort((a, b) => a.width - b.width)
      setImages(files);
    }
  
    loadImages();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center text-[#F2E9E4] min-h-[calc(100vh-6rem)]'>
      <h1 className='text-4xl font-afacad'>3D printing Page</h1>

      <div className="flex flex-col lg:flex-row justify-between w-full py-12 px-6 h-[80vh]">
        {/* Left: Image Gallery */}
        <div className="w-[50%] pr-12 flex justify-end">
          {images.length && <PhotoGallery galleryID="pula" images={images}></PhotoGallery>}
        </div>

        {/* Right: Description */}
        <div className="max-w-[50%]">
          <h1 className="text-4xl font-afacad text-[#F2E9E4] mb-6">About Our Craft</h1>
          <p className="text-lg text-gray-200 mb-4">
            At Parametric Solutions, we specialize in crafting unique, high-quality products through 3D printing, woodworking, and laser engraving.
          </p>
          <p className="text-lg text-gray-200 mb-4">
            Every piece is meticulously designed with attention to detail, combining modern technology with traditional craftsmanship.
          </p>
          <p className="text-lg text-gray-200">
            Whether you are looking for custom-made furniture, intricate engravings, or innovative 3D-printed solutions, we bring your ideas to life.
          </p>
        </div>
      </div>
    </div>
  );
}
