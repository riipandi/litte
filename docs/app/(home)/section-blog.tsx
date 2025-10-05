import Image from 'next/image'
import Link from 'next/link'

export default function SectionBlog() {
  return (
    <section className="relative py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="-mx-4 mb-20 flex flex-wrap items-center justify-between">
          <div className="mb-10 w-full px-4 sm:mb-0 sm:w-1/2">
            <h1 className="font-heading text-5xl sm:text-6xl">Blog</h1>
          </div>
          <div className="w-full px-4 sm:w-1/2 sm:text-right">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-teal-900 px-6 py-4 font-medium text-black text-lg transition duration-300 hover:bg-teal-900 hover:text-white"
            >
              <span className="mr-2">See all</span>
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.75 10H15.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 4.75L15.25 10L10 15.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="mb-8 w-full px-4 lg:mb-0 lg:w-1/2 xl:w-7/12">
            <div>
              <Image
                className="mb-8 block h-64 w-full rounded-3xl object-cover md:h-112"
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Blog main"
                width={800}
                height={448}
              />
              <div className="mb-6">
                <Link
                  href="#"
                  className="mr-2 inline-block rounded-full border px-2 font-medium text-sm hover:bg-gray-50"
                >
                  Solar Power
                </Link>
                <Link
                  href="#"
                  className="inline-block rounded-full border px-2 font-medium text-sm hover:bg-gray-50"
                >
                  Solutions
                </Link>
              </div>
              <Link href="#" className="group block max-w-2xl">
                <h3 className="mb-4 font-medium text-3xl transition duration-200 group-hover:text-teal-600">
                  Harnessing the Power of the Sun: Exploring the World of Solar Energy
                </h3>
                <p className="mb-6 text-gray-700 text-lg">
                  Solar energy is revolutionizing the way we power our world. In this blog post,
                  we'll delve into the incredible potential of solar technology, its
                  environmental...
                </p>
                <div className="flex items-center">
                  <Image
                    className="h-10 w-10 rounded-full"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Leslie Alexander"
                    width={40}
                    height={40}
                  />
                  <div className="ml-4 flex items-center">
                    <span className="font-medium text-sm">Leslie Alexander</span>
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
                    <span className="font-medium text-sm">9 min read</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="max-w-lg">
              <Link href="#" className="group mb-8 flex flex-wrap items-center sm:flex-nowrap">
                <Image
                  className="block h-44 w-44 rounded-2xl"
                  src="https://images.unsplash.com/photo-1525723550961-7a8f846d6ba7?auto=format&fit=crop&w=176&q=80"
                  alt="Wind Power"
                  width={176}
                  height={176}
                />
                <div className="mt-6 sm:mt-0 sm:ml-8">
                  <h3 className="mb-6 font-medium text-2xl transition duration-200 group-hover:text-teal-600">
                    Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts
                  </h3>
                  <div className="flex items-center">
                    <Image
                      className="h-8 w-8 rounded-full"
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Wade Warren"
                      width={32}
                      height={32}
                    />
                    <div className="ml-4 flex items-center">
                      <span className="font-medium text-sm">Wade Warren</span>
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
              <Link href="#" className="group mb-8 flex flex-wrap items-center sm:flex-nowrap">
                <Image
                  className="block h-44 w-44 rounded-2xl"
                  src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=176&q=80"
                  alt="Biomass Energy"
                  width={176}
                  height={176}
                />
                <div className="mt-6 sm:mt-0 sm:ml-8">
                  <h3 className="mb-6 font-medium text-2xl transition duration-200 group-hover:text-teal-600">
                    From Trash to Treasure: The Promising World of Biomass Energy
                  </h3>
                  <div className="flex items-center">
                    <Image
                      className="h-8 w-8 rounded-full"
                      src="https://randomuser.me/api/portraits/women/65.jpg"
                      alt="Jenny Wilson"
                      width={32}
                      height={32}
                    />
                    <div className="ml-4 flex items-center">
                      <span className="font-medium text-sm">Jenny Wilson</span>
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
              <Link href="#" className="group flex flex-wrap items-center sm:flex-nowrap">
                <Image
                  className="block h-44 w-44 rounded-2xl"
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=176&q=80"
                  alt="Hydrogen Energy"
                  width={176}
                  height={176}
                />
                <div className="mt-6 sm:mt-0 sm:ml-8">
                  <h3 className="mb-6 font-medium text-2xl transition duration-200 group-hover:text-teal-600">
                    Hydrogen: Fueling the Green Energy Revolution
                  </h3>
                  <div className="flex items-center">
                    <Image
                      className="h-8 w-8 rounded-full"
                      src="https://randomuser.me/api/portraits/men/44.jpg"
                      alt="Leslie Alexander"
                      width={32}
                      height={32}
                    />
                    <div className="ml-4 flex items-center">
                      <span className="font-medium text-sm">Leslie Alexander</span>
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
      </div>
    </section>
  )
}
