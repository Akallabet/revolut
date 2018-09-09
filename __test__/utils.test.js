import ratesResponses from '../__mocks__/rates_responses.json'
import {
  roundToFourDecimals,
  fetchRates
} from '../src/utils'

const expectedRates = {
  USD: {
    EUR: roundToFourDecimals(ratesResponses.USD.to[0].mid),
    GBP: roundToFourDecimals(ratesResponses.USD.to[1].mid)
  },
  EUR: {
    USD: roundToFourDecimals(ratesResponses.EUR.to[1].mid),
    GBP: roundToFourDecimals(ratesResponses.EUR.to[0].mid)
  },
  GBP: {
    USD: roundToFourDecimals(ratesResponses.GBP.to[1].mid),
    EUR: roundToFourDecimals(ratesResponses.GBP.to[0].mid)
  }
}

describe('Rates fetch', () => {
  it('should return the exchange rates', () => {
    return fetchRates().then(rates => {
      expect(rates).toBeDefined()
      expect(rates.EUR).toBeDefined()
      expect(rates.USD).toBeDefined()
      expect(rates.GBP).toBeDefined()

      expect(rates.EUR.USD).toEqual(expectedRates.EUR.USD)
      expect(rates.EUR.GBP).toEqual(expectedRates.EUR.GBP)

      expect(rates.USD.EUR).toEqual(expectedRates.USD.EUR)
      expect(rates.USD.GBP).toEqual(expectedRates.USD.GBP)

      expect(rates.GBP.EUR).toEqual(expectedRates.GBP.EUR)
      expect(rates.GBP.USD).toEqual(expectedRates.GBP.USD)
    })
  })
})
