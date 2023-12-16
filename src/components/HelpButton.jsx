import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import questionMarkIcon from '../assets/question-mark-circle.svg'
import { useHelpCenterState } from '../Providers/HelpCenterStateProvider';

const HelpButton = () => {

  const { setIsHelpCenterVisible, isHelpButtonVisible, setIsHelpButtonVisible } = useHelpCenterState()

  const helpButton = useRef()
  const helpSpan = useRef()

  const toggleHelpCenter = () => {
    setIsHelpCenterVisible(true)
    setIsHelpButtonVisible(false)
  }

  const onEnter = () => {
    const helpButtonRevealAnimation = gsap.timeline()
    helpButtonRevealAnimation.to(helpSpan.current, {display: "flex", duration: .01})
    helpButtonRevealAnimation.to(helpButton.current, {width: 140, duration: .12}, "<")
  }

  const onLeave = () => {
    const helpButtonRevealAnimation = gsap.timeline()
    helpButtonRevealAnimation.to(helpSpan.current, {display: "none", duration: .01})
    helpButtonRevealAnimation.to(helpButton.current, {width: 60, duration: .12}, "<")
  }
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000 && isHelpButtonVisible == false) setIsHelpButtonVisible(true)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  }, [])

  useLayoutEffect(() => {
    const helpButtonAnimationTimeline = gsap.timeline()

    helpButtonAnimationTimeline.from(helpButton.current, {
      width: 0,
      height: 0,
      duration: .1,
      ease: "power1.out"
    })

    helpButtonAnimationTimeline.to(helpButton.current, {
      width: 60,
      height: 60,
      duration: .1,
      ease: "power1.out"
    })

  }, [ isHelpButtonVisible ])

  return (
    <>
      {
        isHelpButtonVisible && (
          <button className='fixed  items-center gap-3 flex justify-center right-4 bottom-4 z-[500] w-[60px] h-[60px] rounded-full bg-purple overflow-hidden ' ref={helpButton} onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={toggleHelpCenter}>
            <span className='hidden absolute left-[20px] text-[.875rem] font-base text-white top-1/2 -translate-y-1/2' ref={helpSpan}>Help</span>
            <div className='w-auto h-auto absolute right-[15px] bg-purple'>
              <img src={questionMarkIcon} alt="question mark" className='aspect-square' width={30} height={30}/>
            </div>
          </button>
        )
      }
    </>
  )
}

export default HelpButton