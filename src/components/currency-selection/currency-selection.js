import React from 'react'
import { array, string, func } from 'prop-types'
import {Button, Dropdown, Menu, Icon, Row, Col} from 'antd'
import './currency-selection.css'

/**
 * It displays the current currency with flag and currency code
 * On Click it opens a dropdown displaying all the available
 * currencies with the possibility of selecting one
 *
 * @param {array} currencies - a list of all the available currencies
 * @param {string} currency - the currency to be displayed
 * @param {string} onCurrencySelection - callback for currency selection
 */

const CurrencySelection = ({currencies, currency, onCurrencySelection}) => {
  const {flag} = currencies.find(({code}) => code === currency)

  const menu = (
    <Menu
      size='large'
    >
      {
        currencies.map(({flag, code, symbol, balance}, i) => [
          <Menu.Divider key={`${i}-divider`}/>,
          <Menu.Item
            className='currency-option'
            key={i}
            onClick={() => onCurrencySelection(code)}
          >
            <img src={flag}/>
            <span className='code'>{code}</span>
            <span className='symbol'>{symbol}</span>
            <span className='balance'>{balance}</span>
          </Menu.Item>
        ])
      }
    </Menu>
  )

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button className='currency-selection'>
        <img src={flag}/> {currency} <Icon type='caret-down' />
      </Button>
    </Dropdown>
  )
}

CurrencySelection.propTypes = {
  currencies: array.isRequired,
  currency: string.isRequired,
  onCurrencySelection: func.isRequired
}

export default CurrencySelection
