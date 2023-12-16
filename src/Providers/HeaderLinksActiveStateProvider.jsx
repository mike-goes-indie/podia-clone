import { createContext, useContext, useState } from 'react';

const headerLinkActiveStateContext = createContext()

const HeaderLinksActiveStateProvider = ({children}) => {
  const [activeHeaderLink, setActiveHeaderLink] = useState()

  return (
    <headerLinkActiveStateContext.Provider value={ { activeHeaderLink, setActiveHeaderLink } }>
      {children}
    </headerLinkActiveStateContext.Provider>
  )
}

export const useActiveHeaderLink = () => useContext(headerLinkActiveStateContext) 
export default HeaderLinksActiveStateProvider