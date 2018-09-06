import store from '../../store'
import {
  fetchRates
} from '../../utils'

export const UPDATE_RATES = 'UPDATE_RATES'

export const updateRates = rates => {
  store.dispatch({
    type: UPDATE_RATES,
    rates
  })
}

export const startFetchRates = () => {
  const {polling} = store.getState()
  // const rates = {'USD': {'GBP': 0.7777, 'EUR': 0.863905}, 'EUR': {'USD': 1.157535, 'GBP': 0.900214}, 'GBP': {'EUR': 1.110846976385615, 'USD': 1.2858428700012858}}
  // updateRates(rates)
  fetchRates()
    .then(updateRates)
  setInterval(() => {
    fetchRates()
      .then(updateRates)
  }, polling)
}
