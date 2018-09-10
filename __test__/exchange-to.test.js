import React from 'react'
import {shallow} from 'enzyme'
import configureStore from 'redux-mock-store'
import {initialStore} from '../__mocks__/store'
import Exchange from '../src/components/exchange/exchange'
import ExchangeTo from '../src/components/exchange-to/exchange-to-container'

describe('Exchange To', () => {
  describe('Exchange To Component', () => {
    const props = {
      currency: 'EUR',
      amount: ''
    }
    const mockStore = configureStore()
    let wrapper, store
    beforeAll(() => {
      store = mockStore(initialStore)
      wrapper = shallow(<ExchangeTo exchangeTo={props} store={store}/>)
    })

    it('I should see the amount with a negative sign', () => {
      const compProps = wrapper.find(Exchange).props()
      expect(compProps.amount).toEqual(initialStore.exchangeTo.amount)
      expect(compProps.currency).toEqual(initialStore.exchangeTo.currency)
    })
  })
})
