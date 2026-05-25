import {readFileSync} from 'node:fs'
import {createSigner as makeSigner, createDecoder, createVerifier as makeVerifier} from 'fast-jwt'

const serverPrivateKey = readFileSync('/etc/ssl/jwt/private_key.pem', 'utf8')
const serverPublicKey = readFileSync('/etc/ssl/jwt/public_key.pem', 'utf8')
const algorithm = 'RS256'

export const createVerifier = (properties = {}) => makeVerifier({
	key: serverPublicKey,
	algorithms: [algorithm],
	...properties,
})
export const createSigner = (properties = {}) => makeSigner({
	key: serverPrivateKey,
	algorithm,
	...properties,
})
export {createDecoder}
