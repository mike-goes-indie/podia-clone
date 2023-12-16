import Card from './components/Card'
import Header from './components/Header'
import Hero from './components/Hero'
import Marketing from './components/Marketing'
import Product from './components/Product'
import onlineCoursesImage from './assets/digital_products-courses.png'
import ProductDescription from './components/ProductDescription'
import { cards } from './data/Cards'
import LearnMoreAboutLink from './components/LearnMoreAboutLink'
import Review from './components/Review'
import { MattAndStephReview, ShawnLeamonReview, joyChoReview } from './data/Reviews'
import { webinars, digitalDownloads, coaching } from './data/Products'
import SignUpSection from './components/SignUpSection'
import Footer from './components/Footer'
import { linksArray } from './data/Links'
import Help from './components/Help'

function App() {

  return (
    <>
      <Header/>
      <main className='px-5 lg:px-[5.825rem]'>
        <Hero/>
        <section>
          <Marketing/>
          <div className='md:grid grid-cols-3  gap-x-10'>
            {
              cards.map(card => (
                <Card key={card.icon} heading={card.heading} icon={card.icon} article={card.article}/>
              ))
            }
          </div>
        </section>
        <section className='md:grid md:grid-cols-2 md:grid-rows-auto gap-x-16 gap-y-16 items-center'>
          <img src={onlineCoursesImage} alt="online courses" className='md:order-3 h-auto w-full self-center rounded-md'/>
          <ProductDescription/>
          <div className='mt-12 md:mt-0 md:order-2 block'>
            <h5 className='font-base font-semibold uppercase text-xs text-[#9c8881] mb-1 leading-6'>
              Online Courses
            </h5>
            <h4 className='text-[1.25rem] md:text-[1.678rem] mb-1 '>Beautiful online courses you can build in moments</h4>
            <p className='font-base text-[#5c5856] md:text-[1.125rem] mb-6'>
              Make a beautiful online course for your customers. Podia hosts your course. That means all the lessons, files, and videos you want handled for you.
            </p>
            <LearnMoreAboutLink>
              courses
            </LearnMoreAboutLink>
          </div>
        </section>
        <Review review={joyChoReview} signed={"Joy Cho, Oh joy! Academy"}/>
        <Product product={digitalDownloads}/>
        <Review review={MattAndStephReview} signed={"Matt & Steph, Plant-based food bloggers"}/>
        <Product product={coaching}/>
        <Review review={ShawnLeamonReview} signed={" Shawn Leamon, Divorce and Your Money"}/>
        <Product product={webinars}/>
        <SignUpSection />
      </main>
      <Footer footerLinks={linksArray} />
      <Help />
    </>
  )
}

export default App
