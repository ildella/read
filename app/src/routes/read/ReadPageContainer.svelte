<script>
  import {page} from '$app/state'
  import BottomNavBar from '$lib/components/BottomNavBar.svelte'
  import SelectorContainer from '$lib/containers/SelectorContainer2.svelte'

  import {clearLocalDatabase, populateView} from './sync-from-api'

  const {children} = $props()
  const {appButtons, contextButtons = []} = $derived(page.data)

  let show = $state(false)
  const toggleShow = () => {
    show = !show
  }

  const showActionsButton = {
    id: 'context',
    label: 'More',
    handleClick: toggleShow,
    iconPath: 'svg/three-dots-vertical-svgrepo-com.svg',
  }
  const navBarButtons = $derived([...appButtons, showActionsButton])
  const defaultMenuButtons = [
    {
      id: 'settings',
      href: '/read/settings',
      label: 'Settings',
      iconPath: 'svg/settings.svg',
    },
    {
      id: 'sync',
      label: 'Rebuild Index',
      iconPath: 'svg/sync-svgrepo-com.svg',
      handleClick: () => clearLocalDatabase()
        .then(populateView)
        .catch(error => {
          console.warn(error)
        }),
    },
  ]
  const menuButtons = [
    ...[
      ...defaultMenuButtons,
      ...contextButtons,
    ]
      .map(button => ({
        ...button,
        handleClick: () => {
          toggleShow()
          return button.handleClick()
        },
      })),
  ]
</script>

{#snippet actionButtons()}
  <SelectorContainer
    {show}
    center={false}
  >
    <BottomNavBar buttons={menuButtons} />
  </SelectorContainer>
{/snippet}

<div
  id='page-container'
  class='flex flex-col h-full'
>
  <!-- <AppContainer> -->
  {@render children?.()}
  <!-- </AppContainer> -->
  {@render actionButtons?.()}
  <BottomNavBar
    id='page-container-navbar'
    buttons={navBarButtons}
  />
</div>
