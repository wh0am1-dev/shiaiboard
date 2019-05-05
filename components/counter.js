// counter component

const html = require('choo/html')

const mods = {
  nil: { bg: 'near-white', acc: 'near-black' },
  blu: { bg: 'blue', acc: 'near-black' },
  grn: { bg: 'green', acc: 'near-black' },
  ylw: { bg: 'yellow', acc: 'near-black' },
  red: { bg: 'red', acc: 'near-white' },
  ppl: { bg: 'light-purple', acc: 'near-black' },
  pnk: { bg: 'pink', acc: 'near-black' },
  lblu: { bg: 'light-blue', acc: 'near-black' },
  lgrn: { bg: 'light-green', acc: 'near-black' },
  lylw: { bg: 'light-yellow', acc: 'near-black' },
  lred: { bg: 'light-red', acc: 'near-black' }
}

module.exports = (props = {}) => {
  props = {
    title: props.title || 'counter',
    count: props.count || 0,
    mod: mods[props.mod] || mods.nil,
    onclick: props.onclick,
    oncontextmenu: props.oncontextmenu,
    class: props.class || ''
  }

  return html`
    <section class="h-50 h-100-ns grow-sm ${props.class}" onclick=${onclick} oncontextmenu=${oncontextmenu}>

      <header class="flex items-center justify-center bg-${props.mod.bg} near-black h-25 br-pill mh4 mh3-m">
        <div class="f6 f3-l fw6 tracked-tight-m ttu ${props.mod.acc}">
          ${props.title}
        </div>
      </header>

      <main class="flex items-center justify-center h-75">
        <span class="f3 f-subheadline-ns fw6 lh-solid">${props.count.toString().padStart(2, '0')}</span>
      </main>

    </section>
  `

  function onclick (ev) {
    if (typeof props.onclick === 'function') {
      props.onclick(ev)
    }
  }

  function oncontextmenu (ev) {
    if (typeof props.oncontextmenu === 'function') {
      props.oncontextmenu(ev)
    }
  }
}
