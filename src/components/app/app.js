import React from 'react'
import { object } from 'prop-types'
import {Layout, Col, List} from 'antd'
import ExchangeFrom from '../exchange-from/exchange-from-container'
import ExchangeTo from '../exchange-to/exchange-to-container'
import ExchangeRate from '../exchange-rate/exchange-rate-container'
import SwapCurrencies from '../swap-currencies/swap-currencies-container'
import './app.css'

const Content = Layout.Content

/**
 * This is the main component that contains:
 * the ExchangeFrom section
 * the Swap button
 * the current Eaxchange Rate
 * the ExchangeTo section
 * @param {object} currencyCodes - A list of currency codes ('EUR', 'GBP', 'USD')
 */
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
                <SwapCurrencies />
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
  currencyCodes: object
}

export default App
