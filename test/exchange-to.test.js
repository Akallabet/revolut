import React from 'react'
import {mount} from 'enzyme'
import ExchangeTo from '../src/components/exchange-to/exchange-to'

describe('Exchange To', () => {
  describe('Exchange To Component', () => {
    const props = {
      currency: 'EUR',
      amount: 0.00
    }
    let wrapper
    beforeAll(() => {
      wrapper = mount(<ExchangeTo exchangeTo={props}/>)
    })

    it('I should see the component', () => {
      expect(wrapper.find('.exchange-to')).toHaveLength(1)
    })

    it('I should see the currency code I chose', () => {
      expect(wrapper.find('.js-currency').text()).toEqual(props.currency)
    })
    it('I should see the balance with the same currency', () => {
      expect(wrapper.find('.js-balance')).toHaveLength(1)
    })
    it('I should see the amount I want to exchange', () => {
      expect(wrapper.find('.js-amount')).toHaveLength(1)
    })
    it('The amount should be defaulted as zero', () => {
      expect(wrapper.find('.js-amount').text()).toEqual('0')
    })
  })
})