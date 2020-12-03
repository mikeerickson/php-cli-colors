#!/usr/bin/env node
/*eslint no-console: "off"*/

const { spawnSync } = require('child_process')
const colors = require('chalk')

let iterations = process.argv.slice(2)[0] || 5

console.log('')
console.time(colors.red('Execution Time'))
for (let idx = 1; idx <= iterations; idx++) {
  let pct = Math.round((idx / iterations) * 100)
  let msg = `${colors.blue.bold('==> Running Stress Test:')} ${idx} of ${iterations} (${pct}%)`
  console.log(colors.green(msg))
  spawnSync('yarn', ['run', 'test:ci', '--reporter', 'progress'], { stdio: 'inherit' })
}
console.timeEnd(colors.red('Execution Time'))
console.log('')
