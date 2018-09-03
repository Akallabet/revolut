import React from 'react'
import {Provider} from 'react-redux'
import { render } from 'react-dom'
import store from './store'
import App from 'components/app/app-container'
import './override.less'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
