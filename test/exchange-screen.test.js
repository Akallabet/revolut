import React from 'react'
import {shallow} from 'enzyme'
import App from '../src/components/app/app.js'

describe('Exchange Screen', () => {
  describe('Main component', () => {
    let wrapper
    beforeAll(() => {
      wrapper = shallow(<App/>)
    })

    it('I should see the title', () => {
      expect(wrapper.find('Title')).toHaveLength(1)
    })
    it('I should see the \'Exchange from\' component', () => {
      expect(wrapper.find('ExchangeFrom')).toHaveLength(1)
    })
    it('I should see the \'Exchange to\' component', () => {
      expect(wrapper.find('ExchangeTo')).toHaveLength(1)
    })
    it('I should see the current rate exchange', () => {
      expect(wrapper.find('ExchangeRate')).toHaveLength(1)
    })
    it('I should see the \'switch\' button', () => {
      expect(wrapper.find('SwitchRates')).toHaveLength(1)
    })
  })
})