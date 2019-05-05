// 🚂🚋🚋 choo 🚋🚋🚋
const app = require('choo')()

// ==== styles ====
const css = require('sheetify')
css('tachyons')
css('./styles.css')

// ==== setup environment ====
if (process.env.NODE_ENV === 'production') {
  app.use(require('choo-persist')())
  app.use(require('./plugins/migration'))
} else {
  app.use(require('choo-service-worker/clear')())
  app.use(require('choo-devtools')())
  app.use(require('./plugins/debug'))
}

// ==== service worker ====
app.use(require('choo-service-worker')())

// ==== disable auto scroll ====
if (typeof window !== 'undefined' && window.history.scrollRestoration) {
  window.history.scrollRestoration = 'manual'
}

// ==== stores ====
app.use(require('./stores/app'))
app.use(require('./stores/scroll'))
app.use(require('./stores/timer'))
app.use(require('./stores/players'))

// ==== routes ====
app.route('/', require('./views/board'))
app.route('#error', require('./views/error'))
app.route('#*', require('./views/error'))

// ==== app ====
module.exports = app.mount('body')
