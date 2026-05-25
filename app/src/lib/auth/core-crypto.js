import {createHash} from 'node:crypto'

export const getUserHandle = ({publicKey, length = 10}) => {
	const hash = createHash('sha1').update(publicKey)
		.digest('hex')
	return hash.slice(0, length - 1)
}
