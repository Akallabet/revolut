export const SET_EXCHANGE_FROM = 'SET_EXCHANGE_FROM'
export const SET_EXCHANGE_TO = 'SET_EXCHANGE_TO'

export const setExchangeFrom = currency => ({
  type: SET_EXCHANGE_FROM,
  currency
})

export const setExchangeTo = currency => ({
  type: SET_EXCHANGE_TO,
  currency
})
