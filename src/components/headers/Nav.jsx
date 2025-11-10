
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX, HiArrowNarrowRight } from 'react-icons/hi';
import { BiLogoJoomla } from "react-icons/bi";
import LongBtn from "../buttons/NavBtn/LongBtn";
import ShortBtn from "../buttons/NavBtn/ShortBtn";
import { motion, AnimatePresence } from "framer-motion";








const navLinks = [
  { name: 'Process', href: '/process', hasBlackBg: true }, // The first link has the darker background in Image 1
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Plans', href: '/plans' },
  { name: 'Contact', href: '/contact' },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 1. SCROLL EFFECT LOGIC
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 700; // Check if scroll is past 200px
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Base classes for the main container
  const baseClasses = 'fixed left-0 w-full z-50 transition-all duration-700 ease-in-out';

  // Dynamic classes based on scroll state
  const navbarClasses = scrolled
    ? '' // Image 2 style: transparent background with blur (optional: you might need a wrapper for the dark background below)
    : 'transition-all duration-700'; // Image 1 style: full black background

  // Dynamic classes for the inner, rounded container (Image 2 style)
  const innerContainerClasses = scrolled
    ? 'max-w-[700px] mx-auto md:rounded-xl rounded-[0] px-4 py-2 transition-all duration-500 bg-black shadow-xl md:bg-transparent bg-black  backdrop-blur-[7px] '  // Boxed, rounded, semi-transparent black
    : 'max-w-[1200px] mx-auto transition-all duration-700 md:rounded-xl rounded-[0] py-2 px-8 md:bg-transparent bg-black shadow-xl backdrop-blur-[7px] '; // Full width, no padding for the wrapper itself (Image 1)

  // Classes for the main link container
  const linkContainerClasses = scrolled
    ? 'space-x-8'
    : 'space-x-12';


  // The Logo component (replace with your actual image or SVG)
  const Logo = () => (
    <div className="flex items-center text-white cursor-pointer select-none">
      {/* Assuming an SVG or text logo */}
      <span className="text-2xl font-bold md:block hidden">AAYUSOFTECH</span>
      <span className="text-2xl font-bold md:hidden block"><BiLogoJoomla /></span>

    </div>
  );

  // The main CTA Button
  const CtaButton = ({ text, style }) => (
    <Link href="/contact" className='transition-all duration-300'>
      {/* <span className={`flex items-center justify-center h-12 px-[14px] rounded-xl font-medium text-sm transition-all duration-300 ${style}`}>
         {text} <MdArrowOutward className='ml-2 text-[22px]'/>  
        <div className={styles.text}>{scrolled ? '' : 'Download' } <MdArrowOutward className='ml-2 text-[22px]'/></div>
        <span className={styles.icon}>{scrolled ? '' : 'Download'}<MdArrowOutward className='ml-2 text-[22px]'/></span>
      </span> */}

      {/* {
        scrolled ? <ShortBtn></ShortBtn> : <LongBtn text={"Get In Touch"}></LongBtn>
      } */}

<AnimatePresence mode="wait">
  {scrolled ? (
    <motion.div
      key="short"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <ShortBtn />
    </motion.div>
  ) : (
    <motion.div
      key="long"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <LongBtn text="Get In Touch" />
    </motion.div>
  )}
</AnimatePresence>

    </Link>
  );

  return (
    <nav className={`${baseClasses} top-[0px] md:top-[20px] ${navbarClasses}`}>
      <div className={innerContainerClasses + "md:border md:border-[rgba(64,64,64,0.34)]"}>
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/">{scrolled ? <Logo /> : <Logo />}</Link> 

          {/* Desktop Links */}
          <div className={`hidden md:flex items-center ${linkContainerClasses} text-white`}>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <div
                  className={`text-[16px hover:text-indigo-400 transition duration-300 
                  `}
                >
                  {link.name}
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <CtaButton 
              text={scrolled ? '' : 'Get In Touch '} // Only text for the second state
              style={scrolled ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white h-12 p-0'} // Style based on scroll state
            />

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden cursor-pointer text-white text-3xl z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* 2. MOBILE MENU DROPDOWN (Hamburger) */}
      <div
        className={`fixed top-0 left-0 z-[-1] w-full h-screen bg-black backdrop-blur-lg transform transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col justify-center items-center space-y-8`}
      >
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href}>
            <div
              className="text-white text-4xl font-bold hover:text-indigo-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </div>
          </Link>
        ))}
        <div className="pt-4">
          <CtaButton 
            text="Get in touch" 
            style="bg-indigo-600 hover:bg-indigo-700 text-white text-xl px-8 py-4"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;