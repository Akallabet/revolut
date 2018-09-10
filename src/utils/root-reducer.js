import { combineReducers } from 'redux'

import exchangeRates from '../components/exchange-rate/exchange-rate-reducer'
import exchangeFrom from '../components/exchange-from/exchange-from-reducer'
import exchangeTo from '../components/exchange-to/exchange-to-reducer'
import pocketCurrency from '../components/pocket/pocket-reducer'

/**
 * Default store constants
 */

import {
  POLLING,
  CURRENCY_CODES,
  CURRENCY_SYMBOLS,
  CURRENCY_FLAGS,
  AVAILABLE_CURRENCIES
} from './constants'

/**
 * Main store
 */

export default combineReducers({
  polling: () => POLLING,
  currencyCodes: () => CURRENCY_CODES,
  currencySymbols: () => CURRENCY_SYMBOLS,
  currencyFlags: () => CURRENCY_FLAGS,
  availableCurrencies: () => AVAILABLE_CURRENCIES,
  exchangeRates,
  exchangeFrom,
  exchangeTo,
  pocketCurrency
})
