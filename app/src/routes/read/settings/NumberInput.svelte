<script>
  let {value = $bindable(), plusIcon = 'svg/plus-svgrepo-com.svg', minusIcon = 'svg/minus-svgrepo-com.svg'} = $props()

  function formatValue (val) {
    return Number(val).toFixed(1)
  }

  function increase () {
    if (value < 2) {
      value = +(value + 0.1).toFixed(1)
    }
  }

  function decrease () {
    if (value > 0.2) {
      value = +(value - 0.1).toFixed(1)
    }
  }

  function onInput (e) {
    const val = e.target.value

    // Allow empty string so user can clear before typing new number
    if (val === '') {
      value = ''
      return
    }

    // Validate: allow only valid decimal numbers
    const numVal = parseFloat(val)

    if (!isNaN(numVal)) {
      value = numVal
    }
  }

</script>

<button
  onclick={decrease}
  aria-label='Decrease'
  class='p-1 h-10 w-10'
>
  <img
    src='/icons/{minusIcon}'
    alt='Minus'
  />
</button>

<input
  type='text'
  bind:value={value}
  inputmode='decimal'
  pattern='[0-9]*[.,]?[0-9]*'
  class='
    w-14
    text-center text-3xl
    border-b border-gray-400 focus:border-blue-500
    font-semibold
    bg-transparent
    outline-none
  '
/>

<button
  onclick={increase}
  aria-label='Increase'
  class='p-1 h-10 w-10'
>
  <img
    src='/icons/{plusIcon}'
    alt='Plus'
  />
</button>
