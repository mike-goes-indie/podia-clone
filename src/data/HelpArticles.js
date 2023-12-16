
export class HelpArticleMenu{
  constructor(category, linksArray){
    this.category = category
    this.links = linksArray
  }
}

class HelpArticleSubCategory{
  constructor(category, linksArray){
    this.category = category
    this.links = linksArray
  }
}

const getStartedSubCategory1  = new HelpArticleSubCategory("Getting started", [
  "a guide for new users",
  "Getting started with Podia",
  "Navigating the Podia dashboard"
])

const getStartedSubCategory2  = new HelpArticleSubCategory("FAQS", [
  "How to contact Podia support",
  "How to join the \"Podia Creator Community\"",
  "Migrating your products to Podia",
  "Podia glossary",
  "What’s the difference between online courses, community, and digital downloads?",
  "Migrating to Podia Email",
  "EU GDPR (General Data Protection Regulation)",
  "What does 'You are in preview mode' mean?",
  "Security policy",
])

const getStartedSubCategory3  = new HelpArticleSubCategory("Going Further", [
  "How does Podia work with my existing website",
  "How to connect your Podia and Squarespace accounts",
  "Formatting and styling text with Podia's rich-text editor",
])

const getStartedSubCategory4  = new HelpArticleSubCategory("Customers", [
  "Understanding the customer experience",
  "Understanding the customer dashboard",
])

const gettingStartedLinks = [
  getStartedSubCategory1,
  getStartedSubCategory2, 
  getStartedSubCategory3, 
  getStartedSubCategory4
]

const gettingStartedMenu = new HelpArticleMenu("Getting started", gettingStartedLinks)

const productsSubCategory1 = new HelpArticleSubCategory("Getting Started", [
  "Getting started with products",
  "How to create an online course",
  "How to create a digital download",
  "How to create a coaching session product",
  "How to sell Zoom webinars & meetings",
  "How to create a product bundle",
  "How to sell YouTube Live webinars",
])

const productsSubCategory2 = new HelpArticleSubCategory("Managing Products", [
  "How to offer a product waitlist",
  "How to add content to your products",
  "How to add files to products",
  "Duplicating a product",
  "Deleting a product",
  "How to publish your product",
  "Unpublishing your product",
  "How to view your product's sales page",
  "How to view your product as a customer",
  "What kind of content can I add to my product?",
  "Finding & sharing product checkout links",
  "Product image and description updates",
  "Managing comments for your digital products",
  "Why can't I publish my product?",
])

const productsSubCategory3 = new HelpArticleSubCategory("Product settings", [
  "Adding a product image and description",
  "Edit your product availability settings",
  "Add someone to a product for free",
  "How to share your product sales page",
  "Exporting your online courses and digital download files",
  "How can I replace a file?",
  "Hiding products from your site",
  "How to set a start date for your product",
  "How to hide specific lessons/files from your products",
  "Closing your product for new sign-ups",
  "Change the name of your product",
  "How to make lessons/files previewable",
  "How to edit a file name",
  "How to delete a file from your product",
])

const productsSubCategory4 = new HelpArticleSubCategory("Online Courses", [
  "How do I upload a video to my course?",
  "How to add embeddable content in online courses",
  "How to add coaching lessons to your online courses",
  "Adding closed captions to your course videos",
  "How to set up quizzes for your online course",
  "How to view your customer's progress in an online course",
  "How to unlock delayed sections of your online course for your customers",
  "How to add a custom thumbnail to a video",
  "How to delay section access for your online courses",
  "Add a description to an online course lesson",
])
 
const productsMenu = new HelpArticleMenu("Products", [
  productsSubCategory1,
  productsSubCategory2,
  productsSubCategory3,
  productsSubCategory4
])

const accountSubCategory1 = new HelpArticleSubCategory("Account Settings", [
  "Updating the name on your Podia account", 
  "Add an avatar picture to your account", 
  "Change your email notification preferences", 
  "Changing your account's email address", 
])

const accountSubCategory2 = new HelpArticleSubCategory("Podia Billing", [
  "How do I change my Podia plan?",
  "How do I upgrade to a paid Podia plan?",
  "Managing the credit card on file for your Podia subscription",
  "Can I pause my Podia account?",
  "What happens when I cancel my account?",
  "What happens if I downgrade my account?",
  "How to close your Podia account",
  "Podia plans & billing FAQ",
  "Is sales tax collected on my Podia subscription?",
  "Can I get a refund for my Podia subscription?",
  "Troubleshooting failed Podia subscription payments",
])

const accountSubCategory3 =  new HelpArticleSubCategory("Security", [
  "Changing your account's password",
  "How to trust a new device",
  "How to manage active sessions on your Podia account",
  "Why have I received a “New login detected” email?",
  "Why have I received a “Your Podia password has just changed” email?",
])

const accountSubCategory4 = new HelpArticleMenu("Verification codes", [
  "Why am I being asked for a verification code upon login?",
  "What if I can't find my verification code?",
  "My verification code is invalid... HELP!",
])

const accountSubCategory5 = new HelpArticleSubCategory("Podia Email billing", [
  "Understanding email sending limits",
  "Podia Email Billing FAQ",
  "How to change your Podia Email plan",
])

const accountMenu = new HelpArticleMenu("Account", [
  accountSubCategory1,
  accountSubCategory2,
  accountSubCategory3,
  accountSubCategory4,
  accountSubCategory5
])

export const HelpArticles = [
  gettingStartedMenu,
  productsMenu,
  accountMenu
]