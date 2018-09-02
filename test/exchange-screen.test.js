import React from 'react'
import {shallow} from 'enzyme'
import App from '../src/components/app/app.js'
import ExchangeHeader from '../src/components/exchange-header/exchange-header-container'
import ExchangeFrom from '../src/components/exchange-from/exchange-from-container'
import ExchangeTo from '../src/components/exchange-to/exchange-to-container'
import ExchangeRate from '../src/components/exchange-rate/exchange-rate-container'
import SwitchRatesButton from '../src/components/switch-rates-button/switch-rates-button-container'

describe('Exchange Screen', () => {
  describe('Main component', () => {
    let wrapper
    beforeAll(() => {
      wrapper = shallow(<App/>)
    })

    it('I should see the title', () => {
      expect(wrapper.find(ExchangeHeader)).toHaveLength(1)
    })
    it('I should see the \'Exchange from\' component', () => {
      expect(wrapper.find(ExchangeFrom)).toHaveLength(1)
    })
    it('I should see the \'Exchange to\' component', () => {
      expect(wrapper.find(ExchangeTo)).toHaveLength(1)
    })
    it('I should see the current rate exchange', () => {
      expect(wrapper.find(ExchangeRate)).toHaveLength(1)
    })
    it('I should see the \'switch\' button', () => {
      expect(wrapper.find(SwitchRatesButton)).toHaveLength(1)
    })
  })
})