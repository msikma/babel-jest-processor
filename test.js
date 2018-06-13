import uuidv4 from 'uuid/v4'


describe('test', () => {
  it(`should work without crashing`, () => {
    expect(typeof uuidv4()).toBe('string')
  })
})
