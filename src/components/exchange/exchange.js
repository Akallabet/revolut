import React from 'react'
import { array, object, number, string, func } from 'prop-types'
import { InputNumber } from 'antd'
import CurrencySelection from '../currency-selection/currency-selection-container'
import './exchange.css'

const Exchange = ({
  availableCurrencies,
  currencySymbols,
  currency,
  amount,
  sign,
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
          value={amount}
          min={0}
          onChange={onAmountChange}
          size={'large'}
          formatter={value => value > 0 ? `${sign} ${value}` : value}
          parser={value => value.replace(sign, '')}
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
  amount: number.isRequired,
  sign: string,
  onCurrencySelection: func,
  onAmountChange: func
}

export default Exchange
