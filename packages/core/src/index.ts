// createApp 名字冲突，所以 * as了
import * as platform from './platform/index'
export function createApp (config: any, ...rest: any[]) {
  const mpx = new EXPORT_MPX()
  // ...rest 透传过去没问题啊，但是createApp只有俩参数，并没做解构处理，其他两个方法同理
  // 另外发现，不注册App方法，page居然也能运行, 应该是App,page,component分别独立运行的
  platform.createApp(Object.assign({ proto: mpx.proto }, config), ...rest)
}

export function createPage (config: any, ...rest: any[]) {
  const mpx = new EXPORT_MPX()
  platform.createPage(Object.assign({ proto: mpx.proto }, config), ...rest)
}

export function createComponent (config: any, ...rest: any[]) {
  const mpx = new EXPORT_MPX()
  platform.createComponent(Object.assign({ proto: mpx.proto }, config), ...rest)
}

let observable
let watch

export { watch, observable }
function factory() {
  function MPX () {

  }
  return MPX
}

const EXPORT_MPX:any = factory()

export default EXPORT_MPX