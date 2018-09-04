import store from '../../store'
import {
  setExchangeFrom
} from '../exchange-from/exchange-from-actions'

import {
  setExchangeTo
} from '../exchange-to/exchange-to-actions'

export const switchCurrencies = () => {
  const {exchangeTo, exchangeFrom} = store.getState()
  setExchangeFrom(exchangeTo.currency)
  setExchangeTo(exchangeFrom.currency)
}
