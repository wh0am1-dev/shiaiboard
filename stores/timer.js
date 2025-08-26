const timer = (state, emitter) => {
  state.events.timer = {}
  state.events.timer.ON = 'timer:on'
  state.events.timer.OFF = 'timer:off'
  state.events.timer.TOGGLE = 'timer:toggle'
  state.events.timer.RESET = 'timer:reset'

  state.time = state.time || {}
  state.time.types = {}
  state.time.types.tanto = 90000
  state.time.types.toshu = 180000
  state.time.types.embu = 150000
  state.time.type = state.time.type || 'tanto'
  state.time.offset = state.time.offset || null
  state.time.clk = state.time.clk || 0
  state.time.on = state.time.on || false
  state.time.m = () => Math.floor(state.time.clk / 60000).toString().padStart(2, '0')
  state.time.s = () => Math.floor(state.time.clk % 60000 / 1000).toString().padStart(2, '0')
  state.time.ds = () => Math.floor(state.time.clk % 1000 / 100).toString().padStart(1, '0')
  state.time.cs = () => Math.floor(state.time.clk % 1000 / 10).toString().padStart(2, '0')
  state.time.ms = () => Math.floor(state.time.clk % 1000).toString().padStart(3, '0')

  state.time.total = () => {
    let m = Math.floor(state.time.types[state.time.type] / 60000).toString().padStart(2, '0')
    let s = Math.floor((state.time.types[state.time.type] % 60000) / 1000).toString().padStart(2, '0')
    return `${m}:${s}`
  }

  let interval = null
  if (!state.time.on) state.time.offset = null

  emitter.on(state.events.timer.ON, () => {
    state.time.offset = state.time.offset || Date.now()

    interval = setInterval(() => {
      let now = Date.now()
      state.time.clk += now - state.time.offset
      state.time.offset = now

      if (state.time.clk >= state.time.types[state.time.type]) {
        state.time.clk = state.time.types[state.time.type]
        emitter.emit(state.events.timer.OFF)
        emitter.emit(state.events.app.SFX_HORN)
      }

      emitter.emit(state.events.RENDER)
    }, 10)

    state.time.on = true
    emitter.emit(state.events.RENDER)
  })

  emitter.on(state.events.timer.OFF, () => {
    clearInterval(interval)
    interval = null
    state.time.on = false
    state.time.offset = null
    emitter.emit(state.events.RENDER)
  })

  emitter.on(state.events.timer.TOGGLE, () => {
    if (state.time.on) {
      emitter.emit(state.events.timer.OFF)
    } else {
      emitter.emit(state.events.timer.ON)
    }
  })

  emitter.on(state.events.timer.RESET, type => {
    if (type || !state.time.on) {
      state.time.clk = 0
      state.time.type = type || state.time.type
      emitter.emit(state.events.timer.OFF)
    }
  })

  if (state.time.on) emitter.emit(state.events.timer.ON)
}

module.exports = timer
