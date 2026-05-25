<script>
  // import {onMount} from 'svelte'
  import ScrollableItems from '$lib/components/ScrollableItems2.svelte'
  import SwipeContainer from '$lib/containers/SwipeContainer.svelte'
  import {miniSearch} from '$lib/articles'
  import ArticleListItem from './ArticleListItem.svelte'
  import ReadAppBadge from './ReadAppBadge.svelte'
  import {archiveDocument, enqueueDocument} from './read-backend-operations'
  // import {page} from '$app/state'

  // let count = $derived(0)
  // let percentage = $state(0)
  // const {filter} = $derived(page.data)

  const {
    leftAction = enqueueDocument,
    rightAction = archiveDocument,
    showEnqueue,
    showArchive,
  } = $props()

  const filterRules = [
    {
      key: 'enqueued',
      condition: value => value === true,
      defaultValue: false,
      label: 'Enqueued',
    },
    {
      key: 'archived',
      condition: value => value === true,
      defaultValue: false,
      label: 'Archived',
    },
    {
      key: 'isRead',
      condition: value => value === true,
      defaultValue: false,
      label: 'Read',
    },
    {
      key: 'isStarred',
      condition: value => value === false,
      defaultValue: false,
      label: 'Starred',
    },
  ]

  const right = {
    icon: '/icons/svg/archive-down-svgrepo-com.svg',
    altText: 'Archive',
    action: rightAction,
  }

// onMount(async () => {
  //   count = await db.documents.count()
  // })

// setTimeout(async () => {
  //   const doc = {
  //     fileId: uuid(),
  //     title: 'ciao',
  //     hostname: 'thehostname',
  //     createdAt: '2025-03-22 09:00',
  //     updatedAt: '2025-03-22 09:00',
  //   }
  //   console.log(doc)
  //   await db.documents.add(doc)
  // }, 1000)
</script>

{#snippet badge({item})}
  <ArticleListItem
    {showEnqueue}
    {showArchive}
    article={item}
  />
{/snippet}
{#snippet leftBadge({item})}
  <div class='w-14 h-14 p-0 bg-gray-100'>
    <img
      src='/icons/svg/check-svgrepo-com.svg'
      alt='Archive'
    >
  </div>
{/snippet}
<!-- {#snippet rightBadge({item})}
  <div class='w-14 h-14 p-0 bg-blue-200'>
    <img
      src='/icons/svg/archive-down-svgrepo-com.svg'
      alt='Archive'
    >
  </div>
{/snippet} -->

{#snippet listItem({item})}
  <SwipeContainer
    {item}
    id={item.fileId}
    slug='read'
    {badge}
    {right}
    {leftBadge}
    {leftAction}
    {rightAction}
  />
{/snippet}

<ScrollableItems
  {listItem}
  items={miniSearch}
  {filterRules}
  emptyBadge={ReadAppBadge}
/>
