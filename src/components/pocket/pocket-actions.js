import store from '../../utils/store'

export const SELECT_POCKET_CURRENCY = 'SELECT_POCKET_CURRENCY'
export const SET_CURRENCY_AMOUNT = 'SET_CURRENCY_AMOUNT'

export const selectPocketCurrency = currency => store.dispatch({
  type: SELECT_POCKET_CURRENCY,
  currency
})

export const setCurrencyAmount = ({currency, amount}) => store.dispatch({
  type: SET_CURRENCY_AMOUNT,
  currency,
  amount
})
