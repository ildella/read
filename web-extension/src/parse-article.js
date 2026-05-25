import {
  extractFromHtml,
  // getSanitizeHtmlOptions,
} from '@extractus/article-extractor'
import TurndownService from 'turndown'

export const rawContentToReadableArticle = async ({href, html}) => {
  const extracted = await extractFromHtml(html, href, {
    descriptionLengthThreshold: 80,
  })
  const {
    // url,
    title,
    description,
    // links,
    image,
    content,
    author,
    favicon,
    source,
    published: publishedAt,
    ttr: timeToRead,
    type,
  } = extracted
  // console.log({
  //   source,
  //   author,
  //   title,
  //   favicon,
  //   image,
  //   timeToRead,
  //   publishedAt,
  //   links,
  //   description,
  // })
  const turndownService = new TurndownService()
  const markdown = turndownService.turndown(content)
  return {
    author,
    content,
    description,
    favicon,
    image,
    markdown,
    publishedAt,
    source,
    timeToRead,
    title,
    type,
  }
}

export default rawContentToReadableArticle
