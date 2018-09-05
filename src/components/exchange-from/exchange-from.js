import React from 'react'
import { shape, number, string, func } from 'prop-types'
import Exchange from '../exchange/exchange-container'

const ExchangeFrom = ({exchangeFrom: {currency, amount}, changeCurrency, updateAndConvert}) => (
  <Exchange
    className='exchange-from'
    currency={currency}
    amount={amount}
    sign='-'
    onCurrencySelection={changeCurrency}
    onAmountChange={updateAndConvert}
  />
)

ExchangeFrom.propTypes = {
  exchangeFrom: shape({
    currency: string.isRequired,
    amount: number.isRequired
  }),
  changeCurrency: func.isRequired,
  updateAndConvert: func.isRequired
}

export default ExchangeFrom
