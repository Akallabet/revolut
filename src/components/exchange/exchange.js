import React from 'react'
import { number, string, func } from 'prop-types'
import { InputNumber } from 'antd'
import CurrencySelection from '../currency-selection/currency-selection-container'
import './exchange.css'

const Exchange = ({currency, amount, sign, onCurrencySelection = () => {}}) => (
  <div className='exchange'>
    <div className='exchange-currency'>
      <div className='js-currency'>
        <CurrencySelection
          currency={currency}
          onCurrencySelection={onCurrencySelection}
        />
      </div>
      <div className='js-balance'>
        balance
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

Exchange.propTypes = {
  currency: string.isRequired,
  amount: number.isRequired,
  sign: string,
  onCurrencySelection: func
}

export default Exchange
