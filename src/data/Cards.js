import checkoutIcon from '../assets/cart-icon.svg'
import cloudUploadIcon from '../assets/cloud-upload-icon.svg'
import logInIcon from '../assets/log-in-icon.svg'

class Card {
  constructor(icon, heading, article){
    this.icon = icon
    this.heading = heading
    this.article = article
  }
}

const checkoutArticleHeading = "Checkout and sales are handled for you"
const logInArticleHeading = "Your customers log in, and your products are there for them"
const cloudUploadArticleHeading = "Upload your product. Make your sales page. Done."

const checkoutArticle = "You don’t have to figure out a bunch of tools or website embeds. Just connect a payment provider and your Podia site takes care of payments for you."
const loginArticle = "Your Podia site handles access to products for you. Everything is in one place. When your customers buy a product, they get a log in. After that, they can see all the products they’ve bought from you."
const cloudUploadArticle = "You could sell a digital product by this afternoon. Podia handles hosting, sales pages, checkout, and delivery. All you need is something to sell."

const checkout = new Card(checkoutIcon, checkoutArticleHeading, checkoutArticle)
const logIn = new Card(logInIcon, logInArticleHeading, loginArticle)
const cloudUpload = new Card(cloudUploadIcon, cloudUploadArticleHeading, cloudUploadArticle)

export const cards = [checkout, logIn, cloudUpload]