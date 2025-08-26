const html = require('choo/html')

const link = ({
  text = 'link',
  href = '',
  ext = false,
  className = ''
}) => {
  const target = ext ? '_blank' : ''
  const rel = ext ? 'noopener noreferrer' : ''

  return html`
    <a
      href=${href}
      onclick=${onclick}
      target=${target}
      rel=${rel}
      class="link gold hover-near-black hover-bg-gold bg-animate pa1 br2 ${className}"
    >
      ${text}
    </a>
  `

  function onclick (ev) {
    ev.target.blur()
  }
}

module.exports = link
