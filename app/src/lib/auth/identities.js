import {randomPrivateKey} from './event-crypto-core.js'
import nostr from './nostr-tools-extras.js'

export const newIdentity = ({content, createdAt, tags} = {}) => {
	const secretKey = randomPrivateKey()
	const {newSignedSigninEvent} = nostr(secretKey)
	const signedEvent = newSignedSigninEvent({content, createdAt, tags})
	return {secretKey, signedEvent}
}
