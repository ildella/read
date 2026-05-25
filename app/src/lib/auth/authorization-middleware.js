import curry from 'just-curry-it'

const removeLastSlash = string => {
	if (string.endsWith('/')) {
		return string.slice(0, -1)
	}
	return string
}

const buildCheckPrivilege = ({
	privilagesTable,
	defaultVerifier,
}, request, response, next) => {
	const {url} = request
	const match = Object
		.entries(privilagesTable)
		.find(([pattern]) => {
			const cleanUrl = removeLastSlash(url)
			const cleanPattern = removeLastSlash(pattern)
			if (cleanPattern.endsWith('*')) {
				const prefix = cleanPattern.slice(0, -1)
				return cleanUrl.startsWith(prefix)
			}
			return cleanUrl === cleanPattern
		})
	const verifier = match ? match[1] : defaultVerifier
	return verifier(request, response, next)
}

export default curry(buildCheckPrivilege)
