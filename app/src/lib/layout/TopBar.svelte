<script>
  import {onMount} from 'svelte'
  import {fly} from 'svelte/transition'

  import AppsScreen from './AppsScreen.svelte'

  let isRightPanelOverlayVisible = $state(false)

  const {leftbuttons} = $props()

  const toggleMenu = () => {
    isRightPanelOverlayVisible = !isRightPanelOverlayVisible
  }
  const navigateCallback = () => {
    toggleMenu()
  }
  const handleKeyUp = event => {
    if (event.altKey && event.key === 'a') {
      event.preventDefault()
      toggleMenu()
    }
    if (event.key === 'Escape') {
      event.preventDefault()
      isRightPanelOverlayVisible = false
    }
  }
  onMount(() => {
    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  })
</script>

{#snippet toolbar()}
  {#if leftbuttons}
    {@render leftbuttons()}
  {:else}
    <a href='/'>
      <h4 class='text-blue-400'>Frankie</h4>
    </a>
  {/if}
{/snippet}

<style lang='postcss'>
  @reference "tailwindcss";
  .right-overlay {
    @apply
      flex flex-col fixed top-0 right-0
      w-full h-full
      p-4 z-50
      transition-transform duration-300 transform
      bg-white border-l-4 border-gray-300;
  }
  .custom-right-overlay-close-button {
    @apply absolute top-3 right-1 opacity-100 rounded-full hover:bg-gray-400 text-gray-700 hover:text-gray-800 transition duration-200 flex h-10 w-10 items-center justify-center focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-white bg-white cursor-pointer;
  }
</style>
<header class='h-12 border-b-2 lg:border-0 py-2 p-2'>
  <div class='flex justify-start items-center'>
    {@render toolbar()}
    <button
      onclick={toggleMenu}
      class='text-2xl mr-0 cursor-pointer ml-auto'
    >
      ☰
    </button>
  </div>
</header>
{#if isRightPanelOverlayVisible}
  <div
    id='right-overlay'
    class='right-overlay'
    in:fly={{x: 300, y: -300, duration: 300}}
    out:fly={{x: 300, y: -300, duration: 300}}
  >
    <button
      class='custom-right-overlay-close-button'
      aria-label='Toggle Right Panel'
      onclick={toggleMenu}
    >
      <i class='fas fa-times'></i>
    </button>
    <AppsScreen {navigateCallback}/>
  </div>
{/if}
