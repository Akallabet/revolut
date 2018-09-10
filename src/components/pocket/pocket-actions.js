import store from '../../utils/store'

export const SELECT_POCKET_CURRENCY = 'SELECT_POCKET_CURRENCY'
export const INCREASE_CURRENCY_AMOUNT = 'INCREASE_CURRENCY_AMOUNT'
export const DECREASE_CURRENCY_AMOUNT = 'DECREASE_CURRENCY_AMOUNT'

export const selectPocketCurrency = currency => store.dispatch({
  type: SELECT_POCKET_CURRENCY,
  currency
})

export const increaseCurrencyAmount = ({currency, amount}) => store.dispatch({
  type: INCREASE_CURRENCY_AMOUNT,
  currency,
  amount
})

export const decreaseCurrencyAmount = ({currency, amount}) => store.dispatch({
  type: DECREASE_CURRENCY_AMOUNT,
  currency,
  amount
})
