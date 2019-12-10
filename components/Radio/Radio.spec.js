import { mount } from '@vue/test-utils'
import Radio from './index.vue'

describe('Checkbox', () => {
  /** Mount */
  describe('Mount', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(Radio)
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })
  /** Events */
  describe('Events', () => {
    test('have a HTML input what is selected', () => {
      const wrapper = mount(Radio)
      wrapper.find('input').trigger('click')
      expect(wrapper.emitted().input).toBeTruthy()
    })
    test('have a HTML input what is not selected when disabled', () => {
      const wrapper = mount(Radio, { propsData: { disabled: true } })
      wrapper.find('input').trigger('click')
      expect(wrapper.emitted().input).toBeFalsy()
    })
  })
})
