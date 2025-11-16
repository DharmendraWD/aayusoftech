import React from "react";
import PortfolioCard from "./PortfoliosCard";
import BorderedHeading from "@/components/heading/BorderedHeading";
import AnimatedBtn1 from "@/components/buttons/AnimatedBtn1";

const Portfolio = () => {
  return (
    <div className=" mx-auto px-6 lg:px-8 py-12 bg-black">
      <div className="flex flex-col justify-center items-center gap-y-6 text-white">
        {/* Animated Button */}
{/* <AnimatedBtn1 text={"Portfolio"}></AnimatedBtn1> */}

        <BorderedHeading text={"Portfolio"}></BorderedHeading>

        {/* Animated Heading & Description */}
        <h1 className="text-4xl font-bold text-center text-white animate-text">
          Showcasing Noloops’ Pioneering Works
        </h1>
        <p className="text-base text-center max-w-2xl mx-auto opacity-80 transform transition duration-500 hover:opacity-100">
          Showcasing innovation outside the cycle — from web and app development to design and marketing.
        </p>
      </div>

      {/* Portfolio Card with animation */}
      <div className="mt-10 flex justify-center items-center animate__animated animate__fadeIn">
        <PortfolioCard />
      </div>
    </div>
  );
};

export default Portfolio;
