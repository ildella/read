import browser from 'webextension-polyfill'

import connect from './authorization-connect'
import parseCurrentTab from './parse-tab'
import parseArticle from './parse-article'

const apiUrl = process.env.API_URL
const importApiEndpoint = `${apiUrl}/backend/import/content/json`

const {
  storage: {local},
  // browserAction, // v2
  action: browserAction,
  runtime,
} = browser

const preparePayload = async () => {
  const {
    hostname,
    href,
    html,
    tabTitle,
    ...parsedTab
  } = await parseCurrentTab()
  const {
    // content,
    title: parsedTitle,
    markdown,
    source,
    ...parsedArticle
  } = await parseArticle({href, html})
  return {
    // content,
    href,
    ...parsedTab,
    content: markdown,
    title: parsedTitle || tabTitle,
    publication: source || hostname,
    ...parsedArticle,
  }
}

const updateBadge = (text, color) => {
  browserAction.setBadgeText({text})
  browserAction.setBadgeBackgroundColor({color})
}

// eslint-disable-next-line complexity, max-statements
browserAction.onClicked.addListener(async () => {
  try {
    const {FrankieGPTWebExtensionToken} = await local.get('FrankieGPTWebExtensionToken')
    if (!FrankieGPTWebExtensionToken) {
      updateBadge('Auth', '#eeee90')
      console.info('Authentication required, redirecting...')
      return connect({browserAction})
    }
    updateBadge('Parsing', '#9090ee')
    const payload = await preparePayload()
    console.debug({importApiEndpoint})
    // console.log(payload)
    const response = await fetch(importApiEndpoint, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
        'authorization': `Bearer ${FrankieGPTWebExtensionToken}`,
      },
    })
    if (response.status === 401 || response.status === 404) {
      console.info('Authentication required, cleanup and redirect...')
      await local.remove('FrankieGPTWebExtensionToken')
      updateBadge('Auth', '#eeee90')
      return connect({browserAction})
    }
    if (response.status >= 300) {
      console.warn('Error sending content:', response.status)
      return updateBadge('API Error', '#ff6600')
    }
    // console.debug('Authentication OK, proceeding.')
    updateBadge('Sent', '#90EE90')
    const body = await response.json()
    console.debug('Imported', body)
    setTimeout(() => {
      browserAction.setBadgeText({text: ''})
    }, 3500)
  } catch (error) {
    console.error('Import failed:', error)
    updateBadge('Error', '#FF0000')
  }
})

runtime.onInstalled.addListener(async details => {
  // console.debug({details})
  const {FrankieGPTWebExtensionToken} = await local.get('FrankieGPTWebExtensionToken')
  if (details.reason === 'install' && !FrankieGPTWebExtensionToken) {
    connect({browserAction})
  }
})

// browserAction.onClicked.addListener(command => {
// const {location} = document
// const {origin} = location
// const {id} = runtime
// console.log({id, origin})
// const {url, isArticle} = command
// console.debug('Background browser action onClicked:', {url, isArticle})
// browserAction.setBadgeText({text: 'Sent'})
// })
