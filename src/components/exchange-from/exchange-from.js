import React from 'react'
import { shape, number, string } from 'prop-types'
import Exchange from '../exchange/exchange'

const ExchangeFrom = ({exchangeFrom: {currency, amount}}) => (
  <div className='exchange-from'>
    <Exchange
      className='exchange-to'
      currency={currency}
      amount={amount}
      sign='-'
    />
  </div>
)

ExchangeFrom.propTypes = {
  exchangeFrom: shape({
    currency: string.isRequired,
    amount: number.isRequired
  })
}

export default ExchangeFrom
