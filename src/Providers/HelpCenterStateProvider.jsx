import { createContext, useContext, useState } from 'react';

const helpCenterStateContext =  createContext()

const HelpCenterStateProvider = ({ children }) => {
  const [ isHelpCenterVisible, setIsHelpCenterVisible ] = useState(false)
  const [ isHelpButtonVisible, setIsHelpButtonVisible ] = useState(false)
  const [isHelpCenterDropdownActive, setIsHelpCenterDropdownActive] = useState(true)

  return (
    <helpCenterStateContext.Provider value={{ isHelpCenterVisible, setIsHelpCenterVisible, isHelpButtonVisible, setIsHelpButtonVisible, isHelpCenterDropdownActive, setIsHelpCenterDropdownActive }}>
      { children }
    </helpCenterStateContext.Provider>
  )
}

export const useHelpCenterState = () => useContext(helpCenterStateContext)
export default HelpCenterStateProvider