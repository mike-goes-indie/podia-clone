import React from 'react'
import LearnMoreAboutLink from './LearnMoreAboutLink'

const Product = ({product: {image, title, heading, article}}) => { 
  return (
    <section className='md:grid md:grid-cols-2  gap-x-10 items-center'>
      <img src={image} alt={title} className='rounded-md h-auto w-full order-2 self-center'/> 
      <div className='mt-12 md:mt-0 md:order-1 block md:leading-[2.5rem]'>
        <h5 className='font-base font-semibold uppercase text-xs text-[#9c8881] mb-1 leading-6'>{title}</h5>
        <h4 className='text-[1.25rem] md:text-[1.678rem] mb-1 '>{heading}</h4>
        <p className='font-base text-[#5c5856] md:text-[1.125rem] mb-6'>{article}</p>
        <LearnMoreAboutLink>{title}</LearnMoreAboutLink>
      </div>
    </section>
  )
}

export default Product