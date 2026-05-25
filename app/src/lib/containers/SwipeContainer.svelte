<script>
  import {goto} from '$app/navigation'
  import {innerWidth, innerHeight} from 'svelte/reactivity/window'

  const {
    id, item, slug, badge,
    leftBadge, leftAction,
    right,
    iconsSize = 14
  } = $props()

  let gesture = $state()
  let action = $state('')
  let startX = $state(0)
  let startY = $state(0)
  let didSwipe = $state(false)
  // let cancelled = $state(false)

  const handlePointerDown = event => {
    startX = event.clientX || event.touches?.[0].clientX
    startY = event.clientY || event.touches?.[0].clientY
  }

  const thresholdX = 15
  const thresholdY = 0.05

  const handlePointerUp = () => {
    // console.debug('handlePointerUp', {gesture})
    if (gesture === 'swipe-right') {
      action = 'RIGHT'
      return right.action(item)
    }
    if (gesture === 'swipe-left') {
      action = 'LEFT'
      return leftAction(item)
    }
  }

  // eslint-disable-next-line complexity, max-statements
  const handlePointerMove = ({clientX, clientY, changedTouches}) => {
    const currentY = clientY || changedTouches[0].clientY
    const currentX = clientX || changedTouches[0].clientX
    const dx = currentX - startX
    const dy = currentY - startY
    const absDx = Math.abs(dx)
    const absDy = Math.abs(dy)
    if (absDy / innerHeight.current > thresholdY) {
      console.log('CANCELLED.')
    // cancelled = true
    }
    const dxSwipePercentage = Math.round(100 * absDx / innerWidth.current)
    // console.log(innerWidth.current, {absDx, dxSwipePercentage, didSwipe})
    if (!didSwipe && dxSwipePercentage > thresholdX) {
      console.debug('SWIPE:', {dxSwipePercentage})
      didSwipe = true
      if (dx > 0) {
        gesture = 'swipe-right'
      } else {
        gesture = 'swipe-left'
      }
      setTimeout(() => {
        console.debug('RESET:', {didSwipe, gesture, action})
        gesture = undefined
        action = undefined
        didSwipe = false
      }, 1000)
    }
  }

  const handleClick = () => goto(`/${slug}/${id}`)
  const transition = () => {
    if (gesture === 'swipe-left') return '-translate-x-1/2'
    if (gesture === 'swipe-right') return 'translate-x-1/2'
    return 'translate-x-0'
  }

</script>
<div
  id='slide-item-container-{item.fileId}'
  onpointerdown={handlePointerDown}
  onpointerup={handlePointerUp}
  ontouchmove={handlePointerMove}
  ontouchstart={handlePointerDown}
  ontouchend={handlePointerUp}
  onclick={handleClick}
  class='container mx-auto flex flex-col'
>
  <!-- <p>{action}</p> -->
  <!-- inset-0  -->
  <div
    id='badges-container'
    class='relative overflow-hidden'
  >
    <div
      id='swipe-right-badge'
      class='absolute flex justify-start items-center p-4'
    >
      {#if gesture === 'swipe-right'}
        <!-- {@render rightBadge?.({gesture, item})} -->
        <div class='w-{iconsSize} h-{iconsSize} p-0 bg-blue-200'>
          <img
            src={right.icon}
            alt={right.altText}
          >
        </div>
      {/if}
    </div>
    <div
      id='main-badge'
      class='transform transition-transform duration-400 ease-out {gesture && transition()}'
    >
      {@render badge({item})}
    </div>
    <div
      id='swipe-left-badge'
      class='absolute inset-0 flex justify-end items-center p-4 sm:hidden'
    >
      {#if gesture === 'swipe-left'}
        {@render leftBadge({gesture, item})}
      {/if}
    </div>
  </div>
</div>
