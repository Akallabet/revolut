import React from 'react'
import { array, object, func } from 'prop-types'
import { Card, Row, Col, InputNumber, Button } from 'antd'
import CurrencySelection from '../../components/currency-selection/currency-selection-container'

import './pocket.css'

/**
 *
 */
class Pocket extends React.Component {
  constructor (props) {
    super(props)
    const {pocketCurrency: {amount}} = props

    this.state = {
      amount
    }
  }
  setAmount (amount) {
    this.setState({amount})
  }
  render () {
    const {availableCurrencies, pocketCurrency: {currency}, selectPocketCurrency, increaseCurrencyAmount} = this.props
    const currentCurrency = availableCurrencies.find(({code}) => code === currency)
    return (
      <Card
        className='pocket'
        title={<span>{currentCurrency.symbol} {currentCurrency.balance} - {currentCurrency.code}</span>}
      >
        <Row>
          <Col span={10}>
            <CurrencySelection currency={currency} onCurrencySelection={selectPocketCurrency}/>
          </Col>
          <Col span={10}>
            <InputNumber
              min={0}
              max={10000}
              placeholder={0}
              value={this.state.amount}
              onChange={this.setAmount.bind(this)}
            />
          </Col>
          <Col span={4}>
            <Button
              onClick={() => increaseCurrencyAmount({currency, amount: this.state.amount})}
              disabled={isNaN(this.state.amount) || !this.state.amount}
            >
              Top Up
            </Button>
          </Col>
        </Row>
      </Card>
    )
  }
}

Pocket.propTypes = {
  availableCurrencies: array,
  pocketCurrency: object,
  selectPocketCurrency: func,
  increaseCurrencyAmount: func
}

export default Pocket
