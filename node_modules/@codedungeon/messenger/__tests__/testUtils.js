const colors = require('chalk')
const terminal = require('window-size')
const stripAnsi = require('strip-ansi')

// require some additional matchers and chaining
require('jest-chain')
require('jest-extended')

const MAIN_LINE = '⏤'
const MAIN_ICON = '🚧'
const DESCRIBE_ICON = '✏️'
const TEST_ICON = '📝'

module.exports = {
  icons: {
    MAIN_LINE,
    MAIN_ICON,
    DESCRIBE_ICON,
    TEST_ICON
  },
  classLabel: (str, icon = MAIN_ICON) => {
    let main = ' ' + str + '  ' + MAIN_LINE.repeat(terminal.width - str.length)
    // return colors.magenta.bold(`\n${icon}  ${main}`);
    return `\n${icon}  ` + colors.magenta.bold(`${main}`)
  },
  commandLabel: (str, icon = TEST_ICON) => {
    return colors.cyan.bold(`\n ${icon}  ${str}\n`)
  },
  testLabel: (str, icon = TEST_ICON) => {
    return colors.cyan.bold(`\n ${icon}   ${str}\n`)
  },
  raw: str => {
    return JSON.stringify(str)
  },
  colors,
  terminal,
  stripAnsi
}
