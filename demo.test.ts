import { evaluateSync } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'

it('renders with crashing', () => {
  evaluateSync('1', runtime as any) // => TypeError: Cannot redefine property: arguments at Function.defineProperty (<anonymous>)
})