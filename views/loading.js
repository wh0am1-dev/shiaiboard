// loading view

const html = require('choo/html')
const btn = require('../components/btn')

const title = 'aikido-board · loading'

module.exports = (state, emit) => {
  return html`
    <body class="code lh-copy bg-near-black near-white ${state.debug}">
      <header class="bg-near-black w-100 ph3 pv2 pv4-ns ph4-m ph5-l flex items-center">
        <nav class="f6 fw6 tracked ttu tc">
          ${btn({ text: '', mod: 'nil' })}
        </nav>
      </header>
      <main id="app"></main>
    </body>
  `
}
