import { combineReducers } from 'redux'

import EurFlag from '../assets/images/EUR.svg'
import UsdFlag from '../assets/images/USD.svg'
import GbpFlag from '../assets/images/GBP.svg'

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
  flag: EurFlag,
  balance: '0.00'
}, {
  code: USD,
  flag: UsdFlag,
  balance: '0.00'
}, {
  code: GBP,
  flag: GbpFlag,
  balance: '1.00'
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
