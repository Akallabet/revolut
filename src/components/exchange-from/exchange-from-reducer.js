import {CURRENCY_CODES} from '../../utils/constants'
import {
  SET_EXCHANGE_FROM,
  UPDATE_AMOUNT_FROM
} from './exchange-from-actions'

const defState = {
  currency: CURRENCY_CODES.EUR,
  amount: ''
}

const exchangeFromReducer = (state = defState, action) => {
  switch (action.type) {
    case SET_EXCHANGE_FROM:
      return {
        ...state,
        currency: action.currency
      }
    case UPDATE_AMOUNT_FROM:
      return {
        ...state,
        amount: action.amount
      }
  }
  return state
}

export default exchangeFromReducer
