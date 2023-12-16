import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import hamburgerMenuIcon from '../assets/bx-menu.svg'
import closeMenuIcon from '../assets/close-line-icon-white.svg'
import { useHelpCenterState } from '../Providers/HelpCenterStateProvider'
import HelpCenterSearchBar from './HelpCenterSearchBar'
import HelpCenterDropdownMenu from './HelpCenterDropdownMenu'
import SuggestedArticles from './SuggestedArticles'
import HelpCenterArticlesMenu from './HelpCenterArticlesMenu'
import { gsap } from 'gsap'
import { HelpArticles  } from '../data/HelpArticles'

const HelpCenter = () => {

  const { isHelpCenterVisible, setIsHelpCenterVisible, setIsHelpButtonVisible, setIsHelpCenterDropdownActive } = useHelpCenterState()
  const HelpCenter = useRef(null)

  const closeHelpCenter = () => {
    setIsHelpCenterVisible(false)
    setIsHelpButtonVisible(true)
  }

  const toggleHelpCenterDropdown = () => {
    setIsHelpCenterDropdownActive(prevState => !prevState)
  }

  const withPropsAdded = (Component, ...args) => {
    const [ key, article ] = args
    if (typeof article == "object") {
      return (
        <Component key={key} article={article} HigherOrderComponent={withPropsAdded} />
      )
    } else {
      return <a className='font-base text-[#4A90E2] underline leading-[2rem]' key={key}>{article}</a>
    }
  }

  useLayoutEffect(() => {
    gsap.from(HelpCenter.current, {
      opacity: .1,
      height: 0,
      duration: .15,
      ease: "power1.out"
    })
  }, [isHelpCenterVisible])

  return (
    <>
      {
        isHelpCenterVisible && (
          <article className="fixed right-3 max-h-[80vh] overflow-hidden flex flex-col font-base bottom-4 z-[1000]  max-w-[95vw] md:max-w-[400px] shadow-helpCenter  rounded-xl  bg-white"  ref={HelpCenter}>
            <div className='w-full  rounded-t-xl relative top-0'>
              <div className="w-full bg-purple flex justify-between rounded-t-xl items-center px-5 py-3">
                <img src={hamburgerMenuIcon} alt="hamburger menu" onClick={toggleHelpCenterDropdown}/>
                <span className="text-white capitalize">help Center</span>
                <img src={closeMenuIcon} alt="close menu" onClick={closeHelpCenter} width={18} />
              </div>
              <HelpCenterSearchBar/>
            </div>
            <div className='overflow-y-scroll  scrollbar-thumb-[#5c5856] scrollbar-track-gray help-center-scrollbar '>
              <HelpCenterDropdownMenu />
              <SuggestedArticles />
              <div>
                {
                  HelpArticles?.map(article => (
                    <HelpCenterArticlesMenu key={article.category} article={article} HigherOrderComponent={withPropsAdded} Component={HelpCenterArticlesMenu}/>
                  ))
                }
              </div>
            </div>
            <div className='bg-[#e3e1e1] text-right px-3 bottom-0 relative py-2 '>
              <span className='text-[0.625rem] text-[#5c5856] '>Elvio by Dixa</span>
            </div>
          </article>
        )
      }
    </>
  )
}

export default HelpCenter