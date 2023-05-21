import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const msg = 'Hello World!'
    const wrapper = shallowMount(HelloWorld, { props: { msg } })
    expect(wrapper.text()).toContain(msg)
  })
})
