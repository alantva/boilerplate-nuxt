import { mount, createLocalVue } from '@vue/test-utils'
import Input from '../Input/index.vue'
import Autocomplete from './index.vue'

const propsData = { value: null }
const options = [
  { value: 1, text: 'One' },
  { value: 2, text: 'Two' },
  { value: 3, text: 'Three' }
]

const localVue = createLocalVue()

localVue.component('Input', Input)

describe('Autocomplete', () => {
  /** Mount */
  describe('Mount', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(Autocomplete, { propsData })
      expect(wrapper.isVueInstance()).toBeTruthy()
      wrapper.destroy()
    })
  })
  /** Props */
  describe('Props', () => {
    test('have to disable the Input', () => {
      const nPropsData = { ...propsData, disabled: true }
      const wrapper = mount(Autocomplete, { propsData: nPropsData })
      const attributes = wrapper.find('Input').attributes('disabled')
      expect(attributes).toBe('disabled')
    })
    test('have enable a loading', () => {
      const nPropsData = { ...propsData, loading: true }
      const wrapper = mount(Autocomplete, { localVue, propsData: nPropsData })
      expect(wrapper.find('.fa-spinner')).toBeTruthy()
    })
  })
  /** Events */
  describe('Events', () => {
    test('should emit "search" when typed', () => {
      const nPropsData = { ...propsData, options }
      const wrapper = mount(Autocomplete, { propsData: nPropsData })
      wrapper.vm.openAction()
      wrapper.vm.searchAction('one')
      expect(wrapper.emitted().search[0][0]).toBe('one')
    })
    test('should filter suggestions', () => {
      const nPropsData = { ...propsData, options }
      const wrapper = mount(Autocomplete, { propsData: nPropsData })
      wrapper.vm.openAction()
      wrapper.vm.searchAction('one')
      expect(wrapper.vm.findSuggestions()).toHaveLength(1)
    })
    test('should not filter suggestions', () => {
      const nPropsData = { ...propsData, options }
      const wrapper = mount(Autocomplete, { propsData: nPropsData })
      wrapper.vm.openAction()
      wrapper.vm.searchAction('')
      expect(wrapper.vm.findSuggestions()).toHaveLength(3)
    })
    test('if disabled, don\'t emit "search" when typed', () => {
      const nPropsData = { ...propsData, disabled: true }
      const wrapper = mount(Autocomplete, { propsData: nPropsData })
      wrapper.find('Input').setValue('test')
      expect(wrapper.emitted().search).toBeFalsy()
    })
    test('have a emit "input" when selected', () => {
      const nPropsData = { ...propsData, options }
      const wrapper = mount(Autocomplete, { propsData: nPropsData })
      wrapper.vm.selectedAction(options[0])
      expect(wrapper.emitted().input).toBeTruthy()
    })
    test('should deselect if the same option is chosen', () => {
      const nPropsData = { ...propsData, options }
      const wrapper = mount(Autocomplete, { propsData: nPropsData })
      wrapper.setData({ search: 'text', selected: options[0] })
      wrapper.vm.selectedAction(options[0])
      expect(wrapper.vm.selected).toBeFalsy()
    })
    test('should run "escapeAction" if "ESC" is pressed', () => {
      const nPropsData = { ...propsData, options }
      const wrapper = mount(Autocomplete, { propsData: nPropsData })
      wrapper.setData({ search: 'text', selected: options[0] })
      expect(wrapper.vm.search).toBe('text')
      const e = { preventDefault: () => {}, code: 'escape' }
      wrapper.vm.controlEvents(e)
      wrapper.vm.controlEvents({ code: 'random' })
      expect(wrapper.vm.search).toBe(options[0].text)
    })
    test('should run "clearAction" if exists a "selected"', () => {
      const nPropsData = { ...propsData, options }
      const wrapper = mount(Autocomplete, { propsData: nPropsData })
      wrapper.vm.selectedAction(options[0])
      expect(wrapper.vm.selected).toBeTruthy()
      wrapper.vm.clearAction()
      expect(wrapper.vm.selected).toBeFalsy()
    })
  })
})
