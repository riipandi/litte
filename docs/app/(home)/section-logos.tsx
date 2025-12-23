import Image from 'next/image'

const LOGOS = [
  {
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=112&q=80',
    alt: 'Logo 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1465101178521-c1a6fce5b91e?auto=format&fit=crop&w=112&q=80',
    alt: 'Logo 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=112&q=80',
    alt: 'Logo 3',
  },
  {
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=112&q=80',
    alt: 'Logo 4',
  },
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=112&q=80',
    alt: 'Logo 5',
  },
  {
    src: 'https://images.unsplash.com/photo-1525723550961-7a8f846d6ba7?auto=format&fit=crop&w=112&q=80',
    alt: 'Logo 6',
  },
]

export default function SectionLogos() {
  return (
    <section className="py-12 lg:py-24 xl:py-20">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="mb-10 w-full px-4 lg:mb-0 lg:w-1/2">
            <div>
              <h4 className="font-heading text-4xl md:text-5xl">
                Works with the tools and frameworks we all love
              </h4>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="-mx-2 -mb-2 flex flex-wrap justify-between">
              {LOGOS.map((logo) => (
                <div key={logo.src} className="mb-2 w-1/2 px-2">
                  <div className="flex h-14 items-center justify-center rounded-lg bg-gray-50 px-12">
                    <Image
                      className="block h-7"
                      src={logo.src}
                      alt={logo.alt}
                      width={112}
                      height={28}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
