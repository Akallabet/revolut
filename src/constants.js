import EurFlag from '../assets/images/EUR.svg'
import UsdFlag from '../assets/images/USD.svg'
import GbpFlag from '../assets/images/GBP.svg'

export const POLLING = 600000

const EUR = 'EUR'
const USD = 'USD'
const GBP = 'GBP'

export const CURRENCY_CODES = {
  EUR,
  USD,
  GBP
}

export const CURRENCY_SYMBOLS = {
  USD: '\u0024',
  EUR: '\u20AC',
  GBP: '\u00A3'
}

export const CURRENCY_FLAGS = {
  USD: UsdFlag,
  EUR: EurFlag,
  GBP: GbpFlag
}

export const AVAILABLE_CURRENCIES = [{
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
  balance: '0.00'
}]

export const EXHCANGE_RATES = {
  EUR: {},
  USD: {},
  GBP: {}
}
