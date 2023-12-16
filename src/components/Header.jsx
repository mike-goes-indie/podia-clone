import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import podiaLogo from '../assets/vector3.svg'
import Button from './Button'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import { headerLinks } from '../data/HeaderLinks'


const Header = () => {
  let header = useRef(null)
  const [ headerHeight, setHeaderHeight ] = useState(70)
  const [distanceScrolled, setDistanceScrolled] = useState(window.scrollY)
  

  useLayoutEffect(() => {
    setHeaderHeight(header.current.offsetHeight)
    
    const handleWindowScroll = () => {
      setDistanceScrolled(window.scrollY)
    }

    window.addEventListener('scroll', handleWindowScroll)

    return () => {
      window.removeEventListener('scroll', handleWindowScroll)
    }
  }, [])
  
  return (
    <header className={`${ distanceScrolled >= headerHeight? "bg-white shadow-md": "bg-transparent"} sticky top-0 w-full h-auto flex justify-between items-center px-5 py-3  lg:px-[5.825rem] lg:py-5 z-[100]`} ref={header}>
      <div className='flex gap-3 lg:gap-4 items-center'>
        <img src={podiaLogo} alt="logo" width={75}/>
        <DesktopMenu Links={headerLinks}/>
      </div>
      <div className='flex gap-6 items-center'>
        <button className='capitalize text-[1rem] lg:text-[1.25rem] font-base py-2 px-5 hover:bg-gray rounded-full'>login</button>
        <Button styles={"hidden lg:flex py-3"}>Sign up free</Button>
        <MobileMenu Links={headerLinks}/>
      </div>
    </header>
  )
}

export default Header