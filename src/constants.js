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
  flag: EurFlag
}, {
  code: USD,
  flag: UsdFlag
}, {
  code: GBP,
  flag: GbpFlag
}]

export const EXHCANGE_RATES = {
  EUR: {},
  USD: {},
  GBP: {}
}
