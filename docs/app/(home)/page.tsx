import Image, { type ImageProps } from 'next/image'
import { Button } from '#/components/button'

type ThemeImageProps = Omit<ImageProps, 'src'> & {
  srcLight: string
  srcDark: string
}

const ThemeImage = (props: ThemeImageProps) => {
  const { srcLight, srcDark, ...rest } = props

  return (
    <>
      <Image {...rest} src={srcLight} className="block dark:hidden" />
      <Image {...rest} src={srcDark} className="hidden dark:block" />
    </>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-8">
        <ThemeImage
          className="mb-6 h-10 w-auto"
          srcLight="turborepo-dark.svg"
          srcDark="turborepo-light.svg"
          alt="Turborepo logo"
          width={180}
          height={38}
          priority
        />
        <ol className="my-6 w-full max-w-xl list-inside list-decimal space-y-2 text-center text-gray-700 leading-relaxed dark:text-gray-200">
          <li>
            Get started by editing{' '}
            <code className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-800">
              apps/docs/app/(home)/page.tsx
            </code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="mb-8 flex gap-4">
          <a
            className="inline-flex items-center gap-2 rounded bg-black px-4 py-2 text-white transition hover:bg-gray-800"
            href="https://vercel.com/new/clone?demo-description=Learn+to+implement+a+monorepo+with+a+two+Next.js+sites+that+has+installed+three+local+packages.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F4K8ZISWAzJ8X1504ca0zmC%2F0b21a1c6246add355e55816278ef54bc%2FBasic.png&demo-title=Monorepo+with+Turborepo&demo-url=https%3A%2F%2Fexamples-basic-web.vercel.sh%2F&from=templates&project-name=Monorepo+with+Turborepo&repository-name=monorepo-turborepo&repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fturborepo%2Ftree%2Fmain%2Fexamples%2Fbasic&root-directory=apps%2Fdocs&skippable-integrations=1&teamSlug=vercel&utm_source=create-turbo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="h-5 w-5"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://turborepo.com/docs?utm_source"
            className="inline-flex items-center rounded bg-gray-200 px-4 py-2 text-gray-900 transition hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
        <Button variant="primary">Open alert</Button>
      </main>
      <footer className="flex justify-center gap-6 border-gray-200 border-t bg-gray-50 py-4 dark:border-gray-800 dark:bg-gray-900">
        <a
          href="https://vercel.com/templates?search=turborepo&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="inline-flex items-center gap-2 text-gray-700 hover:underline dark:text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <a
          href="https://turborepo.com?utm_source=create-turbo"
          className="inline-flex items-center gap-2 text-gray-700 hover:underline dark:text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to turborepo.com →
        </a>
      </footer>
    </div>
  )
}
