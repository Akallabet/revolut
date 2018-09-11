import React from 'react'
import { array, object, func } from 'prop-types'
import { Card, Row, Col, InputNumber, Button } from 'antd'
import Title from './pocket-title'
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
  onKeyDown ({key}) {
    if (key === 'Enter' && this._isValidAmount()) {
      this._increaseCurrencyAmount()
    }
  }
  _increaseCurrencyAmount () {
    const {pocketCurrency: {currency}, increaseCurrencyAmount} = this.props
    increaseCurrencyAmount({currency, amount: this.state.amount})
  }
  _isValidAmount () {
    return !(isNaN(this.state.amount) || !this.state.amount)
  }
  render () {
    const {availableCurrencies, pocketCurrency: {currency}, selectPocketCurrency} = this.props
    const currentCurrency = availableCurrencies.find(({code}) => code === currency)
    return (
      <Card
        className='pocket'
        title={<Title {...currentCurrency}/>}
      >
        <Row>
          <Col span={10}>
            <CurrencySelection currency={currency} onCurrencySelection={selectPocketCurrency}/>
          </Col>
          <Col span={12}>
            <InputNumber
              min={0}
              max={10000}
              placeholder={0}
              value={this.state.amount || ''}
              onChange={this.setAmount.bind(this)}
              onKeyDown={this.onKeyDown.bind(this)}
            />
          </Col>
          <Col span={2}>
            <Button
              onClick={this._increaseCurrencyAmount.bind(this)}
              disabled={!this._isValidAmount()}
              icon='plus-circle'
            />
          </Col>
        </Row>
        <Row>
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
