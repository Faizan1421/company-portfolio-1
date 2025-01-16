import { Percent, Plus } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-auto gap-10   flex flex-col md:flex-row items-center justify-between 2xl:justify-center relative">
        {/* background effect */}
        <div className="absolute z-[-1] top-0 left-0 w-[300px] h-[300px] bg-gradient-to-r from-primary-600 via-pink-600 to-red-600 opacity-[0.17] blur-3xl  "></div>
        <div className="absolute z-[-1] bottom-[-10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-to-r from-primary-600 via-pink-600 to-red-600 opacity-[0.17] blur-3xl hidden md:block "></div>
      {/* Insights section */}
      <div className="flex  gap-4 items-center justify-between   w-full">
      <div className="flex    flex-col gap-10 ">
        <div className="flex flex-col gap-2">
          <h1 className="~text-[22px]/[36px] flex items-center gap-2">
            250 <span className="text-primary-600"><Plus /></span>
          </h1>
          <p className="text-sm">Success Project</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="~text-[22px]/[36px] flex items-center gap-2">
            160 <span className="text-primary-600"><Plus /></span>
          </h1>
          <p className="text-sm">Recent Clients</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="~text-[22px]/[36px] flex items-center gap-2">
            99 <span className="text-primary-600"><Percent /></span>
          </h1>
          <p className="text-sm">Happy Clients</p>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="flex justify-center   ">
    
        <div className="~h-[250px]/[400px] ~w-[250px]/[400px] bg-white"></div>
      </div>
      </div>
      {/* Hero Content Section */}
      <div className="flex flex-col justify-start xl:ml-20   gap-8 w-full">
  <div className="flex justify-center items-center bg-primary-600 bg-opacity-30 px-[20px] py-[5px] rounded-full w-fit">
    {/* Opacity-button */}
    <button className="~text-[12px]/[16px] uppercase text-primary-600 font-semibold w-fit">
      Innovation
    </button>
  </div>

  <div className="flex flex-col justify-center gap-6">
    <h1 className="~text-[22px]/[32px] lg:text-[40px] 2xl:text-[50px] font-semibold text-left">
      Where Tech <br /> Meets Creativity.
    </h1>
    <p className="text-[16px] text-base-400 md:max-w-72 text-left">
      Our platform breaks down the complexities, making it easy for anyone to buy, sell, and exchange crypto efficiently.
    </p>

    {/* Filled Button */}
    <div className="flex justify-start items-center bg-primary-600 px-[20px] py-[5px] rounded-full w-fit">
      <button className="~text-[12px]/[16px] text-light font-semibold w-fit">
        Lets Get Connected
      </button>
    </div>
  </div>
</div>


    </div>
  );
};

export default Hero;
