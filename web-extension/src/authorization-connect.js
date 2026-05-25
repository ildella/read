import browser from 'webextension-polyfill'

import {randomUuid} from './lib'

const webAppUrl = process.env.WEBAPP_URL

const {tabs, storage: {local}} = browser

export const connect = async ({browserAction}) => {
  const channelId = randomUuid()
  const authenticationEndpoint = `${webAppUrl}/connect?channelId=${channelId}`
  const subcriptionEndpoint = `${webAppUrl}/subscribe/channel/${channelId}`
  console.log({authenticationEndpoint, subcriptionEndpoint})
  await tabs.create({url: authenticationEndpoint})
  const socket = new WebSocket(subcriptionEndpoint)
  socket.addEventListener('open', () => {
    console.debug('WebSocket connnection opened.', subcriptionEndpoint)
  })
  socket.addEventListener('error', error => console.warn('WebSocket connnection error:', error))
  socket.addEventListener('message', ({data}) => {
    console.debug('Message received:', data)
    const json = JSON.parse(data)
    if (json.error) {
      browserAction.setBadgeText({text: 'Auth'})
      browserAction.setBadgeBackgroundColor({color: '#FF0000'})
      console.warn('Authentication error:', channelId, json.error)
      return
    }
    const {signedEvent} = json
    local.set({FrankieGPTWebExtensionToken: signedEvent})
  })
  socket.addEventListener('close', () => {
    const {readyState} = socket
    console.debug('WebSocket closed.', {readyState, channelId})
  })
  return {channelId, origin}
}

export default connect
