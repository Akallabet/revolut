import React from 'react'
import {func} from 'prop-types'
import {Button} from 'antd'
import './switch-currencies.css'

const SwitchCurrencies = ({switchCurrencies}) => (
  <Button onClick={switchCurrencies}>Switch Rates</Button>
)

SwitchCurrencies.propTypes = {
  switchCurrencies: func.isRequired
}

export default SwitchCurrencies
