// button component

const html = require('choo/html')

const mods = {
  nil: 'hover-bg-near-white b--near-white',
  blu: 'hover-bg-blue b--blue',
  grn: 'hover-bg-green b--green',
  ylw: 'hover-bg-yellow b--yellow',
  red: 'hover-bg-red b--red',
  ppl: 'hover-bg-light-purple b--light-purple',
  pnk: 'hover-bg-pink b--pink',
  lblu: 'hover-bg-light-blue b--light-blue',
  lgrn: 'hover-bg-light-green b--light-green',
  lylw: 'hover-bg-light-yellow b--light-yellow',
  lred: 'hover-bg-light-red b--light-red'
}

module.exports = (props = {}) => {
  props = {
    text: props.text || 'button',
    mod: mods[props.mod] || mods.nil,
    onclick: props.onclick,
    class: props.class || ''
  }

  return html`
    <button onclick=${onclick}
      class="${props.mod} near-white bg-near-black br-pill ph3 pv2 bg-animate outline-0 pointer ${props.class}">
      ${props.text}
    </button>
  `

  function onclick (ev) {
    ev.target.blur()
    if (typeof props.onclick === 'function') {
      props.onclick(ev)
    }
  }
}
