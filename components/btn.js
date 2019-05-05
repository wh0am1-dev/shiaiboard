// btn component

const html = require('choo/html')

const mods = {
  nil: 'b--near-white hover-bg-near-white',
  blu: 'b--blue hover-bg-blue',
  grn: 'b--green hover-bg-green',
  ylw: 'b--yellow hover-bg-yellow',
  red: 'b--red hover-bg-red',
  ppl: 'b--light-purple hover-bg-light-purple',
  pnk: 'b--pink hover-bg-pink',
  lblu: 'b--light-blue hover-bg-light-blue',
  lgrn: 'b--light-green hover-bg-light-green',
  lylw: 'b--light-yellow hover-bg-light-yellow',
  lred: 'b--light-red hover-bg-light-red'
}

module.exports = (props = {}) => {
  props = {
    text: props.text || 'btn',
    mod: mods[props.mod] || mods.nil,
    onclick: props.onclick,
    class: props.class || ''
  }

  return html`
    <span onclick=${onclick}
      class="${props.mod} bg-animate pa1 ba br2 pointer ${props.class}">
      ${props.text}
    </span>
  `

  function onclick (ev) {
    ev.target.blur()
    if (typeof props.onclick === 'function') {
      props.onclick(ev)
    }
  }
}
