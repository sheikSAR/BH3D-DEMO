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
            <nav>
                  <div>
                        <a href="#home" className='flex items-center gap-2'>
                              <img src="https://res.cloudinary.com/broskieshub/image/upload/v1756907359/broskieshub/qrdtvpfzqaw0bsu8rcl0.png" alt="" />
                        </a>
                        <ul>
                              {navLinks.map((link) => (
                                    <li key={link.id}>{link.title}</li>
                              ))}
                        </ul>
                  </div>
            </nav>

      )
}

export default nav