<script>
  import {onMount} from 'svelte'
  import SvelteMarkdown from 'svelte-marked'
  import throttle from 'just-throttle'
  import {page} from '$app/state'
  import AudioPlayer from '$lib/layout/AudioPlayer.svelte'
  import ArticleHead from './ArticleHead.svelte'
  import {updateArticleState} from '$lib/articles-state'

  let scrollable = $state()
  const file = $derived(page.data.file)
  const text = $derived(page.data.file.content)
  console.log('tags and length:', file.tags, text.length)
  const {fileId} = $derived(file)
  const streamUrl = $derived(`/stream/document/${fileId}/speech/read`)
  // const streamUrl = `http://localhost:7777/stream/document/${fileId}/speech/read`
  const hasSomeSpeeches = $derived(page.data.file.speeches?.length > 0 || false)
  // const hasAllSpeeches = $derived(hasSomeSpeeches && file.chunks === file.speeches.length)
  // const generateSpeechDisabled = $derived(hasAllSpeeches)
  // const generateEmbeddingsDisabled = $derived(file.embeddings === true)

  const {preferences} = $derived(page.data)
  const articleTextSizeStyle = $derived(preferences.article?.text?.style)
  const backroundColor = $derived(preferences.article?.backround?.rgba)
  let progress = $state(Number(page.data.file.progress))
  const updateReadPercentage = ({scrollTop, scrollHeight, clientHeight}) => {
    // Real max scroll distance - scrollTopMax is non-standard
    const maxScroll = scrollHeight - clientHeight
    const fraction = maxScroll > 0 ? scrollTop / maxScroll : 0
    const clamped = Math.min(Math.max(fraction, 0), 1)
    progress = (clamped * 100).toFixed(2)
  }
  const handleScroll = ({target}) => {
    updateReadPercentage(target)
    return updateArticleState(fileId, {
      progress,
      isRead: progress > 90,
    })
  }
  const throttledScroll = throttle(handleScroll, 200, {leading: true})

  onMount(() => {
    setTimeout(() => {
      const pct = typeof progress === 'string'
        ? parseFloat(progress)
        : progress
      const clampedPct = Math.min(Math.max(pct, 0), 100)
      const maxScroll = scrollable.scrollHeight - scrollable.clientHeight
      const targetScrollTop = clampedPct / 100 * maxScroll
      scrollable.scroll({
        top: targetScrollTop,
        behavior: 'smooth',
      })
    }, 250)
  // const element = document.querySelector('#text-wrapper')
    // if (element) {
    //   const computedStyle = window.getComputedStyle(element)
    //   // console.log('Element Font Family:', computedStyle.fontFamily)
    //   console.log('Element Font Size:', computedStyle.fontSize)
    // } else {
    //   console.log('Element not found. Please check your selector.')
    // }
  })
</script>
<!-- 255,_251,_235,_1 -->
<div
  id='read-article'
  onscroll={throttledScroll}
  bind:this={scrollable}
  class='flex-1 overflow-y-auto text-gray-600 bg-amber-50 bg-[rgba({backroundColor})] px-1 py-1'
>
  <ArticleHead {file} />
  {#if hasSomeSpeeches}
    <div
      id='audioplayer'
      disable={hasSomeSpeeches === false}
      class='mb-6'
    >
      <AudioPlayer
        audioSrc={streamUrl}
        showTitle={false}
        showArtist={false}
      />
    </div>
  {/if}
  <!-- <div class='bg-blue-500 h-1 {widthClass}'></div> -->
  <!-- text-[{textSizeRem}rem]  -->
  <div
    id='text-wrapper'
    class='max-w-2xl mx-auto px-1 space-y-4 {articleTextSizeStyle} sm:text-lg'
  >
    <SvelteMarkdown
      source={text}
      options={{breaks: true}}
    />
  </div>
</div>
