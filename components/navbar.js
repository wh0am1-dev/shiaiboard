const html = require('choo/html')
const button = require('./button')
const heart = require('./heart')
const link = require('./link')
const modal = require('./modal')

const navbar = (state, emit) => {
  return html`
    <header class="bg-near-black w-100 pv3 ph4 flex items-center bb b--dark-gray z-999 shadow-2">
      <nav class="f6 fw6 tracked w-100 flex items-center justify-between justify-center-ns">
        ${button({
          text: 'HELP',
          onclick: () => emit(state.events.app.OPEN_MODAL, 'help'),
          className: 'mr4 w4 tc'
        })}
        <img
          onclick=${() => emit(state.events.app.OPEN_MODAL, 'about')}
          src="assets/img/shiai.svg"
          class="h3 grow-sm shadow-2 pointer br-100"
        />
        ${button({
          text: 'RESET',
          onclick: () => emit(state.events.app.OPEN_MODAL, 'reset'),
          className: 'ml4 w4 tc'
        })}
      </nav>

      ${modal(state, emit, {
        id: 'reset',
        title: 'RESET',
        content: html`
          <section class="tc w-100 mb3">
            <p>Select category</p>
            <div class="flex flex-column items-center justify-around">
              ${button({ text: 'TANTO', onclick: () => reset('tanto'), className: 'mt2 mh2 w5' })}
              ${button({ text: 'TOSHU', onclick: () => reset('toshu'), className: 'mt2 mh2 w5' })}
              ${button({ text: 'EMBU', onclick: () => reset('embu'), className: 'mt2 mh2 w5' })}
            </div>
          </section>
        `
      })}

      ${modal(state, emit, {
        id: 'about',
        title: 'ABOUT',
        content: html`
          <section class="tc w-100">
            <div class="w-50 fl">
              <p>Shiai Board</p>
              <img src="assets/img/shiai.svg" class="h4 br-100">
            </div>
            <div class="w-50 fl">
              <p>Sponsored by</p>
              <img src="assets/img/tas.png" class="h4">
            </div>
            <p class="mt4 w-100 fl">
              <span class="bg-near-white near-black ph2 pv1 br2">
                v1.3.0
              </span>
            </p>
            <p class="w-100 fl">
              made with ${heart()}<br>
              by ${link({ text: 'carlos aguilar', href: 'https://carlos-aguilar.com', ext: true })}
            </p>
          </section>
        `
      })}

      ${modal(state, emit, {
        id: 'help',
        title: 'HELP',
        content: html`
          <div class="overflow-auto">
            <table class="f6 w-100 center" cellspacing="0">
              <tbody class="lh-copy">
                <tr>
                  <td class="pr2 tr fw6 ttu">Toggle timer</td>
                  <td>
                    <ul class="mv1 pl3">
                      <li>click</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="pr2 tr fw6 ttu">Add point</td>
                  <td>
                    <ul class="mv1 pl3">
                      <li>click</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="pr2 tr fw6 ttu">Remove point</td>
                  <td>
                    <ul class="mv1 pl3">
                      <li>long/right click</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      })}
    </header>
  `

  function reset (type) {
    emit(state.events.players.RESET)
    emit(state.events.timer.RESET, type)
    emit(state.events.app.CLOSE_MODAL)
  }
}

module.exports = navbar
