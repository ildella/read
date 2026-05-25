import curry from 'just-curry-it'
import {newKindOne} from './events.js'
import {finalizeEvent} from 'nostr-tools'

const newSignedSigninEvent = (
	secretKey,
	{createdAt, content, tags}
) => finalizeEvent(newKindOne({createdAt, content, tags}), secretKey)

export default secretKey => ({
	newSignedSigninEvent: curry(newSignedSigninEvent)(secretKey),
})
