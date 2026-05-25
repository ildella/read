import {deepmerge} from 'deepmerge-ts'
import {browser} from '$app/environment'

const defaults = {
	article: {
		text: {rem: 1, size: 1, style: 'text-lg'},
		backround: {rgba: '255,_251,_235,_1'},
	},
}

export async function load({parent}) {
	const {manifest: parentManifest, appVersion} = await parent()
	const storedPreferences = browser ? (localStorage.getItem('app.preferences') || '{}') : '{}'
	const preferences = deepmerge(defaults, JSON.parse(storedPreferences))
	if (browser) {
		localStorage.setItem('app.preferences', JSON.stringify(preferences))
	}
	const manifest = {
		...parentManifest,
		start_url: `${parentManifest.start_url}`,
		id: `/read/v${appVersion}`,
		name: 'Frankie Read',
		short_name: 'Read',
	}
	const appButtons = [
		{
			id: 'queue',
			href: '/read/queue',
			label: 'Queue',
			iconPath: 'svg/queue-svgrepo-com.svg',
		},
		{
			id: 'read',
			href: '/read/articles',
			label: 'Articles',
			iconPath: 'svg/bookmark-svgrepo.com.svg',
		},
		{
			id: 'collections',
			href: '/read/collections',
			label: 'Collections',
			iconPath: 'svg/collections-svgrepo-com.svg',
		},
	]
	return {
		title: 'Frankie Read',
		manifest,
		showPwaManifest: true,
		appButtons,
		preferences,
	}
}
