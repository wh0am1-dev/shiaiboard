const html = require('choo/html')

const timer = (state, emit) => {
  const color = state.time.on ? 'near-white' : 'silver'
  const height = state.time.type === 'embu' ? 'h-100' : 'h-25'
  const font = state.time.type === 'embu'
    ? 'f-timer'
    : 'f-subheadline f-8-m f-10-l'

  return html`
    <section class="flex items-center justify-center ${height}">
      <span
        onclick=${toggle}
        oncontextmenu=${reset}
        class="${color} ${font} fw6 lh-solid-l grow-sm"
      >
        ${state.time.m()}:${state.time.s()}
        <span class="absolute">
          <small class="f4 f3-m f2-l">.${state.time.cs()}</small>
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

module.exports = timer
