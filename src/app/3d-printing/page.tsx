"use client";

import ImageSlider from "@/components/ImageSlider";
import ResponsiveText from "@/components/ResponsiveText";
import SelectionBox from "@/components/SelectionBox";

export default function U3dPrinting() {

  return (
    <SelectionBox>
      <div className="flex lg:flex-row px-4 md:px-8 gap-8 md:gap-16 w-full h-full">
        <div className="w-full lg:w-1/2 flex">
          <ImageSlider paths={["images/3d-prints"]}/>
        </div>

        <ResponsiveText page="3d-printing"/>
      </div>
    </SelectionBox>
  );
}
