import { FooterHome } from '../footer'
import SectionAbout from './section-about'
import SectionHero from './section-hero'
// import SectionBlog from './section-blog'
// import SectionFAQ from './section-faq'
// import SectionFeatures from './section-features'
// import SectionLogos from './section-logos'
// import SectionStats from './section-stats'

export default function Page() {
  return (
    <div>
      <SectionHero />
      {/* <SectionLogos /> */}
      {/* <SectionBlog /> */}
      {/* <SectionFeatures /> */}
      {/* <SectionStats /> */}
      {/* <SectionFAQ /> */}
      <SectionAbout />
      <FooterHome />
    </div>
  )
}
