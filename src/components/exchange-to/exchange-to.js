import React from 'react'
import { shape, number, string, func } from 'prop-types'
import Exchange from '../exchange/exchange-container'

const ExchangeTo = ({exchangeTo: {currency, amount}, setExchangeTo}) => (
  <div className='exchange-to'>
    <Exchange
      currency={currency}
      amount={amount}
      sign='+'
      onCurrencySelection={setExchangeTo}
    />
  </div>
)

ExchangeTo.propTypes = {
  exchangeTo: shape({
    currency: string.isRequired,
    amount: number.isRequired
  }),
  setExchangeTo: func
}

export default ExchangeTo
