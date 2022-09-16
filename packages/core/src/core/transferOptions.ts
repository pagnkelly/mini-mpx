import { mergeInjectedMixins } from "./injectMixins";
import mergeOptions from './mergeOptions'
export default function transferOptions (options: any, type: string) {
  // 应该是webpack-plugin会注入一些代码执行，但是具体还不清楚怎么注入的，后面再看
  let currentInject
  if (global.currentInject && global.currentInject.moduleId === global.currentModuleId) {
    currentInject = global.currentInject
  }

  // 文件编译路径 也是webpack注入的
  options.mpxFileResource = global.currentResource
  // 【mixins处理】注入全局写入的mixins，原生模式下不进行注入
  if (!options.__nativeRender__) {
    options = mergeInjectedMixins(options, type)
  }

  // 【computed处理】重构下
  if (currentInject?.injectComputed) {
    options.computed = assignCurrentInjectOptions(currentInject.injectComputed, options.computed)
  }
  // 【options处理】重构下
  if (currentInject?.injectOptions) {
    options.computed = assignCurrentInjectOptions(currentInject.injectOptions, options.options)
  }
  // 当需要mode转化的时候进行处理，现在只有wx转其他平台 暂时也不实现
  // options.mpxConvertMode = options.mpxConvertMode || getConvertMode(global.currentSrcMode)
  // mergeOptions是具体的mpx特有的框架模式融合
  const rawOptions = mergeOptions(options, type)
  /**
   * 下面是一些针对平台的内容兼容性操作，这里不进行实现
   */
  // if (currentInject && currentInject.propKeys) {
  //   const computedKeys = Object.keys(rawOptions.computed || {})
  //   // 头条和百度小程序由于props传递为异步操作，通过props向子组件传递computed数据时，子组件无法在初始时(created/attached)获取到computed数据，如需进一步处理数据建议通过watch获取
  //   currentInject.propKeys.forEach(key => {
  //     if (findItem(computedKeys, key)) {
  //       warn(`由于平台机制原因，子组件无法在初始时(created/attached)获取到通过props传递的计算属性[${key}]，该问题一般不影响渲染，如需进一步处理数据建议通过watch获取。`, global.currentResource)
  //     }
  //   })
  // }

  return {
    rawOptions,
    currentInject
  }
}


function assignCurrentInjectOptions (currentInject: any, options: any) {
  return Object.assign({}, currentInject, options)
}