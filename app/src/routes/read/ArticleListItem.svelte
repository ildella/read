<script>
  import {format} from 'date-fns'
  import {enqueueDocument, archiveDocument} from './read-backend-operations'
  const {
    article,
    showEnqueue = true,
    showArchive = true,
    displayDate = 'updatedAt',
    displayDateFormat = 'LLL dd, yyyy',
  } = $props()
</script>

<div
  id='article-{article.fileId}'
  class='p-4 bg-white rounded-lg shadow-sm hover:shadow-md select-none cursor-pointer'
>
  <h3 class='item-title'>
    {article.title}
  </h3>
  <div class='flex justify-between items-center'>
    <p class='text-base text-gray-500'>
      {article.publication || article.hostname || article.source}
    </p>
    <span class='text-sm text-gray-400'>
      {format(article[displayDate], displayDateFormat)}
    </span>
    <div
      id='item-actions'
      class='hidden sm:block'
    >
      {#if showEnqueue}
        <button
          title='Enqeueue'
          onclick={() => {
            event.stopPropagation()
            return enqueueDocument(article)
          }}
        >
          <img
            src='/icons/svg/queue-fill-svgrepo-com.svg'
            alt='Enqueue'
            class='w-6 h-6 ml-auto'
          >
        </button>
      {/if}
      {#if showArchive}
        <button
          title='Archive'
          onclick={event => {
            console.log({event})
            event.stopPropagation()
            return archiveDocument(article)
          }}
        >
          <img
            src='/icons/svg/archive-down-svgrepo-com.svg'
            alt='Archive'
            class='w-6 h-6 ml-auto'
          >
        </button>
      {/if}
    </div>
  </div>
</div>
