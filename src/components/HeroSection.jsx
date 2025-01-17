import { Percent, Plus , MoveRight} from "lucide-react";
import Button from "./Button";
import BackgroundEffects from "./BackgroundEffects";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div  className="w-auto gap-10   flex flex-col md:flex-row items-center justify-between 2xl:justify-center relative">
      {/* background effect */}
      <BackgroundEffects/>
      {/* Insights section */}
      <div className="flex  gap-4 items-center justify-between   w-full">
        <div className="flex    flex-col gap-10 ">
          <div className="flex flex-col gap-2">
            <h1 className="~text-[22px]/[36px] flex items-center gap-2">
              250
              <span className="text-primary-600">
                <Plus />
              </span>
            </h1>
            <p className="text-sm">Success Project</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="~text-[22px]/[36px] flex items-center gap-2">
              160
              <span className="text-primary-600">
                <Plus />
              </span>
            </h1>
            <p className="text-sm">Recent Clients</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="~text-[22px]/[36px] flex items-center gap-2">
              99
              <span className="text-primary-600">
                <Percent />
              </span>
            </h1>
            <p className="text-sm">Happy Clients</p>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="flex justify-center  relative ">
          <div className="~h-[250px]/[488px] ~w-[250px]/[499px] bg-white">
          <Image priority  src="https://placehold.co/400" alt="hero-img" width={400} height={400} className="w-full h-full object-cover"/> 
          </div>
          <BackgroundEffects/>
        </div>
      </div>
      {/* Hero Content Section */}
      <div className="flex flex-col justify-start items-start ml-0  gap-8 w-full ">
        <div className="flex justify-center items-center w-fit">
          {/* Opacity-button */}
          <Button
            text="Innovation"
            className="~text-[12px]/[16px] uppercase font-semibold ~py-[4px]/[6px]  bg-opacity-30"
          />
        </div>

        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-[22px] lg:text-[40px] xl:text-[64px] font-semibold text-left  leading-tight">
            Where Tech <br /> Meets Creativity.
          </h1>
          <p className="text-[16px] text-base-400 md:max-w-72 text-left leading-tight">
            Our platform breaks down the complexities, making it easy for anyone
            to buy, sell, and exchange crypto efficiently.
          </p>

          {/* Filled Button */}
          <div className="flex justify-start gap-4 items-center w-fit ">
            <Button text="Lets Get Connected" className="~text-[12px]/[16px]" />
            <Button text={<MoveRight className="w-6 h-6 "/>} filled className="~text-[12px]/[16px] rounded-full p-2 flex items-center justify-center bg-opacity-30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
