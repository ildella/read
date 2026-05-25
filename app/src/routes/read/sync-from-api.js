import {db} from '$lib/database'
import {miniSearch} from '$lib/articles'

export const lastSynced = () => {
	console.debug('Get last sync timestamp...')
	return db.documents
		.orderBy('createdAt')
		.reverse()
		.first()
		.then(newest => newest && `?sinceId=${newest.fileId}`)
}

export const clearLocalDatabase = () => {
	console.debug('Clear local database...')
	return db.documents
		.clear()
		.then(deleted => {
			console.debug({deleted})
			return miniSearch.removeAll()
		})
		.then(deleted => {
			console.debug({deleted})
		})
}

export const populateView = () => {
	console.debug('Starting populate view...')
	return db.documents
		.toArray()
		.then(articles => {
			console.log('Pushing articles to view:', {articles})
			return miniSearch.addAllAsync(articles)
		})
}
