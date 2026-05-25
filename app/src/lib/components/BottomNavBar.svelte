<script>
  // import {page} from '$app/state'
  import NavButton from './NavButton.svelte'

  const {buttons, id} = $props()
</script>

<nav
  id={id}
  class='flex justify-between py-3 px-2 sticky bottom-0 left-0 right-0 shadow-sm text-gray-600 border-t-gray-200 border-t-2 lg:border-0 h-14'
>
  {#each buttons as button (button.id)}
    <NavButton {button}>
    </NavButton>
  {/each}
</nav>
