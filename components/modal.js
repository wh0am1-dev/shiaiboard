const html = require('choo/html')

const modal = (state, emit, {
  id = state.fn.uuid(),
  title = 'modal',
  content = ''
}) => {
  if (state.app.modal !== id) return null

  return html`
    <section
      id=${id}
      onclick=${close}
      class="fixed absolute--fill bg-black-90 z-9999 trans-in"
    >
      <div
        onclick=${state.fn.stopProp}
        class="absolute modal bg-near-black br2 ba bw1 b--dark-gray shadow-2 pa2 pa3-l"
      >
        <div class="w-100 flex justify-between">
          <span class="near-white tl pv1 ph2">
            ${title}
          </span>
          <span
            onclick=${close}
            class="tc red hover-near-white hover-bg-red bg-animate br2 pv1 ph2 pointer"
          >
            🞫
          </span>
        </div>

        <div class="ma2">
          ${content}
        </div>
      </div>
    </section>
  `

  function close (ev) {
    emit(state.events.app.CLOSE_MODAL)
    ev.stopPropagation()
  }
}

module.exports = modal
