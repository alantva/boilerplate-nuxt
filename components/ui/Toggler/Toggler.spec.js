import { mount } from '@vue/test-utils'
import Toggler from './index.vue'

const propsData = { value: true }

describe('Checkbox', () => {
  /** Mount */
  describe('Mount', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(Toggler, { propsData })
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })
  /** Events */
  describe('Events', () => {
    test('should update when clicked', () => {
      const wrapper = mount(Toggler, { propsData })
      wrapper.find('.toggler').trigger('click')
      expect(wrapper.emitted().input).toBeTruthy()
    })
    test('should update when clicked', () => {
      const wrapper = mount(Toggler, { propsData: { value: false } })
      wrapper.find('.toggler').trigger('click')
      expect(wrapper.emitted().input).toBeTruthy()
    })
  })
})
