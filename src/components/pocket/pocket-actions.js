import store from '../../utils/store'
export const SELECT_POCKET_CURRENCY = 'SELECT_POCKET_CURRENCY'

export const selectPocketCurrency = currency => store.dispatch({
  type: SELECT_POCKET_CURRENCY,
  currency
})
