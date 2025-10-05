export default function SectionStats() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-20 max-w-xl">
          <h2 className="mb-20 font-heading text-4xl xs:text-5xl sm:text-6xl">
            We are committed to a sustainable future
          </h2>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="mb-10 w-full px-4 sm:w-1/3 md:mb-0">
            <div className="border-lime-500 border-t-2 pt-8">
              <h5 className="mb-4 text-2xl xs:text-3xl lg:text-4xl xl:text-5xl">5,000 Mwh</h5>
              <span className="text-base text-gray-700 lg:text-lg">Renewable Energy Generated</span>
            </div>
          </div>
          <div className="mb-10 w-full px-4 sm:w-1/3 md:mb-0">
            <div className="border-lime-500 border-t-2 pt-8">
              <h5 className="mb-4 text-2xl xs:text-3xl lg:text-4xl xl:text-5xl">2,500+</h5>
              <span className="text-base text-gray-700 lg:text-lg">Renewable Energy Generated</span>
            </div>
          </div>
          <div className="mb-10 w-full px-4 sm:mb-0 sm:w-1/3">
            <div className="border-lime-500 border-t-2 pt-8">
              <h5 className="mb-4 text-2xl xs:text-3xl lg:text-4xl xl:text-5xl">10,000+</h5>
              <span className="text-base text-gray-700 lg:text-lg">Renewable Energy Generated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
