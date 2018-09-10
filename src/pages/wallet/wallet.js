import React from 'react'
import { object } from 'prop-types'
import { Row, Col, Card } from 'antd'
import Page from '../../components/page/page'

/**
 * This is the main component that contains:
 * the ExchangeFrom section
 * the Swap button
 * the current Eaxchange Rate
 * the ExchangeTo section
 * @param {object} currencyCodes - A list of currency codes ('EUR', 'GBP', 'USD')
 */
const Wallet = () => (
  <Page>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>Card content</Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>Card content</Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>Card content</Card>
      </Col>
    </Row>
  </Page>
)

Wallet.propTypes = {
  currencyCodes: object
}

export default Wallet
