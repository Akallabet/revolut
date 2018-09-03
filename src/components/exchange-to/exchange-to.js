import React from 'react'
import { shape, number, string } from 'prop-types'
import Exchange from '../exchange/exchange'

const ExchangeTo = ({exchangeTo: {currency, amount}}) => (
  <div className='exchange-to'>
    <Exchange
      currency={currency}
      amount={amount}
      sign='+'
    />
  </div>
)

ExchangeTo.propTypes = {
  exchangeTo: shape({
    currency: string.isRequired,
    amount: number.isRequired
  })
}

export default ExchangeTo
