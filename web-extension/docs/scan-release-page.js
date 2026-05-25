console.debug('SCAN RELEASE PAGE')

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.debug('Message received in scan release page', message)
  const {title, URL} = document
  const {location} = window
  const {href, hostname} = location

  if (message.type === 'scan-release-page') {
    const mainContentDiv = document.querySelector('#main-content')
    const detailDiv = mainContentDiv.querySelector('.detail')
    const links = detailDiv.querySelectorAll('a')
    // links.forEach(link => console.info(link.href))
    /*
      ignore:
        anything that does not start with "https://www.limesonline.com"
        and https://www.limesonline.com/edicola/home.jsp
    */
    sendResponse({
      links,
      title,
      URL,
      href,
      hostname,
    })
  }
})
