import {sveltekit} from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'

export default {
	plugins: [
		tailwindcss(),
		sveltekit(),
	],
	clearScreen: false,
	define: {
		APP_VERSION: JSON.stringify(process.env.npm_package_version),
	},
	server: {
		port: 1420,
		strictPort: true,
		allowedHosts: true,
		watch: {
			ignored: [
				'**/e2e/**',
				'**/docs/**',
				'**/bin/**',
				'**/playwright-report/**',
				'**/test-results/**',
			],
		},
	},
	test: {
		include: ['tests/**/*.{test,spec}.{js,ts}'],
		clearScreen: true,
		testTimeout: 500,
	},
}
