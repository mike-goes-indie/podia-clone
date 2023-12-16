import HeaderLinksCategory from './headerLinksCategory'


const HeaderLinksDropdownList = ({ linksArray }) => {
  
  return (
    <div className='lg:absolute lg:mt-3 lg:flex lg:py-8 lg:px-3 lg:pb-10 bg-white lg:shadow-3xl lg:rounded-md'>
      <HeaderLinksCategory category={linksArray[0]?.category} links={linksArray[0]?.links} styles={""} />
      <HeaderLinksCategory category={linksArray[1]?.category} links={linksArray[1]?.links} styles={"border-t border-[#00000033] lg:border-t-0 lg:border-l lg:px-5"}/>
    </div>
  )
}

export default HeaderLinksDropdownList