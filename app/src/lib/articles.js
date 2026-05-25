// import {liveQuery} from 'dexie'
import MiniSearch from 'minisearch'

export const miniSearch = new MiniSearch({
  idField: 'fileId',
  fields: ['title', 'source', 'publication'], // Fields to search
  storeFields: [
    'fileId',
    'title',
    'updatedAt',
    'tags',
    'source',
    'publication',
  ], // Properties that will be present in the search result item
  searchOptions: {
    boost: {title: 2},
    prefix: true, // Enable prefix search (e.g., 'lov' matches 'love')
    fuzzy: 0.2, // Enable fuzzy matching for misspellings
    combineWith: 'OR',
  },
})

// articles.subscribe({
//   next: result => {
//     console.log('Adding articles to miniSearch:', result.length)
//     miniSearch
//       .addAllAsync(result)
//       .then(() => {
//         console.log('MiniSearch populated.')
//       })
//       .catch(error => {
//         if (error.message.startsWith('iniSearch: duplicate ID')) {
//           return console.debug(error.message)
//         }
//         console.warn(error.message)
//       })
//   },
// })

export default miniSearch
