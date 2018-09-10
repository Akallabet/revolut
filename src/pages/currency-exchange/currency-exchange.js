import React from 'react'
import { object } from 'prop-types'
import {Col, List} from 'antd'
import Page from '../../components/page/page'
import ExchangeFrom from '../../components/exchange-from/exchange-from-container'
import ExchangeTo from '../../components/exchange-to/exchange-to-container'
import ExchangeRate from '../../components/exchange-rate/exchange-rate-container'
import SwapCurrencies from '../../components/swap-currencies/swap-currencies-container'
import './currency-exchange.css'

/**
 * This is the main component that contains:
 * the ExchangeFrom section
 * the Swap button
 * the current Eaxchange Rate
 * the ExchangeTo section
 * @param {object} currencyCodes - A list of currency codes ('EUR', 'GBP', 'USD')
 */
const CurrencyExchange = () => (
  <Page>
    <div>
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
    </div>
  </Page>
)

CurrencyExchange.propTypes = {
  currencyCodes: object
}

export default CurrencyExchange
