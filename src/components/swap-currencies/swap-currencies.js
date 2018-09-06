import React from 'react'
import {func} from 'prop-types'
import {Button} from 'antd'
import './swap-currencies.css'

const SwapCurrencies = ({swapCurrencies}) => (
  <Button
    className='swap-currencies'
    icon='swap'
    shape='circle'
    onClick={swapCurrencies}
  />
)

SwapCurrencies.propTypes = {
  swapCurrencies: func.isRequired
}

export default SwapCurrencies
