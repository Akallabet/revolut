const express = require('express')
const axios = require('axios')
const path = require('path')

const app = express()

const BUILD_DIR = path.resolve(__dirname, './build')

app.use('/', express.static(BUILD_DIR))

app.get('/api/rates/*', (req, res) => {
  const params = req.originalUrl.replace('/api/rates/', '')
  axios.request({
    url: `https://xecdapi.xe.com/v1/historic_rate.json/${params}`,
    method: 'get',
    headers: {
      'Authorization': 'Basic bXIuODEyNTUzNzkyOnFybHIxanFiYWJvOWZvczNxYzlsdjFoZjZ2'
    }
  })
    .then(({data}) => res.send(data))
})

app.get('/*', (req, res) => res.sendFile(`${BUILD_DIR}/index.html`))

app.listen('9000', console.log('App listening on port 9000'))
