import { mount } from '@vue/test-utils'
import AppFireflies from './index.vue'

describe('AppFireflies', () => {
  /** Mount */
  describe('Mount', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(AppFireflies)
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })
})
