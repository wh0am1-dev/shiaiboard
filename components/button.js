// button component

const html = require('choo/html')

const mods = {
  nil: 'near-white hover-bg-near-white b--near-white',
  blu: 'blue hover-bg-blue b--blue',
  grn: 'green hover-bg-green b--green',
  ylw: 'yellow hover-bg-yellow b--yellow',
  red: 'red hover-bg-red b--red',
  ppl: 'light-purple hover-bg-light-purple b--light-purple',
  pnk: 'pink hover-bg-pink b--pink',
  lblu: 'light-blue hover-bg-light-blue b--light-blue',
  lgrn: 'light-green hover-bg-light-green b--light-green',
  lylw: 'light-yellow hover-bg-light-yellow b--light-yellow',
  lred: 'light-red hover-bg-light-red b--light-red'
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
      class="${props.mod} bg-near-black hover-near-black br-pill ph3 pv2 outline-0 pointer ${props.class}">
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
