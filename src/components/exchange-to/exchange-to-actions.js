import store from '../../store'
import {roundToTwoDecimals} from '../../utils'
import {swapCurrencies} from '../swap-currencies/swap-currencies-actions'
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
  if (currency === exchangeFrom.currency) swapCurrencies()
  else {
    setExchangeTo(currency)
    convertAmountTo(exchangeFrom.amount)
  }
}

export const updateAndConvert = amount => {
  if (!amount || amount == null || isNaN(amount)) amount = 0
  updateAmountTo(amount)
  convertAmountFrom(amount)
}

export const updateAmountTo = amount => {
  store.dispatch({
    type: UPDATE_AMOUNT_TO,
    amount: amount || ''
  })
}

export const convertAmountTo = amount => {
  const {exchangeFrom, exchangeTo, exchangeRates} = store.getState()
  const conversionRate = exchangeRates[exchangeFrom.currency][exchangeTo.currency]
  store.dispatch({
    type: UPDATE_AMOUNT_TO,
    amount: amount ? roundToTwoDecimals(amount * conversionRate) : ''
  })
}
