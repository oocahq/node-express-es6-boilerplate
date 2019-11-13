import { wrap, success, error } from '../../core/http/wrapper'
import {
  getHelloWorldText,
  getLongRunHelloWorldText,
} from '../facades/HelloWorldFacade'

export const helloWorldAsync = async () => success(
  {
    version: '1.0',
    text: await getHelloWorldText(),
  },
  'Hello World',
)

export const forceErrorAsync = async () => error(
  {
    obj: { v: 1 },
    text: await getLongRunHelloWorldText,
  },
  'Something Error',
  400,
)

export const helloWorld = wrap(helloWorldAsync)
export const forceError = wrap(forceErrorAsync)
