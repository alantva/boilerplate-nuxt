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
    test('have a HTML button what change the theme', () => {
      const wrapper = mount(AppTheme, { propsData })
      wrapper.find('button').trigger('click')
      expect(wrapper.emitted().input).toBeTruthy()
    })
  })
  /** Props */
  describe('Props', () => {
    test('have a HTML button what change based in theme', () => {
      const nPropsData = { ...propsData, value: 'dark' }
      const wrapper = mount(AppTheme, { propsData: nPropsData })
      expect(wrapper.find('button.button--outlined')).toBeTruthy()
    })
  })
})
