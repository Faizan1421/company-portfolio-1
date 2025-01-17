

const BackgroundEffects = () => {
  return (
    <div className="absolute z-[-1] ">
    <div className=" top-0 left-0 ~w-[200px]/[300px] ~h-[200px]/[300px] bg-gradient-to-r from-primary-600 via-pink-600 to-red-600 opacity-[0.17] blur-3xl  "></div>
    {/* <div className=" top-[-100px] right-[-100px]  ~w-[100px]/[200px] ~h-[100px]/[200px] bg-gradient-to-r from-primary-600 via-pink-600 to-red-600 opacity-[0.17] blur-3xl  "></div> */}
    <div className=" bottom-[-10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-to-r from-primary-600 via-pink-600 to-red-600 opacity-[0.17] blur-3xl hidden md:block "></div>
    </div>
  )
}

export default BackgroundEffects