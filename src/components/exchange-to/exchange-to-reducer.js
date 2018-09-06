import {CURRENCY_CODES} from '../../constants'
import {
  SET_EXCHANGE_TO,
  UPDATE_AMOUNT_TO
} from './exchange-to-actions'

const defState = {
  currency: CURRENCY_CODES.USD,
  amount: ''
}

const exchangeToReducer = (state = defState, action) => {
  switch (action.type) {
    case SET_EXCHANGE_TO:
      return {
        ...state,
        currency: action.currency
      }
    case UPDATE_AMOUNT_TO:
      return {
        ...state,
        amount: action.amount
      }
  }
  return state
}

export default exchangeToReducer
