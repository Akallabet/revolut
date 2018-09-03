import {CURRENCY_CODES} from '../../constants'
import {
  SET_EXCHANGE_TO
} from '../app/app-actions'

const defState = {
  currency: CURRENCY_CODES.USD,
  amount: 0.00
}

const exchangeToReducer = (state = defState, action) => {
  switch (action.type) {
    case SET_EXCHANGE_TO:
      return {
        ...state,
        currency: action.currency
      }
  }
  return state
}

export default exchangeToReducer
