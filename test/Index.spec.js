import { mount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Index', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Index)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  /** Events */
  describe('Events', () => {
    afterEach(() => {
      global.open.mockRestore()
    })
    describe('have a HTML button what is clickable', () => {
      test('and trigger `handleDocumentation`', () => {
        const wrapper = mount(Index)
        global.open = jest.fn()
        wrapper.vm.handleDocumentation()
        expect(global.open).toBeCalled()
      })
      test('and trigger `handleGithub`', () => {
        const wrapper = mount(Index)
        global.open = jest.fn()
        wrapper.vm.handleGithub()
        expect(global.open).toBeCalled()
      })
    })
  })
})
