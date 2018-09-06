import React from 'react'
import {func} from 'prop-types'
import {Button} from 'antd'
import './switch-currencies.css'

const SwitchCurrencies = ({switchCurrencies}) => (
  <Button
    className='switch-currencies'
    icon='swap'
    shape='circle'
    onClick={switchCurrencies}
  />
)

SwitchCurrencies.propTypes = {
  switchCurrencies: func.isRequired
}

export default SwitchCurrencies
