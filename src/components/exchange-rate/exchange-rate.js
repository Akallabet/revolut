import React from 'react'
import { oneOfType, shape, string, number, object, array, func } from 'prop-types'
import {Tag} from 'antd'

/**
 * It displays the current conversion rate between ExchangeTo and ExchangeFrom
 * ExchangeTo component
 * @param {object} exchangeRates - list of the currenct exchange rates
 * @param {object} exchangeFrom - containt currency and amount for the ExchangeFrom side of the conversion
 * @param {object} exchangeTo - containt currency and amount for the ExchangeTo side of the conversion
 * @param {array} availableCurrencies - a list of all the available currencies
 * @param {function} startFetchRates - starts the polling functionality to fetch the latest rates
 */

class ExchangeRate extends React.Component {
  componentDidMount () {
    this.props.startFetchRates()
  }

  render () {
    const {exchangeRates, exchangeFrom, exchangeTo, availableCurrencies} = this.props
    const currencyFrom = availableCurrencies.find(({code}) => code === exchangeFrom.currency)
    const currencyTo = availableCurrencies.find(({code}) => code === exchangeTo.currency)
    return (
      <Tag
        className='exchange-rate'
        color='#4CB2D4'
      >
        1 {currencyFrom.symbol} = {exchangeRates[currencyFrom.code][currencyTo.code]} {currencyTo.symbol}
      </Tag>
    )
  }
}

ExchangeRate.propTypes = {
  exchangeRates: object,
  exchangeFrom: shape({
    currency: string.isRequired,
    amount: oneOfType([number, string])
  }),
  exchangeTo: shape({
    currency: string.isRequired,
    amount: oneOfType([number, string])
  }),
  availableCurrencies: array.isRequired,
  startFetchRates: func
}

export default ExchangeRate
