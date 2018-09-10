import axios from 'axios'
import {
  CURRENCY_CODES
} from './constants'

const roundDecimals = decimals => number => Math.round(number * decimals) / decimals
export const roundToFourDecimals = roundDecimals(10000)
export const roundToTwoDecimals = roundDecimals(100)

const instance = axios.create({baseURL: '/api/rates/'})

const extractRates = currencies => ({data: {to}}) => {
  const rates = {}
  currencies.forEach(currency => {
    rates[currency] = roundToFourDecimals(to.find(d => d.quotecurrency === currency).mid)
  })
  return rates
}

const extractEURGBPRates = extractRates([CURRENCY_CODES.EUR, CURRENCY_CODES.GBP])
const extractUSDGBPRates = extractRates([CURRENCY_CODES.USD, CURRENCY_CODES.GBP])
const extractEURUSDRates = extractRates([CURRENCY_CODES.EUR, CURRENCY_CODES.USD])

const fetchUSDRates = () => instance.get('?from=USD&to=EUR,GBP')
  .then(extractEURGBPRates)
const fetchEURRates = () => instance.get('?from=EUR&to=USD,GBP')
  .then(extractUSDGBPRates)
const fetchGBPRates = () => instance.get('?from=GBP&to=EUR,USD')
  .then(extractEURUSDRates)

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
