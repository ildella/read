<script>
  import {onMount} from 'svelte'
  import {fly} from 'svelte/transition'

  import {bindEvent} from '$lib/keyboard'

  let {
    id = 'selector-container',
    head,
    children,
    show = $bindable(),
    disappear,
    extraStyles = '',
    durationIn = 200,
    durationOut = 150,
    center = true,
  } = $props()
  $effect(() => {
    // console.log({show, disappear})
    if (disappear && show === true) {
      setTimeout(() => {
        show = false
      }, disappear)
    }
  })

  const centerStyle = center === true ? 'mx-auto' : ''

  const keyupListener = bindEvent({
    bindKey: 'Escape',
    handle: () => {
      // console.log({id, show})
      show = false
    },
  })
  onMount(() => {
    window.addEventListener('keyup', keyupListener, {passive: false})
    return () => window.removeEventListener('keyup', keyupListener)
  })

</script>

<!-- class='max-w-lg max-h-[70vh] lg:max-h-[70vh] rounded-lg mx-auto space-y-1 p-1 rounded-md overflow-y-auto bg-white/95 p-4 transform scale-[0.95] animate-scaleUp' -->

{#if show === true}
  <div
    id={id}
    class='min-w-2xs max-w-lg space-y-1 p-0 pb-0 shadow-lg overflow-y-hidden transform scale-[0.95] bg-white bg-transparent rounded-lg {centerStyle} {extraStyles}'
    in:fly={{y: 300, duration: durationIn}}
    out:fly={{y: -300, duration: durationOut}}
  >
    <div class='text-center p-4'>
      {@render head?.()}
    </div>
    <div class='overflow-y-auto'>
      {@render children()}
    </div>
  </div>
{/if}
