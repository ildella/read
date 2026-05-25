import {sha256} from '@noble/hashes/sha256'
import {bytesToHex} from '@noble/hashes/utils'
import {schnorr} from '@noble/curves/secp256k1'

const {
  verify, getPublicKey, sign, utils: {randomPrivateKey},
} = schnorr

const serializeEvent = event => JSON.stringify(event)

const utf8Encoder = new TextEncoder()
const getEventHash = event => bytesToHex(sha256(utf8Encoder.encode(serializeEvent(event))))

export const verifyEvent = ({signature, publicKey, event}) => {
  // console.log({signature, publicKey})
  const message = getEventHash(event)
  // console.log({event, message})
  return verify(signature, message, publicKey)
}

export const signEvent = (event, secretKey) => {
  const contentHash = getEventHash(event)
  const publicKey = bytesToHex(getPublicKey(secretKey))
  const signature = bytesToHex(sign(contentHash, secretKey))
  // event[verifiedSymbol] = true
  return {
    event, publicKey, contentHash, signature,
  }
}

export const newPrivateKey = () => randomPrivateKey()
