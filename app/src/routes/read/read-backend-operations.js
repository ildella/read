import {db} from '$lib/database'
import {miniSearch} from '$lib/articles'
import initTags from '$lib/tags'

const deleteDocument = ({fileId}) => db.documents.delete(fileId)
	.then(() => {
		console.log('Deleted:', {fileId})
	})
	.catch(error => console.warn(error))

const patchDocumentTags = ({fileId, tagName, tagValue}) => db.documents.get(fileId)
	.then(storedDocument => {
		const {tags} = storedDocument
		const {updateTag, _getAllTags} = initTags(tags)
		updateTag(tagName, tagValue)
		const updatedDocument = {...storedDocument, tags: _getAllTags()}
		miniSearch.replace(updatedDocument)
		return _getAllTags()
	})
	.then(async newTags => {
		return db.documents.update(fileId, {tags: newTags})
	})
	.then(update => {
		console.log({update})
	})
	.catch(error => console.warn(error))

const archiveDocument = ({fileId}) => patchDocumentTags({
	fileId,
	tagName: 'archived',
	tagValue: true,
})

const enqueueDocument = ({fileId}) => patchDocumentTags({
	fileId,
	tagName: 'enqueued',
	tagValue: true,
})

export {
	archiveDocument,
	deleteDocument,
	enqueueDocument,
}
