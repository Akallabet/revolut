import React from 'react'
import { object, func } from 'prop-types'
import { Card, Row, Col, InputNumber, Button } from 'antd'
import CurrencySelection from '../../components/currency-selection/currency-selection-container'
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
    const {pocketCurrency: {code}, selectPocketCurrency, setCurrencyAmount} = this.props
    return (
      <Card title={<span>Top up {code}</span>}>
        <Row>
          <Col span={10}>
            <CurrencySelection currency={code} onCurrencySelection={selectPocketCurrency}/>
          </Col>
          <Col span={10}>
            <InputNumber
              min={0}
              max={1000}
              value={this.state.amount}
              onChange={this.setAmount.bind(this)}
            />
          </Col>
          <Col span={4}>
            <Button onClick={() => setCurrencyAmount({code, amount: this.state.amount})}>Add</Button>
          </Col>
        </Row>
      </Card>
    )
  }
}

Pocket.propTypes = {
  pocketCurrency: object,
  selectPocketCurrency: func,
  setCurrencyAmount: func
}

export default Pocket
