import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Galaxy from '../components/Galaxy.jsx';
import FluidSmoke from '../components/FluidSmoke.jsx';

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

      useGSAP(() => {

            const earthRotation = gsap.to("#earth", {
                  rotation: "+=360",
                  duration: 300, // Very Slow base speed (5 minutes for one rotation)
                  ease: "none",
                  repeat: -1,
            });
            // Set initial very slow speed
            earthRotation.timeScale(0.1); // Adjust 0.1 for desired default slow speed

            // --- Main Scroll Timeline (controls Rocket and Moon) ---
            const scrollTimeline = gsap.timeline({
                  scrollTrigger: {
                        trigger: "#hero-section",
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                        // markers: true,
                  }
            });

            // Add Rocket and Moon animations to the timeline
            scrollTimeline
                  .to("#rocket", {
                        y: "-150vh",
                        ease: "none",
                  }, '<')
                  .to("#moon", {
                        y: "40vh",
                        ease: "none",
                  }, '<');

            // --- Earth Scroll Speed Control ---
            // Use a separate ScrollTrigger ONLY to adjust the timeScale during scroll
            ScrollTrigger.create({
                  trigger: "#hero-section",
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                  // markers: true, // Optional for debugging
                  onUpdate: (self) => {
                        // Map scroll progress (0 to 1) to timeScale
                        // Base speed = 0.1 (matches initial), Max speed = 20
                        const newTimeScale = gsap.utils.mapRange(0, 1, 0.5, 20)(self.progress);
                        earthRotation.timeScale(newTimeScale);
                  },
                  // Reset to base speed when scroll leaves the trigger area
                  onLeave: () => earthRotation.timeScale(0.1),
                  onEnterBack: () => earthRotation.timeScale(0.1),
            });


      }, [])

      return (
            <>
                  <div
                        id="hero-section"
                        className="h-screen relative overflow-hidden"
                  >

                        {/* Layer 1: z-[0] (Galaxy Background) */}
                        <div className="absolute inset-0 z-[0]">
                              <Galaxy
                                    transparent={true}
                                    density={1.2}
                                    glowIntensity={0.3}
                              />
                        </div>

                        {/* Layer 2: z-[1] (Earth) */}
                        <img
                              id="earth"
                              src="https://res.cloudinary.com/dk2wudmxh/image/upload/v1761625964/earth_resized_oupmx9.png"
                              alt="Earth in space"
                              className="absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[70vh] md:h-[70vh] lg:w-[80vh] lg:h-[80vh] object-cover
                               filter drop-shadow-[0_0_20px_rgba(0,100,255,0.8)] sm:drop-shadow-[0_0_30px_rgba(0,100,255,0.9)] lg:drop-shadow-[0_0_40px_rgba(0,100,255,1)]"
                        />

                        {/* Layer 3: z-[2] (Moon Landscape) */}
                        <img
                              id="moon"
                              src="https://res.cloudinary.com/dk2wudmxh/image/upload/v1761625970/moon_resized_i4ys2t.png"
                              alt="Moon landscape"
                              className="absolute z-[2] bottom-0 w-full h-auto object-cover"
                        />

                        {/* Layer 4: z-[5] (Fluid Smoke) */}
                        <FluidSmoke targetId="rocket" />

                        {/* Layer 5: z-10 (Content - Removed Title) */}
                        {/* <h1 className='text-3xl font-bold underline text-white absolute top-1/4 left-1/2 -translate-x-1/2 w-full text-center z-10'>
                </h1> */}

                        {/* Layer 5: z-10 (Rocket) */}
                        <img
                              id="rocket"
                              src="https://res.cloudinary.com/dk2wudmxh/image/upload/v1761625965/HERO_Jet_resized_fjf0nm.png"
                              alt="Rocket launching"
                              className="absolute w-48 sm:w-64 md:w-80 left-1/2 -translate-x-1/2 bottom-0 z-10
                               filter drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] sm:drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] lg:drop-shadow-[0_0_20px_rgba(0,0,0,0.9)]"
                        />
                  </div>
            </>
      )
}

export default Hero

