import { useHelpCenterState } from '../Providers/HelpCenterStateProvider'
import podiaStatusPageIcon from '../assets/podia-status-page-icon.svg'
import emailIcon from '../assets/email-icon.svg'
import helpArticlesIcon from '../assets/help-articles-icon.svg'
import HelpCenterDropdownItem from './HelpCenterDropdownItem'

const HelpCenterDropdownMenu = () => {
  const { isHelpCenterDropdownActive } = useHelpCenterState()

  let content
  if (!isHelpCenterDropdownActive) content = null
  else content = (
    <div className='w-full bg-[#f3f5f7] py-8 overflow-y-auto px-10 flex justify-evenly'>
      <HelpCenterDropdownItem src={helpArticlesIcon} alt={"help articles"} />
      <HelpCenterDropdownItem src={podiaStatusPageIcon} alt={"podia status page"}/>
      <HelpCenterDropdownItem src={emailIcon} alt={"email us"}/>
    </div>
  )
  
  return content
}

export default HelpCenterDropdownMenu
