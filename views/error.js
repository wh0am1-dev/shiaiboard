// error view

const html = require('choo/html')
const nav = require('../components/nav')
const header = require('../components/header')
const button = require('../components/button')

const title = 'aikido-board · error'

module.exports = (state, emit) => {
  if (state.title !== title) {
    emit(state.events.DOMTITLECHANGE, title)
  }

  return html`
    <body class="cursor sbs sel-none code lh-copy bg-near-black near-white ${state.debug}">
      ${nav(state, emit)}

      <main id="app" class="vh-100 w-100 pa2">
        <section class="cf center w-100 w-90-m w-80-l ph2 tc">

          ${header({ text: 'error', mod: 'red' })}

          <div class="mb5">
            <h2>(╯°□°)╯︵ ┻━┻</h2>
            <h1 class="f4 f3-m f2-l">something went wrong...</h1>
          </div>

          ${button({ text: 'go back', mod: 'red', onclick: () => emit(state.events.PUSHSTATE, '/') })}

        </section>
      </main>
    </body>
  `
}
