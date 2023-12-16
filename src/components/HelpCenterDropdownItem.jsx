
const HelpCenterDropdownItem = ({ src, alt }) => {
  return (
    <div className='bg-white max-w-[60px] p-3 md:p-4 rounded-md cursor-pointer shadow-md aspect-square'>
      <img src={src} alt={alt} className='m-auto'/>
    </div> 
  )
}

export default HelpCenterDropdownItem