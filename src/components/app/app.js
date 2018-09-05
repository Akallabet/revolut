import React from 'react'
import { func, object } from 'prop-types'
import {Layout, Row, Col, List} from 'antd'
import ExchangeHeader from '../exchange-header/exchange-header-container'
import ExchangeFrom from '../exchange-from/exchange-from-container'
import ExchangeTo from '../exchange-to/exchange-to-container'
import ExchangeRate from '../exchange-rate/exchange-rate-container'
import SwitchCurrencies from '../switch-currencies/switch-currencies-container'
import './app.css'

const Footer = Layout.Footer
const Content = Layout.Content

class App extends React.Component {
  render () {
    return (
      <Layout>
        <Content style={{padding: '50px 0 0 0'}}>
          <Col xs={0} sm={0} md={1} lg={2} xl={4}></Col>
          <Col xs={24} sm={24} md={9} lg={7} xl={11}>
            <List bordered={true} >
              <List.Item>
                <ExchangeFrom />
              </List.Item>
            </List>
          </Col>
          <Col xs={24} sm={24} md={4} lg={4} xl={4}>
            <List bordered={true} >
              <List.Item>
                <SwitchCurrencies />
                <ExchangeRate />
              </List.Item>
            </List>
          </Col>
          <Col xs={24} sm={24} md={9} lg={7} xl={11}>
            <List bordered={true} >
              <List.Item>
                <ExchangeTo />
              </List.Item>
            </List>
          </Col>
          <Col xs={0} sm={0} md={1} lg={2} xl={4}></Col>
        </Content>
      </Layout>
    )
  }
}

App.propTypes = {
  currencyCodes: object,
  setExchangeTo: func,
  setExchangeFrom: func
}

export default App
