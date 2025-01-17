"use client";

import { navMenu, rgbaColor } from "@/constants/constants";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "./Button";
const Navbar = () => {
  return (
    <div 
    
    className="flex    flex-col-reverse gap-8 md:flex-row justify-between items-center ">
      {/* menu items */}
      <ul className="flex w-full font-bold md:w-[50%] items-center justify-center gap-8 md:justify-normal md:gap-4  lg:gap-6 xl:gap-10  ">
        {navMenu.map((item, index) => (
          <motion.li
            key={index}
            className="relative group"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Link
            
              href={item.url}
              className="text-light font-medium text-lg hover:text-primary-600 transition-colors duration-300"
            >
              {item.title}
            </Link>

            {/* Underline Animation */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              layoutId={`underline-${index}`} // Optional: For smooth transitions between links
            />
          </motion.li>
        ))}
      </ul>
      <div className="flex items-center gap-4 w-full  md:w-[50%] justify-between">
        {/* Logo */}
        <h1 className="text-primary-600 text-lg font-bold  md:-translate-x-16 cursor-pointer hover:text-primary-500  hover:scale-105">
          Cognitify
        </h1>
        {/* Auth Buttons */}
        <div className="flex gap-4  ">
          <Button text="Sign In" outline className="rounded-xl" />
          <Button text="Register Here" filled className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
