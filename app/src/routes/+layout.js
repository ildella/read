export async function load() {
	const appVersion = typeof APP_VERSION !== 'undefined' ? APP_VERSION : '0.0.0'
	const manifest = {
		name: 'Frankie Read',
		short_name: 'Read',
		start_url: '/read',
		display: 'standalone',
		background_color: '#ffffff',
		theme_color: '#3b82f6',
	}
	return {manifest, appVersion}
}
