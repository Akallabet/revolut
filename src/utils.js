import axios from 'axios'
import {
  CURRENCY_CODES
} from './constants'

const EURRatesUrl = 'http://data.fixer.io/api/latest?access_key=28ae2da5e13bc77560fae58676bf6950&symbols=USD,GBP&format=1'
const USDRatesUrl = 'http://apilayer.net/api/live?access_key=95f25cc37be73265fded00fba128afbc&base=GBP&currencies=GBP,EUR&format=1'

const fetchUSDRates = () => axios.get(USDRatesUrl)
  .then(({data}) => {
    const { quotes: { USDGBP, USDEUR } } = data
    return {
      [CURRENCY_CODES.GBP]: USDGBP,
      [CURRENCY_CODES.EUR]: USDEUR
    }
  })
const fetchEURRates = () => axios.get(EURRatesUrl)
  .then(({data}) => {
    const {rates} = data
    return rates
  })
const fetchGBPRates = (USDRates, EURRates) => Promise.resolve({
  EUR: 1 / EURRates[CURRENCY_CODES.GBP],
  USD: 1 / USDRates[CURRENCY_CODES.GBP]
})

export const fetchRates = () => Promise.all([
  fetchUSDRates(),
  fetchEURRates()
])
  .then(([USDRates, EURRates]) => fetchGBPRates(USDRates, EURRates)
    .then(GBPRates => ({
      USD: USDRates,
      EUR: EURRates,
      GBP: GBPRates
    }))
  )
