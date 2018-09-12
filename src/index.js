import React from 'react'
import {Provider} from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './utils/store'
import App from 'components/app/app'
import './override.less'

render(
  <Provider store={store}>
    <Router basename={process.env.BASE_NAME}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
