import React, { useState } from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const nav = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false)

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

      const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen)
      }

      const closeMenu = () => {
            setIsMenuOpen(false)
      }

      return (
            <>
                  <nav className="nav-container">
                        <div className="nav-content">
                              <a href="#home" className='nav-logo'>
                                    <img src="https://res.cloudinary.com/dk2wudmxh/image/upload/v1761673365/Untitled_design_1_y1sd9o.png" alt="BroskiesHub Logo" className="logo-image" />
                              </a>
                              <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle menu">
                                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                              </button>
                              <ul className="nav-links">
                                    {navLinks.map((link) => (
                                          <li key={link.id} className="nav-link-item">{link.title}</li>
                                    ))}
                              </ul>
                        </div>
                  </nav>

                  {/* Mobile Sidebar Menu */}
                  <div className={`mobile-nav-sidebar ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
                        <div className="mobile-nav-content" onClick={(e) => e.stopPropagation()}>
                              <button className="mobile-nav-close" onClick={closeMenu} aria-label="Close menu">
                                    <span className="close-line"></span>
                                    <span className="close-line"></span>
                              </button>
                              <ul className="mobile-nav-links">
                                    {navLinks.map((link) => (
                                          <li key={link.id} className="mobile-nav-link-item" onClick={closeMenu}>{link.title}</li>
                                    ))}
                              </ul>
                        </div>
                  </div>
            </>

      )
}

export default nav
