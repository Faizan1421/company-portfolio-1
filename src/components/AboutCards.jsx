"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { HeroBelowCardData } from "@/constants/constants";

export function AboutCards() {
  return (
    (<div
      className="h-[content]  rounded-md flex flex-col antialiased   items-center justify-center relative overflow-hidden ">
      <InfiniteMovingCards items={HeroBelowCardData} direction="right" speed="slow" />
    </div>)
  );
}

