const html = require('choo/html')
const navbar = require('../components/navbar')
const timer = require('../components/timer')
const player = require('../components/player')

const title = 'Shiai Board'

module.exports = (state, emit) => {
  if (state.title !== title) {
    emit(state.events.DOMTITLECHANGE, title)
  }

  return html`
    <body class="cursor sbs sel-none code lh-copy bg-near-black near-white ${state.debug}">
      ${navbar(state, emit)}

      <main id="app" class="vh-100 w-100 tracked relative">
        <div class="absolute top-1 left-1 top-2-l left-2-l">
          <span class="ttu f7 f5-ns fw6 br-pill bg-near-white near-black pv1 ph3">
            ${state.time.type}·${state.time.total()}
          </span>
        </div>

        <div class="absolute top-1 right-1 top-2-l right-2-l tc">
          <img src="assets/img/itaf.png" class="h2 h3-l" />
          <div class="dn db-ns">
            <span class="ttu f7 fw6 tracked-tight-m mt3-l">ITAF</span>
          </div>
        </div>

        ${timer(state, emit)}
        ${state.time.type === 'embu'
          ? null
          : html`
            <section class="w-50 h-75 fl br b--dark-gray">
              ${player(state, emit, state.players.aka)}
            </section>

            <section class="w-50 h-75 fl">
              ${player(state, emit, state.players.shiro)}
            </section>
          `
        }
      </main>

      <audio id="sfx-horn" class="dn" preload volume="1.0">
        <source src="assets/sfx/horn.ogg" type="audio/ogg" />
        <source src="assets/sfx/horn.mp3" type="audio/mpeg" />
      </audio>
    </body>
  `
}
