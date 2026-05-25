// const packageJson = require('../package.json')
// import packageJson from '../package.json' assert { type: 'json' }
import packageJson from '../package.json' with { type: 'json' }
// console.log(packageJson)

export default {
  manifest_version: 3,
  name: 'Frankie',
  // version: '1.9.5',
  version: packageJson.version,
  description: 'Save Web pages to Frankie for Offline read and private AI chat.',
  author: 'Daniele Dellafiore',
  homepage_url: 'https://frankie.tools/',
  permissions: ['storage', 'activeTab'],
  icons: {
    16: 'icons/favicon-16x16.png',
    32: 'icons/favicon-32x32.png',
    64: 'icons/favicon-64x64.png',
    128: 'icons/favicon-128x128.png',
  },
  action: {
    default_title: 'Frankie',
    default_icon: {
      16: 'icons/favicon-16x16.png',
      32: 'icons/favicon-32x32.png',
      64: 'icons/favicon-64x64.png',
      128: 'icons/favicon-128x128.png',
    },
    theme_icons: [
      {
        light: 'icons/favicon-32x32.png',
        dark: 'icons/favicon-32x32.png',
        size: 32,
      },
      {
        light: 'icons/favicon-64x64.png',
        dark: 'icons/favicon-64x64.png',
        size: 64,
      },
      {
        light: 'icons/favicon-128x128.png',
        dark: 'icons/favicon-128x128.png',
        size: 128,
      },
    ],
  },
  commands: {
    'my-command': {
      suggested_key: {
        default: 'Ctrl+Shift+V',
        mac: 'Command+Shift+V',
      },
      description: 'Parse page and send content to your Frankie account.',
    },
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['src/content-script.js'],
    },
  ],
}
