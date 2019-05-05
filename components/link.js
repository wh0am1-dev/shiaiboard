// link component

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
    text: props.text || 'link',
    href: props.href || '',
    mod: mods[props.mod] || mods.nil,
    ext: props.ext || false,
    class: props.class || ''
  }

  let target = props.ext ? '_blank' : ''
  let rel = props.ext ? 'noopener noreferrer' : ''

  return html`
    <a href=${props.href} target=${target} rel=${rel} onclick=${onclick}
      class="link ${props.mod} bg-animate pa1 br2 ${props.class}">
      ${props.text}
    </a>
  `

  function onclick (ev) {
    ev.target.blur()
  }
}
