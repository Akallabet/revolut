import store from '../../store'
import {switchCurrencies} from '../switch-currencies/switch-currencies-actions'
import {convertAmountTo} from '../exchange-to/exchange-to-actions'

export const SET_EXCHANGE_FROM = 'SET_EXCHANGE_FROM'
export const UPDATE_AMOUNT_FROM = 'UPDATE_AMOUNT_FROM'

export const setExchangeFrom = currency => {
  store.dispatch({
    type: SET_EXCHANGE_FROM,
    currency
  })
}

export const changeCurrency = currency => {
  const {exchangeTo, exchangeFrom} = store.getState()
  if (currency === exchangeTo.currency) switchCurrencies()
  else {
    setExchangeFrom(currency)
    convertAmountTo(exchangeFrom.amount)
  }
}

export const updateAndConvert = amount => {
  updateAmountFrom(amount)
  convertAmountTo(amount)
}

export const updateAmountFrom = amount => {
  amount = parseFloat(amount)
  if (!amount || isNaN(amount)) amount = 0
  store.dispatch({
    type: UPDATE_AMOUNT_FROM,
    amount
  })
}

export const convertAmountFrom = amount => {
  amount = parseFloat(amount)
  if (!amount || isNaN(amount)) amount = 0
  const {exchangeFrom, exchangeTo, exchangeRates} = store.getState()
  const conversionRate = exchangeRates[exchangeTo.currency][exchangeFrom.currency]
  store.dispatch({
    type: UPDATE_AMOUNT_FROM,
    amount: amount * conversionRate
  })
}
