"use client";

import React from "react";
import { motion } from "framer-motion";
import { rgbaColor } from "@/constants/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Button = ({ text="Submit", outline = false, filled = false, className = "", url = "" }) => {
  // Use a Link or a regular button based on whether `url` is provided
  const isLink = url && url.trim() !== "";

  const buttonContent = (
    <motion.span
      whileHover={{
        scale: 1.1,
        backgroundColor: filled ? "primary-700" : "primary-600",
        boxShadow: `0px 10px 15px ${rgbaColor}`,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={cn(
        "px-4 py-2 rounded-full text-white font-semibold inline-block",
        {
          "bg-primary-600": filled,
          "border-2 border-primary-600 text-primary-600": outline,
          "bg-primary-500": !outline && !filled,
        },
        className
      )}
    >
      {text}
    </motion.span>
  );

  return isLink ? (
    <Link href={`/${url}`} className="inline-block">
      {buttonContent}
    </Link>
  ) : (
    <button className="inline-block">{buttonContent}</button>
  );
};

export default Button;
