import {
  INCREASE_CURRENCY_AMOUNT,
  DECREASE_CURRENCY_AMOUNT
} from '../pocket/pocket-actions'
import {
  AVAILABLE_CURRENCIES
} from '../../utils/constants'

import {
  roundToTwoDecimals
} from '../../utils/rates'

const currencySelectionReducer = (state = AVAILABLE_CURRENCIES, action) => {
  switch (action.type) {
    case INCREASE_CURRENCY_AMOUNT:
      return state.map(currency => {
        if (currency.code === action.currency) {
          return {
            ...currency,
            balance: roundToTwoDecimals(action.amount + currency.balance)
          }
        } else return currency
      })
    case DECREASE_CURRENCY_AMOUNT:
      return state.map(currency => {
        if (currency.code === action.currency) {
          return {
            ...currency,
            balance: roundToTwoDecimals(currency.balance - action.amount)
          }
        } else return currency
      })
  }
  return state
}

export default currencySelectionReducer
