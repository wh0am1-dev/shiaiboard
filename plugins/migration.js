// versioning store

const pointTypes190505 = require('../migrations/pointTypes190505')

module.exports = (state, emitter, app) => {
  let modified = false
  modified = modified || pointTypes190505(state)
  if (modified) emitter.emit('state schema updated')
}
