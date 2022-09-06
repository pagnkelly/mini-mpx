export default function createApp(options: any, ...config: any) {
  // @ts-ignore App是微信小程序原生内置方法

  // 暂时没想到什么场景需要自定义渲染方法
  const ctor = config.customCtor || global.currentCtor || App
  ctor(options)
}

