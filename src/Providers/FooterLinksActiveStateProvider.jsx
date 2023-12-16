import { createContext, useContext, useState } from 'react'

const footerLinksContext = createContext()

const FooterLinksActiveStateProvider = ({ children }) => {
  const [ activeFooterLinks, setActiveFooterLinks ] = useState()
  return (
    <footerLinksContext.Provider value={ { activeFooterLinks, setActiveFooterLinks } }>
      {children}
    </footerLinksContext.Provider>
  )
}

export const useFooterLinkActiveState = () => useContext(footerLinksContext)
export default FooterLinksActiveStateProvider