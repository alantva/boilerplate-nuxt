import { mount } from '@vue/test-utils'
import Box from './index.vue'

describe('Box', () => {
  /** Mount */
  describe('Mount', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(Box)
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })
  /** Slots */
  describe('Slots', () => {
    test('have a text "Content here!"', () => {
      const wrapper = mount(Box, { slots: { default: 'Content here!' } })
      expect(wrapper.text()).toBe('Content here!')
    })
  })
})
