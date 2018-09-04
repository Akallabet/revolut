import { combineReducers } from 'redux'

import exchangeFrom from './components/exchange-from/exchange-from-reducer'
import exchangeTo from './components/exchange-to/exchange-to-reducer'

import {
  CURRENCY_CODES,
  CURRENCY_SYMBOLS,
  CURRENCY_FLAGS,
  AVAILABLE_CURRENCIES
} from './constants'

export default combineReducers({
  currencyCodes: () => CURRENCY_CODES,
  currencySymbols: () => CURRENCY_SYMBOLS,
  currencyFlags: () => CURRENCY_FLAGS,
  availableCurrencies: () => AVAILABLE_CURRENCIES,
  exchangeFrom,
  exchangeTo
})
