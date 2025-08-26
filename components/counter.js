const html = require('choo/html')

const colors = {
  aka: { bg: 'red', acc: 'near-white' },
  shiro: { bg: 'near-white', acc: 'near-black' },
}

const counter = ({
  title = 'counter',
  count = 0,
  player = 'shiro',
  onclick = () => {},
  oncontextmenu = () => {},
  className = ''
}) => html`
  <section
    onclick=${onclick}
    oncontextmenu=${oncontextmenu}
    class="h-50 h-100-ns grow-sm pointer ${className}"
  >
    <header class="flex items-center justify-center near-black h-25 br-pill mh4 mh3-m bg-${colors[player].bg}">
      <div class="f6 f3-l fw6 tracked-tight-m ttu ${colors[player].acc}">
        ${title}
      </div>
    </header>

    <main class="flex items-center justify-center h-75">
      <span class="f3 f-subheadline-ns fw6 lh-solid">
        ${`${count}`.padStart(2, '0')}
      </span>
    </main>
  </section>
`

module.exports = counter
