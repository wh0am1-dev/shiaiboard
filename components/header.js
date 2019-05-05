// header component

const html = require('choo/html')

const mods = {
  nil: 'bg-near-white',
  blu: 'bg-blue',
  grn: 'bg-green',
  ylw: 'bg-yellow',
  red: 'bg-red',
  ppl: 'bg-light-purple',
  pnk: 'bg-pink',
  lblu: 'bg-light-blue',
  lgrn: 'bg-light-green',
  lylw: 'bg-light-yellow',
  lred: 'bg-light-red'
}

module.exports = (props = {}) => {
  props = {
    text: props.text || 'header',
    mod: mods[props.mod] || mods.nil,
    class: props.class || ''
  }

  return html`
    <header class="tc w-100 dt ${props.class}">
      <section class="dtc v-mid">
        <h2 class="f3 f1-ns">
          <span class="${props.mod} near-black ph3 pv2 shadow-5 br2">${props.text}</span>
        </h2>
      </section>
    </header>
  `
}
