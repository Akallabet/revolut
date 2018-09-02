import React from 'react'
import { render } from 'react-dom'
import App from 'components/app/app'
import './override.less'

render(
  <App />,
  document.getElementById('root')
)