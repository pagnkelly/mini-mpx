// copy 当前目录dist 到 examples下项目中
// 暂时废弃，如果需要多个examples 输出到多个目录dist再尝试
const fs = require('fs-extra')

async function copyFiles (file) {
  try {
    await fs.copy('./dist', file)
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

const files = ['helloworld']

files.forEach(item => {
  copyFiles(`../../examples/${item}/dist`)
})