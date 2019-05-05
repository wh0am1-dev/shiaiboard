// nav component

const html = require('choo/html')
const btn = require('../components/btn')
const button = require('../components/button')
const heart = require('../components/heart')
const link = require('../components/link')
const modal = require('../components/modal')

module.exports = (state, emit) => {
  return html`
    <header class="bg-near-black w-100 pa4 flex items-center bb b--dark-gray z-999 shadow-2">
      <!-- <img src="/assets/img/tomiki-aikido-spain.png" class="h2 mr4 shadow-2"> -->

      <nav class="f6 fw6 tracked tc w-100">
        ${btn({ text: 'HELP', mod: 'red', onclick: help, class: 'mr4' })}
        ${btn({ text: 'RESET', mod: 'red', onclick: reset, class: 'mr4' })}
        ${btn({ text: 'ABOUT', mod: 'red', onclick: about })}
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
      title: 'Help',
      content: html`
        <div class="overflow-auto">
          <table class="f6 w-100 center" cellspacing="0">
            <tbody class="lh-copy">
              <tr>
                <td class="pr3 pv1 tr">Toggle timer</td>
                <td class="pr3 pv1">
                  <ul class="mv1 pl3">
                    <li>touch</li>
                    <li>click</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td class="pr3 pv1 tr">Reset timer</td>
                <td class="pr3 pv1">
                  <ul class="mv1 pl3">
                    <li>long touch</li>
                    <li>right click</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td class="pr3 pv1 tr">Add point</td>
                <td class="pr3 pv1">
                  <ul class="mv1 pl3">
                    <li>touch</li>
                    <li>click</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td class="pr3 pv1 tr">Remove point</td>
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
      title: ' ',
      content: html`
        <section class="tc w-100 mb3">
          <p class="mb4">Select category:</p>
          ${button({ text: 'Tanto', mod: 'red', onclick: tanto, class: 'mr4' })}
          ${button({ text: 'Toshu', mod: 'red', onclick: toshu, class: 'mr4' })}
          ${button({ text: 'Free', mod: 'red', onclick: free })}
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
      title: 'About',
      content: html`
        <section class="tc w-100">

          <div class="w-50 fl">
            <p>Shiai Board</p>
            <img src="/assets/img/shiai.svg" class="h4 br-100">
          </div>

          <div class="w-50 fl">
            <p>Sponsored by:</p>
            <img src="/assets/img/tas.png" class="h4">
          </div>

          <p class="mt4 w-100 fl">
            Made with ${heart()}<br>
            by ${link({ text: 'neko250', href: 'https://github.com/neko250', mod: 'ylw', ext: true })}
          </p>

        </section>
      `
    })
  }
}
