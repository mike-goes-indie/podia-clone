import React from 'react'

const FooterLink = ({children, styles}) => {
  return ( 
    <a className={`text-[#5c5856] hover:text-purple relative  font-base  after:content-[""] after:bg-[#5c5856] after:absolute after:w-full after:h-[.75px] after:bottom-0 after:left-0  cursor-pointer ${styles}`}>{children}</a>
  )
}

export default FooterLink