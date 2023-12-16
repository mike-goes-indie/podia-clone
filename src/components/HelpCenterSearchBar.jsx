import { useState } from 'react'
import searchIcon from '../assets/search-icon.svg'

const HelpCenterSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="w-full py-2 px-5 bg-white shadow-md flex">
      <img src={searchIcon} alt="search icon"/>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-auto flex-grow pl-2 py-2 outline-none border-none" placeholder={"Search for help"}/>
    </div>
  )
}

export default HelpCenterSearchBar