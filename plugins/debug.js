const debug = (state, emitter, app) => {
  // events
  state.events.DEBUG_ON = 'debug:on'
  state.events.DEBUG_OFF = 'debug:off'
  state.events.DEBUG_LOG = 'debug:log'
  state.events.DEBUG_WARN = 'debug:warn'
  state.events.DEBUG_ERROR = 'debug:error'
  state.events.DEBUG_PING = 'debug:ping'
  state.events.MAINTENANCE_ON = 'maintenance:on'
  state.events.MAINTENANCE_OFF = 'maintenance:off'

  // state
  state.debug = ''

  // listeners
  emitter.on(state.events.DEBUG_ON, () => {
    state.debug = 'debug-grid'
    emitter.emit(state.events.RENDER)
  })

  emitter.on(state.events.DEBUG_OFF, () => {
    state.debug = ''
    emitter.emit(state.events.RENDER)
  })

  emitter.on(state.events.DEBUG_LOG, msg => {
    console.log(`📜 debug:log :: ${msg}`)
  })

  emitter.on(state.events.DEBUG_WARN, msg => {
    console.warn(`📜 debug:warn :: ${msg}`)
  })

  emitter.on(state.events.DEBUG_ERROR, msg => {
    console.error(`📜 debug:error :: ${msg}`)
  })

  emitter.on(state.events.DEBUG_PING, () => {
    console.log('🏓 debug:ping :: pong !')
  })

  emitter.on(state.events.MAINTENANCE_ON, () => {
    state.maintenance = true
    emitter.emit(state.events.RENDER)
  })

  emitter.on(state.events.MAINTENANCE_OFF, () => {
    state.maintenance = false
    emitter.emit(state.events.RENDER)
  })
}

module.exports = debug
