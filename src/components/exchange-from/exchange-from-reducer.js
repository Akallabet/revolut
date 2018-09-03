import {CURRENCY_CODES} from '../../constants'
import {
  SET_EXCHANGE_FROM
} from '../app/app-actions'

const defState = {
  currency: CURRENCY_CODES.USD,
  amount: 0.00
}

const exchangeFromReducer = (state = defState, action) => {
  switch (action.type) {
    case SET_EXCHANGE_FROM:
      return {
        ...state,
        currency: action.currency
      }
  }
  return state
}

export default exchangeFromReducer
