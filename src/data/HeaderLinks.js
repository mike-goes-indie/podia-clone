import { Link } from './Links';

const websitePlatformLinks = ["website builder", "website examples"]
const websiteFeaturesLinks = ["Landing pages", "Link in bio pages", "Portfolio websites", "Integrations"]
const websitePlatform = new Link("platform", websitePlatformLinks)
const websiteFeatures = new Link("features", websiteFeaturesLinks)
const website = new Link("website", [websitePlatform, websiteFeatures])

const emailPlatformLinks = ["Email marketing", "Email examples"]
const emailFeaturesLinks = ["Email templates", "Email designer", "Email forms", "Email analytics", "Newsletters", "Automations", "Segmentation"]
const emailPlatform = new Link("platform", emailPlatformLinks)
const emailFeatures = new Link("features", emailFeaturesLinks)
const email = new Link("email", [emailPlatform, emailFeatures])

const sellPlatformLinks = ["Online courses", "Digital downloads", "Community", "Checkout"]
const sellFeaturesLinks = ["Multimedia products", "Presell products", "Upsells", "Coaching", "Webinars", "Affiliates"]
const sellPlatform = new Link("platform", sellPlatformLinks)
const sellFeatures = new Link("features", sellFeaturesLinks)
const sell = new Link("sell", [sellPlatform, sellFeatures])

const freeResourcesLinks =  [ "Resource center", "Hire a Podia Pro", "Creator Advice Library", "Podia demo site" ]
const otherLinks = [ "Creator stories", "Free tools", "Podia Creator Community", "Help center" ]
const freeResources = new Link("free resources", freeResourcesLinks)
const others = new Link("", otherLinks)
const resources = new Link("resources", [freeResources, others])

const pricing = new Link("pricing", [])

export const headerLinks = [
  website, 
  email,
  sell,
  pricing,
  resources, 
]

