import React from 'react'
import {shallow} from 'enzyme'
import Exchange from '../src/components/exchange/exchange-container'
import ExchangeTo from '../src/components/exchange-to/exchange-to'

describe('Exchange To', () => {
  describe('Exchange To Component', () => {
    const props = {
      currency: 'EUR',
      amount: 0.00
    }
    let wrapper
    beforeAll(() => {
      wrapper = shallow(<ExchangeTo exchangeTo={props}/>)
    })

    it('I should see the amount witha negative sign', () => {
      const compProps = wrapper.find(Exchange).props()
      expect(compProps.amount).toEqual(props.amount)
      expect(compProps.currency).toEqual(props.currency)
    })
  })
})
