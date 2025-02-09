export default function SelectionBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-screen p-6 md:p-8">
      {/* Animated Selection Box */}
      <div
        className="border-4 flex-1 border-dashed border-[#D9D9D9] bg-[rgba(217,217,217,0.07)] opacity-0 animate-grow-box"
      >
        {/* Content Wrapper - Delayed Fade In */}
        <div className="opacity-0 animate-fade-in delay-[0.5s] h-full">
          {children}
        </div>

        {/* Selection Box Corners */}
        <div className="absolute top-[-8px] left-[-8px] w-3 h-3 bg-[#d9d9d9] rounded-[4px]"></div>
        <div className="absolute top-[-8px] right-[-8px] w-3 h-3 bg-[#d9d9d9] rounded-[4px]"></div>
        <div className="absolute bottom-[-8px] left-[-8px] w-3 h-3 bg-[#d9d9d9] rounded-[4px]"></div>
        <div className="absolute bottom-[-8px] right-[-8px] w-3 h-3 bg-[#d9d9d9] rounded-[4px]"></div>
      </div>
    </div>
  );
}
