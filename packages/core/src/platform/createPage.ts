export default function createPage(options: any, ...config: any) {
  // @ts-ignore Page是微信小程序原生内置方法
  Page(options)
  console.log(config, 'Page')
}

