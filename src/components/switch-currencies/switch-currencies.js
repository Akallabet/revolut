import React from 'react'
import {func} from 'prop-types'
import {Button} from 'antd'
import './switch-currencies.css'

const SwitchCurrencies = ({switchCurrencies}) => (
  <Button className='switch-currencies' onClick={switchCurrencies} icon='swap' shape='circle' />
)

SwitchCurrencies.propTypes = {
  switchCurrencies: func.isRequired
}

export default SwitchCurrencies
