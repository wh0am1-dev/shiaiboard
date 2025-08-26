const pointTypes190505 = require('./migrations/pointTypes190505')
const embu191004 = require('./migrations/embu191004')

const migrate = (state, emitter, app) => {
  let modified = false
  modified |= pointTypes190505(state)
  modified |= embu191004(state)
  if (modified) console.log(':: state schema updated ::')
}

module.exports = migrate
