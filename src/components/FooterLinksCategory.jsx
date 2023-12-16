import React, { useState } from 'react'
import FooterLink from './FooterLink'
import { useEffect } from 'react'
import dropdownIcon from '../assets/chevron-down.svg'
import dropdownIconActive from '../assets/chevron-down-active.svg'
import { useFooterLinkActiveState } from '../Providers/FooterLinksActiveStateProvider'

const FooterLinksCategory = ({footerLinkCategory: {category, links}, index}) => {
  const { activeFooterLinks: isActive, setActiveFooterLinks: setIsActive } = useFooterLinkActiveState()

  const toggleLinksMenu = () => {
    if (isActive === index) setIsActive(null)
    else setIsActive(index)
  }

  return (
    <div className='w-full text-[1.125rem] lg:flex lg:gap-2' >
      <div className='flex justify-between w-full lg:w-[10%]' onClick={toggleLinksMenu} >
        <p className={`${isActive == index ? "text-purple": "text-black"} font-base active:text-purple font-semibold leading-8 capitalize text-[1.125rem]`}>{category}</p>
        <img src={isActive == index? dropdownIconActive: dropdownIcon} alt="dropdown icon" className='lg:hidden' />
      </div>
      <ul className={`${ isActive == index? "block": "hidden"} box-content flex flex-col gap-3 mt-2 lg:flex lg:flex-row lg:mt-0`}>
        {
          links?.map(el => (
            <li key={el} className="cursor-pointer"><FooterLink styles={"md:text-[1.125rem] text-[1rem]"}>{el}</FooterLink></li>
          ))
        }
      </ul>
    </div>
  )
}

export default FooterLinksCategory