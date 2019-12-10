import { mount } from '@vue/test-utils'
import Checkbox from './index.vue'

describe('Checkbox', () => {
  /** Mount */
  describe('Mount', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(Checkbox)
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })
  /** Events */
  describe('Events', () => {
    test('have a HTML input what is typed', () => {
      const wrapper = mount(Checkbox)
      wrapper.find('input').trigger('click')
      expect(wrapper.emitted().input).toBeTruthy()
    })
    test('have a HTML input what is not typed when disabled', () => {
      const wrapper = mount(Checkbox, { propsData: { disabled: true } })
      wrapper.find('input').trigger('click')
      expect(wrapper.emitted().input).toBeFalsy()
    })
  })
})
