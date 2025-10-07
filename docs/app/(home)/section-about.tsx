'use client'

// import Link from 'next/link'
import dynamic from 'next/dynamic'

// Use dynamic import to prevent `ReferenceError: HTMLElement is not defined` issue
const Button = dynamic(() => import('@litte/react').then((mod) => mod.Button), { ssr: false })

export default function SectionAbout() {
  return (
    <section className="bg-teal-900 py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          <div className="mb-6 w-full px-4 md:mb-0 md:w-1/2">
            <div>
              <h1 className="font-heading text-6xl text-white">About Litte</h1>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="md:ml-auto lg:max-w-lg">
              <p className="mb-10 font-medium text-gray-50 text-xl">
                Litte is a modern web-component library written in TypeScript and built on Lit.
                Leverages Lit&apos;s efficient rendering and small footprint, making integration
                into any web project simple. Whether you need a simple button or want to extend with
                your own components, Litte offers a solid foundation for building modern web
                interfaces.
              </p>
              <Button variant="primary" size="xl" color="white">
                Read more
              </Button>
              {/* <Link
                href="/docs"
                className="inline-flex items-center justify-center rounded-full border border-white px-5 py-2.5 font-medium text-lg text-white transition duration-200 hover:bg-white hover:text-black"
              >
                Read more
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
