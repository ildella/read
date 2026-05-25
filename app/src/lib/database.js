import {Dexie} from 'dexie'

export const db = new Dexie('frankie')

db.version(16).stores({
  messages: '++id, conversationId',
  documents: 'fileId, title, createdAt, updatedAt, tags, progress,  source, publication',
  // articleStates: 'fileId, progress, isStarred, isRead, openCount, lastOpenedAt',
  translations: '++id, talkId',
  incoming: '++id',
  quotes: '++id',
  notifications: 'id, createdAt',
})

export default db
