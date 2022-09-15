import flatten from 'lodash/flatten.js'

const mixinsQueueMap: any = {
  app: [[], []],
  page: [[], []],
  component: [[], []]
}

export function mergeInjectedMixins (options: { mixins: any[] }, type: any) {
  const before = flatten(mixinsQueueMap[type][0])
  const middle = options.mixins || []
  const after = flatten(mixinsQueueMap[type][1])
  const mixins = before.concat(middle).concat(after)
  if (mixins.length) {
    options.mixins = mixins
  }
  return options
}