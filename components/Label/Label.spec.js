import { mount } from '@vue/test-utils'
import Label from './index.vue'

describe('Label', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Label)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  describe('have a HTML span what', () => {
    test('exists', () => {
      const wrapper = mount(Label)
      const label = wrapper.find('span').exists()
      expect(label).toBeTruthy()
    })
    describe('its color', () => {
      test('is primary', () => {
        const wrapper = mount(Label, {
          propsData: { color: 'primary' }
        })
        const classes = wrapper.find('span').classes()
        expect(classes).toContain('label--primary')
      })
      test('is secondary', () => {
        const wrapper = mount(Label, {
          propsData: { color: 'secondary' }
        })
        const classes = wrapper.find('span').classes()
        expect(classes).toContain('label--secondary')
      })
    })
    describe('its typography', () => {
      test('is a title', () => {
        const wrapper = mount(Label, {
          propsData: { typography: 'title' }
        })
        const classes = wrapper.find('span').classes()
        expect(classes).toContain('label--title')
      })
      test('is a subtitle', () => {
        const wrapper = mount(Label, {
          propsData: { typography: 'subtitle' }
        })
        const classes = wrapper.find('span').classes()
        expect(classes).toContain('label--subtitle')
      })
      test('is a caption', () => {
        const wrapper = mount(Label, {
          propsData: { typography: 'caption' }
        })
        const classes = wrapper.find('span').classes()
        expect(classes).toContain('label--caption')
      })
    })
  })
})
