import HeaderLink from './HeaderLink'

const DesktopMenu = ({Links}) => {
  return (
    <ul className='hidden lg:flex flex-row '>
      {
        Links?.map((el, index) => (
          <HeaderLink key={el?.category} category={el?.category} styles={"hover:bg-gray focus:bg-gray focus:outline focus:outline-4 focus:outline-[#d7d2e8]  py-[0.5rem] justify-center px-4  rounded-full text-lg items-center "} iconSize={20} index={index} linksArray={el?.links}>{el?.category}</HeaderLink>
          ))
      }
    </ul>
  )
}

export default DesktopMenu