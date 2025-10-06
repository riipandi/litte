import cssnano from 'cssnano'

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [cssnano({ preset: 'default' })],
}

export default config
