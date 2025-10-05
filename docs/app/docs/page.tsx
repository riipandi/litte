import { FooterDocs } from '../footer'
import Navigation from '../navigation'

export default function Page() {
  return (
    <div>
      <Navigation />
      <div className="-mx-4 -mb-4 flex flex-wrap md:mb-0">
        <div className="mb-4 w-full px-4 md:mb-0 md:w-1/3" />
        <div className="mb-4 w-full px-4 md:mb-0 md:w-2/3" />
      </div>
      <FooterDocs />
    </div>
  )
}
