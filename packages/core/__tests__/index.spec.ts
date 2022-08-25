import { createApp } from '../src/index'
describe('core index', () => {
  it ('createApp', () => {
    const app = createApp({
      onload() {}
    })
  })
})