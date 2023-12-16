import Button from './Button'

const SignUpSection = () => {
  return (
    <section className='bg-deepPurple text-white text-center py-6 px-7 md:py-16 md:px-24 rounded-lg my-16 md:my-24'>
      <h3 className='font-heading text-[1.5rem] mb-1 px-6 md:text-[2.125rem]'>Get your free Podia account</h3>
      <p className='font-base text-[#d7d2e8] mb-7 leading-[1.8rem] md:text-[17px] '>
        Join the 150,000+ creators who use Podia to create websites, sell digital products, and build online communities.
      </p>
      <Button styles={"text-[1.25rem] py-[.625em] bg-[#9484c6] hover:bg-[#4b2aad]"}>Sign up free</Button>
    </section>
  )
}

export default SignUpSection