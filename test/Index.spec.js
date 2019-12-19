import { mount, createLocalVue } from '@vue/test-utils'
import Box from '../components/ui/Box/index.vue'
import Index from '@/pages/index.vue'

const localVue = createLocalVue()

localVue.component('Box', Box)

describe('Index', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Index, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  /** Events */
  describe('Events', () => {
    afterEach(() => {
      global.open.mockRestore()
    })
    describe('have a HTML button what is clickable', () => {
      test('and trigger `handleDocumentation`', () => {
        const wrapper = mount(Index, { localVue })
        global.open = jest.fn()
        wrapper.vm.handleDocumentation()
        expect(global.open).toBeCalled()
      })
      test('and trigger `handleGithub`', () => {
        const wrapper = mount(Index, { localVue })
        global.open = jest.fn()
        wrapper.vm.handleGithub()
        expect(global.open).toBeCalled()
      })
      test('and trigger `handleChangelog`', () => {
        const wrapper = mount(Index, { localVue })
        global.open = jest.fn()
        wrapper.vm.handleChangelog()
        expect(global.open).toBeCalled()
      })
    })
  })
})
