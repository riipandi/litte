export default function SectionCTA() {
  return (
    <section>
      <div className="p-4">
        <div className="mx-auto max-w-xl rounded-2xl px-5 py-16 md:px-12 lg:max-w-5xl xl:max-w-none xl:px-24">
          <div className="container mx-auto px-4">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="mb-8 w-full px-4 lg:mb-0 lg:w-2/3">
                <div className="max-w-md xl:max-w-none">
                  <h1 className="mb-6 font-heading text-4xl xs:text-5xl tracking-sm sm:text-6xl">
                    Join the green movement
                  </h1>
                  <p className="text-gray-700 text-lg">
                    Our commitment to green energy is paving the way for a cleaner, healthier
                    planet.{' '}
                  </p>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/3 lg:text-right">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-teal-900 bg-teal-900 px-6 py-4 font-medium text-lg text-white transition duration-200 hover:border-lime-500 hover:bg-lime-500 hover:text-teal-900"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
