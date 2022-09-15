import transferOptions from '../core/transferOptions'
import EXPORT_MPX from '../index'
export default function createApp(options: any, ...config: any) {
  // web的实现方式剔除掉

  const builtInMixins = [{
    getMpx () {
      return EXPORT_MPX
    }
  }]
  // 针对传入的参数进行转化，最核心的内容
  const { rawOptions } = transferOptions(options, 'app')
  options.mixins = builtInMixins
  // 暂时没想到什么场景需要自定义渲染方法
  // @ts-ignore App是微信小程序原生内置方法
  const ctor = config.customCtor || global.currentCtor || App
  ctor(options)
}

