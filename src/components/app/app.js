import React from 'react'
import { func, object } from 'prop-types'
import {Layout, Col, List} from 'antd'
// import ExchangeHeader from '../exchange-header/exchange-header-container'
import ExchangeFrom from '../exchange-from/exchange-from-container'
import ExchangeTo from '../exchange-to/exchange-to-container'
import ExchangeRate from '../exchange-rate/exchange-rate-container'
import SwitchCurrencies from '../switch-currencies/switch-currencies-container'
import './app.css'

const Content = Layout.Content

class App extends React.Component {
  render () {
    return (
      <Layout>
        <Content style={{padding: '50px 0 0 0'}}>
          <List
            bordered={true}
            className='exchange-list'
          >
            <List.Item>
              <ExchangeFrom />
            </List.Item>
          </List>
          <List
            className='rate exchange-list'
          >
            <List.Item>
              <Col span={10}></Col>
              <Col span={4} style={{textAlign: 'center'}}>
                <SwitchCurrencies />
              </Col>
              <Col span={10} style={{textAlign: 'right'}}>
                <ExchangeRate />
              </Col>
            </List.Item>
          </List>
          <List
            bordered={true}
            className='exchange-list'
          >
            <List.Item>
              <ExchangeTo />
            </List.Item>
          </List>
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
