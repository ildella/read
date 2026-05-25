import adapter from '@sveltejs/adapter-static'
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte'
import {execSync} from 'node:child_process'

let version = 'dev'
try {
	version = execSync('git rev-parse HEAD').toString().trim()
} catch {
	// not a git repo
}

const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html',
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true,
		}),
		serviceWorker: {register: false},
		version: {
			name: version,
			pollInterval: 5000,
		},
	},
	preprocess: [vitePreprocess()],
}

export default config
