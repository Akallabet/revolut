import { connect } from 'react-redux'
import {
  setExchangeFrom,
  setExchangeTo
} from './app-actions'

import App from './app'

const mapStateToProps = ({currencyCodes}) => ({currencyCodes})
const mapDispatchToProps = dispatch => {
  return {
    setExchangeFrom: currency =>
      dispatch(setExchangeFrom(currency)),
    setExchangeTo: currency =>
      dispatch(setExchangeTo(currency))
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
