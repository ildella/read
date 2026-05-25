import {v4 as uuidv4} from 'uuid'

export function randomUuid () {
  return `ch-${uuidv4().substr(0, 6)}`
}

export const postJson = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    // mode: 'same-origin',
    // redirect: 'follow',
  })
  // if (response.redirected) return {redirect: '/auth'}
  if (response.ok === true) return response.json()
  throw new Error(`POST ${url} --> ${response.status}`)
}

// Experiment
// const printPdf = async () => {
//   const tabs = await browser.tabs.query({
//     active: true,
//     currentWindow: true,
//   })
//   for (const tab of tabs) {
//     console.debug('title', tab.title)
//   }
//   const status = await browser.tabs.saveAsPDF({
//     // toFileName: 'limes.pdf',
//     toFileName: `${tabs[0].title}.pdf`,
//     // paperHeight: 40.0
//   })
//   console.debug('save status:', status)
// }
