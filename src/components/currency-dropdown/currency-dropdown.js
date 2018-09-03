import React from 'react'
import { array, string } from 'prop-types'
import {Select} from 'antd'
import './currency-dropdown.css'

const Option = Select.Option

const CurrencyDropdown = ({currencies, defaultValue}) => {
  return (
    <Select
      className='currency-dropdown'
      dropdownClassName='currency-option'
      defaultValue={defaultValue}
    >
      {
        currencies.map(({code, flag, balance}, i) => (
          <Option
            value={code}
            key={i}
          >
            <img src={flag}/>
            {code}
            {balance}
          </Option>
        ))
      }
    </Select>
  )
}

CurrencyDropdown.propTypes = {
  currencies: array.isRequired,
  defaultValue: string.isRequired
}

export default CurrencyDropdown
