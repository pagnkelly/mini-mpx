declare lodash

var currentInject: {
  moduleId: string
  injectComputed: any
  injectOptions: any
};
var currentModuleId: string
var currentResource: string
var currentSrcMode: string

type Type = 'blend' | 'app' | 'page' | 'component'
