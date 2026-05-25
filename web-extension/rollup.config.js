import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import replace from '@rollup/plugin-replace'
import generateManifest from './manifest/plugin.js'

// WEBAPP_URL=http://localhost:1420 && API_URL=http://localhost:5555 &&
const isFirefox = process.env.WEB_EXTENSION_RUNTIME_BROWSER === 'firefox'
const isDev = process.env.WEB_EXTENSION_RUNTIME_MODE === 'development'
const webAppUrl = isDev
  ? 'http://localhost:1420'
  : `https://chat.${process.env.FRANKIE_DOMAIN}`
const apiUrl = isDev
  ? 'http://localhost:5555'
  : `https://api.${process.env.FRANKIE_DOMAIN}`

console.debug('Rollup:', {
  isDev, isFirefox, webAppUrl, apiUrl,
})

const plugins = [
  resolve({browser: true}),
  commonjs(),
  json(),
  replace({
    'preventAssignment': true,
    'process.env.WEBAPP_URL': JSON.stringify(webAppUrl),
    'process.env.API_URL': JSON.stringify(apiUrl),
    '__buildDate__': () => JSON.stringify(new Date()),
    '__buildVersion': 15,
  }),
  generateManifest({isFirefox, isDev}),
]

module.exports = [
  {
    input: 'src/background.js',
    output: {
      name: 'frankie',
      format: 'umd',
      file: 'dist/background-bundle.js',
      // format: 'es',
      // format: 'cjs',
      // format: 'iife',
      inlineDynamicImports: true,
    },
    external: ['cssom'], // optional based on usage
    plugins,
  },
  // {
  //   input: 'src/content-script.js',
  //   output: {
  //     file: 'dist/content-script-bundle.js',
  //     format: 'iife', // IIFE or UMD is fine here if it runs in a page context
  //   },
  //   plugins,
  // },
]
