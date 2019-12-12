import { mount } from '@vue/test-utils'
import Input from './index.vue'

describe('Input', () => {
  /** Mount */
  describe('Mount', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(Input)
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })
  /** Events */
  describe('Events', () => {
    test('have a HTML input what is typed', () => {
      const wrapper = mount(Input)
      wrapper.find('input').setValue('test')
      expect(wrapper.emitted().input).toBeTruthy()
    })
    test('have a HTML input what is not typed when disabled', () => {
      const wrapper = mount(Input, { propsData: { disabled: true } })
      wrapper.find('input').setValue('test')
      expect(wrapper.emitted().input).toBeFalsy()
    })
  })
})
