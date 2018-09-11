import React from 'react'
import { oneOfType, array, number, string, func } from 'prop-types'
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
 * @param {string} currency - the current currency code
 * @param {number} amount - the current amount
 * @param {function} onCurrencySelection - callback for currency selection
 */

const Exchange = ({
  availableCurrencies,
  currency,
  amount,
  sign,
  className = '',
  onCurrencySelection = () => {},
  onAmountChange = () => {}
}) => {
  const currentCurrency = availableCurrencies.find(({code}) => code === currency)
  const {symbol, balance} = currentCurrency
  return (
    <div className={`${className} exchange`}>
      <div className='exchange-currency'>
        <div className='js-currency'>
          <CurrencySelection
            currency={currency}
            onCurrencySelection={onCurrencySelection}
          />
        </div>
        <div className='js-balance'>
          balance {symbol} {balance}
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
            formatter={value => !value || value === 0 ? '' : `${sign} ${value}`}
            parser={value => value.replace(sign, '')}
          />
        </div>
      </div>
    </div>
  )
}

Exchange.propTypes = {
  className: string,
  availableCurrencies: array.isRequired,
  currency: string.isRequired,
  amount: oneOfType([number, string]),
  sign: string,
  balance: number,
  onCurrencySelection: func,
  onAmountChange: func
}

export default Exchange
