// modal component

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

module.exports = (state, emit, props = {}) => {
  props = {
    id: props.id || state.fn.uuid(),
    title: props.title || 'modal',
    mod: mods[props.mod] || mods.nil,
    content: props.content || ''
  }

  let id = `modal-${props.id}`
  let show = state.app.modal === props.id ? '' : 'o-0 pe-none'

  return html`
    <section id=${id} onclick=${close}
      class="fixed absolute--fill bg-black-90 z-9999 trans-in ${show}">
      <div onclick=${state.fn.stopProp}
        class="absolute modal bg-near-black br2 ba b--dark-gray shadow-2 pa2 w-90 w-two-thirds-m w-third-l">
        <div class="w-100 flex justify-between">
          <span class="${props.mod} tl pv1 ph2">${props.title}</span>
          <span class="tc red hover-near-white hover-bg-red bg-animate br2 pv1 ph3 pointer"
            onclick=${close}>x</span>
        </div>

        <div class="ma2">${props.content}</div>
      </div>
    </section>
  `

  function close (ev) {
    emit(state.events.app.CLOSE_MODAL)
    ev.stopPropagation()
  }
}
