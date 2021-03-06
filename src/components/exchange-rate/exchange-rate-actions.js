import store from '../../utils/store'
import {
  fetchRates
} from '../../utils/rates'

export const UPDATE_RATES = 'UPDATE_RATES'

export const updateRates = rates => {
  store.dispatch({
    type: UPDATE_RATES,
    rates
  })
}

export const startFetchRates = () => {
  const {polling} = store.getState()
  fetchRates()
    .then(updateRates)
  setInterval(() => {
    fetchRates()
      .then(updateRates)
  }, polling)
}
