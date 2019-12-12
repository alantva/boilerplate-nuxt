import { mount } from '@vue/test-utils'
import Spinner from './index.vue'

describe('Spinner', () => {
  /** Mount */
  describe('Mount', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(Spinner)
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })
  /** Props */
  describe('Props', () => {
    describe('have a spinner what', () => {
      test('has class "spinner--xs"', () => {
        const wrapper = mount(Spinner, { propsData: { size: 'xs' } })
        const classes = wrapper.find('.spinner').classes()
        expect(classes).toContain('spinner--xs')
      })
      test('has class "spinner--sm"', () => {
        const wrapper = mount(Spinner, { propsData: { size: 'sm' } })
        const classes = wrapper.find('.spinner').classes()
        expect(classes).toContain('spinner--sm')
      })
      test('has class "spinner--md"', () => {
        const wrapper = mount(Spinner, { propsData: { size: 'md' } })
        const classes = wrapper.find('.spinner').classes()
        expect(classes).toContain('spinner--md')
      })
      test('has class "spinner--lg"', () => {
        const wrapper = mount(Spinner, { propsData: { size: 'lg' } })
        const classes = wrapper.find('.spinner').classes()
        expect(classes).toContain('spinner--lg')
      })
      test('has class "spinner--xl"', () => {
        const wrapper = mount(Spinner, { propsData: { size: 'xl' } })
        const classes = wrapper.find('.spinner').classes()
        expect(classes).toContain('spinner--xl')
      })
    })
  })
})
