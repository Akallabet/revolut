import axios from 'axios'
import {
  CURRENCY_CODES
} from './constants'

export const roundDecimals = number => Math.round(number * 10000) / 10000

const EURRatesUrl = 'http://data.fixer.io/api/latest?access_key=28ae2da5e13bc77560fae58676bf6950&symbols=USD,GBP&format=1'
const USDRatesUrl = 'http://apilayer.net/api/live?access_key=95f25cc37be73265fded00fba128afbc&base=GBP&currencies=GBP,EUR&format=1'
const GBPRatesUrl = 'https://free.currencyconverterapi.com/api/v6/convert?q=GBP_USD,GBP_EUR&compact=ultra'

const fetchUSDRates = () => axios.get(USDRatesUrl)
  .then(({data}) => {
    const { quotes: { USDGBP, USDEUR } } = data
    return {
      [CURRENCY_CODES.GBP]: roundDecimals(USDGBP),
      [CURRENCY_CODES.EUR]: roundDecimals(USDEUR)
    }
  })
const fetchEURRates = () => axios.get(EURRatesUrl)
  .then(({data}) => {
    const {rates} = data
    return rates
  })
const fetchGBPRates = () => axios.get(GBPRatesUrl)
  .then(({data}) => ({
    [CURRENCY_CODES.EUR]: roundDecimals(data['GBP_EUR']),
    [CURRENCY_CODES.USD]: roundDecimals(data['GBP_USD'])
  }))

export const fetchRates = () => Promise.all([
  fetchUSDRates(),
  fetchEURRates(),
  fetchGBPRates()
])
  .then(([USDRates, EURRates, GBPRates]) => ({
    USD: USDRates,
    EUR: EURRates,
    GBP: GBPRates
  }))
