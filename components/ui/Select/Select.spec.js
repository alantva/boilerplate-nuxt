import { mount, createLocalVue } from '@vue/test-utils'
import Select from './index.vue'

const propsData = { value: null }

const localVue = createLocalVue()

describe('Select', () => {
  /** Mount */
  describe('Mount', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(Select, { propsData })
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })
  /** Props */
  describe('Props', () => {
    test('have to disable the HTML select', () => {
      const nPropsData = { ...propsData, disabled: true }
      const wrapper = mount(Select, { propsData: nPropsData })
      const attributes = wrapper.find('select').attributes('disabled')
      expect(attributes).toBe('disabled')
    })
    test('have enable a loading', () => {
      const nPropsData = { ...propsData, loading: true }
      const wrapper = mount(Select, { localVue, propsData: nPropsData })
      expect(wrapper.find('.select--status.fa-spinner')).toBeTruthy()
    })
  })
  /** Events */
  describe('Events', () => {
    test('have a HTML select what is changed', () => {
      const wrapper = mount(Select, { propsData })
      wrapper.find('select').setValue('test')
      expect(wrapper.emitted().input).toBeTruthy()
    })
    test('have "chevron-down" icon when inactive', () => {
      const wrapper = mount(Select, { propsData })
      wrapper.setData({ active: false })
      expect(wrapper.find('.select--status.fa-chevron-down')).toBeTruthy()
    })
    test('have "chevron-up" icon when active', () => {
      const wrapper = mount(Select, { propsData })
      wrapper.setData({ active: true })
      expect(wrapper.find('.select--status.fa-chevron-up')).toBeTruthy()
    })
    test('have a HTML select what is not changed when disabled', () => {
      const nPropsData = { ...propsData, disabled: true }
      const wrapper = mount(Select, { propsData: nPropsData })
      wrapper.find('select').setValue('test')
      expect(wrapper.emitted().input).toBeFalsy()
    })
  })
})
