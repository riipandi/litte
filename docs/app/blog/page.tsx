import * as Icon from 'iconoir-react'
import Image from 'next/image'
import Link from 'next/link'
import { FooterDocs } from '../footer'
import Navigation from '../navigation'
import SectionCTA from './section-cta'

export default function Page() {
  return (
    <div>
      <Navigation />

      <section className="overflow-hidden pb-12 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="pt-16">
            <div className="-mx-4 mb-20 flex flex-wrap items-center justify-between">
              <div className="mb-10 w-full px-4 sm:mb-0 sm:w-2/3">
                <div className="sm:max-w-lg xl:max-w-none">
                  <h1 className="font-heading text-4xl xs:text-6xl">Blog</h1>
                  <p className="mt-4 text-gray-700 text-lg">
                    Insights, tutorials, and updates about Litte, Lit, and TypeScript. Explore best
                    practices, component guides, and tips for building modern web interfaces.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/3 sm:text-right">
                <button
                  type="button"
                  className="inline-flex cursor-pointer items-center justify-center rounded-full border border-teal-900 px-5 py-2 font-medium text-black text-lg transition duration-300 hover:bg-teal-900 hover:text-white"
                >
                  <span className="mr-2">Search post</span>
                  <Icon.Search className="-mr-0.5 size-4" strokeWidth={1.8} />
                </button>
              </div>
            </div>
          </div>
          <div className="-mx-4 mt-20 flex flex-wrap">
            <div className="mb-12 w-full px-4 md:mb-0 md:w-1/2">
              <Link href="#" className="group block">
                <Image
                  className="mb-8 block rounded-2xl object-cover md:h-87"
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=640&q=80"
                  alt="Lit and TypeScript"
                  width={640}
                  height={348}
                />
                <div className="pr-8">
                  <h4 className="mb-4 font-medium text-3xl transition duration-200 group-hover:text-teal-600">
                    Getting Started with Litte: Build Your First Web Component
                  </h4>
                  <p className="mb-6 text-gray-700 text-lg">
                    Learn how to create reusable UI components using Lit and TypeScript. This guide
                    walks you through the basics of Litte and how to integrate it into your project.
                  </p>
                  <div className="flex items-center">
                    <Image
                      className="h-10 w-10 rounded-full"
                      src="https://avatars.githubusercontent.com/u/921834?v=4"
                      alt="Aris Ripandi"
                      width={40}
                      height={40}
                    />
                    <div className="ml-4 flex items-center">
                      <span className="font-medium text-sm">Aris Ripandi</span>
                      <span className="mx-2 sm:mx-4">
                        <svg
                          width={4}
                          height={4}
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx={2} cy={2} r={2} fill="#929C9A" />
                        </svg>
                      </span>
                      <span className="font-medium text-sm">7 min read</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <Link href="#" className="group block">
                <Image
                  className="mb-8 block rounded-2xl object-cover md:h-87"
                  src="https://images.unsplash.com/photo-1474183725112-79b6800d89a0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="TypeScript Best Practices"
                  width={640}
                  height={348}
                />
                <div className="pr-8">
                  <h4 className="mb-4 font-medium text-3xl transition duration-200 group-hover:text-teal-600">
                    TypeScript Tips for Component Libraries
                  </h4>
                  <p className="mb-6 text-gray-700 text-lg">
                    Discover how strict TypeScript improves maintainability and scalability in
                    Litte. Tips and patterns for robust component development.
                  </p>
                  <div className="flex items-center">
                    <Image
                      className="h-10 w-10 rounded-full"
                      src="https://avatars.githubusercontent.com/u/921834?v=4"
                      alt="Aris Ripandi"
                      width={40}
                      height={40}
                    />
                    <div className="ml-4 flex items-center">
                      <span className="font-medium text-sm">Aris Ripandi</span>
                      <span className="mx-2 sm:mx-4">
                        <svg
                          width={4}
                          height={4}
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx={2} cy={2} r={2} fill="#929C9A" />
                        </svg>
                      </span>
                      <span className="font-medium text-sm">6 min read</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="-mx-4 mt-12 flex flex-wrap">
            <div className="mb-12 w-full px-4 md:mb-0 md:w-1/2">
              <Link href="#" className="group block">
                <Image
                  className="mb-8 block rounded-2xl object-cover md:h-87"
                  src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=640&q=80"
                  alt="Component Design"
                  width={640}
                  height={348}
                />
                <div className="pr-8">
                  <h4 className="mb-4 font-medium text-3xl transition duration-200 group-hover:text-teal-600">
                    Designing Accessible Components with Litte
                  </h4>
                  <p className="mb-6 text-gray-700 text-lg">
                    Accessibility is key for modern web apps. Learn how Litte helps you build
                    accessible, inclusive UI components for everyone.
                  </p>
                  <div className="flex items-center">
                    <Image
                      className="h-10 w-10 rounded-full"
                      src="https://avatars.githubusercontent.com/u/921834?v=4"
                      alt="Aris Ripandi"
                      width={40}
                      height={40}
                    />
                    <div className="ml-4 flex items-center">
                      <span className="font-medium text-sm">Aris Ripandi</span>
                      <span className="mx-2 sm:mx-4">
                        <svg
                          width={4}
                          height={4}
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx={2} cy={2} r={2} fill="#929C9A" />
                        </svg>
                      </span>
                      <span className="font-medium text-sm">8 min read</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <Link href="#" className="group block">
                <Image
                  className="mb-8 block rounded-2xl object-cover md:h-87"
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=640&q=80"
                  alt="Release Notes"
                  width={640}
                  height={348}
                />
                <div className="pr-8">
                  <h4 className="mb-4 font-medium text-3xl transition duration-200 group-hover:text-teal-600">
                    Litte v3 Release: What’s New?
                  </h4>
                  <p className="mb-6 text-gray-700 text-lg">
                    Explore the latest features, improvements, and breaking changes in Litte v3.
                    Upgrade tips and migration guides for your projects.
                  </p>
                  <div className="flex items-center">
                    <Image
                      className="h-10 w-10 rounded-full"
                      src="https://avatars.githubusercontent.com/u/921834?v=4"
                      alt="Aris Ripandi"
                      width={40}
                      height={40}
                    />
                    <div className="ml-4 flex items-center">
                      <span className="font-medium text-sm">Aris Ripandi</span>
                      <span className="mx-2 sm:mx-4">
                        <svg
                          width={4}
                          height={4}
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx={2} cy={2} r={2} fill="#929C9A" />
                        </svg>
                      </span>
                      <span className="font-medium text-sm">5 min read</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SectionCTA />
      <FooterDocs />
    </div>
  )
}
