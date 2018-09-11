import React from 'react'
import {string, number} from 'prop-types'
import {Row, Col} from 'antd'

const PocketTitle = ({symbol, balance, code}) =>
  <Row>
    <Col span={2}>
      Top Up <strong>{code}</strong>
    </Col>
    <Col span={20}>
      {symbol} {balance}
    </Col>
    <Col span={2}/>
  </Row>

PocketTitle.propTypes = {
  symbol: string,
  balance: number,
  code: string
}

export default PocketTitle
