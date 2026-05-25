<script>
  import {page} from '$app/state'
  const {groupedByHostname} = $derived(page.data)
  groupedByHostname.subscribe({
    next: result => console.debug('updated set:', result),
    error: error => console.error(error),
  })

</script>

<div
  id='collections-page'
  class='flex-1 overflow-y-auto'
>
  <div class='container mx-auto p-4 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3'>
    {#each $groupedByHostname as {
      collection, size, image, favicon,
    } (collection)}
      <a
        href={`/read/collections/${collection}`}
        class='flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition duration-200 aspect-square'
      >
        <img
          src={image || favicon || '/icons/read/article.svg'}
          alt='icon'
          class='w-12 h-12'
        />
        <h3 class='mt-2 font-semibold text-gray-800 line-clamp-1'>{collection}</h3>
        <p class='mt-1 text-sm text-gray-600'>
          {size} {size === 1 ? 'article' : 'articles'}
        </p>
      </a>
    {/each}
  </div>
</div>
