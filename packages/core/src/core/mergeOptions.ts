type Type = 'blend' | 'app' | 'page' | 'component'

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
}
