import { Theme } from "@/app/shared/theme";
import { useState, useEffect } from "react";

const paragraphs = [
  "With many years of experience in graphic design and working with movie producers, we are confident we can bring your project to reality.",
  "Our large array of tools and expertise with 3D printing, metal & wood working, laser cutting & engraving, coupled with our outside-the-box thinking and problem solving ensures that no challenge is above us.",
  "No need to take our word for it: browse through some of our proudest works, or delve deeper into each of our specializations. It matters not if we’ve done it before, we eagerly await every new challenge and always deliver in the end.",
  "Reach out to us over the phone, email or at our location and let us find the solution that works best for you; we’ll take care of the rest.",
];

export default function ResponsiveText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Start fade out

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % paragraphs.length);
        setIsFading(false); // Start fade in
      }, 800); // Transition duration
    }, 10000); // 10-second interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-full lg:w-1/2 flex-1 flex flex-col font-afacad leading-normal relative h-[calc(100vh-14rem)] justify-between text-[${Theme.LIGHT}] py-10`}>
      <p className="text-[clamp(1.5rem,4vw,2.5rem)] text-left">
        We will build <strong>anything</strong>
      </p>

      <p className="text-[clamp(1.25rem,2.25vw,1.5rem)] text-left transition-opacity duration-[800ms] ease-in-out" style={{ opacity: isFading ? 0 : 1 }}>
        {paragraphs[currentIndex]}
      </p>
      <p className="text-[clamp(1.25rem,2.25vw,1.5rem)] text-left transition-opacity duration-[800ms] ease-in-out" style={{ opacity: isFading ? 0 : 1 }}>
        {paragraphs[(currentIndex + 1) % paragraphs.length]}
      </p>
    </div>
  );
}
