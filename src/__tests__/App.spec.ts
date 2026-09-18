import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('renders the resume content', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('صالح شکاری')
    expect(wrapper.text()).toContain('مهارت‌های فنی')
    expect(wrapper.text()).toContain('پروژه‌های کاری')
  })
})
