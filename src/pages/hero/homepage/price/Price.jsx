import React from "react";
import PricingCard from "./PricingCard";
import BorderedHeading from "@/components/heading/BorderedHeading";

const Pricing = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white px-4">
      {/* Animated Button */}
   <BorderedHeading text={"Plans"}></BorderedHeading>

      {/* Animated Heading & Description */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white animate-text mt-6 max-w-4xl mx-auto">
        Flexible plans for growth
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-center max-w-3xl mx-auto opacity-80 transform transition duration-500 hover:opacity-100 mt-4">
        Transparent pricing designed to fit your requirements.
      </p>

      {/* Pricing Cards */}
      <PricingCard />
    </div>
  );
};

export default Pricing;
