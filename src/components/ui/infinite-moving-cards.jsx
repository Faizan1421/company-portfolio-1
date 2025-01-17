"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    (<div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4  w-max flex-nowrap ",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl  border border-opacity-50 flex-shrink-0 border-primary-500 px-8 py-6 md:w-[450px]  "
            style={{
              background:
                "bg-primary-600",
            }}

            key={idx}>
              <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-br from-pink-900 to-primary-800 z-[-20] opacity-20 blur-3xl "></div>
           <div className="flex flex-col gap-4 ~h-[200px]/[364px] w-full md:w-[400px]">
            {/* btn title */}
            <div className="flex items-start justify-between  w-full h-[40%] mt-4 ">
              <Button text={item.btnTitle} className="text-primary-600 font-normal  bg-opacity-30" />
            </div>
            {/* content */}
            <div className="flex  justify-between items-center  gap-4 w-full h-[60%] ">
              <div className="w-[50%] h-[50%] flex  items-center ">
              <button className="text-white  p-3 rounded-full bg-primary-600 font-semibold w-[40px] h-[40px] flex justify-center items-center"> 
                <Image src={item.iconUrl} alt="icon" width={40} height={40} />
              </button>
              </div>
              <div className=" h-[50%] flex items-center ">
              <h1 className="~text-[20px]/[32px] max-w-[222px]">{item.title}</h1>

              </div>
            </div>
           </div>
          </li>
        ))}
      </ul>
    </div>)
  );
};
