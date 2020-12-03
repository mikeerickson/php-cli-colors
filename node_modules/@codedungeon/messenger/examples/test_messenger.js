const colors = require('chalk')
const Messenger = require('../src/messenger')

Messenger.initLogger(true, 'logs', 'messenger')

let showIcon = true
let showLabel = true
console.log('')

let commands = [
  'critical',
  'error',
  'success',
  'warning',
  'warn',
  'important',
  'info',
  'note',
  'notice',
  'log',
  'debug',
  'status'
]

let testObj = { fname: 'Mike', lname: 'Erickson' }

commands.forEach(command => {
  Messenger[command](`test ${command}`)
  Messenger[command](testObj)
  Messenger[command]([command, 'mike', 'joseph', 'erickson'])
  Messenger[command]([command, 'mike', 'joseph', 'erickson'], command.toUpperCase())
  Messenger[command](
    [command, 'mike', 'joseph', 'erickson'],
    showLabel ? command.toUpperCase() : '',
    showIcon
  )
  console.log('')
})

Messenger.info('Lines displayed width of terminal window')
Messenger.line('=')
Messenger.line('.')
Messenger.line('_')
console.log('')
console.log('')
Messenger.center('message centered in available terminal window')
Messenger.center('alternate message')
console.log('')

Messenger.center(colors.green('message centered in available terminal window'))
Messenger.center(colors.magenta('alternate message'))
console.log('')

Messenger.dump('this', 'is', 'a', 'test')
// Messenger.dd('this', 'is', 'from', 'die dump (dd)')

let msg = 'Hello World'

console.log('')
Messenger.line('-')
console.log('')

Messenger.alert({ type: 'critical', msg, label: '', icon: false })
Messenger.alert({ type: 'critical', msg, label: 'CRITICAL', icon: false })
Messenger.alert({ type: 'critical', msg, label: 'CRITICAL', icon: true })
console.log('')

Messenger.alert({ type: 'error', msg, label: '', icon: false })
Messenger.alert({ type: 'error', msg, label: 'ERROR', icon: false })
Messenger.alert({ type: 'error', msg, label: 'ERROR', icon: true })
console.log('')

Messenger.alert({ type: 'debug', msg, label: '', icon: false })
Messenger.alert({ type: 'debug', msg, label: 'DEBUG', icon: false })
Messenger.alert({ type: 'debug', msg, label: 'DEBUG', icon: true })
console.log('')

Messenger.alert({ type: 'important', msg, label: '', icon: false })
Messenger.alert({ type: 'important', msg, label: 'IMPORTANT', icon: false })
Messenger.alert({ type: 'important', msg, label: 'IMPORTANT', icon: true })
console.log('')

Messenger.alert({ type: 'info', msg, label: '', icon: false })
Messenger.alert({ type: 'info', msg, label: 'INFO', icon: false })
Messenger.alert({ type: 'info', msg, label: 'INFO', icon: true })
console.log('')

Messenger.alert({ type: 'log', msg, label: '', icon: false })
Messenger.alert({ type: 'log', msg, label: 'LOG', icon: false })
Messenger.alert({ type: 'log', msg, label: 'LOG', icon: true })
console.log('')

Messenger.alert({ type: 'note', msg, label: '', icon: false })
Messenger.alert({ type: 'note', msg, label: 'NOTE', icon: false })
Messenger.alert({ type: 'note', msg, label: 'NOTE', icon: true })
console.log('')

Messenger.alert({ type: 'notice', msg, label: '', icon: false })
Messenger.alert({ type: 'notice', msg, label: 'NOTICE', icon: false })
Messenger.alert({ type: 'notice', msg, label: 'NOTICE', icon: true })
console.log('')

Messenger.alert({ type: 'status', msg, label: '', icon: false })
Messenger.alert({ type: 'status', msg, label: 'STATUS', icon: false })
Messenger.alert({ type: 'status', msg, label: 'STATUS', icon: true })
console.log('')

Messenger.alert({ type: 'success', msg, label: '', icon: false })
Messenger.alert({ type: 'success', msg, label: 'SUCCESS', icon: false })
Messenger.alert({ type: 'success', msg, label: 'SUCCESS', icon: true })
console.log('')

Messenger.alert({ type: 'warn', msg, label: '', icon: false })
Messenger.alert({ type: 'warn', msg, label: 'WARN', icon: false })
Messenger.alert({ type: 'warn', msg, label: 'WARN', icon: true })
console.log('')

Messenger.alert({ type: 'warning', msg, label: '', icon: false })
Messenger.alert({ type: 'warning', msg, label: 'WARNING', icon: false })
Messenger.alert({ type: 'warning', msg, label: 'WARNING', icon: true })
console.log('')

Messenger.print({ msg: 'Print Test' })
Messenger.print({ msg: 'Print Test', label: 'INFO' })
Messenger.print({ type: 'success', msg: 'Print Test', label: '', icon: true })
console.log('')
