// timer component

const html = require('choo/html')

const mods = {
  nil: 'near-white',
  blu: 'blue',
  grn: 'green',
  ylw: 'yellow',
  red: 'red',
  ppl: 'light-purple',
  pnk: 'pink',
  lblu: 'light-blue',
  lgrn: 'light-green',
  lylw: 'light-yellow',
  lred: 'light-red'
}

module.exports = (state, emit) => {
  let mod = state.time.on ? mods.nil : 'silver'
  let height = state.time.type === 'embu' ? 'h-100' : 'h-25'
  let font = state.time.type === 'embu'
    ? 'f-timer'
    : 'f-subheadline f-8-m f-10-l'

  return html`
    <section class="flex items-center justify-center ${height}">
      <span onclick=${toggle} oncontextmenu=${reset}
        class="${mod} ${font} fw6 lh-solid-l grow-sm">
        ${state.time.m()}:${state.time.s()}
        <span class="absolute">
          <small class="f4 f3-m f2-l">.${state.time.ds()}</small>
        </span>
      </span>
    </section>
  `

  function toggle () {
    emit(state.events.timer.TOGGLE)
  }

  function reset () {
    emit(state.events.timer.RESET)
  }
}
