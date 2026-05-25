// const {writeFileSync} = require('fs')
// const {join} = require('path')
import {writeFileSync} from 'fs'
import {join} from 'path'

export const generateManifest = () => ({
  name: 'generate-manifest',
  writeBundle () {
    const manifest = require('./manifest/manifest.js')
    const manifestContent = JSON.stringify(manifest, null, 2)
    const outputPath = join(process.cwd(), 'manifest.json')
    writeFileSync(outputPath, manifestContent)
  },
})

export default generateManifest
