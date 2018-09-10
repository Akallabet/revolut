import React from 'react'
import {shallow} from 'enzyme'
import configureStore from 'redux-mock-store'
import {InputNumber} from 'antd'
import {initialStore} from '../__mocks__/store'
import availableCurrencies from '../__mocks__/available-currencies'
import CurrencySelection from '../src/components/currency-selection/currency-selection-container'
import Exchange from '../src/components/exchange/exchange'
import ExchangeFrom from '../src/components/exchange-from/exchange-from-container'

describe('Exchange From', () => {
  const props = {
    currency: 'EUR',
    amount: '',
    availableCurrencies,
    currencySymbols: {}
  }
  const mockStore = configureStore()
  let store, container

  describe('Exchange Component', () => {
    let wrapper
    beforeAll(() => {
      store = mockStore(initialStore)
      wrapper = shallow(<Exchange {...props} store={store}/>)
    })

    it('I should see the currency code I chose', () => {
      expect(wrapper.find('.js-currency')).toHaveLength(1)
    })
    it('I should see the amount I want to exchange', () => {
      expect(wrapper.find(InputNumber).props().value).toEqual(props.amount)
    })
    it('The amount should be defaulted as zero', () => {
      expect(wrapper.find(InputNumber).props().value).toEqual('')
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
      store = mockStore(initialStore)
      wrapper = shallow(<ExchangeFrom changeCurrency={() => {}} store={store}/>)
    })

    it('I should see the amount with a negative sign', () => {
      const compProps = wrapper.find(Exchange).props()
      expect(compProps.amount).toEqual(initialStore.exchangeFrom.amount)
      expect(compProps.currency).toEqual(initialStore.exchangeFrom.currency)
    })
  })
})
