import React from 'react'
import { number, string } from 'prop-types'
import './exchange.css'

const Exchange = ({currency, amount}) => (
  <div className='exchange'>
    <div className='exchange-currency'>
      <div className='js-currency'>
        {currency}
      </div>
      <div className='js-balance'>
        balance
      </div>
    </div>
    <div className='exchange-amount'>
      <div className='js-amount'>
        {amount}
      </div>
    </div>
  </div>
)

Exchange.propTypes = {
  currency: string.isRequired,
  amount: number.isRequired
}

export default Exchange
