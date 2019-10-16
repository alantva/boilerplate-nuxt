import { mount } from '@vue/test-utils'
import Index from '@/components/Logo.vue'

describe('Index', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Index)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
