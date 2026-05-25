export function load () {
  const contextButtons = [
    // {
    //   id: 'sync',
    //   label: 'Force Clear & Sync',
    //   iconPath: 'svg/sync-svgrepo-com.svg',
    //   handleClick: () => clearLocalDatabase()
    //     .then(syncFromApi)
    //     .then(populateView)
    //     .then(result => {
    //       console.log({result})
    //       invalidateAll()
    //     })
    //     .catch(error => {
    //       console.warn(error)
    //     }),
    // },
  ]
  return {contextButtons}
}
