<script>
  import {onMount} from 'svelte'
  // import throttle from 'just-throttle'
  import debounce from 'debounce'
  import MiniSearch from 'minisearch'
  import {compareDesc} from 'date-fns'
  import {page} from '$app/state'
  import {bindEvent} from '$lib/keyboard'
  import initTags from '$lib/tags'
  // import FilterToolbar from './FilterToolbar.svelte'

  // const defaultViewFilter = {
  //   key: 'inbox',
  //   condition: value => value === true,
  //   defaultValue: true,
  //   label: 'Inbox',
  // }

  const {viewFilter} = $derived(page.data)

  const {
    listItem,
    items,
    filterRules,
    emptyBadge,
    placeholderText = 'Search',
  } = $props()

  const createInitialState = () => {
    const initialState = {}
    for (const rule of filterRules) {
      initialState[rule.key] = rule.defaultValue
    }
    // console.log('initial state:', initialState)
    return initialState
  }
  const filterStates = $state(createInitialState())
  const createFilter = ({filterStates, filterRules}) => item => {
    if (viewFilter && viewFilter(item) === false)
      return false
    const activeRules = filterRules.filter(rule => filterStates[rule.key])
    console.log('View filter ok. Applying rules:', activeRules.length)
    if (activeRules.length === 0) return true
    const {title, tags = []} = item
    // console.log(title, tags)
    const {getTagValue, matches} = initTags(tags)
    return activeRules.some(rule => {
      const {key} = rule
      const value = getTagValue(key)
      const evaluation = rule.condition(value)
      // console.log({key, value, evaluation})
      return evaluation
    })
  }
  const filter = $derived(createFilter({filterStates, filterRules}))

  let inputComponent = $state()
  let inputContainer = $state()
  let userInput = $state('')

  const searchValue = $derived(userInput.length > 0 ? userInput : MiniSearch.wildcard)
  const filteredItems = $derived.by(() => {
    console.debug({userInput, searchValue})
    const results = items.search(searchValue, {
      filter,
    })
    return results.sort((a, b) => compareDesc(a.updatedAt, b.updatedAt))
  })
  const displayedItemsCount = $derived(filteredItems.length)

  // const updateReadPercentage = ({scrollTop, scrollTopMax}) => {
  //   const fraction = scrollTop / scrollTopMax
  //   // console.log({scrollTop, scrollTopMax})
  //   percentage = Number(Math.round(fraction * 10) / 10).toFixed(1)
  // }

  // const handleScroll = ({target}) => {
  //   updateReadPercentage(target)
  //   // console.log({percentage})
  //   if (isLoading === true)
  //     return
  //   // const itemsCount = allItems.length
  //   // console.log({itemsCount, offset})
  //   if (percentage >= 0.8) {
  //     // offset.set($offset + 10)
  //     offset = offset + 10
  //   }
  // }

  // const throttledScroll = throttle(handleScroll, 200, {leading: true})

  const updateSearchValue = debounce(value => {
    userInput = value
  }, 250)

  const handleInput = event => {
    updateSearchValue(event.target.value)
  }
  const keyupListener = bindEvent({
    bindKey: 'k',
    bindModifier: 'altKey',
    handle: () => {
      inputComponent.focus()
    },
  })
  onMount(() => {
    window.addEventListener('keyup', keyupListener, {passive: false})
    return () => window.removeEventListener('keyup', keyupListener)
  })
</script>

<div
  id='items-filter-input'
  class='flex items-center px-0 border-b focus:border-blue-500 focus:bg-gray-50'
  onfocus={() => {
    console.log('DIV FOCUS')
  }}
  bind:this={inputContainer}
>
  <input
    type='text'
    bind:this={inputComponent}
    placeholder={placeholderText}
    class='p-2 px-3 border border-gray-300 rounded-md w-full focus:outline-hidden focus:border-blue-500 border-0 focus:ring-0 focus-visible:ring-0 resize-none'
    oninput={handleInput}
    onfocus={() => {
      inputContainer.focus()
    }}
    onblur={() => {
    // isSearchInputFocused.set(false)
    }}
  />
  <button
    onclick={() => {
      inputComponent.value = ''
    // userInput = ''
    }}
  >
    <img
      src='/icons/svg/close-svgrepo-com.svg'
      class='h-6 w-6 pr-1 mr-1'
      alt='Clear'
    >
  </button>
</div>
<!-- <div it='filter-toolbar'>
  {#each filterRules as {key, label} (key)}
    <button
      onclick={() => {
        filterStates[key] = !filterStates[key]
        console.log(key, filterStates[key])
      }}
      class={filterStates[key] ? 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700' : 'px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400'}
    >
      {label}
    </button>
  {/each}
</div> -->
<div
  id='scrollable-container'
  class='flex-1 overflow-y-auto pb-2'
>
  <div
    id='filtered-items'
    class='flex-1 overflow-y-auto space-y-1'
  >
    <!-- <p>TOTAL: {displayedItemsCount}</p> -->
    {#each filteredItems as item (item.fileId)}
      {@render listItem({item})}
    {/each}
  </div>
  {#if displayedItemsCount < 4}
    {@render emptyBadge?.()}
  {/if}
</div>
