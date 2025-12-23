import type { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FooterDocs } from '../../footer'
import Navigation from '../../navigation'
import SectionCTA from '../section-cta'
import { getAllBlogPosts } from './use-blog'

// Dynamic metadata based on blog post data
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params
  const posts = await getAllBlogPosts()
  const post = posts.find((post) => post.slug === slug)

  if (!post) {
    return { title: 'Blog Post Not Found' }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const posts = await getAllBlogPosts()
  const post = posts.find((p) => p.slug === slug)

  return (
    <div>
      <Navigation />

      <section className="pb-12 md:pb-24">
        <div className="relative pt-10 pb-80">
          <Image
            className="absolute top-0 left-0 h-full w-full object-cover"
            src={
              post?.coverImage ||
              'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80'
            }
            alt={post?.title || ''}
            width={1920}
            height={600}
            priority
          />
          <div className="container relative mx-auto px-4">
            <Link
              href="/blog"
              className="mb-14 inline-block font-medium text-lg hover:text-lime-600"
            >
              Back to blog
            </Link>
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-block rounded-full border border-gray-200 bg-white px-2 font-medium text-sm leading-5">
                Solar Power
              </span>
              <h2 className="mb-6 font-heading text-4xl xs:text-5xl tracking-xs md:text-6xl">
                {post?.title || 'Blog Post Not Found'}
              </h2>
              <div className="flex items-center justify-center">
                <span className="font-medium text-sm">9 min read</span>
                <span className="mx-3">
                  <svg
                    width={5}
                    height={4}
                    viewBox="0 0 5 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy={2} r={2} fill="#929C9A" />
                  </svg>
                </span>
                <span className="font-medium text-sm">December 11, 2025</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container relative mx-auto -mt-64 px-4">
          <div className="-mx-4 mb-18 flex flex-wrap">
            <div className="mb-6 w-full px-4 md:mb-0 md:w-1/6">
              <div className="flex flex-row items-center gap-4 md:flex-col md:items-start">
                <span className="block font-medium text-gray-700 text-sm">Author</span>
                <Image
                  className="block w-16 rounded-full"
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Leslie Alexander"
                  width={64}
                  height={64}
                />
                <div>
                  <span className="block font-medium">Leslie Alexander</span>
                  <span className="text-gray-700 text-sm">Solar energy specialist</span>
                </div>
              </div>
            </div>
            <div className="mb-6 w-full px-4 md:mb-0 md:w-4/6">
              <Image
                className="mx-auto block h-116 w-full max-w-3xl rounded-4xl object-cover"
                src={
                  post?.coverImage ||
                  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80'
                }
                alt={post?.title || ''}
                width={900}
                height={400}
              />
            </div>
            <div className="w-full px-4 md:w-auto">
              <div className="flex flex-row items-center justify-end gap-4 md:flex-col">
                <span className="block font-medium text-gray-700 text-sm md:mb-2">Share</span>
                <a href="#" className="inline-block text-gray-700 hover:text-lime-600">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_174_1147)">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45155C17.9652 6.27577 17.9613 6.09608 17.9535 5.9203C18.7566 5.33955 19.4496 4.62021 20 3.79608C19.2521 4.12883 18.458 4.34615 17.6449 4.44061C18.5011 3.92742 19.1421 3.12123 19.4492 2.17147C18.6438 2.6488 17.763 2.98551 16.8445 3.16718C16.2257 2.50963 15.4075 2.07426 14.5164 1.92838C13.6253 1.78249 12.711 1.93421 11.9148 2.36008C11.1186 2.78595 10.4848 3.46225 10.1115 4.28443C9.73825 5.1066 9.64619 6.02885 9.84961 6.90858C8.21874 6.82674 6.62328 6.40309 5.16665 5.66508C3.71002 4.92708 2.42474 3.8912 1.39414 2.6246C0.870333 3.5277 0.710047 4.59637 0.945859 5.61341C1.18167 6.63045 1.79589 7.51954 2.66367 8.09999C2.01219 8.0793 1.37498 7.9039 0.804688 7.58827V7.63905C0.804104 8.58679 1.13175 9.50549 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8276 2.85999 11.8517 2.2457 11.7328C2.50788 12.5479 3.01798 13.2607 3.70481 13.7719C4.39164 14.2831 5.22093 14.5672 6.07695 14.5844C4.62369 15.7259 2.82848 16.3451 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.282C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </a>
                <a href="#" className="inline-block text-gray-700 hover:text-lime-600">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_174_1149)">
                      <path
                        d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </a>
                <a href="#" className="inline-block text-gray-700 hover:text-lime-600">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4104 11.25L14.9881 7.63047H11.3761V5.28164C11.3761 4.29141 11.8807 3.32617 13.4984 3.32617H15.1404V0.244531C15.1404 0.244531 13.6503 0 12.2256 0C9.25103 0 7.30671 1.73359 7.30671 4.87187V7.63047H4.00024V11.25H7.30671V20H11.3761V11.25H14.4104Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a href="#" className="inline-block text-gray-700 hover:text-lime-600">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 10.75C8.82209 11.1806 9.23302 11.5369 9.70491 11.7947C10.1768 12.0525 10.6986 12.2058 11.235 12.2442C11.7713 12.2826 12.3097 12.2052 12.8135 12.0173C13.3173 11.8294 13.7748 11.5353 14.155 11.155L16.405 8.90497C17.0881 8.19772 17.4661 7.25046 17.4575 6.26722C17.449 5.28398 17.0546 4.34343 16.3593 3.64815C15.664 2.95287 14.7235 2.55849 13.7403 2.54995C12.757 2.5414 11.8098 2.91938 11.1025 3.60247L9.8125 4.88497"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.4999 9.24992C11.1778 8.81933 10.7669 8.46304 10.295 8.20522C9.8231 7.9474 9.30127 7.79409 8.76492 7.75567C8.22856 7.71726 7.69022 7.79465 7.1864 7.98259C6.68258 8.17053 6.22507 8.46462 5.84491 8.84492L3.59491 11.0949C2.91181 11.8022 2.53383 12.7494 2.54238 13.7327C2.55092 14.7159 2.94531 15.6565 3.64059 16.3517C4.33587 17.047 5.27641 17.4414 6.25965 17.45C7.24289 17.4585 8.19015 17.0805 8.89741 16.3974L10.1799 15.1149"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-lg lg:max-w-2xl">
            <p className="mb-4 text-lg">
              In a world increasingly concerned with environmental sustainability and the search for
              renewable energy sources, solar power has emerged as a shining star. Harnessing the
              power of the sun, solar energy offers a clean and inexhaustible solution to our
              growing energy needs.
            </p>
            <p className="mb-16 text-lg">
              This article delves into the fascinating world of solar energy, exploring its
              mechanisms, benefits, and the transformative impact it can have on our planet.
            </p>
            <h4 className="mb-8 font-medium text-3xl">The Basics of Solar Energy</h4>
            <h5 className="mb-6 font-medium text-xl">1. Photovoltaic Cells</h5>
            <div className="mb-6 inline-flex">
              <span className="pt-2">
                <svg
                  width={8}
                  height={8}
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={4} cy={4} r={4} fill="#BEF264" />
                </svg>
              </span>
              <p className="ml-4 text-lg">
                Solar panels are made up of photovoltaic (PV) cells that convert sunlight into
                electricity.
              </p>
            </div>
            <div className="mb-8 inline-flex">
              <span className="pt-2">
                <svg
                  width={8}
                  height={8}
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={4} cy={4} r={4} fill="#BEF264" />
                </svg>
              </span>
              <p className="ml-4 text-lg">
                When sunlight hits the PV cells, it excites electrons, generating an electric
                current.
              </p>
            </div>
            <h5 className="mb-6 font-medium text-xl">2. Solar Thermal Systems</h5>
            <div className="mb-6 inline-flex">
              <span className="pt-2">
                <svg
                  width={8}
                  height={8}
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={4} cy={4} r={4} fill="#BEF264" />
                </svg>
              </span>
              <p className="ml-4 text-lg">
                Concentrated solar power (CSP) systems use mirrors or lenses to focus sunlight onto
                a small area, producing heat that can then be used to generate electricity.
              </p>
            </div>
            <h5 className="mb-6 font-medium text-xl">3. Net Metering</h5>
            <div className="mb-16 inline-flex">
              <span className="pt-2">
                <svg
                  width={8}
                  height={8}
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={4} cy={4} r={4} fill="#BEF264" />
                </svg>
              </span>
              <p className="ml-4 text-lg">
                Solar energy systems often incorporate net metering, allowing users to sell excess
                electricity back to the grid, promoting energy efficiency.
              </p>
            </div>
            <div className="mb-16 rounded-2xl bg-teal-900 px-5 xs:px-10 py-10">
              <h4 className="mb-10 font-medium text-3xl text-white">
                Your Source for Green Energy Updates
              </h4>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  className="h-14 w-full rounded-full px-4 py-3 placeholder-gray-700 shadow outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500"
                  placeholder="Your e-mail..."
                />
                <a
                  href="#"
                  className="mt-3 inline-flex h-14 flex-shrink-0 items-center justify-center rounded-full border border-lime-500 bg-lime-500 px-6 py-2 font-medium text-black text-lg transition duration-200 hover:border-black hover:bg-black hover:text-white sm:mt-0 sm:ml-2"
                >
                  Get in touch
                </a>
              </div>
            </div>
            <div>
              <svg
                width={26}
                height={24}
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.80102 0C8.08512 0 9.03652 1.19287 8.75093 2.44482L6.96252 10.2845C6.68458 11.5029 7.61049 12.6638 8.86018 12.6638C9.93515 12.6638 10.8066 13.5353 10.8066 14.6102V22C10.8066 23.1046 9.91115 24 8.80658 24H2C0.895431 24 0 23.1046 0 22V15.5601C0 15.4 0.0192064 15.2406 0.0572071 15.0851L3.37204 1.52507C3.5909 0.629802 4.3932 0 5.31484 0H6.80102ZM21.9944 0C23.2785 0 24.2299 1.19287 23.9443 2.44482L22.1559 10.2845C21.878 11.5029 22.8039 12.6638 24.0536 12.6638C25.1286 12.6638 26 13.5353 26 14.6102V22C26 23.1046 25.1046 24 24 24H17.1934C16.0888 24 15.1934 23.1046 15.1934 22V15.5601C15.1934 15.4 15.2126 15.2406 15.2506 15.0851L18.5655 1.52507C18.7843 0.629802 19.5866 0 20.5083 0H21.9944Z"
                  fill="#BEF264"
                />
              </svg>
              <p className="mt-8 mb-8 font-medium text-2xl text-teal-800">
                “Thanks to Flow, my energy is now solar-powered – sustainable, efficient, and
                exceptional service.”
              </p>
              <div className="mb-16 flex items-center">
                <Image
                  className="w-16 rounded-full"
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt=""
                  width={64}
                  height={64}
                />
                <div className="ml-6">
                  <span className="block font-medium text-xl">Cody Fisher</span>
                  <span className="text-gray-700 text-sm">Solar energy service</span>
                </div>
              </div>
              <Image
                className="mx-auto mb-16 block h-112 w-full max-w-3xl rounded-4xl object-cover"
                src="https://images.unsplash.com/photo-1563693998336-93c10e5d8f91?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                width={900}
                height={400}
              />
              <h4 className="mb-8 font-medium text-3xl">The Basics of Solar Energy</h4>
              <p className="mb-4 text-lg">
                As technology advances, the potential for solar energy continues to grow.
                Innovations in materials, storage, and efficiency are making solar power more
                accessible and affordable for individuals and businesses alike.
              </p>
              <p className="mb-4 text-lg">
                Governments and organizations worldwide are investing in solar research and
                development, recognizing its pivotal role in creating a sustainable future.
              </p>
              <p className="mb-4 text-lg">
                Harnessing the power of the sun through solar energy represents a significant stride
                towards a cleaner, more sustainable future. As we explore and invest in this
                remarkable technology, we move closer to a world where our energy needs are met
                without compromising the health of our planet.
              </p>
              <p className="mb-18 text-lg">
                Solar energy is not just a technological advancement; it is a beacon of hope for a
                greener, more sustainable world.
              </p>
            </div>
          </div>
          <div className="-mx-4 mb-24 flex flex-wrap">
            <div className="hidden lg:block lg:w-1/6 lg:px-4" />
            <div className="mb-6 w-full px-4 md:mb-0 md:w-5/6 lg:w-4/6">
              <div className="mx-auto w-full max-w-3xl rounded-2xl bg-orange-50 px-5 xs:px-10 py-8">
                <div className="md:flex">
                  <div className="flex-shrink-0">
                    <Image
                      className="block h-18 w-18 rounded-full"
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Leslie Alexander"
                      width={72}
                      height={72}
                    />
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-8">
                    <span className="block font-medium text-lg">Leslie Alexander</span>
                    <span className="mb-4 block text-gray-700">Solar energy specialist</span>
                    <p className="mb-4 text-lg">
                      Leslie Alexander is a distinguished Solar Energy Specialist at the forefront
                      of the renewable energy revolution. With a passion for sustainable technology
                      and a commitment to addressing the global energy crisis, Leslie has dedicated
                      her career to advancing the field of solar energy.
                    </p>
                    <a href="#" className="inline-block text-gray-700 hover:text-lime-600">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_174_1224)">
                          <path
                            d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                            fill="currentColor"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/6 lg:w-auto">
              <div className="flex flex-row items-center justify-end gap-4 md:flex-col md:gap-2">
                <span className="mb-6 block font-medium text-gray-700 text-sm">Share</span>
                <a href="#" className="mb-4 inline-block text-gray-700 hover:text-lime-600">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_174_1147)">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45155C17.9652 6.27577 17.9613 6.09608 17.9535 5.9203C18.7566 5.33955 19.4496 4.62021 20 3.79608C19.2521 4.12883 18.458 4.34615 17.6449 4.44061C18.5011 3.92742 19.1421 3.12123 19.4492 2.17147C18.6438 2.6488 17.763 2.98551 16.8445 3.16718C16.2257 2.50963 15.4075 2.07426 14.5164 1.92838C13.6253 1.78249 12.711 1.93421 11.9148 2.36008C11.1186 2.78595 10.4848 3.46225 10.1115 4.28443C9.73825 5.1066 9.64619 6.02885 9.84961 6.90858C8.21874 6.82674 6.62328 6.40309 5.16665 5.66508C3.71002 4.92708 2.42474 3.8912 1.39414 2.6246C0.870333 3.5277 0.710047 4.59637 0.945859 5.61341C1.18167 6.63045 1.79589 7.51954 2.66367 8.09999C2.01219 8.0793 1.37498 7.9039 0.804688 7.58827V7.63905C0.804104 8.58679 1.13175 9.50549 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8276 2.85999 11.8517 2.2457 11.7328C2.50788 12.5479 3.01798 13.2607 3.70481 13.7719C4.39164 14.2831 5.22093 14.5672 6.07695 14.5844C4.62369 15.7259 2.82848 16.3451 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.282C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </a>
                <a href="#" className="mb-4 inline-block text-gray-700 hover:text-lime-600">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_174_1149)">
                      <path
                        d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </a>
                <a href="#" className="mb-4 inline-block text-gray-700 hover:text-lime-600">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4104 11.25L14.9881 7.63047H11.3761V5.28164C11.3761 4.29141 11.8807 3.32617 13.4984 3.32617H15.1404V0.244531C15.1404 0.244531 13.6503 0 12.2256 0C9.25103 0 7.30671 1.73359 7.30671 4.87187V7.63047H4.00024V11.25H7.30671V20H11.3761V11.25H14.4104Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a href="#" className="mb-4 inline-block text-gray-700 hover:text-lime-600">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 10.75C8.82209 11.1806 9.23302 11.5369 9.70491 11.7947C10.1768 12.0525 10.6986 12.2058 11.235 12.2442C11.7713 12.2826 12.3097 12.2052 12.8135 12.0173C13.3173 11.8294 13.7748 11.5353 14.155 11.155L16.405 8.90497C17.0881 8.19772 17.4661 7.25046 17.4575 6.26722C17.449 5.28398 17.0546 4.34343 16.3593 3.64815C15.664 2.95287 14.7235 2.55849 13.7403 2.54995C12.757 2.5414 11.8098 2.91938 11.1025 3.60247L9.8125 4.88497"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.4999 9.24992C11.1778 8.81933 10.7669 8.46304 10.295 8.20522C9.8231 7.9474 9.30127 7.79409 8.76492 7.75567C8.22856 7.71726 7.69022 7.79465 7.1864 7.98259C6.68258 8.17053 6.22507 8.46462 5.84491 8.84492L3.59491 11.0949C2.91181 11.8022 2.53383 12.7494 2.54238 13.7327C2.55092 14.7159 2.94531 15.6565 3.64059 16.3517C4.33587 17.047 5.27641 17.4414 6.25965 17.45C7.24289 17.4585 8.19015 17.0805 8.89741 16.3974L10.1799 15.1149"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <svg
              width={8}
              height={8}
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx={4} cy={4} r={4} fill="#022C22" />
            </svg>
            <span className="ml-2 inline-block font-medium text-sm text-teal-900">About us</span>
          </div>
          <div className="border-t pt-16">
            <div className="mx-auto max-w-lg lg:max-w-none">
              <div className="-mx-4 flex flex-wrap">
                <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/3">
                  <Link href="#" className="block">
                    <Image
                      className="mb-8 block h-72 w-full rounded-2xl object-cover"
                      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                      alt="Solar Energy"
                      width={400}
                      height={288}
                    />
                    <div>
                      <h4 className="mb-4 font-medium text-3xl">
                        Harnessing the Power of the Sun: Exploring the World of Solar Energy
                      </h4>
                      <p className="mb-6 text-gray-700 text-lg">
                        Solar energy is revolutionizing the way we power our world. In this blog
                        post, we'll del...
                      </p>
                      <div className="flex items-center">
                        <Image
                          className="block h-10 w-10 rounded-full"
                          src="https://randomuser.me/api/portraits/women/44.jpg"
                          alt="Leslie Alexander"
                          width={40}
                          height={40}
                        />
                        <div className="ml-4 flex items-center">
                          <span className="font-medium text-sm">Leslie Alexander</span>
                          <span className="mx-4">
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
                    </div>
                  </Link>
                </div>
                <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/3">
                  <Link href="#" className="block">
                    <Image
                      className="mb-8 block h-72 w-full rounded-2xl object-cover"
                      src="https://images.unsplash.com/photo-1474183725112-79b6800d89a0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Wind Power"
                      width={400}
                      height={288}
                    />
                    <div>
                      <h4 className="mb-4 font-medium text-3xl">
                        Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts
                      </h4>
                      <p className="mb-6 text-gray-700 text-lg">
                        Solar energy is revolutionizing the way we power our world. In this blog
                        post, we'll del...
                      </p>
                      <div className="flex items-center">
                        <Image
                          className="block h-10 w-10 rounded-full"
                          src="https://randomuser.me/api/portraits/women/65.jpg"
                          alt="Jenny Wilson"
                          width={40}
                          height={40}
                        />
                        <div className="ml-4 flex items-center">
                          <span className="font-medium text-sm">Jenny Wilson</span>
                          <span className="mx-4">
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
                    </div>
                  </Link>
                </div>
                <div className="w-full px-4 lg:w-1/3">
                  <Link href="#" className="block">
                    <Image
                      className="mb-8 block h-72 w-full rounded-2xl object-cover"
                      src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                      alt="Biomass Energy"
                      width={400}
                      height={288}
                    />
                    <div>
                      <h4 className="mb-4 font-medium text-3xl">
                        From Trash to Treasure: The Promising World of Biomass Energy
                      </h4>
                      <p className="mb-6 text-gray-700 text-lg">
                        Solar energy is revolutionizing the way we power our world. In this blog
                        post, we'll del...
                      </p>
                      <div className="flex items-center">
                        <Image
                          className="block h-10 w-10 rounded-full"
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          alt="Wade Warren"
                          width={40}
                          height={40}
                        />
                        <div className="ml-4 flex items-center">
                          <span className="font-medium text-sm">Wade Warren</span>
                          <span className="mx-4">
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
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionCTA />
      <FooterDocs />
    </div>
  )
}
