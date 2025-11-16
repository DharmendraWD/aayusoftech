import React from "react";
// components/HeroSection.jsx
import Link from "next/link";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai"; // For the arrow icon on "Our Services"
import { MdArrowOutward } from "react-icons/md";
import AnimatedBtn1 from "@/components/buttons/AnimatedBtn1";
import BorderedHeading from "@/components/heading/BorderedHeading";

import logoipsum1 from "../../../../public/img/logoipsum1.png";
import logoipsum2 from "../../../../public/img/logoipsum2.png";
import Heading1 from "@/components/heading/Heading1";
import ParticlesBackground from "./ParticlesBg";

const Hero = () => {
  return (
    <div>
      <section className="relative min-h-screen bg-black  text-white flex flex-col items-center justify-center overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <ParticlesBackground></ParticlesBackground>
        <div className="rightHeroImageParent">
          <div className="rightHeroImage"></div>
        </div>
        {/* Content wrapper to center and limit width */}
        <div className="relative z-10 mt-[100px] max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Tagline / Secondary Heading */}

          <BorderedHeading
            text={"Noloops - Innovation outside the cycle."}
          ></BorderedHeading>

          {/* Main Heading */}
          <Heading1 text=" Building the future with next-level digital solutions."></Heading1>
          {/* Description Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl px-2">
            From sleek websites to powerful apps, engaging designs to smart
            marketing — we bring innovation outside the cycle to grow your your
            business.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            {/* Our Services Button */}
            <Link href="/services">
              <AnimatedBtn1
                text="Our Services"
                arrowIconCurve={<MdArrowOutward className="text-[28px]" />}
                arrowIconStraight={
                  <AiOutlineArrowRight className="text-[28px]" />
                }
                width="200px"
                bgColor="#512feb"
              />
            </Link>

            {/* See Plans Button */}
            <Link href="/plans">
              <AnimatedBtn1
                text="See Plans"
                width="200px"
                bgColor="#030303ff"
                borderColor="rgba(99, 98, 98, 0.28)"
              />
            </Link>
          </div>

          {/* Partner/Client Logos */}
          <div className="w-full flex justify-center items-center flex-wrap gap-8 md:gap-16 my-10">
            {/* Replace these with your actual logo images */}
            <div className="relative w-24 h-8 sm:w-28 sm:h-10 opacity-[90] hover:opacity-100 transition-opacity duration-300">
              {/* Example of using Next.js Image component */}
              <Image
                src={logoipsum2}
                alt="Logoipsum 1"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative w-28 h-10 sm:w-32 sm:h-12 opacity-[90] hover:opacity-100 transition-opacity duration-300">
              <Image
                src={logoipsum1}
                alt="Logoipsum 2"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative w-24 h-8 sm:w-32 sm:h-10 opacity-[90]  hover:opacity-100 transition-opacity duration-300">
              <Image
                src={logoipsum2}
                alt="Logoipsum 3"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>{" "}
        {/* End content wrapper */}
        <BorderedHeading text={"Who We Are"}></BorderedHeading>
        <p>knnksa</p>
        <div className="leftHeroImageParent">
          <div className="leftHeroImage"></div>
        </div>
      </section>
      {/* "Who We Are" Separator at the very bottom */}
      <div className="w-full flex flex-col bg-black items-center bg-black justify-center pb-8 z-10">
        <Heading1 text="We are Noloops — helping businesses like yours innovate outside the cycle with cutting-edge web, app, design, and marketing solutions."></Heading1>
      </div>
    </div>
  );
};

export default Hero;
