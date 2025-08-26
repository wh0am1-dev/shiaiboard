// 🚂🚋🚋 choo 🚋🚋🚋
const app = require('choo')()

// ==== styles ====
const css = require('sheetify')
css('tachyons')
css('./styles.css')

// ==== plugins ====
if (process.env.NODE_ENV === 'production') {
  app.use(require('choo-service-worker')())
} else {
  app.use(require('choo-service-worker/clear')())
  app.use(require('choo-devtools')())
  app.use(require('./plugins/debug'))
}

app.use(require('choo-persist')())
app.use(require('./plugins/migrate'))

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
app.route('*', require('./views/board'))

// ==== app ====
module.exports = app.mount('body')
