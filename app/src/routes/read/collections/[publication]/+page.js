export function load ({params: {publication}}) {
  const viewFilter = item => item.publication === publication
  return {
    viewFilter,
  }
}
