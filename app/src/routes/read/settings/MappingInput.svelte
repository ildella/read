<script>
  const plusIcon = 'svg/plus-svgrepo-com.svg'
  const minusIcon = 'svg/minus-svgrepo-com.svg'

  let {options, selectedIndex = $bindable()} = $props()

  const increase = () => {
    if (selectedIndex < options.length - 1) {
      selectedIndex += 1
    }
    console.log(options[selectedIndex].class)
  }

  const decrease = () => {
    if (selectedIndex > 0) {
      selectedIndex -= 1
    }
    console.log(options[selectedIndex].class)
  }
</script>

<div class='flex items-center space-x-4'>
  <button
    on:click={decrease}
    aria-label='Decrease text size'
    class='p-1 h-10 w-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500'
  >
    <img
      src='/icons/{minusIcon}'
      alt='Decrease'
    />
  </button>

  <!-- Display and Select -->
  <div class='flex flex-col items-center'>
    <!-- <span class={`font-semibold ${options[selectedIndex].class}`}>
      {options[selectedIndex].label}
    </span> -->
    <!-- Optional select to jump to a specific text size -->
    <select
      bind:value={selectedIndex}
      aria-label='Select text size'
      class='mt-1 border border-gray-300 rounded p-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500'
    >
      {#each options as size, index}
        <option value={index}>{size.label}</option>
      {/each}
    </select>
  </div>
  <button
    on:click={increase}
    aria-label='Increase text size'
    class='p-1 h-10 w-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500'
  >
    <img
      src='/icons/{plusIcon}'
      alt='Increase'
    />
  </button>
</div>
