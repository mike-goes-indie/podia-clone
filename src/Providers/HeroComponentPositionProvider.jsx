import { createContext, useContext, useState } from 'react';

const heroComponentPositionContext =  createContext()

const HeroComponentPositionProvider = ({ children }) => {
  const [ heroComponentPosition, setHeroComponentPosition ] = useState()

  return (
    <heroComponentPositionContext.Provider value={{ heroComponentPosition, setHeroComponentPosition }}>
      {children}
    </heroComponentPositionContext.Provider>
  )
}

export default HeroComponentPositionProvider
export const  useHeroPosition = () => useContext(heroComponentPositionContext)