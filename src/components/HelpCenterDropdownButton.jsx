import { useState } from 'react'
import minusIcon from '../assets/close-article-dropdown.svg'
import plusIcon from '../assets/open-article-dropdown.svg'

const HelpCenterDropdownButton = ({ children, isMenuActive, setIsMenuActive }) => { 
  return (
    <button onClick={() => setIsMenuActive(!isMenuActive)} className="flex gap-2 items-center" >
      <img src={isMenuActive? minusIcon: plusIcon} alt="toggle articles menu" />
      <span>{children}</span>
    </button>
  )
}

export default HelpCenterDropdownButton