import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import routes, {routeKeys} from '../../utils/routes'
import CurrencyExchange from '../../pages/currency-exchange/currency-exchange-container'
import Pockets from '../../pages/pockets/pockets-container'

/**
 * This is the main component
 */

const routeComponents = {
  [routeKeys.pockets]: routes.find(({key}) => key === routeKeys.pockets),
  [routeKeys.currencyExchange]: routes.find(({key}) => key === routeKeys.currencyExchange)
}

const App = () => (
  <Switch>
    <Route
      key={routeComponents[routeKeys.pockets].key}
      path={routeComponents[routeKeys.pockets].path}
      component={Pockets}
    />
    <Route
      key={routeComponents[routeKeys.currencyExchange].key}
      path={routeComponents[routeKeys.currencyExchange].path}
      component={CurrencyExchange}
    />
    <Redirect from='/' to={routeComponents[routeKeys.pockets].path}/>
  </Switch>
)

export default App
