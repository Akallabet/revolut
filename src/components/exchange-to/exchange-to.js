import React from 'react'
import { shape, number, string, func } from 'prop-types'
import Exchange from '../exchange/exchange-container'

const ExchangeTo = ({exchangeTo: {currency, amount}, changeCurrency}) => (
  <div className='exchange-to'>
    <Exchange
      currency={currency}
      amount={amount}
      sign='+'
      onCurrencySelection={changeCurrency}
    />
  </div>
)

ExchangeTo.propTypes = {
  exchangeTo: shape({
    currency: string.isRequired,
    amount: number.isRequired
  }),
  changeCurrency: func
}

export default ExchangeTo
