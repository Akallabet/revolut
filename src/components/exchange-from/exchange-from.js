import React from 'react'
import { oneOfType, shape, number, string, func } from 'prop-types'
import Exchange from '../exchange/exchange-container'

/**
 * Components that wraps more generic Exchange component making it specific
 * ExchangeFrom component
 * @param {object} exchangeFrom - containt currency and amount for the ExchangeFrom side of the conversion
 * @param {function} changeCurrency - function that handles the currency change event
 * @param {function} updateAndConvert - it handles the actual conversion functionality
 */

const ExchangeFrom = ({exchangeFrom: {currency, amount}, changeCurrency, updateAndConvert}) => (
  <Exchange
    className='exchange-from'
    currency={currency}
    amount={amount}
    onCurrencySelection={changeCurrency}
    onAmountChange={updateAndConvert}
  />
)

ExchangeFrom.propTypes = {
  exchangeFrom: shape({
    currency: string.isRequired,
    amount: oneOfType([number, string])
  }),
  changeCurrency: func.isRequired,
  updateAndConvert: func.isRequired
}

export default ExchangeFrom
