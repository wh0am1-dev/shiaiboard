// pointTypes190505 migration

module.exports = state => {
  let modified = false

  if (state.players) {
    if (state.players.aka) {
      if (state.players.aka.ipon) {
        state.players.aka.ippon = state.players.aka.ipon
        delete state.players.aka.ipon
        modified = true
      }

      if (state.players.aka.tanto) {
        state.players.aka.tsuki = state.players.aka.tanto
        delete state.players.aka.tanto
        modified = true
      }

      if (state.players.aka.shui) {
        state.players.aka.chui = state.players.aka.shui
        delete state.players.aka.shui
        modified = true
      }
    }

    if (state.players.shiro) {
      if (state.players.shiro.ipon) {
        state.players.shiro.ippon = state.players.shiro.ipon
        delete state.players.shiro.ipon
        modified = true
      }

      if (state.players.shiro.tanto) {
        state.players.shiro.tsuki = state.players.shiro.tanto
        delete state.players.shiro.tanto
        modified = true
      }

      if (state.players.shiro.shui) {
        state.players.shiro.chui = state.players.shiro.shui
        delete state.players.shiro.shui
        modified = true
      }
    }
  }

  return modified
}
