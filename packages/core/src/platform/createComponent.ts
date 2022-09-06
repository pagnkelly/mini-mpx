export default function createComponent(options: any, ...config: any) {
  // @ts-ignore Component是微信小程序原生内置方法
  Component(options)
  console.log(config, 'Component')
}

