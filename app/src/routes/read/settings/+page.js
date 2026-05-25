import {browser} from '$app/environment'

export function load({parent}) {
	if (!browser) {
		return {preferences: {}}
	}
	return parent().then(({preferences}) => ({preferences}))
}
