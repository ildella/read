<script>
  import SelectInput from './SelectInput.svelte'
  import ReadPageContainer from '../ReadPageContainer.svelte'

  const {data} = $props()
  const {preferences} = $derived(data)

  const options = [
    {class: 'text-xs', label: 'Mini'},
    {class: 'text-sm', label: 'Small'},
    {class: 'text-base', label: 'Base'},
    {class: 'text-lg', label: 'Large'},
    {class: 'text-xl', label: 'Very Large'},
    {class: 'text-2xl', label: 'Extra Large'},
  ]

  let style = $state(preferences?.article?.text?.style || 'text-lg')
  $effect(() => {
    if (!preferences?.article) return
    preferences.article.text.style = style
    localStorage.setItem('app.preferences', JSON.stringify(preferences))
  })

</script>

<ReadPageContainer>
  <div class='flex-1 overflow-y-auto max-w-3xl mx-auto p-6'>
    <h2 class='text-3xl font-bold mb-6'>Settings</h2>
    <h4 class='text-3xl font-bold mb-6'>Article</h4>
    <div class='space-y-6'>

      <div class='grid grid-cols-3 gap-4 items-center'>
        <div class='col-span-1 text-lg font-medium text-gray-600'>
          Font size
        </div>
        <div class='col-span-2'>
          <SelectInput
            {options}
            bind:style
          />
        </div>
      </div>

      <!--     <div class='grid grid-cols-3 gap-4 items-center'>
      <div class='col-span-1 text-lg font-medium text-gray-600'>
        Background Color
      </div>
      <div class='col-span-2'>
        <input
          type='text'
          placeholder='Enter background color'
          class='w-full border border-gray-300 rounded px-3 py-2'
        />
      </div>
    </div>

    <div class='grid grid-cols-3 gap-4 items-center'>
      <div class='col-span-1 text-lg font-medium text-gray-600'>
        Notification
      </div>
      <div class='col-span-2'>
        <input
          type='text'
          placeholder='Notification settings'
          class='w-full border border-gray-300 rounded px-3 py-2'
        />
      </div>
    </div>

    <div class='grid grid-cols-3 gap-4 items-center'>
      <div class='col-span-1 text-lg font-medium text-gray-600'>
        Custom Option With A Longer Label That Might Wrap
      </div>
      <div class='col-span-2'>
        <input
          type='text'
          placeholder='Enter custom option'
          class='w-full border border-gray-300 rounded px-3 py-2'
        />
      </div>
    </div>
    -->
    </div>
  </div>
</ReadPageContainer>
