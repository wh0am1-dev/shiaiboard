const app = (state, emitter) => {
  state.events.app = {}
  state.events.app.ERROR = 'app:error'
  state.events.app.OPEN_MODAL = 'app:openmodal'
  state.events.app.CLOSE_MODAL = 'app:closemodal'
  state.events.app.SFX_HORN = 'app:sfxhorn'

  state.fn = {}
  state.fn.stopProp = ev => ev.stopPropagation()
  state.fn.uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ window.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )

  state.app = {}
  state.app.sfx = {}
  state.app.modal = ''

  emitter.on(state.events.app.OPEN_MODAL, id => {
    state.app.modal = id
    emitter.emit(state.events.RENDER)
    emitter.emit(state.events.scroll.HIDE_MENU)
  })

  emitter.on(state.events.app.CLOSE_MODAL, () => {
    state.app.modal = ''
    emitter.emit(state.events.RENDER)
  })

  emitter.on(state.events.app.SFX_HORN, () => {
    state.app.sfx.horn.play()
  })

  emitter.on(state.events.DOMCONTENTLOADED, () => {
    state.app.sfx.horn = document.querySelector('#sfx-horn')

    document.addEventListener('contextmenu', ev => ev.preventDefault())

    window.addEventListener('keyup', ev => {
      if (ev.code === 'Escape') {
        emitter.emit(state.events.app.CLOSE_MODAL)
      }
    })

    emitter.emit(state.events.scroll.HIDE_MENU)
  })

  emitter.on(state.events.NAVIGATE, () => {
    emitter.emit(state.events.scroll.HIDE_MENU)
  })
}

module.exports = app
