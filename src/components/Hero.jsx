import { Percent, Plus } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-auto gap-10   2xl:gap-40 h-[611px] flex flex-col md:flex-row items-center md:justify-between xl:justify-center 2xl:justify-around ">
      {/* Insights section */}
      <div className="flex sm:hidden md:flex justify-between md:justify-normal md:flex-col gap-10">
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
      <div className="flex justify-center sm:justify-between md:justify-center items-center w-full md:w-auto ">
      <div className="hidden sm:flex md:hidden justify-normal flex-col gap-10">
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
        <div className="~h-[350px]/[488px] ~w-[350px]/[488px] bg-white"></div>
      </div>

      {/* Hero Content Section */}
      <div className="flex flex-col justify-center gap-8">
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
