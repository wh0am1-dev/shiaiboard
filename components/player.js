const html = require('choo/html')
const counter = require('./counter')

const colors = {
  aka: { bg: 'red', acc: 'near-white' },
  shiro: { bg: 'near-white', acc: 'near-black' }
}

const player = (state, emit, player) => {
  return html`
    <section class="h-third">
      <header class="flex items-center justify-center bg-${colors[player.name].bg} near-black h-25 br-pill mh2 mh4-ns">
        <div class="f3 f1-ns fw6 ttu ${colors[player.name].acc}">
          ${player.name}
        </div>
      </header>

      <main class="flex items-center justify-center h-75 t2-ns">
        <div class="f-subheadline f-8-m f-10-l fw6 lh-solid-l">
          ${`${Math.floor(player.points)}`.padStart(2, '0')}
        </div>
      </main>
    </section>

    <section class="h-two-thirds pt4-ns">
      <div class="h-third">
        ${counter({
          title: 'ippon',
          count: player.ippon,
          player: player.name,
          onclick: () => add('ippon'),
          oncontextmenu: () => sub('ippon'),
          className: 'w-100 w-50-ns fl'
        })}

        ${counter({
          title: 'waza ari',
          count: player.waza,
          player: player.name,
          onclick: () => add('waza'),
          oncontextmenu: () => sub('waza'),
          className: 'w-100 w-50-ns fl'
        })}
      </div>

      <div class="h-third">
        ${counter({
          title: 'yūkō',
          count: player.yuko,
          player: player.name,
          onclick: () => add('yuko'),
          oncontextmenu: () => sub('yuko'),
          className: 'w-100 w-50-ns fl'
        })}

        ${counter({
          title: 'tsuki ari',
          count: player.tsuki,
          player: player.name,
          onclick: () => add('tsuki'),
          oncontextmenu: () => sub('tsuki'),
          className: 'w-100 w-50-ns fl'
        })}
      </div>

      <div class="h-third">
        ${counter({
          title: 'shidō',
          count: player.shido,
          player: player.name,
          onclick: () => add('shido'),
          oncontextmenu: () => sub('shido'),
          className: 'w-100 w-50-ns fl'
        })}

        ${counter({
          title: 'chūi',
          count: player.chui,
          player: player.name,
          onclick: () => add('chui'),
          oncontextmenu: () => sub('chui'),
          className: 'w-100 w-50-ns fl'
        })}
      </div>
    </section>
  `

  function add (type) {
    emit(state.events.players.ADD, player.name, type)
  }

  function sub (type) {
    emit(state.events.players.SUB, player.name, type)
  }
}

module.exports = player
