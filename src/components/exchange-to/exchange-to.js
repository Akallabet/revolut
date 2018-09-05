import React from 'react'
import { shape, number, string, func } from 'prop-types'
import Exchange from '../exchange/exchange-container'

const ExchangeTo = ({exchangeTo: {currency, amount}, changeCurrency, updateAndConvert}) => (
  <Exchange
    className='exchange-to'
    currency={currency}
    amount={amount}
    sign='+'
    onCurrencySelection={changeCurrency}
    onAmountChange={updateAndConvert}
  />
)

ExchangeTo.propTypes = {
  exchangeTo: shape({
    currency: string.isRequired,
    amount: number.isRequired
  }),
  changeCurrency: func,
  updateAndConvert: func
}

export default ExchangeTo
