// nav component

const html = require('choo/html')
const btn = require('../components/btn')
const button = require('../components/button')
const heart = require('../components/heart')
const link = require('../components/link')
const modal = require('../components/modal')

module.exports = (state, emit) => {
  return html`
    <header class="bg-near-black w-100 pv3 ph4 flex items-center bb b--dark-gray z-999 shadow-2">

      <nav class="f6 fw6 tracked w-100 flex items-center justify-between justify-center-ns">
        ${btn({ text: 'HELP', mod: 'red', onclick: help, class: 'mr4 w3 tc' })}
        <img src="/assets/img/shiai.svg"
          class="h3 grow-sm shadow-2 pointer br-100" onclick=${about}>
        ${btn({ text: 'RESET', mod: 'red', onclick: reset, class: 'ml4 w3 tc' })}
      </nav>

      ${helpModal()}
      ${resetModal()}
      ${aboutModal()}
    </header>
  `

  function help (ev) {
    emit(state.events.scroll.HIDE_MENU)
    emit(state.events.app.OPEN_MODAL, 'help')
  }

  function reset (ev) {
    emit(state.events.scroll.HIDE_MENU)
    emit(state.events.app.OPEN_MODAL, 'reset')
  }

  function about (ev) {
    emit(state.events.scroll.HIDE_MENU)
    emit(state.events.app.OPEN_MODAL, 'about')
  }

  function helpModal () {
    return modal(state, emit, {
      id: 'help',
      title: 'HELP',
      content: html`
        <div class="overflow-auto">
          <table class="f6 w-100 center" cellspacing="0">
            <tbody class="lh-copy">
              <tr>
                <td class="pr3 pv1 tr fw6 ttu">Toggle timer</td>
                <td class="pr3 pv1">
                  <ul class="mv1 pl3">
                    <li>touch</li>
                    <li>click</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td class="pr3 pv1 tr fw6 ttu">Reset timer</td>
                <td class="pr3 pv1">
                  <ul class="mv1 pl3">
                    <li>long touch</li>
                    <li>right click</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td class="pr3 pv1 tr fw6 ttu">Add point</td>
                <td class="pr3 pv1">
                  <ul class="mv1 pl3">
                    <li>touch</li>
                    <li>click</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td class="pr3 pv1 tr fw6 ttu">Remove point</td>
                <td class="pr3 pv1">
                  <ul class="mv1 pl3">
                    <li>long touch</li>
                    <li>right click</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    })
  }

  function resetModal () {
    return modal(state, emit, {
      id: 'reset',
      title: 'RESET',
      content: html`
        <section class="tc w-100 mb3">
          <p>Select category</p>
          <div class="flex flex-wrap items-center justify-around">
            ${button({ text: 'TANTO', mod: 'red', onclick: tanto, class: 'mt4 mh2 w-100 w4-ns' })}
            ${button({ text: 'TOSHU', mod: 'red', onclick: toshu, class: 'mt4 mh2 w-100 w4-ns' })}
            ${button({ text: 'FREE', mod: 'red', onclick: free, class: 'mt4 mh2 w-100 w4-ns' })}
          </div>
        </section>
      `
    })

    function tanto (ev) {
      emit(state.events.timer.TYPE, 'tanto')
      reset()
    }

    function toshu (ev) {
      emit(state.events.timer.TYPE, 'toshu')
      reset()
    }

    function free (ev) {
      emit(state.events.timer.TYPE, 'free')
      reset()
    }

    function reset (ev) {
      emit(state.events.players.RESET)
      emit(state.events.timer.RESET, true)
      emit(state.events.app.CLOSE_MODAL)
    }
  }

  function aboutModal () {
    return modal(state, emit, {
      id: 'about',
      title: 'ABOUT',
      content: html`
        <section class="tc w-100">

          <div class="w-50 fl">
            <p>Shiai Board</p>
            <img src="/assets/img/shiai.svg" class="h4 br-100">
          </div>

          <div class="w-50 fl">
            <p>Sponsored by</p>
            <img src="/assets/img/tas.png" class="h4">
          </div>

          <p class="mt4 w-100 fl">
            made with ${heart()}<br>
            by ${link({ text: 'neko250', href: 'https://github.com/neko250', mod: 'ylw', ext: true })}
          </p>

        </section>
      `
    })
  }
}
