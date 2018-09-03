import { combineReducers } from 'redux'

import { CURRENCY_CODES } from './constants'
import exchangeFrom from './components/exchange-from/exchange-from-reducer'
import exchangeTo from './components/exchange-to/exchange-to-reducer'

const {EUR, USD, GBP} = CURRENCY_CODES

const defCurrencyCodes = {
  EUR,
  USD,
  GBP
}

const defAvailableCurrencies = [{
  code: EUR,
  flag: '',
  balance: 0.00
}, {
  code: USD,
  flag: '',
  balance: 0.00
}, {
  code: GBP,
  flag: '',
  balance: 0.00
}]

const currencyCodes = (state = defCurrencyCodes) =>
  state

const availableCurrencies = (state = defAvailableCurrencies) =>
  state

export default combineReducers({
  currencyCodes,
  availableCurrencies,
  exchangeFrom,
  exchangeTo
})
