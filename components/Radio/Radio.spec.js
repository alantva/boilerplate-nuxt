import { mount } from '@vue/test-utils'
import Radio from './index.vue'

const propsData = { inputValue: 'radio' }

describe('Checkbox', () => {
  /** Mount */
  describe('Mount', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(Radio, { propsData })
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })
  /** Events */
  describe('Events', () => {
    test('have a HTML input what is selected', () => {
      const wrapper = mount(Radio, { propsData })
      wrapper.find('input').trigger('click')
      expect(wrapper.emitted().input[0][0]).toEqual(propsData.inputValue)
    })
    test('have a HTML input what is not selected when disabled', () => {
      const nPropsData = { ...propsData, disabled: true }
      const wrapper = mount(Radio, { propsData: nPropsData })
      wrapper.find('input').trigger('click')
      expect(wrapper.emitted().input).toBeFalsy()
    })
  })
})
