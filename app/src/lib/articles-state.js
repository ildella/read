import {db} from './database'
const collection = db.documents

// const defaultArticleState = {
//   progress: 0,
//   isStarred: false,
//   openCount: 1,
//   lastOpenedAt: new Date(),
// }

// const getArticleState = async fileId => {
//   const state = await collection.get(fileId)
//   console.log({state})
//   if (!state) {
//     console.log('adding...')
//     return collection.add({
//       ...defaultArticleState,
//       fileId,
//     })
//   }

//   return state
// }

const updateArticleState = (id, updates) => db.transaction('rw', collection, () => collection.update(id, {
  // ...currentState,
  ...updates,
  // lastOpenedAt: new Date(),
}))

const getStarredArticles = () => collection
  .where('isStarred')
  .equals(true)
  .toArray()

const getFrequentlyOpenedArticles = (limit = 10) => collection
  .orderBy('openCount')
  .reverse()
  .limit(limit)
  .toArray()

const getRecentlyOpenedArticles = (limit = 5) => collection
  .orderBy('lastOpenedAt')
  .reverse()
  .limit(limit)
  .toArray()

const getReadingStats = async () => {
  const states = await collection.toArray()
  return {
    totalArticles: states.length,
    readArticles: states.filter(s => s.progress >= 100).length,
    starredArticles: states.filter(s => s.isStarred).length,
    averageprogress: states.reduce((sum, s) => sum + s.progress, 0) / states.length,
    mostOpenedArticle: states.reduce((max, s) => s.openCount > (max?.openCount || 0) ? s : max, null),
  }
}

export {
  // getArticleState,
  updateArticleState,
  getStarredArticles,
  getFrequentlyOpenedArticles,
  getRecentlyOpenedArticles,
  getReadingStats,
}
