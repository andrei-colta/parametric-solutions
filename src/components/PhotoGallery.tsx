"use client";

import React, { useEffect, useState } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { Image } from '@/service/file.service';

export interface PhotoGalleryProps {
  galleryID: string;
  // path: string;
  images: Image[];
  // width: number;
  // height: number
}

const WIDTH = '400px';
const HEIGHT = '400px';

export default function PhotoGallery({ galleryID, images }: PhotoGalleryProps) {
  const [currentGroup, setCurrentGroup] = useState(1);
  const [groupedImages, setGroupedImages] = useState<Image[]>(images.slice(0, 4));
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newGroup = (currentGroup + 1) % Math.ceil(images.length / 4);
  
      // ✅ Step 1: Start fade-out
      setIsFading(true);
  
      setTimeout(() => {
        // ✅ Step 2: Change images after fade-out completes
        setGroupedImages(images.slice(newGroup * 4, newGroup * 4 + 4));
  
        setTimeout(() => {
          // ✅ Step 3: Fade-in the new images
          setIsFading(false);
          setCurrentGroup(newGroup);
        }, 200); // Adjust fade-in timing
      }, 1000); // Adjust fade-out timing
    }, 5000); // ✅ Keep the 5s delay before transitioning
  
    return () => clearTimeout(timeout);
  }, [currentGroup]);
  

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      spacing: 0.5
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      (lightbox as unknown) = null;
    };
  }, []);

  return (
    <div className={`pswp-gallery grid grid-cols-2 gap-2 transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`} id={galleryID}>
      {groupedImages.length && groupedImages.map((image, index) => (
        <a
          href={image.url}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image.img.src} alt="" style={{ maxWidth: WIDTH, maxHeight: HEIGHT }}/>
        </a>
      ))}
    </div>
  );
}
