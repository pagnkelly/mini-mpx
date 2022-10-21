let convertRule
let curType: Type
let currentHooksMap = {}
let getConvertRule = (type: string):any => {
  return {
    pageMode: 'blend',
    lifecycle: {
      blend: [],
      app: [],
      page: [],
      component: []
    }
  }
}
// [] to { [key]: true}
let makeMap = (arr: any[]) => { return {} }
export default function mergeOptions(options: any, type: Type, needConvert = true) {
  // 拉取配置，转化的规则
  // ******* 这部分貌似只是特殊处理微信小程序的特殊处理
  // needConvert为false，表示衔接原生的root配置，那么此时的配置都是当前原生环境支持的配置，不需要转换
  convertRule = getConvertRule(needConvert ? options.mpxConvertMode || 'default' : 'local')
   // 微信小程序使用Component创建page 这里是我不理解的地方
   // 为什么要用component
   // 为什么要从loader中注入
   // 为什么能小程序能识别成page，不是component创建的吗
   // 为什么wx.navigateTo能跳转
   if (type === 'page' && convertRule.pageMode) {
    curType = convertRule.pageMode
  } else {
    curType = type
  }
  // ******* 

  currentHooksMap = makeMap(convertRule.lifecycle[curType])

  const newOptions = {}
  extractMixins(newOptions, options, needConvert)
  return transformHOOKS(newOptions)
}

function transformHOOKS(options: any) {
  // 转化hooks
  return options
}

function extractMixins(newOptions: {}, options: any, needConvert: boolean) {
  // behaviors处理这里不写了 就是换成mixins 且做了合并处理

  // mixins里的东西都搞到外层
  if (options.mixins) {
    for (const mixin of options.mixins) {
      if (typeof mixin === 'string') {
        console.log('不支持string', options.mpxFileResource)
      } else {
        extractMixins(newOptions, mixin, needConvert)
      }
    }
  }

  // 然后就是把mpx特有的删除掉，也弄出来
  // pagelifetimes去掉
  options = extractLifetimes(options)
  // 如果methods里有page生命周期里的hook同名提示错误
  options = extractPageHooks(options)
  // needConvert为true 就需要处理，false是原生
  if (needConvert) {
    options = extractObservers(options)
  }
  // mergeMixins里面再做data,computed的复制
  mergeMixins(newOptions, options)
  return newOptions
}
function extractLifetimes(options: any): any {
  throw new Error("Function not implemented.")
}

function extractPageHooks(options: any): any {
  throw new Error("Function not implemented.")
}

function extractObservers(options: any): any {
  throw new Error("Function not implemented.")
}

function mergeMixins(newOptions: {}, options: any) {
  throw new Error("Function not implemented.")
}

