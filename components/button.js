const html = require('choo/html')

const button = ({
  text = 'button',
  onclick = () => {},
  className = ''
}) => {
  return html`
    <button
      onclick=${onclick}
      class="near-white bg-near-black hover-bg-dark-gray br-pill ph3 pv2 bg-animate outline-0 pointer ${className}"
    >
      ${text}
    </button>
  `

  function onclick(ev) {
    ev.target.blur()
    onclick(ev)
  }
}

module.exports = button
