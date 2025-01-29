export default function Home() {
  return (
    <div className='flex items-center justify-center text-[#F2E9E4] min-h-[calc(100vh-6rem)] w-screen p-12'>
      <div className="border-4 border-dashed border-[#C9ADA7] p-8 h-[calc(100vh-14rem)] w-[calc(100vw-8rem)] text-center bg-[rgba(217,217,217,0.07)] relative">
        <h1 className="text-4xl font-afacad text-[#F2E9E4]">Welcome to Parametric Solutions</h1>
        <p className="mt-4 text-lg text-[#F2E9E4]">We craft custom designs with precision.</p>

        {/* Selection Boxes */}
        <div className="absolute top-[-8px] left-[-8px] w-3 h-3 bg-[#D9D9D9] rounded-[4px]"></div>
        <div className="absolute top-[-8px] right-[-8px] w-3 h-3 bg-[#D9D9D9] rounded-[4px]"></div>
        <div className="absolute bottom-[-8px] left-[-8px] w-3 h-3 bg-[#D9D9D9] rounded-[4px]"></div>
        <div className="absolute bottom-[-8px] right-[-8px] w-3 h-3 bg-[#D9D9D9] rounded-[4px]"></div>
      </div>
    </div>
  );
}
