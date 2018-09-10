import {
  SET_CURRENCY_AMOUNT
} from '../pocket/pocket-actions'
import {
  AVAILABLE_CURRENCIES
} from '../../utils/constants'

const currencySelectionReducer = (state = AVAILABLE_CURRENCIES, action) => {
  if (action.type === SET_CURRENCY_AMOUNT) {
    return state.map(currency => {
      if (currency.code === action.currency) {
        return {
          ...currency,
          balance: action.amount
        }
      } else return currency
    })
  }
  return state
}

export default currencySelectionReducer
