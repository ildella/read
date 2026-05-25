import browser from 'webextension-polyfill'

export const parseCurrentTab = async () => {
  const {tabs} = browser
  const [activeTab] = await tabs.query({
    active: true,
    currentWindow: true,
  })
  const {id: tabId} = activeTab
  const responseDoc = await tabs.sendMessage(tabId, {type: 'get-document-body'})
  // console.debug({responseDoc})
  const {
    title: tabTitle,
    hostname,
    href,
    head,
    body,
    // contentLength = content.length,
  } = responseDoc
  const url = new URL(href)
  const shortPathname = url.pathname.replace('/', '').slice(0, 40)
  return {
    html: head.concat(body),
    hostname,
    href,
    shortPathname,
    tabTitle,
  }
}

export default parseCurrentTab
