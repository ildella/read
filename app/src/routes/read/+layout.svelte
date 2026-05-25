<script>
  import {onMount} from 'svelte'
  import {fade} from 'svelte/transition'
  import {page} from '$app/state'
  import {bindEvent, bind} from '$lib/keyboard'
  import TopBar from '$lib/layout/TopBar.svelte'

  const {children} = $props()

  const moveDown = () => console.log('DOWN')
  const moveUp = () => console.log('UP')
  const handleArrowDown = bindEvent({bindKey: 'ArrowDown', handle: moveDown})
  const handleArrowUp = bindEvent({bindKey: 'ArrowUp', handle: moveUp})

  onMount(() => {
    bind('keyup', handleArrowDown)
    bind('keyup', handleArrowUp)
    bind('keydown', handleArrowDown)
    return () => {
      window.removeEventListener('keyup', handleArrowDown)
      window.removeEventListener('keyup', handleArrowUp)
      window.removeEventListener('keydown', handleArrowDown)
    }
  })
</script>

{#snippet leftbuttons()}
  <a href='/read'>
    <h4 class='text-blue-400'>Frankie Read</h4>
  </a>
{/snippet}

<div
  id='right-panel'
  class='flex flex-col w-full max-w-2xl mx-auto h-full overflow-hidden'
>
  <TopBar {leftbuttons} />
  {#key page.url.pathname}
    <div
      id='fade-container'
      class='flex-1 overflow-y-auto'
      in:fade={{duration: 200}}
      out:fade={{duration: 25}}
    >
      {@render children?.()}
    </div>
  {/key}
</div>
