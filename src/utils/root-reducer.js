import { combineReducers } from 'redux'

import exchangeRates from '../components/exchange-rate/exchange-rate-reducer'
import exchangeFrom from '../components/exchange-from/exchange-from-reducer'
import exchangeTo from '../components/exchange-to/exchange-to-reducer'
import pocketCurrency from '../components/pocket/pocket-reducer'
import availableCurrencies from '../components/currency-selection/currency-selection-reducer'

/**
 * Default store constants
 */

import {
  POLLING,
  CURRENCY_CODES
} from './constants'

/**
 * Main store
 */

export default combineReducers({
  polling: () => POLLING,
  currencyCodes: () => CURRENCY_CODES,
  availableCurrencies,
  exchangeRates,
  exchangeFrom,
  exchangeTo,
  pocketCurrency
})
