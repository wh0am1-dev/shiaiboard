// player component

const html = require('choo/html')
const counter = require('./counter')

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

module.exports = (state, emit, player) => {
  let mod = mods[player.mod]

  return html`
    <section class="h-third">

      <header class="flex items-center justify-center bg-${mod.bg} near-black h-25 br-pill mh2 mh4-ns">
        <div class="f3 f1-ns fw6 ttu ${mod.acc}">${player.name}</div>
      </header>

      <main class="flex items-center justify-center h-75 t2-ns">
        <div class="f-subheadline f-8-m f-10-l fw6 lh-solid-l">${player.points.toString().padStart(2, '0')}</div>
      </main>

    </section>

    <section class="h-two-thirds pt4-ns">

      <div class="h-third">
        ${counter({
          title: 'ipon',
          count: player.ipon,
          mod: player.mod,
          onclick: () => add('ipon'),
          oncontextmenu: () => sub('ipon'),
          class: 'w-100 w-50-ns fl'
        })}

        ${counter({
          title: 'waza ari',
          count: player.waza,
          mod: player.mod,
          onclick: () => add('waza'),
          oncontextmenu: () => sub('waza'),
          class: 'w-100 w-50-ns fl'
        })}
      </div>

      <div class="h-third">
        ${counter({
          title: 'yuko',
          count: player.yuko,
          mod: player.mod,
          onclick: () => add('yuko'),
          oncontextmenu: () => sub('yuko'),
          class: 'w-100 w-50-ns fl'
        })}

        ${counter({
          title: 'tanto tsuki',
          count: player.tanto,
          mod: player.mod,
          onclick: () => add('tanto'),
          oncontextmenu: () => sub('tanto'),
          class: 'w-100 w-50-ns fl'
        })}
      </div>

      <div class="h-third">
        ${counter({
          title: 'shido',
          count: player.shido,
          mod: player.mod,
          onclick: () => add('shido'),
          oncontextmenu: () => sub('shido'),
          class: 'w-100 w-50-ns fl'
        })}

        ${counter({
          title: 'shui',
          count: player.shui,
          mod: player.mod,
          onclick: () => add('shui'),
          oncontextmenu: () => sub('shui'),
          class: 'w-100 w-50-ns fl'
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
