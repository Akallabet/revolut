import React from 'react'
import {Layout} from 'antd'
import ExchangeHeader from '../exchange-header/exchange-header-container'
import ExchangeFrom from '../exchange-from/exchange-from-container'
import ExchangeTo from '../exchange-to/exchange-to-container'
import ExchangeRate from '../exchange-rate/exchange-rate-container'
import SwitchRatesButton from '../switch-rates-button/switch-rates-button-container'

const App = () => (
  <div>
    <Layout>
      <Layout.Header>
        <ExchangeHeader />
      </Layout.Header>
      <Layout.Content>
        <ExchangeFrom />
        <ExchangeTo />
        <ExchangeRate />
        <SwitchRatesButton />
      </Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  </div>
)

export default App
