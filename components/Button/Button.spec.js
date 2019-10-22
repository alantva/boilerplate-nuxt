import { mount } from '@vue/test-utils'
import Button from './index.vue'

describe('Button', () => {
  /** Mount */
  describe('Mount', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(Button)
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })
  /** Slots */
  describe('Slots', () => {
    test('have a text "Click me!"', () => {
      const wrapper = mount(Button, { slots: { default: 'Click me!' } })
      expect(wrapper.text()).toBe('Click me!')
    })
  })
  /** Events */
  describe('Events', () => {
    test('have a HTML button what is clickable', () => {
      const wrapper = mount(Button)
      wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).toBeTruthy()
    })
  })
  /** Props */
  describe('Props', () => {
    describe('have a HTML button what', () => {
      test('has class "button--primary"', () => {
        const wrapper = mount(Button, { propsData: { color: 'primary' } })
        const classes = wrapper.find('button').classes()
        expect(classes).toContain('button--primary')
      })
      test('has class "button--secondary"', () => {
        const wrapper = mount(Button, { propsData: { color: 'secondary' } })
        const classes = wrapper.find('button').classes()
        expect(classes).toContain('button--secondary')
      })
      test('has class "button--solid"', () => {
        const wrapper = mount(Button, { propsData: { solid: true } })
        const classes = wrapper.find('button').classes()
        expect(classes).toContain('button--solid')
      })
      test('has class "button--outlined"', () => {
        const wrapper = mount(Button, { propsData: { outlined: true } })
        const classes = wrapper.find('button').classes()
        expect(classes).toContain('button--outlined')
      })
    })
  })
})
