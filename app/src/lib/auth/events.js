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
