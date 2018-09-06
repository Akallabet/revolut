import React from 'react'
import { oneOfType, shape, number, string, func } from 'prop-types'
import Exchange from '../exchange/exchange-container'

/**
 * Components that wraps more generic Exchange component making it specific
 * ExchangeTo component
 * @param {object} exchangeTo - containt currency and amount for the ExchangeTo side of the conversion
 * @param {function} changeCurrency - function that handles the currency change event
 * @param {function} updateAndConvert - it handles the actual conversion functionality
 */

const ExchangeTo = ({exchangeTo: {currency, amount}, changeCurrency, updateAndConvert}) => (
  <Exchange
    className='exchange-to'
    currency={currency}
    amount={amount}
    onCurrencySelection={changeCurrency}
    onAmountChange={updateAndConvert}
  />
)

ExchangeTo.propTypes = {
  exchangeTo: shape({
    currency: string.isRequired,
    amount: oneOfType([number, string])
  }),
  changeCurrency: func,
  updateAndConvert: func
}

export default ExchangeTo
