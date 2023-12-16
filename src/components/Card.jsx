
const Card = ({heading, icon, article}) => {
  return (
    <div className='text-center flex flex-col items-center mb-16'>
      <div className='w-[50px] aspect-square  bg-gray rounded-full flex items-center justify-center mb-3'>
        <img src={icon} alt="icon" />
      </div>
      <h4 className='text-[1.125rem]'>{heading}</h4>
      <p className='text-[.875rem] font-base text-[#5c5856]'>{article}</p>
    </div>
  )
}

export default Card