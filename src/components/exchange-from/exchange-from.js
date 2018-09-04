import React from 'react'
import { shape, number, string, func } from 'prop-types'
import Exchange from '../exchange/exchange-container'

const ExchangeFrom = ({exchangeFrom: {currency, amount}, setExchangeFrom}) => (
  <div className='exchange-from'>
    <Exchange
      className='exchange-to'
      currency={currency}
      amount={amount}
      sign='-'
      onCurrencySelection={setExchangeFrom}
    />
  </div>
)

ExchangeFrom.propTypes = {
  exchangeFrom: shape({
    currency: string.isRequired,
    amount: number.isRequired
  }),
  setExchangeFrom: func.isRequired
}

export default ExchangeFrom
