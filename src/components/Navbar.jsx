"use client";

import { navMenu } from "@/constants/constants";
import Link from "next/link";
import{motion} from "framer-motion"
const Navbar = () => {
  return (
    <div className="flex    flex-col-reverse gap-8 md:flex-row justify-between items-center ">
      {/* menu items */}
      <ul className="flex w-full font-bold md:w-[50%] items-center justify-center gap-8 md:justify-normal md:gap-4  lg:gap-6 xl:gap-10  ">
        {navMenu.map((item, index) => (
          <li
          
          key={index}>
            <Link href={item.url}>
            {item.title}
            </Link>
            
            </li>
        ))}
      </ul>
      <div className="flex items-center gap-4 w-full  md:w-[50%] justify-between">
 {/* Logo */}
 <h1 className="text-primary-600 text-lg font-bold  md:-translate-x-16">Cognitify</h1>
      {/* Auth Buttons */}
      <div className="flex gap-4  ">
        <motion.button 
        whileHover={{
          scale: 1.1,
          backgroundColor: "primary-600",
          boxShadow: "0px 10px 15px rgba(37, 99, 235, 0.3)",
        }}
        whileTap={{
          scale: 0.95,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="border-2 border-primary-600 text-white px-4 py-2 rounded-xl font-semibold">
         Sign In
        </motion.button>
        <motion.button 
        whileHover={{
          scale: 1.1,
          backgroundColor: "primary-600",
          boxShadow: "0px 10px 15px rgba(37, 99, 235, 0.3)",
        }}
        whileTap={{
          scale: 0.95,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="bg-primary-600 text-white px-4 py-2 rounded-xl  font-semibold">
          Register Here
        </motion.button>
      </div>
      </div>
     
    </div>
  );
};

export default Navbar;
