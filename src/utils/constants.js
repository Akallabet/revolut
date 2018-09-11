import EurFlag from '../assets/images/EUR.svg'
import UsdFlag from '../assets/images/USD.svg'
import GbpFlag from '../assets/images/GBP.svg'

export const POLLING = 10000

const EUR = 'EUR'
const USD = 'USD'
const GBP = 'GBP'

export const CURRENCY_CODES = {
  EUR,
  USD,
  GBP
}

export const CURRENCY_FLAGS = {
  USD: UsdFlag,
  EUR: EurFlag,
  GBP: GbpFlag
}

export const AVAILABLE_CURRENCIES = [{
  code: EUR,
  flag: EurFlag,
  symbol: '\u20AC',
  balance: 0
}, {
  code: USD,
  flag: UsdFlag,
  symbol: '\u0024',
  balance: 0
}, {
  code: GBP,
  flag: GbpFlag,
  symbol: '\u00A3',
  balance: 0
}]

export const EXHCANGE_RATES = {
  EUR: {},
  USD: {},
  GBP: {}
}
