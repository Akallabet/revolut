import React from 'react'
import { object, func } from 'prop-types'
import { Card, Row, Col, InputNumber, Button } from 'antd'
import CurrencySelection from '../../components/currency-selection/currency-selection-container'
/**
 *
 */
const Pocket = ({pocketCurrency: {code, amount}, selectPocketCurrency}) => {
  return (
    <Card title={<span>Top up {code}</span>}>
      <Row>
        <Col span={10}>
          <CurrencySelection currency={code} onCurrencySelection={selectPocketCurrency}/>
        </Col>
        <Col span={10}>
          <InputNumber />
        </Col>
        <Col span={4}>
          <Button>Add</Button>
        </Col>
      </Row>
    </Card>
  )
}

Pocket.propTypes = {
  pocketCurrency: object,
  selectPocketCurrency: func
}

export default Pocket
