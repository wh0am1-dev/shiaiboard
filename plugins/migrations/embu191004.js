// pointTypes190505 migration

module.exports = state => {
  let modified = false

  if (state.time && state.time.types && state.time.types.free) {
    delete state.time.types.free
    modified = true
  }

  return modified
}
