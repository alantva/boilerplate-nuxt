import { mount } from '@vue/test-utils'
import Button from './index.vue'

describe('Button', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Button)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  describe('have a HTML button what', () => {
    test('exists', () => {
      const wrapper = mount(Button)
      const button = wrapper.find('button').exists()
      expect(button).toBeTruthy()
    })
    test('is clickable', () => {
      const wrapper = mount(Button)
      wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).toBeTruthy()
    })
  })
})
