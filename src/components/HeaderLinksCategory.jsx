
const HeaderLinksCategory = ({ category, links, styles}) => {
  return (
    <div className={`${styles} bg-white flex flex-col py-6 pr-12 font-base pl-3 lg:py-0`}>
      <h4 className='font-semibold text-[#9c8881] uppercase text-[.75rem] tracking-widest mb-3'>{category}</h4>
      <ul className='flex flex-col gap-3'>
        {
          links?.map((link, index) => (
            <li key={index} ><p className='text-[#5c5856] text-[.875rem] capitalize whitespace-nowrap '>{link}</p></li>
          ))
        }
      </ul>
    </div>
  )
}

export default HeaderLinksCategory