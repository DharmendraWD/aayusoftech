"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { IoMdArrowRoundUp } from "react-icons/io";

export default function Schedule() {



  return (
    <div
    
      className="relative flex items-center justify-center py-20 md:py-24  text-white overflow-hidden"
    >
      {/* Gradient Glow (under content, non-interactive) */}
 
        <motion.div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"

        >
          <div
            className="w-[240px] md:w-[320px] h-[240px] md:h-[320px] rounded-full blur-[90px]"
            style={{ background: "radial-gradient(circle, #512FEB, #512FEB)" }}
          />
        </motion.div>
   

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl w-full">
     
          <motion.div
            className="inline-block bg-zinc-900 text-xs md:text-sm px-3 py-1 rounded-full mb-4"
      
          >
            Noloops
          </motion.div>
        

     
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]"
      
          >
            Let’s talk about <br />
            <span className="text-white">your next big move</span>
          </motion.h1>
   

      
          <motion.p
            className="mt-4 text-zinc-400 text-base md:text-lg lg:text-xl max-w-xl mx-auto"
          >
            Hop on a call with us to see how our services can accelerate your growth.
          </motion.p>
        
    
          <motion.div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm md:text-base font-semibold bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-[#0099FF] focus:ring-offset-2 focus:ring-offset-[#0D0D0D] transition shadow-md"
            >
              Schedule a quick call
              <IoMdArrowRoundUp className="w-4 h-4 md:w-5 md:h-5"/>
            </a>
          </motion.div>
      

          <motion.p
            className="mt-3 text-zinc-500 text-xs md:text-sm"
          >
            <span className="text-gray-200">It’s</span> Free
          </motion.p>
    
      </div>
    </div>
  );
}
