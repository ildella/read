<script>
  let {options, style = $bindable()} = $props()
</script>

<select
  bind:value={style}
  class='
    block w-full px-4 py-2 pr-8
    bg-white border border-gray-300 rounded-md shadow-sm
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    text-base'
>
  {#each options as option}
    <option
      value={option.class}
      class={option.class}
    >
      {option.label}
    </option>
  {/each}
</select>
<div
  class='
    absolute inset-y-0 right-0 flex items-center px-2
    pointer-events-none text-gray-400
  '
>
  <svg
    class='w-5 h-5'
    fill='currentColor'
    viewBox='0 0 20 20'
  >
    <path
      fill-rule='evenodd'
      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
      clip-rule='evenodd'
    />
  </svg>
</div>
