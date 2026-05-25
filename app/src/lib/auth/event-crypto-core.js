import {sha256} from '@noble/hashes/sha256'
import {bytesToHex} from '@noble/hashes/utils'
import {schnorr} from '@noble/curves/secp256k1'

const {
	verify, getPublicKey, sign, utils: {randomPrivateKey},
} = schnorr

const serializeEvent = event => JSON.stringify([
	0, event.pubkey, event.created_at, event.kind, event.tags, event.content,
])

const utf8Encoder = new TextEncoder()
const getEventHash = event => bytesToHex(sha256(utf8Encoder.encode(serializeEvent(event))))

const signEvent = (secretKey, event) => {
	const publicKey = bytesToHex(getPublicKey(secretKey))
	const hash = getEventHash({...event, pubkey: publicKey})
	const signature = bytesToHex(sign(hash, secretKey))
	return {
		event: {...event}, publicKey, hash, signature,
	}
}

const verifyEvent = ({signature, publicKey, event}) => {
	const message = getEventHash({...event, pubkey: publicKey})
	return verify(signature, message, publicKey)
}

const verifySignature = ({
	signature, contentHash, publicKey,
}) => schnorr.verify(signature, contentHash, publicKey)

const newKeyPair = () => {
	const privateKey = randomPrivateKey()
	const publicKey = bytesToHex(getPublicKey(privateKey))
	return {privateKey: bytesToHex(privateKey), publicKey}
}

export {
	getEventHash,
	newKeyPair,
	randomPrivateKey,
	signEvent,
	verifyEvent,
	verifySignature,
}
