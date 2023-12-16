import webinarsImage from '../assets/digital_products-webinars.png'
import onlineCoursesImage from '../assets/digital_products-courses.png'
import digitalDownloadsImage from '../assets/digital_products-downloads.png'
import coachingImage from '../assets/digital_products-coaching.png'

class Product {
  constructor(image, title, heading, article){
    this.image = image
    this.title = title
    this.heading = heading
    this.article = article
  }
}
const webinarsArticleHeading = "Webinars and workshops with registration and payment in one place"
const webinarsArticle = "How can you charge for your webinars and workshops? Do it from your Podia site. Set up a paid webinar product and your customers can register straight from your website."
export const webinars = new Product(webinarsImage, "webinars", webinarsArticleHeading, webinarsArticle)
const onlineCoursesArticleHeading = "Beautiful online courses you can build in moments"
const onlineCoursesArticle = "Make a beautiful online course for your customers. Podia hosts your course. That means all the lessons, files, and videos you want handled for you."
export const onlineCourses = new Product(onlineCoursesImage, "digital downloads", onlineCoursesArticleHeading, onlineCoursesArticle)
const digitalDownloadsArticleHeading = "Ebooks, templates, and any file type you can think of"
const digitalDownloadsArticle = "Have an ebook to sell? Templates you love? Podia makes it easy to spin up a sales page and sell ebooks, templates, audio files, video files, spreadsheets, and any other file type."
export const digitalDownloads = new Product(digitalDownloadsImage, "digital downloads", digitalDownloadsArticleHeading, digitalDownloadsArticle)
const coachingArticleHeading = "One-on-one coaching and consultations, with billing managed for you"
const coachingArticle = "Sometimes your students want one-on-one attention. Podia makes it easy for you to charge for coaching sessions and consultations."
export const coaching = new Product(coachingImage, "coaching", coachingArticleHeading, coachingArticle)