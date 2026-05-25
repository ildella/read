<script>
  import {format, intervalToDuration, formatDuration} from 'date-fns'
  import initTags from '$lib/tags'

  const {file} = $props()

  const {title} = $derived(file)
  const details = $derived(`${file.chars} characters, ${file.words} words. `)
  const author = $derived(file.author ? `by ${file.author} for` : '')
  const {publishedAt = file.createdAt} = file
  const publicationTime = format(publishedAt, 'EEE, dd MMM yyyy')
  const duration = intervalToDuration({
    start: 0,
    end: file.timeToRead * 1000,
  })
  const {getTagValue} = initTags(file.tags, {missingReturn: false})
  // console.log({publishedAt}, file.createdAt, file.updatedAt)

  let expanded = $state(false)
  const toggleMoreInfo = () => {
    expanded = !expanded
  }

</script>

<div
  id='article-head'
  class='border-b pb-4 mb-2 max-w-screen-md mx-auto px-2 sm:px-6 lg:px-8 space-y-1'
>
  <h3 class='text-balance text-xl sm:text-2xl font-semibold leading-tight'>{title}</h3>
  <div class='flex-1 flex-wrap items-center justify-between text-gray-700 text-sm sm:text-base gap-y-1'>
    <p class='text-base italic text-gray-600 font-medium truncate'>
      {author} {file.publication}
    </p>
    <p class='font-semibold'>
      Published on {publicationTime}
    </p>
    <p class='text-sm'>
      Read time: {formatDuration(duration)}
    </p>
  </div>
  <button
    class='p-1 px-2 mt-2 rounded-lg inset-ring-2 hover:inset-ring-blue-500'
    type='button'
    onclick={toggleMoreInfo}
    aria-expanded={expanded}
    aria-controls='more-info-panel'
  >
    <span>{expanded ? 'Close' : 'Excerpt and details'}</span>
  </button>

  {#if expanded}
    <section
      id='expanded-info-panel'
      tabindex='-1'
      aria-live='polite'
      aria-label='Additional article information'
      class='pt-6 border-t text-gray-600 text-base leading-relaxed space-y-4'
    >
      {#if file.description && file.description.trim() !== ''}
        <p>{file.description}</p>
      {/if}

      <div class='grid grid-cols-[auto_auto] gap-x-0 gap-y-2 text-sm'>
        <span>Published:</span>
        <span>{format(publishedAt, 'yyyy-MM-dd HH:mm')}</span>
        <span>Added:</span>
        <span>{format(file.createdAt, 'yyyy-MM-dd HH:mm:ss')}</span>
        <span>Last updated:</span>
        <span>{format(file.updatedAt, 'yyyy-MM-dd HH:mm:ss')}</span>
        <span>Length:</span>
        <span>{details}</span>
        <span>Read Progress:</span>
        <span>{file.progress}</span>
        <span>Starred:</span>
        <span>{getTagValue('starred')}</span>
        <span>Read:</span>
        <span>{getTagValue('read')}</span>
        <span>Archived:</span>
        <span>{getTagValue('archived')}</span>
        <span>Enqueued:</span>
        <span>{getTagValue('enqueued')}</span>
      </div>

      <a
        href={file.uri}
        target='_blank'
        rel='noopener noreferrer'
        class='classic-link block text-center text-lg font-semibold hover:text-blue-700 transition-colors duration-[250ms]'
        aria-label={`Open original article: ${title}`}
      >
        Open original
      </a>
    </section>
  {/if}

</div>

<style>
</style>
