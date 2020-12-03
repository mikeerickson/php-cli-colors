const Messenger = require('../src/messenger')
const strpad = require('strpad')
const { critical } = require('../src/messenger')

// Messenger.clear()

// Messenger.critical('test')
// Messenger.critical('test', 'critical')
// Messenger.critical('test', 'critical', true)

let obj = { fname: 'Mike', lname: 'Erickson', kids: ['Joelle', 'Brady', 'Bailey', 'Trevor'] }
let names = ['mike', 'erickson']
let methods = [
  'critical',
  'danger',
  'debug',
  'error',
  'important',
  'info',
  'log',
  'note',
  'notice',
  'status',
  'success',
  'warn',
  'warning'
]

// let colors = Messenger.messageColors('critical')
// console.log(colors)

methods.forEach(method => {
  let colors = Messenger.messageColors(method)
  console.log(colors)
  let header = `\u001b[${colors.fg}` + method.toLocaleUpperCase() + '\u001b[39m'
  Messenger.center(` ${header} `, `\u001b[${colors.fg}*\u001b[39m`)
  console.log('')
  Messenger[method](obj, 'OBJECT')
  console.log('')
  Messenger[method](names, 'ARRAY')
  console.log()
})
