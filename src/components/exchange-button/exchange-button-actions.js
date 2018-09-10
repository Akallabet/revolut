import store from '../../utils/store'
import {
  increaseCurrencyAmount,
  decreaseCurrencyAmount
} from '../pocket/pocket-actions'

export const exchange = () => {
  const {exchangeFrom, exchangeTo} = store.getState()
  decreaseCurrencyAmount(exchangeFrom)
  increaseCurrencyAmount(exchangeTo)
}
