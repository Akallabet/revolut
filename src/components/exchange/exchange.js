import React from 'react'
import { oneOfType, array, object, number, string, func } from 'prop-types'
import { InputNumber } from 'antd'
import CurrencySelection from '../currency-selection/currency-selection-container'
import './exchange.css'

/**
 * Component that shows a currency and the correspondent amount
 * CurrencySelection component allows you to change the currency
 * The Input allows to type the amount to be/being converted
 *
 * @param {string} className - add a custom class
 * @param {array} availableCurrencies - a list of all the available currencies
 * @param {object} currencySymbols - list of currency symbols in Unicode
 * @param {string} currency - the current currency code
 * @param {number} amount - the current amount
 * @param {function} onCurrencySelection - callback for currency selection
 */

const Exchange = ({
  availableCurrencies,
  currencySymbols,
  currency,
  amount,
  className = '',
  onCurrencySelection = () => {},
  onAmountChange = () => {}
}) => (
  <div className={`${className} exchange`}>
    <div className='exchange-currency'>
      <div className='js-currency'>
        <CurrencySelection
          currency={currency}
          onCurrencySelection={onCurrencySelection}
        />
      </div>
    </div>
    <div className='exchange-amount'>
      <div className='js-amount'>
        <InputNumber
          placeholder={0}
          value={amount}
          min={0}
          onChange={onAmountChange}
          size={'large'}
        />
      </div>
    </div>
  </div>
)

Exchange.propTypes = {
  className: string,
  availableCurrencies: array.isRequired,
  currencySymbols: object.isRequired,
  currency: string.isRequired,
  amount: oneOfType([number, string]),
  onCurrencySelection: func,
  onAmountChange: func
}

export default Exchange
