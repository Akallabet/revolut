import store from '../../store'
import {switchCurrencies} from '../switch-currencies/switch-currencies-actions'

export const SET_EXCHANGE_FROM = 'SET_EXCHANGE_FROM'

export const setExchangeFrom = currency => {
  store.dispatch({
    type: SET_EXCHANGE_FROM,
    currency
  })
}

export const changeCurrency = currency => {
  const {exchangeTo} = store.getState()
  if (currency === exchangeTo.currency) switchCurrencies()
  else setExchangeFrom(currency)
}
