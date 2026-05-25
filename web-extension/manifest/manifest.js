// const base = require('./base.js')
import base from './base.js'

const isFirefox = process.env.WEB_EXTENSION_RUNTIME_BROWSER === 'firefox'
const isDev = process.env.WEB_EXTENSION_RUNTIME_MODE === 'development'

const csp = isDev
  ? 'default-src \'self\'; script-src \'self\'; object-src \'none\'; connect-src http://localhost:5555/backend/import/content/json ws://localhost:* https://*.frankie.tools wss://*.frankie.tools;'
  : 'default-src \'self\'; script-src \'self\'; object-src \'none\'; connect-src https://*.frankie.tools wss://*.frankie.tools;'

const manifest = {
  ...base,
  background: isFirefox
    ? {scripts: ['dist/background-bundle.js']}
    : {service_worker: 'dist/background-bundle.js'},
  content_security_policy: {
    extension_pages: csp,
  },
}

if (isFirefox) {
  manifest.browser_specific_settings = {
    gecko_android: {
      strict_min_version: '113.0',
    },
    gecko: {
      id: 'webextension@frankie-gpt.com',
    },
  }
}

export default manifest
