// createApp 名字冲突，所以 * as了
import * as platform from './platform/index'
export function createApp (config: any) {
  const mpx = new EXPORT_MPX()
  platform.createApp(config)
}

export function createPage (config: any) {
  platform.createPage(config)
}

export function createComponent (config: any) {
  platform.createComponent(config)
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