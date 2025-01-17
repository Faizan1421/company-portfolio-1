import { cn } from "@/lib/utils"


const BackgroundEffects = ({className=""}) => {
  return (
   
    <div className="absolute z-[-1] inset-0 overflow-visible">
    {/* Top-left gradient */}
    <div
      className={cn(
        "absolute -top-[100px] -left-[100px] w-[100px] h-[100px] md:w-[200px] md:h-[200px] bg-gradient-to-r from-primary-600 via-pink-600 to-red-600 opacity-[0.1] blur-3xl"
      )}
    ></div>

    {/* Bottom-center gradient */}
    <div
      className={cn(
        "absolute bottom-[150px] left-1/2 transform -translate-x-1/4 w-[100px] h-[100px] md:w-[200px] md:h-[200px] bg-gradient-to-r from-primary-600 via-pink-600 to-blue-600 opacity-[0.3] blur-3xl"
      )}
    ></div>
    </div>
  
  )
}

export default BackgroundEffects