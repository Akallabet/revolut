import store from '../../utils/store'
import {roundToTwoDecimals} from '../../utils/rates'
import {swapCurrencies} from '../swap-currencies/swap-currencies-actions'
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
  if (currency === exchangeTo.currency) swapCurrencies()
  else {
    setExchangeFrom(currency)
    convertAmountTo(exchangeFrom.amount)
  }
}

export const updateAndConvert = amount => {
  if (!amount || amount == null || isNaN(amount)) amount = 0
  updateAmountFrom(amount)
  convertAmountTo(amount)
}

export const updateAmountFrom = amount => {
  store.dispatch({
    type: UPDATE_AMOUNT_FROM,
    amount: amount || ''
  })
}

export const convertAmountFrom = amount => {
  const {exchangeFrom, exchangeTo, exchangeRates} = store.getState()
  const conversionRate = exchangeRates[exchangeTo.currency][exchangeFrom.currency]
  const convertedAmount = roundToTwoDecimals(amount * conversionRate)
  updateAmountFrom(convertedAmount)
}
