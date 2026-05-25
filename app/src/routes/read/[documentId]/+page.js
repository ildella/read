import {db} from '$lib/database'
import {
	deleteDocument,
	archiveDocument,
} from '../read-backend-operations'

export async function load({params}) {
	const {documentId: fileId} = params
	const file = await db.documents.get(fileId)
	console.debug('Article loaded:', file)
	const contextButtons = [
		{
			id: 'delete',
			label: 'Delete',
			iconPath: 'svg/trash-bin-minimalistic-svgrepo-com.svg',
			handleClick: () => deleteDocument({fileId}),
		},
		{
			id: 'archive',
			label: 'Archive',
			iconPath: 'svg/archive-down-svgrepo-com.svg',
			handleClick: () => archiveDocument({fileId}),
		},
	]
	return {file, contextButtons}
}
