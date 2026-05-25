/**
 * @param {Object} options
 * @param {Array<[string, any]>} [options.tagsArray=[]] initial tag‐pairs
 * @param {*}                 [options.missingReturn=undefined] what getTagValue returns if absent
 */
function initTags (tagsArray, {missingReturn = undefined} = {}) {
  const safeTagsArray = tagsArray || []
  // clone incoming pairs into our own constant array instance
  const tags = safeTagsArray.map(([k, v]) => [k, v])

  function getTagValue (name) {
    const entry = tags.find(([k]) => k === name)
    return entry ? entry[1] : missingReturn
  }

  function addTag (name, value) {
    const idx = tags.findIndex(([k]) => k === name)
    if (idx >= 0) {
      tags[idx][1] = value
    } else {
      tags.push([name, value])
    }
  }

  function removeTag (name) {
    const idx = tags.findIndex(([k]) => k === name)
    if (idx >= 0) tags.splice(idx, 1)
  }

  function updateTag (name, value) {
    const idx = tags.findIndex(([k]) => k === name)
    if (idx < 0) {
      // throw new Error(`Tag "${name}" does not exist`)
      return addTag(name, value)
    }
    tags[idx][1] = value
  }

  function matches (name, expected) {
    return getTagValue(name) === expected
  }

  // expose these methods; _getAllTags() only for test‐inspection
  return {
    getTagValue,
    addTag,
    removeTag,
    updateTag,
    matches,
    _getAllTags: () => tags,
  }
}

export default initTags
