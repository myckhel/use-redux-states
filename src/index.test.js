// TODO: Write tests

import { setWith } from './reducers'

describe('Reducers Units', () => {
  it('set nested object', () => {
    const obj = { emp: 1 }
    setWith(obj, 'jest.sample.yes', 2)
    expect(obj).toEqual({ emp: 1, jest: { sample: { yes: 2 } } })
  })
})
