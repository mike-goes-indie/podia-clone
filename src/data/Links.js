const platformLinks = ["Pricing", "Sign up free", "Community", "Website builder", "Digital products", "E Email marketing"]
const supportLinks = ["Contact us", "Help Center", "Hire a Podia pro", "Create a community", "Podia 101"]
const featuresLinks = ["Online courses", "Downloads", "Webinars", "Coaching", "All features"]
const compareLinks = ["Kajabi", "Teachable", "Thinkific", "Patreon", "Gumroad", "Podia alternatives"]
const resourcesLinks = ["Examples", "Demo", "Creator stories", "Blog", "Free tools", "All resources"]
const podiaLinks = ["Jobs", "About", "Branding", "Reviews", "Refer-a-creator", "Affiliates"]
const socialLinks = ["Twitter", "Facebook", "Instagram", "YouTube"]

export class Link {
  constructor(category, links){
    this.category = category
    this.links = links
  }
}

const social = new Link("social", socialLinks)
const platform = new Link("platform", platformLinks)
const support = new Link("support", supportLinks)
const features = new Link("features", featuresLinks)
const compare = new Link("compare", compareLinks)
const resources = new Link("resources", resourcesLinks)
const podia = new Link("podia", podiaLinks)

export const linksArray =  [platform, support, features, compare, resources, podia, social]