import Link from 'next/link'

export default function SectionFAQ() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-4 flex items-center">
          <svg
            width={8}
            height={8}
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={4} cy={4} r={4} fill="#BEF264" />
          </svg>
          <span className="ml-2 inline-block font-medium text-sm text-teal-900">FAQ</span>
        </div>
        <div className="border-t pt-16">
          <div className="-mx-4 flex flex-wrap">
            <div className="mb-16 w-full px-4 lg:mb-0 lg:w-1/2">
              <div className="flex h-full max-w-sm flex-col sm:max-w-lg">
                <h1 className="mb-16 font-heading text-4xl sm:text-6xl">
                  Answers to the frequently asked questions.
                </h1>
                <div className="mt-auto">
                  <div className="mb-8">
                    <svg
                      width={48}
                      height={48}
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                        fill="#BEF264"
                      />
                      <path
                        d="M13.676 15.5617C11.7951 17.8602 10.6666 20.7983 10.6666 24C10.6666 27.2017 11.7951 30.1398 13.6761 32.4383L18.9201 27.1943C18.3372 26.2694 18 25.174 18 24C18 22.8259 18.3372 21.7306 18.92 20.8057L13.676 15.5617Z"
                        fill="#022C22"
                      />
                      <path
                        d="M15.5616 13.6761L20.8056 18.9201C21.7306 18.3372 22.8259 18 24 18C25.174 18 26.2694 18.3372 27.1943 18.9201L32.4383 13.6761C30.1398 11.7951 27.2017 10.6666 24 10.6666C20.7982 10.6666 17.8601 11.7951 15.5616 13.6761Z"
                        fill="#022C22"
                      />
                      <path
                        d="M34.3239 15.5617L29.0799 20.8057C29.6628 21.7307 30 22.8259 30 24C30 25.174 29.6627 26.2693 29.0799 27.1943L34.3238 32.4383C36.2048 30.1398 37.3333 27.2017 37.3333 24C37.3333 20.7983 36.2048 17.8602 34.3239 15.5617Z"
                        fill="#022C22"
                      />
                      <path
                        d="M32.4382 34.3239L27.1942 29.0799C26.2693 29.6628 25.174 30 24 30C22.8259 30 21.7307 29.6628 20.8057 29.0799L15.5617 34.3239C17.8602 36.2048 20.7983 37.3333 24 37.3333C27.2016 37.3333 30.1397 36.2048 32.4382 34.3239Z"
                        fill="#022C22"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-4 font-medium text-xl">Still have questions?</h5>
                    <p className="text-gray-700">
                      <span>For assistance, please visit our</span>
                      <Link href="#" className="inline-block font-medium text-black underline">
                        Contact Us
                      </Link>
                      <span>page or call our customer support hotline at</span>
                      <span className="font-medium text-black">(671) 555-0110</span>
                      <span>
                        . Our dedicated team is ready to help you on your journey to a greener, more
                        sustainable future.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div>
                <button
                  type="button"
                  className="mb-4 flex w-full items-start justify-between rounded-2xl px-8 py-6 text-left shadow-md"
                >
                  <div className="pr-5">
                    <h5 className="font-medium text-lg">What is green energy?</h5>
                    <div className="h-0 overflow-hidden duration-500">
                      <p className="mt-4 text-gray-700">
                        We provide a range of green energy solutions, including solar power systems,
                        wind turbines, energy-efficient appliances.
                      </p>
                    </div>
                  </div>
                  <span className="flex-shrink-0">
                    <div>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 5.69995V18.3"
                          stroke="#1D1F1E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.69995 12H18.3"
                          stroke="#1D1F1E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="hidden">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.69995 12H18.3"
                          stroke="#1D1F1E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </span>
                </button>
                <button
                  type="button"
                  className="mb-4 flex w-full items-start justify-between rounded-2xl px-8 py-6 text-left shadow-md"
                >
                  <div className="pr-5">
                    <h5 className="font-medium text-lg">
                      How does green energy benefit the environment?
                    </h5>
                    <div className="h-0 overflow-hidden duration-500">
                      <p className="mt-4 text-gray-700">
                        We provide a range of green energy solutions, including solar power systems,
                        wind turbines, energy-efficient appliances.
                      </p>
                    </div>
                  </div>
                  <span className="flex-shrink-0">
                    <div>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 5.69995V18.3"
                          stroke="#1D1F1E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.69995 12H18.3"
                          stroke="#1D1F1E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="hidden">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.69995 12H18.3"
                          stroke="#1D1F1E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </span>
                </button>
                <button
                  type="button"
                  className="mb-4 flex w-full items-start justify-between rounded-2xl px-8 py-6 text-left shadow-md"
                >
                  <div className="pr-5">
                    <h5 className="font-medium text-lg">
                      What green energy solutions does your company offer?
                    </h5>
                    <div className="h-0 overflow-hidden duration-500">
                      <p className="mt-4 text-gray-700">
                        We provide a range of green energy solutions, including solar power systems,
                        wind turbines, energy-efficient appliances, and smart home technologies to
                        enhance energy sustainability.
                      </p>
                    </div>
                  </div>
                  <span className="flex-shrink-0">
                    <div>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 5.69995V18.3"
                          stroke="#1D1F1E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.69995 12H18.3"
                          stroke="#1D1F1E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="hidden">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.69995 12H18.3"
                          stroke="#1D1F1E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </span>
                </button>
                <button
                  type="button"
                  className="mb-4 flex w-full items-start justify-between rounded-2xl px-8 py-6 text-left shadow-md"
                >
                  <div className="pr-5">
                    <h5 className="font-medium text-lg">
                      What support services do you offer after installing green energy solutions?
                    </h5>
                    <div className="h-0 overflow-hidden duration-500">
                      <p className="mt-4 text-gray-700">
                        We provide a range of green energy solutions, including solar power systems,
                        wind turbines, energy-efficient appliances, and smart home technologies to
                        enhance energy sustainability.
                      </p>
                    </div>
                  </div>
                  <span className="flex-shrink-0">
                    <div>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 5.69995V18.3"
                          stroke="#1D1F1E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.69995 12H18.3"
                          stroke="#1D1F1E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="hidden">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.69995 12H18.3"
                          stroke="#1D1F1E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </span>
                </button>
                <button
                  type="button"
                  className="mb-4 flex w-full items-start justify-between rounded-2xl px-8 py-6 text-left shadow-md"
                >
                  <div className="pr-5">
                    <h5 className="font-medium text-lg">How do solar panels work?</h5>
                    <div className="h-0 overflow-hidden duration-500">
                      <p className="mt-4 text-gray-700">
                        We provide a range of green energy solutions, including solar power systems,
                        wind turbines, energy-efficient appliances.
                      </p>
                    </div>
                  </div>
                  <span className="flex-shrink-0">
                    <div>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 5.69995V18.3"
                          stroke="#1D1F1E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.69995 12H18.3"
                          stroke="#1D1F1E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="hidden">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.69995 12H18.3"
                          stroke="#1D1F1E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
