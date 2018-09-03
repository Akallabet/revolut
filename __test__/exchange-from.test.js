import React from 'react'
import {shallow} from 'enzyme'
import {InputNumber, Dropdown} from 'antd'
import {CURRENCY_CODES} from '../src/constants'
import CurrencyDropdown from '../src/components/currency-dropdown/currency-dropdown-container'
import Exchange from '../src/components/exchange/exchange'
import ExchangeFrom from '../src/components/exchange-from/exchange-from'

describe('Exchange From', () => {
  const props = {
    currency: 'EUR',
    amount: 0.00
  }
  describe('Exchange Component', () => {
    let wrapper
    beforeAll(() => {
      wrapper = shallow(<Exchange {...props}/>)
    })
  
    it('I should see the currency code I chose', () => {
      expect(wrapper.find('.js-currency')).toHaveLength(1)
    })
    it('I should see the balance with the same currency', () => {
      expect(wrapper.find('.js-balance')).toHaveLength(1)
    })
    it('I should see the amount I want to exchange', () => {
      expect(wrapper.find(InputNumber).props().defaultValue).toEqual(props.amount)
    })
    it('The amount should be defaulted as zero', () => {
      expect(wrapper.find(InputNumber).props().defaultValue).toEqual(0)
    })

    describe('Currencies dropdown', () => {
      let currency
      beforeAll(() => {
        currency = wrapper.find(CurrencyDropdown)
        console.log(wrapper.debug())
      })
      it('I should see a list of available countries when click on the currency code', () => {
        expect(currency).toHaveLength(1)
      })
    })
  })
  describe('Exchange From Component', () => {
    let wrapper
    beforeAll(() => {
      wrapper = shallow(<ExchangeFrom exchangeFrom={props}/>)
    })

    it('I should see the amount witha negative sign', () => {
      const compProps = wrapper.find(Exchange).props()
      expect(compProps.amount).toEqual(props.amount)
      expect(compProps.currency).toEqual(props.currency)
      expect(wrapper.find(Exchange).props().sign).toEqual('-')
    })
  })
})
