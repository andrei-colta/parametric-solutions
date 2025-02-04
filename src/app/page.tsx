'use client';

import ImageSlider from "@/components/ImageSlider";
import { fetchFilesFromFolder, Image } from "@/service/file.service";
import { useState, useEffect } from "react";
import { Theme } from "./shared/theme";

export default function Home() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    async function loadImages() {
      const files = await fetchFilesFromFolder(`images/builds`); // Adjust to your Firebase folder
      setImages(files);
    }

    loadImages();
  }, []);

  return (
    <div className={`flex items-center justify-center text-[${Theme.LIGHT}] min-h-[calc(100vh-6rem)] w-screen p-12`}>
      <div className={`flex justify-center border-4 border-dashed border-[${Theme.PRIMARY_LIGHT}] p-8 h-[calc(100vh-14rem)] w-[calc(100vw-8rem)] text-center bg-[rgba(217,217,217,0.07)] relative`}>
        <div className="flex items-center p-8">
          <ImageSlider images={images}></ImageSlider>
          <div className="flex flex-col font-afacad text-2xl">
            <p className="text-4xl mb-16 text-left">We will build <strong>anything</strong></p>
            <p className="mb-16 text-left">
              With many years of experience in graphic design and working with movie producers, we are confident we can bring your project to reality.
            </p>

            <p className="mb-16 text-left">
              Our large array of tools and expertise with <strong>3D printing</strong>, <strong>metal</strong> & <strong>wood</strong> working, <strong>laser</strong> cutting & engraving, coupled with our outside-the-box thinking and problem solving ensures that no challenge is above us.
            </p>

            <p className="mb-16 text-left">
              No need to take our word for it: browse through some of our proudest works, or delve deeper into each of our specializations. It matters not if we’ve done it before, we eagerly await every new challenge and <strong>always</strong> deliver in the end.
            </p>

            <p className="mb-16 text-left">
              Reach out to us over the phone, email or at our location and let us find the solution that works best for you; we’ll take care of the rest.
            </p>
          </div>
        </div>

        {/* Selection Boxes */}
        <div className={`absolute top-[-8px] left-[-8px] w-3 h-3 bg-[${Theme.WHITE}] rounded-[4px]`}></div>
        <div className={`absolute top-[-8px] right-[-8px] w-3 h-3 bg-[${Theme.WHITE}] rounded-[4px]`}></div>
        <div className={`absolute bottom-[-8px] left-[-8px] w-3 h-3 bg-[${Theme.WHITE}] rounded-[4px]`}></div>
        <div className={`absolute bottom-[-8px] right-[-8px] w-3 h-3 bg-[${Theme.WHITE}] rounded-[4px]`}></div>
      </div>
    </div>
  );
}
