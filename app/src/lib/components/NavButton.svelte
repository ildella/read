<script>
  import {goto} from '$app/navigation'

  const emptyHandleClick = () => {
    console.log('Please, give this button somethign to do.')
  }

  const {button} = $props()
  const {
    iconPath,
    altText,
    href,
    label = '',
    handleClick = emptyHandleClick,
  } = button
</script>

<button
  onclick={event => {
    if (href)
      return goto(href)
    handleClick(event)
  }}
  class='flex flex-col items-center cursor-pointer text-gray-600 hover:text-gray-800 focus:outline-hidden grow'
>
  <div class='w-6 h-6'>
    <img
      src='/icons/{iconPath}'
      alt={altText}
    >
  </div>
  <span class='text-xs'>{label}</span>
</button>
