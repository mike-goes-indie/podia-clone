import { useState } from 'react'
import downArrow from '../assets/chevron-down.svg'
import HeaderLinksDropdownList from './HeaderLinksDropdownList'
import { useActiveHeaderLink } from '../Providers/HeaderLinksActiveStateProvider'

const HeaderLink = ({children, styles, category, iconSize, linksArray, index}) => {
  const { activeHeaderLink, setActiveHeaderLink } = useActiveHeaderLink()

  const toggleLinksMenu = () => {
    if (activeHeaderLink === index) setActiveHeaderLink("")
    else setActiveHeaderLink(index)
  }

  return (
    <div className='lg:relative'>
      <button className={`${styles} flex text-[#1a1715] py-[.45rem] font-base capitalize `} onClick={toggleLinksMenu}>
        {children} 
        {children != "pricing" && <img src={downArrow} alt="" width={iconSize}  />}
      </button>
      {
          (category !== "pricing" && activeHeaderLink === index )  && <HeaderLinksDropdownList linksArray={ linksArray } />
      }
    </div>
  )
}

export default HeaderLink