import React from 'react'
import { shape, string, number, object, array, func } from 'prop-types'
import {Tag} from 'antd'

class ExchangeRate extends React.Component {
  componentDidMount () {
    this.props.startFetchRates()
  }

  render () {
    const {exchangeRates, exchangeFrom, exchangeTo, availableCurrencies, currencySymbols} = this.props
    const currencyFrom = availableCurrencies.find(({code}) => code === exchangeFrom.currency)
    const currencyTo = availableCurrencies.find(({code}) => code === exchangeTo.currency)
    return (
      <Tag
        className='exchange-rate'
        color='#4CB2D4'
      >
        1 {currencySymbols[currencyFrom.code]} = {exchangeRates[currencyFrom.code][currencyTo.code]} {currencySymbols[currencyTo.code]}
      </Tag>
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
