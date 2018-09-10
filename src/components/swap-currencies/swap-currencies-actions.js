import store from '../../utils/store'
import {
  setExchangeFrom
} from '../exchange-from/exchange-from-actions'

import {
  setExchangeTo,
  convertAmountTo
} from '../exchange-to/exchange-to-actions'

export const swapCurrencies = () => {
  const {exchangeTo, exchangeFrom} = store.getState()
  setExchangeFrom(exchangeTo.currency)
  setExchangeTo(exchangeFrom.currency)
  convertAmountTo(exchangeFrom.amount)
}
