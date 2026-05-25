<script>
  import {onMount, onDestroy} from 'svelte'

  function formatTime (seconds) {
    const totalSeconds = Math.floor(seconds)
    const minutes = Math.floor(totalSeconds / 60)
    const remainingSeconds = totalSeconds % 60

    const paddedMinutes = String(minutes).padStart(2, '0')
    const paddedSeconds = String(remainingSeconds).padStart(2, '0')

    return `${paddedMinutes}:${paddedSeconds}`
  }

  const {
    audioSrc = '',
    showTitle = true,
    showArtist = true,
  } = $props()

  let audioPlayer
  let isPlaying = $state()
  let sliderTime = $state(0)
  let duration = $state(0)
  // const volume = 1
  const trackInfo = {
    title: 'Track Title',
    artist: 'Artist Name',
  }
  const availableSpeed = $state([
    {
      id: 1,
      value: 1,
      text: '1.0x',
    },
    {
      id: 2,
      value: 1.25,
      text: '1.25x',
    },
    {
      id: 3,
      value: 1.5,
      text: '1.5x',
    },
    {
      value: 4,
      text: '4x',
    },
  ])

  let selectedSpeed = $state()

  function togglePlay () {
    if (isPlaying) {
      audioPlayer.pause()
    } else {
      audioPlayer.play()
    }
    isPlaying = !isPlaying
  }

  function updateSeekBar () {
    sliderTime = audioPlayer.currentTime
    duration = audioPlayer.duration
  }

  function seekAudio (offset) {
    const newTime = Math.min(duration, audioPlayer.currentTime + offset)
    audioPlayer.currentTime = newTime
  }

  function changeSpeed ({target}) {
    const {value} = target
    audioPlayer.playbackRate = parseFloat(value)
  }

  function handleKeyDown (event) {
    if (event.code === 'Space') {
      event.preventDefault()
    }
  }

  function handleKeyUp ({code}) {
    if (code === 'Space') return togglePlay()
    if (code === 'ArrowRight') return seekAudio(10)
    if (code === 'ArrowLeft') return seekAudio(-10)
  }

  onMount(() => {
    audioPlayer.addEventListener('timeupdate', updateSeekBar)
    audioPlayer.addEventListener('ended', () => {
      isPlaying = false
    })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
  // const aacSupported = MediaSource.isTypeSupported('audio/ogg')
    // console.log({aacSupported})
  })
  onDestroy(() => {
    window.removeEventListener('keydown', handleKeyDown)
    window.removeEventListener('keyup', handleKeyUp)
  })
</script>

<div
  id='player'
  class='p-4 bg-gray-800 text-white rounded-lg shadow-lg flex flex-col items-center'
>
  <audio
    bind:this={audioPlayer}
    type='audio/aac'
    src={audioSrc}
  >
  </audio>
  {#if showTitle}
    <h2 class='text-xl font-bold'>{trackInfo.title}</h2>
  {/if}
  {#if showArtist}
    <h3 class='text-lg'>{trackInfo.artist}</h3>
  {/if}
  <div
    id='controls'
    class='flex items-center justify-center my-4 space-x-4'
  >
    <button
      onclick={() => seekAudio(-10)}
      class='bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full'
      title='Back 10 seconds'
      aria-label='backward'
    >
      <i class='fa-solid fa-backward'></i>
    </button>
    <button
      onclick={togglePlay}
      class='bg-green-500 hover:bg-green-600 text-white p-6 rounded-full'
      title={isPlaying ? 'Pause' : 'Play'}
      aria-label={isPlaying ? 'Pause' : 'Play'}
    >
      <i class="fa-solid {isPlaying ? 'fa-pause' : 'fa-play'}"></i>
    </button>
    <button
      onclick={() => seekAudio(10)}
      class='bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full'
      title='Forward 10 seconds'
      aria-label='forward'
    >
      <i class='fa-solid fa-forward'></i>
    </button>
    <select
      bind:value={selectedSpeed}
      onchange={changeSpeed}
      class='bg-gray-700 text-white rounded-sm p-4'
    >
      {#each availableSpeed as speed}
        <option value={speed.value}>
          {speed.text}
        </option>
      {/each}
      <!-- <option value="2.5">2.5x</option> -->
    </select>
    <div>
      <p>{formatTime(sliderTime)}</p>
    </div>
    <div class={duration === 0 ? 'hidden' : ''}>
      <p>{formatTime(duration)}</p>
    </div>
  </div>
  <div
    id='slider'
    class='my-4 w-3/4'
  >
    <input
      type='range'
      min='0'
      max={duration}
      bind:value={sliderTime}
      oninput={() => {
        audioPlayer.currentTime = sliderTime
      }}
      class='w-full bg-gray-700 rounded-lg h-2 appearance-none cursor-pointer'
    />
  </div>
</div>

<style>
</style>
