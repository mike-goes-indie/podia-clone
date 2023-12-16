import React from 'react'

const Button = ({ children, styles }) => {
  return (
    <button className={`bg-purple ${styles} px-[1em] py-[.7rem] whitespace-nowrap font-base text-center font-[600] text-[1.25rem]  text-white hover:bg-deepPurple rounded-full leading-tight `}>{children}</button>
  )
}
export default Button