import {liveQuery} from 'dexie'
import {db} from '$lib/database'

const groupBy = (map, {publication, favicon}) => {
  const collection = publication
  const group = map.get(collection) || {collection, size: 0}
  return map.set(collection, {
    collection,
    size: group.size + 1,
    favicon,
  })
}

export function load () {
  const groupedByHostname = liveQuery(async () => {
    const allArticles = await db.documents
      .orderBy('createdAt')
      .reverse()
      .toArray()
    const groupedMap = allArticles.reduce(groupBy, new Map())
    return Array.from(groupedMap.values())
  })
  return {
    groupedByHostname,
  }
}
