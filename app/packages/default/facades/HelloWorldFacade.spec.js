import { getHelloWorldText, getLongRunHelloWorldText } from './HelloWorldFacade'

describe('getHelloWorldText', () => {
  it('should return text \'Hello World', async () => {
    const out = await getHelloWorldText()
    expect(out).toEqual('Hello World')
  })
})

describe('getLongRunHelloWorldText', () => {
  it('should return text \'Hello World', async () => {
    const out = await getLongRunHelloWorldText()
    expect(out).toEqual('Hello World')
  }, 10 * 1000)
})
