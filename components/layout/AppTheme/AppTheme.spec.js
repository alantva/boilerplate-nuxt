import { mount, createLocalVue } from '@vue/test-utils'
import Button from '../../ui/Button/index.vue'
import AppTheme from './index.vue'

const propsData = { value: null }

const localVue = createLocalVue()

localVue.component('Button', Button)

describe('AppTheme', () => {
  /** Mount */
  describe('Mount', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(AppTheme, { propsData })
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })
  /** Events */
  describe('Events', () => {
    test('should change to "light" theme', () => {
      const nPropsData = { ...propsData, value: 'dark' }
      const wrapper = mount(AppTheme, { propsData: nPropsData })
      wrapper.find('Button').trigger('click')
      expect(wrapper.emitted().input[0][0]).toBe('light')
    })
    test('should change to "dark" theme', () => {
      const nPropsData = { ...propsData, value: 'light' }
      const wrapper = mount(AppTheme, { propsData: nPropsData })
      wrapper.find('Button').trigger('click')
      expect(wrapper.emitted().input[0][0]).toBe('dark')
    })
  })
  /** Props */
  describe('Props', () => {
    describe('should have a icon what change if', () => {
      test('is "dark" theme', () => {
        const nPropsData = { ...propsData, value: 'dark' }
        const wrapper = mount(AppTheme, { propsData: nPropsData })
        expect(wrapper.find('i.fa.fa-moon-o')).toBeTruthy()
      })
      test('is "light" theme', () => {
        const nPropsData = { ...propsData, value: 'light' }
        const wrapper = mount(AppTheme, { propsData: nPropsData })
        expect(wrapper.find('i.fa.fa-sun-o')).toBeTruthy()
      })
    })
  })
})
