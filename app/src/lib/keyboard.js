/*
  example:
    const handleArrowDown = bindEvent({bindKey: 'ArrowDown', handle: moveDown})
*/

const bindEvent = ({bindModifier, bindKey, handle}) => event => {
  // console.log({bindModifier, bindKey})
  // const {altKey, ctrlKey, shiftKey} = event
  // console.log({altKey, ctrlKey, shiftKey})
  const {[bindModifier]: modifier, key, type} = event
  // console.log({bindModifierValue: modifier, key})
  if (bindModifier && modifier !== true) {
    // console.log('no match :(', {bindModifier, modifier, key})
    return
  }
  if (key === bindKey) {
    // console.log('match :)', {bindModifier, modifier, key})
    event.preventDefault()
    type === 'keyup' && handle()
  }
}

const bind = (type, eventHandler) => {
	if (typeof window !== 'undefined') {
		window.addEventListener(type, eventHandler, {passive: false})
	}
}

export {bindEvent, bind}
