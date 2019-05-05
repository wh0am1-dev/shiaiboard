// players store

const points = { ipon: 4, waza: 2, yuko: 1, tanto: 1, shido: 1, shui: 2 }

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
      ipon: 0, waza: 0, yuko: 0,
      tanto: 0, shido: 0, shui: 0
    }
  }

  function calcPoints () {
    state.players.aka.points =
      points.ipon * state.players.aka.ipon +
      points.waza * state.players.aka.waza +
      points.yuko * state.players.aka.yuko +
      points.tanto * state.players.aka.tanto +
      points.shido * state.players.shiro.shido +
      points.shui * state.players.shiro.shui

    state.players.shiro.points =
      points.ipon * state.players.shiro.ipon +
      points.waza * state.players.shiro.waza +
      points.yuko * state.players.shiro.yuko +
      points.tanto * state.players.shiro.tanto +
      points.shido * state.players.aka.shido +
      points.shui * state.players.aka.shui
  }
}
