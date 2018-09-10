import React from 'react'
import { Route } from 'react-router-dom'
import routes, {routeKeys} from '../../utils/routes'
import CurrencyExchange from '../../pages/currency-exchange/currency-exchange-container'
import Wallet from '../../pages/wallet/wallet'

/**
 * This is the main component
 */

const routeComponents = {
  [routeKeys.wallet]: routes.find(({key}) => key === routeKeys.wallet),
  [routeKeys.currencyExchange]: routes.find(({key}) => key === routeKeys.currencyExchange)
}

const App = () => [
  <Route key='default' exact path='/' component={Wallet}/>,
  <Route
    key={routeComponents[routeKeys.wallet].key}
    path={routeComponents[routeKeys.wallet].path}
    component={Wallet}
  />,
  <Route
    key={routeComponents[routeKeys.currencyExchange].key}
    path={routeComponents[routeKeys.currencyExchange].path}
    component={CurrencyExchange}
  />
]

export default App
