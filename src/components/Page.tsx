import ImageSlider from "./ImageSlider";
import ResponsiveText, { PageName } from "./ResponsiveText";
import SelectionBox from "./SelectionBox";

export function Page({ paths, pageName }: { paths: string[], pageName: PageName }) {
  return (
    <SelectionBox>
      <div className="flex flex-col lg:flex-row lg:pr-8 gap-8 md:gap-16 w-full h-full items-center">
        <ImageSlider paths={paths} />

        <ResponsiveText pageName={pageName} />
      </div>
    </SelectionBox>
  )
}