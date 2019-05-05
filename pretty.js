const fs = require('fs')
const path = require('path')
const pretty = require('pretty')

const src = path.join(__dirname, 'dist', 'index.html')
const out = path.join(__dirname, 'dist', 'pretty.html')

fs.writeFileSync(out, pretty(fs.readFileSync(src, 'utf8'), { ocd: true }))
