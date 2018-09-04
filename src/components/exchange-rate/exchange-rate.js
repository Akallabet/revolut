import React from 'react'
import { shape, string, number, object, array, func } from 'prop-types'
import './exchange-rate.css'

class ExchangeRate extends React.Component {
  componentDidMount () {
    this.props.startFetchRates()
  }

  render () {
    const {exchangeRates, exchangeFrom, exchangeTo, availableCurrencies, currencySymbols} = this.props
    const currencyFrom = availableCurrencies.find(({code}) => code === exchangeFrom.currency)
    const currencyTo = availableCurrencies.find(({code}) => code === exchangeTo.currency)
    return (
      <div>
        <span>1 {currencySymbols[currencyFrom.code]} = {exchangeRates[currencyFrom.code][currencyTo.code]} {currencySymbols[currencyTo.code]}</span>
      </div>
    )
  }
}

ExchangeRate.propTypes = {
  exchangeRates: object,
  exchangeFrom: shape({
    currency: string.isRequired,
    amount: number.isRequired
  }),
  exchangeTo: shape({
    currency: string.isRequired,
    amount: number.isRequired
  }),
  availableCurrencies: array.isRequired,
  currencySymbols: object.isRequired,
  startFetchRates: func
}

export default ExchangeRate
