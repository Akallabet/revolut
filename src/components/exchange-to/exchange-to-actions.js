import store from '../../store'
import {switchCurrencies} from '../switch-currencies/switch-currencies-actions'
import {convertAmountFrom} from '../exchange-from/exchange-from-actions'

export const SET_EXCHANGE_TO = 'SET_EXCHANGE_TO'
export const UPDATE_AMOUNT_TO = 'UPDATE_AMOUNT_TO'

export const setExchangeTo = currency => {
  store.dispatch({
    type: SET_EXCHANGE_TO,
    currency
  })
}

export const changeCurrency = currency => {
  const {exchangeFrom} = store.getState()
  if (currency === exchangeFrom.currency) switchCurrencies()
  else {
    setExchangeTo(currency)
    convertAmountTo(exchangeFrom.amount)
  }
}

export const updateAndConvert = amount => {
  updateAmountTo(amount)
  convertAmountFrom(amount)
}

export const updateAmountTo = amount => {
  amount = parseFloat(amount)
  if (!amount || isNaN(amount)) amount = 0
  store.dispatch({
    type: UPDATE_AMOUNT_TO,
    amount
  })
}

export const convertAmountTo = amount => {
  amount = parseFloat(amount)
  if (!amount || isNaN(amount)) amount = 0
  const {exchangeFrom, exchangeTo, exchangeRates} = store.getState()
  const conversionRate = exchangeRates[exchangeFrom.currency][exchangeTo.currency]
  store.dispatch({
    type: UPDATE_AMOUNT_TO,
    amount: amount * conversionRate
  })
}
