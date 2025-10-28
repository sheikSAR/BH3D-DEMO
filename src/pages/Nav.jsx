import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const nav = () => {

      useGSAP(() => {
            const timeline = gsap.timeline({
                  scrollTrigger: {
                        trigger: 'nav',
                        start: 'bottom top'
                  },
            });
            timeline.fromTo('nav',
                  {
                        backgroundColor: 'transparent'
                  },
                  {
                        backgroundColor: '#00000050',
                        backgroundFilter: 'blur(10px)',
                        duration: 1,
                        ease: 'power1.inOut'
                  }
            );
      }, []);

      return (
            <nav className="nav-container">
                  <div className="nav-content">
                        <a href="#home" className='nav-logo'>
              <img src="https://res.cloudinary.com/dk2wudmxh/image/upload/v1761673365/Untitled_design_1_y1sd9o.png" alt="BroskiesHub Logo" className="logo-image" />
                        </a>
                        <ul className="nav-links">
                              {navLinks.map((link) => (
                                    <li key={link.id} className="nav-link-item">{link.title}</li>
                              ))}
                        </ul>
                  </div>
            </nav>

      )
}

export default nav
