import React from 'react'
import { array, object, number, string, func } from 'prop-types'
import { InputNumber } from 'antd'
import CurrencySelection from '../currency-selection/currency-selection-container'
import './exchange.css'

const Exchange = ({availableCurrencies, currencySymbols, currency, amount, sign, onCurrencySelection = () => {}}) => {
  const balanceAmount = availableCurrencies.find(({code}) => code === currency).balance
  const balance = `${currencySymbols[currency]} ${balanceAmount}`
  return (
    <div className='exchange'>
      <div className='exchange-currency'>
        <div className='js-currency'>
          <CurrencySelection
            currency={currency}
            onCurrencySelection={onCurrencySelection}
          />
        </div>
        <div className='js-balance'>
          balance {balance}
        </div>
      </div>
      <div className='exchange-amount'>
        <div className='js-amount'>
          <InputNumber
            defaultValue={amount}
            formatter={value => value > 0 ? `${sign} ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : value}
          />
        </div>
      </div>
    </div>
  )
}

Exchange.propTypes = {
  availableCurrencies: array.isRequired,
  currencySymbols: object.isRequired,
  currency: string.isRequired,
  amount: number.isRequired,
  sign: string,
  onCurrencySelection: func
}

export default Exchange
