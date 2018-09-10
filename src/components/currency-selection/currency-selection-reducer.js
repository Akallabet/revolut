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
      return state.map(({code, flag, balance}) => {
        if (code === action.currency) {
          return {
            code,
            flag,
            balance: roundToTwoDecimals(action.amount + balance)
          }
        } else return {flag, code, balance}
      })
    case DECREASE_CURRENCY_AMOUNT:
      return state.map(({code, flag, balance}) => {
        if (code === action.currency) {
          return {
            code,
            flag,
            balance: roundToTwoDecimals(balance - action.amount)
          }
        } else return {flag, code, balance}
      })
  }
  return state
}

export default currencySelectionReducer
