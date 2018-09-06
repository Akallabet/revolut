const express = require('express')
const path = require('path')

const app = express()

const BUILD_DIR = path.resolve(__dirname, './build')

app.get('/', (req, res) => res.sendFile(`${BUILD_DIR}/index.html`))
app.use('/', express.static(BUILD_DIR))

app.listen('9000', console.log('App listening on port 9000'))
