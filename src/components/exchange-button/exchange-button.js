import React from 'react'
import {array, object, func} from 'prop-types'
import {Button} from 'antd'

const ExchangeButton = ({availableCurrencies, exchangeFrom, exchange}) => {
  const {balance} = availableCurrencies.find(({code}) => code === exchangeFrom.currency)
  const disabled = exchangeFrom.amount > balance || !exchangeFrom.amount
  return (
    <Button
      disabled={disabled}
      onClick={exchange}
    >Exchange</Button>
  )
}

ExchangeButton.propTypes = {
  availableCurrencies: array,
  exchangeFrom: object,
  exchange: func
}

export default ExchangeButton
