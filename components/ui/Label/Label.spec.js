import { mount } from '@vue/test-utils'
import Label from './index.vue'

describe('Label', () => {
  /** Mount */
  describe('Mount', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(Label)
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })
  /** Slots */
  describe('Slots', () => {
    test('have a text "Label me!"', () => {
      const wrapper = mount(Label, { slots: { default: 'Label me!' } })
      expect(wrapper.text()).toBe('Label me!')
    })
  })
  /** Props */
  describe('Props', () => {
    describe('have a HTML label what', () => {
      test('has class "label--primary"', () => {
        const wrapper = mount(Label, { propsData: { color: 'primary' } })
        const classes = wrapper.find('label').classes()
        expect(classes).toContain('label--primary')
      })
      test('has class "label--secondary"', () => {
        const wrapper = mount(Label, { propsData: { color: 'secondary' } })
        const classes = wrapper.find('label').classes()
        expect(classes).toContain('label--secondary')
      })
      test('has class "label--error"', () => {
        const wrapper = mount(Label, { propsData: { color: 'error' } })
        const classes = wrapper.find('label').classes()
        expect(classes).toContain('label--error')
      })
      test('has class "label--title"', () => {
        const wrapper = mount(Label, { propsData: { typography: 'title' } })
        const classes = wrapper.find('label').classes()
        expect(classes).toContain('label--title')
      })
      test('has class "label--subtitle"', () => {
        const wrapper = mount(Label, { propsData: { typography: 'subtitle' } })
        const classes = wrapper.find('label').classes()
        expect(classes).toContain('label--subtitle')
      })
      test('has class "label--caption"', () => {
        const wrapper = mount(Label, { propsData: { typography: 'caption' } })
        const classes = wrapper.find('label').classes()
        expect(classes).toContain('label--caption')
      })
    })
  })
})
