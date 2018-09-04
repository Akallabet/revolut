import store from '../../store'
import {switchCurrencies} from '../switch-currencies/switch-currencies-actions'
export const SET_EXCHANGE_TO = 'SET_EXCHANGE_TO'

export const setExchangeTo = currency => {
  store.dispatch({
    type: SET_EXCHANGE_TO,
    currency
  })
}

export const changeCurrency = currency => {
  const {exchangeFrom} = store.getState()
  if (currency === exchangeFrom.currency) switchCurrencies()
  else setExchangeTo(currency)
}
