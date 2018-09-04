import { EXHCANGE_RATES } from '../../constants'
import {
  UPDATE_RATES
} from './exchange-rate-actions'

const exchangeRates = (state = EXHCANGE_RATES, action) => {
  switch (action.type) {
    case UPDATE_RATES:
      return action.rates
  }
  return state
}

export default exchangeRates
