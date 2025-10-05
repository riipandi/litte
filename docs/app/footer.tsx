import Image from 'next/image'
import Link from 'next/link'

const FOOTER_NAV_ITEMS = [
  { label: 'Documentation', href: '/docs' },
  { label: 'Components', href: '/docs/components' },
  { label: 'Changelog', href: '/docs/changelog' },
  // { label: 'Blog', href: '/blog' },
]

export function FooterHome() {
  return (
    <section className="bg-teal-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-xl xl:max-w-none">
          <div className="relative flex flex-wrap items-center justify-between py-12">
            <Link href="#" className="inline-block">
              <Image
                src="/brand/text-mark-dark.svg"
                width={80}
                height={38}
                className="h-8"
                alt=""
              />
            </Link>
            <ul className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 hidden transform xl:flex">
              {FOOTER_NAV_ITEMS.map((item, idx) => (
                <li key={item.label} className={idx < FOOTER_NAV_ITEMS.length - 1 ? 'mr-16' : ''}>
                  <Link
                    className="inline-block font-medium text-white hover:text-lime-500"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-end">
              <Link href="#" className="mr-4 inline-block text-white opacity-80 hover:opacity-100">
                <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_282_7847)">
                    <path
                      d="M11.548 19.9999V10.8776H14.6087L15.0679 7.32146H11.548V5.05136C11.548 4.02209 11.8326 3.32066 13.3103 3.32066L15.1918 3.31988V0.139123C14.8664 0.0968385 13.7495 -0.000106812 12.4495 -0.000106812C9.73488 -0.000106812 7.87642 1.65686 7.87642 4.69916V7.32146H4.8064V10.8776H7.87642V19.9999H11.548Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </Link>
              <Link href="#" className="mr-4 inline-block text-white opacity-80 hover:opacity-100">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <Link href="#" className="inline-block text-white opacity-80 hover:opacity-100">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
            <div className="mt-8 w-full xl:hidden">
              <ul className="-mb-4 flex flex-wrap xs:justify-between">
                {FOOTER_NAV_ITEMS.map((item, idx) => (
                  <li
                    key={item.label}
                    className={idx < FOOTER_NAV_ITEMS.length - 1 ? 'mr-8 mb-4' : 'mb-4'}
                  >
                    <Link
                      className="inline-block font-medium text-white hover:text-lime-500"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FooterDocs() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-xl xl:max-w-none">
          <div className="relative flex flex-wrap items-center justify-between py-12">
            <Link href="#" className="inline-block">
              <Image
                src="/brand/text-mark-light.svg"
                width={80}
                height={38}
                className="h-8"
                alt=""
              />
            </Link>
            <ul className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 hidden transform xl:flex">
              {FOOTER_NAV_ITEMS.map((item, idx) => (
                <li key={item.label} className={idx < FOOTER_NAV_ITEMS.length - 1 ? 'mr-16' : ''}>
                  <Link
                    className="inline-block font-medium text-teal-900 hover:text-lime-500"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-end">
              <Link href="#" className="mr-4 inline-block text-gray-950/80 hover:opacity-100">
                <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_282_7847)">
                    <path
                      d="M11.548 19.9999V10.8776H14.6087L15.0679 7.32146H11.548V5.05136C11.548 4.02209 11.8326 3.32066 13.3103 3.32066L15.1918 3.31988V0.139123C14.8664 0.0968385 13.7495 -0.000106812 12.4495 -0.000106812C9.73488 -0.000106812 7.87642 1.65686 7.87642 4.69916V7.32146H4.8064V10.8776H7.87642V19.9999H11.548Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </Link>
              <Link href="#" className="mr-4 inline-block text-gray-950/80 hover:opacity-100">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <Link href="#" className="inline-block text-gray-950/80 hover:opacity-100">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
            <div className="mt-8 w-full xl:hidden">
              <ul className="-mb-4 flex flex-wrap xs:justify-between">
                {FOOTER_NAV_ITEMS.map((item, idx) => (
                  <li
                    key={item.label}
                    className={idx < FOOTER_NAV_ITEMS.length - 1 ? 'mr-8 mb-4' : 'mb-4'}
                  >
                    <Link
                      className="inline-block font-medium text-teal-900 hover:text-teal-700"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
