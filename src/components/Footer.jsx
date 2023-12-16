import FooterLink from './FooterLink'
import FooterLinksCategory from './FooterLinksCategory'

const Footer = ({ footerLinks }) => {
  const year = new Date().getFullYear() 
  return (
    <footer className='flex flex-col w-full bg-gray px-6 py-10 gap-3 md:py-24 lg:px-[5.825rem]'>
      {
        footerLinks?.map((el, index) => (
          <FooterLinksCategory key={el.category} footerLinkCategory={el} index={index}/>
        ))
      }
      <div className='flex gap-3 flex-wrap text-[0.875rem] my-5'>
        <p className='font-base text-[#5c5856] '>Podia Labs, Inc. &copy; {year}</p>
        <FooterLink styles={"text-[.875rem]"}>Terms</FooterLink>
        <FooterLink styles={"text-[.875rem]"}>Privacy</FooterLink>
      </div>
    </footer>
  )
}

export default Footer