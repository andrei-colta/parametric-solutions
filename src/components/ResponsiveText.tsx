import { Theme } from "@/app/shared/theme";
import { useState, useEffect } from "react";

const paragraphs = {
  homepage: [
    "With many years of experience in graphic design and working with movie producers, we are confident we can bring your project to reality.",
    "Our large array of tools and expertise with 3D printing, metal & wood working, laser cutting & engraving, coupled with our outside-the-box thinking and problem solving ensures that no challenge is above us.",
    "No need to take our word for it: browse through some of our proudest works, or delve deeper into each of our specializations. It matters not if we’ve done it before, we eagerly await every new challenge and always deliver in the end.",
    "Reach out to us over the phone, email or at our location and let us find the solution that works best for you; we’ll take care of the rest.",
  ],
  '3d-printing': [
    "With years of 3D printing experience, we ensure high-quality, precision-crafted parts for any application. Whether you need prototypes, artistic models, or industrial components, we deliver accurate, reliable results.",
    "We offer resin and FDM printing, handling complex designs, large-scale parts, and multi-material prints. With advanced techniques and multiple printers, we can bring any idea to life.",
    "Our team specializes in 3D modeling and design optimization, ensuring flawless prints. From functional prototypes to engineering-grade parts, we help refine models and select the best materials.",
    "We provide a wide range of filaments, resins, and composites, including carbon fiber and flexible TPU. Our post-processing options, like plating and painting, ensure both function and aesthetics."
  ],
  woodworking: [
    "Our woodworking services provide high-quality cuts and shaping using a large CNC machine, saws, and a variety of essential tools. Whether you need precise panel cuts or simple custom pieces, we ensure clean and accurate results.",

    "We work with different types of wood, from softwood to hardwood panels, offering basic shaping, trimming, and assembly. Our tools allow us to handle straightforward woodworking tasks efficiently and reliably.",

    "For finishing, we provide painting and staining options to enhance the look and durability of your wood projects. Whether it's a protective coating or a custom color, we can give your pieces a polished appearance.",

    "In addition to cutting and shaping, we offer simple engraving services for decorative or functional designs. Whether you need logos, text, or patterns etched into wood, our tools allow for clear and precise results."
  ],
  laser: [
    "Our fiber laser allows for precise engraving on metals, including stainless steel, aluminum, and brass. Whether for custom markings, serial numbers, or decorative engravings, we ensure sharp and permanent results.",

    "With our CO2 laser, we can engrave and cut a variety of materials such as wood, acrylic, leather, and glass. This enables us to create personalized designs, signage, and intricate patterns with clean, accurate cuts.",

    "Both laser types support different engraving depths and finishes, allowing for detailed etching or deep marks depending on the material. We adjust settings carefully to achieve the best results for each project.",

    "Our laser services are ideal for branding, personalization, and custom creations. Whether you need a unique gift, an engraved logo, or precise material cutting, we provide high-quality and repeatable results."
  ],
};

export type PageName = 'homepage' | '3d-printing' | 'woodworking' | 'laser';

const titles: { [key in PageName]: string } = {
  homepage: "We will build anything",
  '3d-printing': "Precision & Expertise in 3D Printing",
  woodworking: 'Cutting, Shaping & Finishing',
  laser: 'Laser Engraving & Cutting'
}

export default function ResponsiveText({ pageName }: { pageName: PageName }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Start fade out

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % paragraphs[pageName].length);
        setIsFading(false); // Start fade in
      }, 800); // Transition duration
    }, 10000); // 10-second interval

    return () => clearInterval(interval);
  }, []);

  const paragraphClasses = 'text-[clamp(0.75rem,2vw,2rem)] font-light text-left transition-opacity duration-[800ms] ease-in-out ';

  return (
    <div className={`w-full lg:w-1/2 flex-1 flex flex-col container font-afacad px-4 leading-normal relative gap-[clamp(0.75rem,4.5vh,5rem)] text-[${Theme.LIGHT}]`}>
      <p className="text-[clamp(1.5rem,3vw,2.5rem)] text-left">
        {titles[pageName]}
      </p>

      <p className={paragraphClasses} style={{ opacity: isFading ? 0 : 1 }}>
        {paragraphs[pageName][currentIndex]}
      </p>
      <p className={paragraphClasses} style={{ opacity: isFading ? 0 : 1 }}>
        {paragraphs[pageName][(currentIndex + 1) % paragraphs[pageName].length]}
      </p>
    </div>
  );
}
