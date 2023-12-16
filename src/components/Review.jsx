import star from '../assets/icons8-star-filled-96.png'

const Review = ({review, signed}) => {
  return (
    <section className='text-center flex flex-col items-center my-24 lg:my-[108px]'>
      <div className='flex gap-3' >
        <img src={star} alt="gold star" width={30} />
        <img src={star} alt="gold star" width={30} />
        <img src={star} alt="gold star" width={30} />
        <img src={star} alt="gold star" width={30} />
        <img src={star} alt="gold star" width={30} />
      </div>
      <p className='text-[1.125rem] my-5 text-[#1a1715]'>{review}</p>
      <p className='text-[1.125rem] font-base text-[#5c5856]'>&mdash; {signed}</p>
    </section>
  )
}

export default Review