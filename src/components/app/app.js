import React from 'react'
import { func, object } from 'prop-types'
import {Layout, Row, Col} from 'antd'
import ExchangeHeader from '../exchange-header/exchange-header-container'
import ExchangeFrom from '../exchange-from/exchange-from-container'
import ExchangeTo from '../exchange-to/exchange-to-container'
import ExchangeRate from '../exchange-rate/exchange-rate-container'
import SwitchRatesButton from '../switch-rates-button/switch-rates-button-container'

class App extends React.Component {
  // componentDidMount () {
  //   const {currencyCodes, setExchangeFrom, setExchangeTo} = this.props
  //   setExchangeFrom(currencyCodes.EUR)
  //   setExchangeTo(currencyCodes.USD)
  // }

  render () {
    return (
      <div>
        <Layout>
          <Layout.Header>
            <ExchangeHeader />
          </Layout.Header>
          <Layout.Content>
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
          </Layout.Content>
          <Layout.Footer></Layout.Footer>
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
