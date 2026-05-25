import initTags from '$lib/tags'

export function load () {
  const viewFilter = ({tags}) => {
    const {matches} = initTags(tags)
    return matches('enqueued', true)
  }
  return {viewFilter}
}
