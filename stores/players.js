// players store

const points = { ippon: 4, waza: 2, yuko: 1, tsuki: 1, shido: 0.5, chui: 1 }

module.exports = (state, emitter) => {
  state.events.players = {}
  state.events.players.ADD = 'players:add'
  state.events.players.SUB = 'players:sub'
  state.events.players.RESET = 'players:reset'

  if (!state.players) reset()

  emitter.on(state.events.players.ADD, (name, type) => {
    state.players[name][type] += 1
    calcPoints()
    emitter.emit(state.events.RENDER)
  })

  emitter.on(state.events.players.SUB, (name, type) => {
    state.players[name][type] = Math.max(state.players[name][type] - 1, 0)
    calcPoints()
    emitter.emit(state.events.RENDER)
  })

  emitter.on(state.events.players.RESET, reset)

  function reset () {
    state.players = {}
    state.players.aka = player('aka', 'red')
    state.players.shiro = player('shiro', 'nil')
    emitter.emit(state.events.RENDER)
  }

  function player (name, mod) {
    return {
      name: name || 'player',
      mod: mod || 'nil',
      points: 0,
      ippon: 0, waza: 0, yuko: 0,
      tsuki: 0, shido: 0, chui: 0
    }
  }

  function calcPoints () {
    state.players.aka.points =
      points.ippon * state.players.aka.ippon +
      points.waza * state.players.aka.waza +
      points.yuko * state.players.aka.yuko +
      points.tsuki * state.players.aka.tsuki +
      points.shido * state.players.shiro.shido +
      points.chui * state.players.shiro.chui

    state.players.shiro.points =
      points.ippon * state.players.shiro.ippon +
      points.waza * state.players.shiro.waza +
      points.yuko * state.players.shiro.yuko +
      points.tsuki * state.players.shiro.tsuki +
      points.shido * state.players.aka.shido +
      points.chui * state.players.aka.chui
  }
}
