import React from 'react'
import { number, string } from 'prop-types'
import { InputNumber } from 'antd'
import CurrencyDropdown from '../currency-dropdown/currency-dropdown-container'
import './exchange.css'

const Exchange = ({currency, amount, sign}) => (
  <div className='exchange'>
    <div className='exchange-currency'>
      <div className='js-currency'>
        <CurrencyDropdown
          defaultValue={currency}
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
  sign: string
}

export default Exchange
