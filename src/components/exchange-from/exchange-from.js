import React from 'react'
import { shape, number, string, func } from 'prop-types'
import Exchange from '../exchange/exchange-container'

const ExchangeFrom = ({exchangeFrom: {currency, amount}, changeCurrency}) => (
  <div className='exchange-from'>
    <Exchange
      className='exchange-to'
      currency={currency}
      amount={amount}
      sign='-'
      onCurrencySelection={changeCurrency}
    />
  </div>
)

ExchangeFrom.propTypes = {
  exchangeFrom: shape({
    currency: string.isRequired,
    amount: number.isRequired
  }),
  changeCurrency: func.isRequired
}

export default ExchangeFrom
