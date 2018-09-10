import {CURRENCY_CODES} from '../../utils/constants'
import {
  SELECT_POCKET_CURRENCY
} from './pocket-actions'

const defState = {
  code: CURRENCY_CODES.EUR,
  amount: 0
}

const exchangeFromReducer = (state = defState, action) => {
  switch (action.type) {
    case SELECT_POCKET_CURRENCY:
      return {
        ...state,
        code: action.currency
      }
  }
  return state
}

export default exchangeFromReducer
