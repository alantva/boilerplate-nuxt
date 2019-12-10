import { mount } from '@vue/test-utils'
import Checkbox from './index.vue'

const propsData = { inputValue: 'check' }

describe('Checkbox', () => {
  /** Mount */
  describe('Mount', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(Checkbox, { propsData })
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })
  /** Events */
  describe('Events', () => {
    test('have a HTML input what is checked', () => {
      const wrapper = mount(Checkbox, { propsData })
      wrapper.find('input').trigger('click')
      expect(wrapper.emitted().input).toBeTruthy()
    })
    test('have a HTML input what is unchecked', () => {
      const nPropsData = { ...propsData, value: ['check'] }
      const wrapper = mount(Checkbox, { propsData: nPropsData })
      wrapper.find('input').trigger('click')
      expect(wrapper.emitted().input).toBeTruthy()
    })
    test('have a HTML input what is not checked when disabled', () => {
      const nPropsData = { ...propsData, disabled: true }
      const wrapper = mount(Checkbox, { propsData: nPropsData })
      wrapper.find('input').trigger('click')
      expect(wrapper.emitted().input).toBeFalsy()
    })
  })
})
