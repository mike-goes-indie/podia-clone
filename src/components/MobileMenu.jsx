import HeaderLink from './HeaderLink'
import closeMenuIcon from '../assets/close-line-icon.svg'
import Button from './Button'
import { useCallback, useState } from 'react'
import downArrow from '../assets/chevron-down.svg'


const MobileMenu = ({Links}) => {
  const [isMenuHidden, setIsMenuHidden] = useState(true)
  const openMenu = useCallback(() => setIsMenuHidden(false), [])
  const closeMenu = useCallback(() => setIsMenuHidden(true), [])
  
  

  return (
    <>
      <button className={` py-[0.5rem] justify-between gap-1  rounded-full text-[1rem] items-center lg:hidden text-[#1A1715] flex  font-base capitalize mr-5`} onClick={openMenu}>
        Menu
        <img src={downArrow} alt="" width={15} className='height-auto ' />
      </button>
      {
        !isMenuHidden && (
          <div className='absolute w-[96%] left-1/2 -translate-x-1/2 lg:hidden bg-white border-[.0555555556rem] border-[#dfd8d3] rounded-md px-5 py-5 top-2'>
            <div className='flex justify-between mb-7 px-2'>
              <h3 className='uppercase text-lightPurple font-base text-sm'>Menu</h3>
              <img src={closeMenuIcon} alt="close menu" onClick={closeMenu} width={12}/>
            </div>
            <nav>
              <ul className="flex flex-col mb-6">
                {
                  Links?.map((el, index) => (
                    <HeaderLink key={el?.category} styles={"flex justify-between w-full font-heading  text-[1.25rem]"} iconSize={20} linksArray={el?.links} index={index} category={el?.category}>{el?.category}</HeaderLink>
                  ))
                }
              </ul>
            </nav>
            <Button styles={"w-full py-2 mb-2"}>Sign up free</Button>
          </div>
        )
      }
    </>
  )

}

export default MobileMenu