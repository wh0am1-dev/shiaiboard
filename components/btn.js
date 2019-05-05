// btn component

const html = require('choo/html')

const mods = {
  nil: 'near-white hover-near-black hover-bg-near-white',
  blu: 'blue hover-near-black hover-bg-blue',
  grn: 'green hover-near-black hover-bg-green',
  ylw: 'yellow hover-near-black hover-bg-yellow',
  red: 'red hover-near-black hover-bg-red',
  ppl: 'light-purple hover-near-black hover-bg-light-purple',
  pnk: 'pink hover-near-black hover-bg-pink',
  lblu: 'light-blue hover-near-black hover-bg-light-blue',
  lgrn: 'light-green hover-near-black hover-bg-light-green',
  lylw: 'light-yellow hover-near-black hover-bg-light-yellow',
  lred: 'light-red hover-near-black hover-bg-light-red'
}

module.exports = (props = {}) => {
  props = {
    text: props.text || 'btn',
    mod: mods[props.mod] || mods.nil,
    onclick: props.onclick,
    class: props.class || ''
  }

  return html`
    <span onclick=${onclick} class="${props.mod} bg-animate pa1 br2 pointer ${props.class}">
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
