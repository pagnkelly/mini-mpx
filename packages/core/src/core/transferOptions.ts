export default function transferOptions (options, type) {
  let currentInject
  if (global.currentInject && global.currentInject.moduleId === global.currentModuleId) {
    currentInject = global.currentInject
  }

  const rawOptions = options
  return {
    rawOptions,
    currentInject
  }
}
