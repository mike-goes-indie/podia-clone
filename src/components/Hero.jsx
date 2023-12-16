import  { useLayoutEffect, useRef } from 'react'
import imageHero from '../assets/digital_products-hero.png'
import Button from './Button'

const Hero = () => {
  const buttonStyles = "py-[0.7em] px-[1.5rem]"
  return (
    <section className='mt-16 lg:mt-[6.5rem]  md:grid md:grid-cols-2 md:gap-x-[10%] ' >
      <img src={imageHero} alt="digital products" className='rounded-lg md:order-2 self-center w-[100%] h-[auto]' />
      <div className=''>
        <h3 className='font-base tracking-[.1em] mb-[.3rem] text-[#9c8881] uppercase mt-14 md:mt-0 text-tiny lg:text-[.825rem] ' >digital products</h3>
        <h2 className='font-heading font-[500] text-[2rem] md:text-[2.7rem] lg:text-[3.125rem] lg:leading-[3.825rem] leading-[2.5rem] mb-5  '>
          Sell online courses, coaching sessions, webinars, workshops, ebooks, and anything you can think of in podia
        </h2>
        <p className='font-base text-[#5c5856] text-[1.125rem] md:text-[1.25rem] lg:leading-[1.8rem] leading-[1.8rem] mb-5'>
          Get everything you need in one place that you own. Podia takes care of hosting products, taking payments and getting products to your customers. And you always control your own work.
        </p>
        <Button styles={buttonStyles}>Get your free account</Button>
      </div>
    </section>
  )
}

export default Hero