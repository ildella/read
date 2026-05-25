import {createHash} from 'node:crypto'
import {randomPrivateKey} from './event-crypto-core.js'
import nostr from './nostr-tools-extras.js'

export const newIdentity = ({content, createdAt, tags} = {}) => {
	const secretKey = randomPrivateKey()
	const {newSignedSigninEvent} = nostr(secretKey)
	const signedEvent = newSignedSigninEvent({content, createdAt, tags})
	return {secretKey, signedEvent}
}

export const getUserHandle = ({publicKey, length = 10}) => {
	const hash = createHash('sha1')
		.update(publicKey)
		.digest('hex')
	return hash.slice(0, length - 1)
}

export const nostrEventToAuthentication = ({
	id, pubkey, sig, created_at, ...event
}) => ({
	hash: id,
	publicKey: pubkey,
	signature: sig,
	event: {
		...event,
		createdAt: created_at,
	},
})

export const newKindOne = (
	{
		content = 'New Identity for Sign-in',
		createdAt = Math.floor(Date.now() / 1000),
		tags = [],
	} = {}
) => ({
	kind: 1,
	created_at: createdAt,
	content,
	tags,
})
