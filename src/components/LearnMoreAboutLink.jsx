import { useRef } from 'react'
import rightArrow from '../assets/right-arrow-icon.svg'
import rightArrowHover from '../assets/right-arrow-icon-hover.svg'
import { useState } from 'react'
import { useEffect } from 'react'
import { gsap } from 'gsap'

const LearnMoreAboutLink = ({children}) => {

  const [mouseOver, setMouseOver] = useState(false)
  const aboutLink = useRef(null)
  const arrow = useRef()

  const handleMouseEnter = () => {
    setMouseOver(true)
    gsap.to(arrow.current, {
      x: 10,
      duration: .2,
      ease: "power1.out"
    })
  }

  const handleMouseLeave = () => {
    setMouseOver(false)
    gsap.to(arrow.current, {
      x: -3,
      duration: .2,
    })
  }

  return (
    <div className='flex relative cursor-pointer ' ref={aboutLink} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
       <a className={`font-base  cursor-pointer md:text-[1.125rem] font-semibold text-purple hover:text-deepPurple `} >
        learn more about {children}   
      </a>
      <img src={mouseOver? rightArrowHover: rightArrow} alt="arrow icon" ref={arrow}  className='relative -translate-x-[3px]'/>
    </div>
   
  )
}

export default LearnMoreAboutLink