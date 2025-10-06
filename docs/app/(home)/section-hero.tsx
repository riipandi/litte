'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../navigation'

export default function SectionHero() {
  return (
    <section>
      <Navigation />
      <div className="relative overflow-hidden bg-white py-32">
        {/* Overlay to prevent accent images from being selectable */}
        <div className="pointer-events-none absolute inset-0 z-20 select-none" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 z-0 select-none">
          <Image
            src="/waves-lines.png"
            alt=""
            fill
            priority
            className="h-full w-full object-cover object-top"
            draggable={false}
          />
        </div>
        <Image
          src="/lime-shadow.png"
          className="pointer-events-none absolute top-0 left-0 z-10 select-none"
          width={955}
          height={900}
          alt=""
          draggable={false}
        />
        <div className="container relative z-30 mx-auto px-4">
          <div className="mx-auto mb-12 max-w-lg py-8 text-center md:max-w-3xl lg:mb-0 xl:max-w-5xl">
            <div className="mb-6 py-2">
              <Link
                href="https://github.com/riipandi/litte"
                className="inline-flex items-center rounded-full border border-green-300 bg-green-100 px-5 py-1 text-green-900 hover:bg-green-100/70"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={12} height={12} rx={2} fill="#022C22" />
                  <circle cx={6} cy={6} r={4} fill="#BEF264" />
                </svg>
                <span className="ml-2 font-medium text-sm">Open source under the MIT License</span>
              </Link>
            </div>
            <h1 className="mb-6 font-heading font-semibold text-5xl xs:text-7xl xl:text-6xl xl:leading-16">
              Customizable design system <br className="hidden md:inline-block" />
              for <span className="text-lime-600">modern</span> web development.
            </h1>
            <p className="mb-10 text-gray-700 text-lg xl:text-xl">
              A modern web component library built with{' '}
              <Link
                href="https://lit.dev"
                className="font-semibold text-green-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lit
              </Link>{' '}
              and{' '}
              <Link
                href="https://www.typescriptlang.org"
                className="font-semibold text-green-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                TypeScript
              </Link>
              . It provides reusable, customizable UI components designed for fast development and
              easy integration in any web project.
            </p>
            <div className="flex flex-col justify-center sm:flex-row">
              <Link
                href="/docs"
                className="mb-3 inline-flex items-center justify-center rounded-full border border-teal-900 bg-teal-900 px-5 py-2.5 font-medium text-lg text-white transition duration-200 hover:border-lime-500 hover:bg-lime-500 hover:text-teal-900 sm:mr-4 sm:mb-0"
              >
                Get Started
              </Link>
              <Link
                href="/docs/components"
                className="inline-flex items-center justify-center rounded-full border border-teal-900 px-5 py-2.5 font-medium text-black text-lg transition duration-200 hover:bg-teal-900 hover:text-white"
              >
                View components
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
