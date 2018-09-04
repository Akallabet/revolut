import React from 'react'
import { func, object } from 'prop-types'
import {Layout, Row, Col} from 'antd'
import ExchangeHeader from '../exchange-header/exchange-header-container'
import ExchangeFrom from '../exchange-from/exchange-from-container'
import ExchangeTo from '../exchange-to/exchange-to-container'
import ExchangeRate from '../exchange-rate/exchange-rate-container'
import SwitchRatesButton from '../switch-rates-button/switch-rates-button-container'

const Header = Layout.Header
const Content = Layout.Content
const Footer = Layout.Footer

class App extends React.Component {
  render () {
    return (
      <div>
        <Layout>
          <Header>
            <ExchangeHeader />
          </Header>
          <Content>
            <Row>
              <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
              <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                <ExchangeFrom />
              </Col>
              <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
            </Row>
            <Row>
              <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
              <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                <ExchangeTo />
              </Col>
              <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
            </Row>
            <ExchangeRate />
            <SwitchRatesButton />
          </Content>
          <Footer></Footer>
        </Layout>
      </div>
    )
  }
}

App.propTypes = {
  currencyCodes: object,
  setExchangeTo: func,
  setExchangeFrom: func
}

export default App
