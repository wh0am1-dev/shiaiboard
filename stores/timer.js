// timer store

module.exports = (state, emitter) => {
  state.events.timer = {}
  state.events.timer.ON = 'timer:on'
  state.events.timer.OFF = 'timer:off'
  state.events.timer.TOGGLE = 'timer:toggle'
  state.events.timer.RESET = 'timer:reset'
  state.events.timer.TYPE = 'timer:type'

  state.time = {}
  state.time.types = {}
  state.time.types.tanto = 90000
  state.time.types.toshu = 180000
  state.time.types.free = 120000
  state.time.type = 'tanto'
  state.time.clk = 0
  state.time.on = false
  state.time.m = () => Math.floor(state.time.clk / 60000).toString().padStart(2, '0')
  state.time.s = () => Math.floor(state.time.clk % 60000 / 1000).toString().padStart(2, '0')
  state.time.cs = () => Math.floor(state.time.clk % 100).toString().padStart(2, '0')
  state.time.ms = () => Math.floor(state.time.clk % 1000).toString().padStart(3, '0')

  let offset = null
  let interval = null

  emitter.on(state.events.timer.ON, () => {
    if (!state.time.on) {
      offset = Date.now()

      interval = setInterval(() => {
        let now = Date.now()
        state.time.clk += now - offset
        offset = now

        if (state.time.clk >= state.time.types[state.time.type]) {
          state.time.clk = state.time.types[state.time.type]
          emitter.emit(state.events.timer.OFF)
          emitter.emit(state.events.app.SFX_HORN)
        }

        emitter.emit(state.events.RENDER)
      }, 1)

      state.time.on = true
    }

    emitter.emit(state.events.RENDER)
  })

  emitter.on(state.events.timer.OFF, () => {
    if (state.time.on) {
      clearInterval(interval)
      interval = null
      state.time.on = false
    }

    emitter.emit(state.events.RENDER)
  })

  emitter.on(state.events.timer.TOGGLE, () => {
    if (state.time.on) {
      emitter.emit(state.events.timer.OFF)
    } else {
      emitter.emit(state.events.timer.ON)
    }
  })

  emitter.on(state.events.timer.RESET, force => {
    if (force || !state.time.on) {
      state.time.clk = 0
      emitter.emit(state.events.timer.OFF)
    }
  })

  emitter.on(state.events.timer.TYPE, type => {
    state.time.type = type
  })
}
