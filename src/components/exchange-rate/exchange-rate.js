import React from 'react'
import { shape, string, number, object, array } from 'prop-types'
import './exchange-rate.css'

const ExchangeRate = ({exchangeFrom, exchangeTo, availableCurrencies, currencySymbols}) => {
  const currencyFrom = availableCurrencies.find(({code}) => code === exchangeFrom.currency)
  const currencyTo = availableCurrencies.find(({code}) => code === exchangeTo.currency)
  return (
    <div>
      <span>1 {currencySymbols[currencyFrom.code]} = 0.01 {currencySymbols[currencyTo.code]}</span>
    </div>
  )
}

ExchangeRate.propTypes = {
  exchangeFrom: shape({
    currency: string.isRequired,
    amount: number.isRequired
  }),
  exchangeTo: shape({
    currency: string.isRequired,
    amount: number.isRequired
  }),
  availableCurrencies: array.isRequired,
  currencySymbols: object.isRequired
}

export default ExchangeRate
