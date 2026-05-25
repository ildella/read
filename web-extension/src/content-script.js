/*
  This will run in the Browser Window.
  Logs will be seen in the console for the current open tab.
*/

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // console.debug('Message received:', message)
  const {
    title,
    // URL,
    body,
    head,
  } = document
  const {location} = window
  const {href, hostname} = location
  // console.debug({
  //   URL,
  //   hostname,
  //   href,
  //   location,
  //   title,
  // })
  if (message.type === 'get-document-body') {
    const responseDoc = {
      href,
      hostname,
      title,
      body: body.innerHTML,
      head: head.innerHTML,
    }
    sendResponse(responseDoc)
  }
})
