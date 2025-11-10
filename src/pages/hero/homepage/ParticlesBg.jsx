// src/components/hero/ParticlesBg.jsx
"use client"; // REQUIRED: This must be a client component

import { useCallback } from "react";
// Import the main component and the slim engine
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // or loadFull for more features

export default function ParticlesBackground() {
  // 1. Create a function to initialize the engine (optimization)
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // 2. Define the exact particle configuration
  const options = {
    // This is the configuration from your original code, adapted for tsParticles
    particles: {
      number: { value: 160, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        // ... (other shape properties)
      },
      opacity: {
        value: 1,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
      },
      line_linked: {
        enable: false, // You disabled this, which is correct for scattered dots
        // ... (other line properties)
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        // ... (other move properties)
      },
    },
    interactivity: {
      // ... (your interactivity configuration)
      detectsOn: "canvas", // Use detectsOn instead of detect_on
    },
    // The background color should usually be applied via CSS to the parent/wrapper element
    // background: {
    //   color: { value: "#000000" }, // This is an option, but CSS is often cleaner
    // },
    // Other top-level options...
    retina_detect: true,
    fullScreen: { enable: false }, // Important: Assuming you want to size it within a container, not the full viewport
  };

  // 3. Render the Particles component
  return (
    <div 
        style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            zIndex: 0, // Ensure it's behind your hero content
            backgroundColor: '#000000' // Your design's background color
        }}
    >
      <Particles
        id="tsparticles" className="h-full"// Can be any ID
        init={particlesInit}
        options={options}
      />
    </div>
  );
}