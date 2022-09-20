let convertRule
let getConvertRule = (type: string) => {}
export default function mergeOptions(options: any, type: string, needConvert = true) {
  // 拉取配置，转化的规则
  // needConvert为false，表示衔接原生的root配置，那么此时的配置都是当前原生环境支持的配置，不需要转换
  convertRule = getConvertRule(needConvert ? options.mpxConvertMode || 'default' : 'local')
  const newOptions = {}
  return transformHOOKS(newOptions)
}

function transformHOOKS(options: any) {
  // 转化hooks
  return options
}