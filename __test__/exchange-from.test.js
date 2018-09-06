import React from 'react'
import {shallow} from 'enzyme'
import {InputNumber} from 'antd'
import availableCurrencies from '../__mocks__/available-currencies'
import CurrencySelection from '../src/components/currency-selection/currency-selection-container'
import ExchangeContainer from '../src/components/exchange/exchange-container'
import Exchange from '../src/components/exchange/exchange'
import ExchangeFrom from '../src/components/exchange-from/exchange-from'

describe('Exchange From', () => {
  const props = {
    currency: 'EUR',
    amount: 0.00,
    availableCurrencies,
    currencySymbols: {}
  }
  describe('Exchange Component', () => {
    let wrapper
    beforeAll(() => {
      wrapper = shallow(<Exchange {...props}/>)
    })
  
    it('I should see the currency code I chose', () => {
      expect(wrapper.find('.js-currency')).toHaveLength(1)
    })
    it('I should see the amount I want to exchange', () => {
      expect(wrapper.find(InputNumber).props().value).toEqual(props.amount)
    })
    it('The amount should be defaulted as zero', () => {
      expect(wrapper.find(InputNumber).props().value).toEqual(0)
    })

    describe('Currencies selection', () => {
      let currency
      beforeAll(() => {
        currency = wrapper.find(CurrencySelection)
      })
      it('I should see a list of available countries when click on the currency code', () => {
        expect(currency).toHaveLength(1)
      })
    })
  })
  describe('Exchange From Component', () => {
    let wrapper
    beforeAll(() => {
      wrapper = shallow(<ExchangeFrom exchangeFrom={props} changeCurrency={() => {}} />)
    })

    it('I should see the amount witha negative sign', () => {
      const compProps = wrapper.find(ExchangeContainer).props()
      expect(compProps.amount).toEqual(props.amount)
      expect(compProps.currency).toEqual(props.currency)
      expect(compProps.sign).toEqual('-')
    })
  })
})
