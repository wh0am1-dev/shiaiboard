const html = require('choo/html')
const navbar = require('../components/navbar')
const button = require('../components/button')

const title = 'aikido-board · error'

module.exports = (state, emit) => {
  if (state.title !== title) {
    emit(state.events.DOMTITLECHANGE, title)
  }

  return html`
    <body class="cursor sbs sel-none code lh-copy bg-near-black near-white ${state.debug}">
      ${navbar(state, emit)}

      <main id="app" class="vh-100 w-100 pa2">
        <section class="cf center w-100 w-90-m w-80-l ph2 tc">
          <header class="tc w-100 dt">
            <section class="dtc v-mid">
              <h2 class="f3 f1-ns">
                <span class="bg-red near-black ph3 pv2 shadow-5 br2">
                  error
                </span>
              </h2>
            </section>
          </header>

          <div class="mb5">
            <h2>(╯°□°)╯︵ ┻━┻</h2>
            <h1 class="f4 f3-m f2-l">something went wrong...</h1>
          </div>

          ${button({ text: 'go back', onclick: () => emit(state.events.PUSHSTATE, '/') })}
        </section>
      </main>
    </body>
  `
}
