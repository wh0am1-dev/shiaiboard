const scroll = (state, emitter) => {
  state.events.scroll = {}
  state.events.scroll.XY = 'scroll:xy'
  state.events.scroll.EL = 'scroll:el'
  state.events.scroll.HIDE_MENU = 'scroll:hidemenu'

  emitter.on(state.events.scroll.XY, (x, y, smooth = false) => {
    window.scrollTo({
      behavior: smooth ? 'smooth' : 'auto',
      top: y,
      left: x
    })
  })

  emitter.on(state.events.scroll.EL, (selector, smooth = false) => {
    document.querySelector(selector).scrollIntoView({
      behavior: smooth ? 'smooth' : 'auto',
      block: 'start'
    })
  })

  emitter.on(state.events.scroll.HIDE_MENU, () => {
    emitter.emit(state.events.scroll.XY, 0, 97, true)
  })
}

module.exports = scroll
