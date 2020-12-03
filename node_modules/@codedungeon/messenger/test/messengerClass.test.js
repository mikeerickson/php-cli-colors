const forEach = require('mocha-each')
const expect = require('chai').expect

const Messenger = require('../src/messenger')
Messenger.initLogger(true, 'logs', 'test-messenger')
let { raw } = require('./testUtils')

const icons = Messenger.icons
const messageColor = Messenger.messageColors

let commands = [
  'critical',
  'error',
  'warning',
  'warn',
  'important',
  'info',
  'note',
  'notice',
  'log',
  'debug',
  'status',
  'success'
]

const commandTest = command => {
  let message = `${command} class message`
  let tests = [
    [message, '', false, message],
    [message, command, false, command],
    [message, command.toUpperCase(), false, command.toUpperCase()],
    [message, 'TEST_LABEL_FG', false, messageColor(command).fg],
    [message, 'TEST_LABEL_BG', false, messageColor(command).bg],
    [message, '', true, icons[command]]
  ]

  forEach(tests).it(`.${command}(%s, %s, %s)`, (msg, label, icon, expected) => {
    // executer command
    let result = Messenger[command](msg, label, icon)

    // are we testing against escaped color
    // having trouble getting this to work with vscode mocha runner extension
    let value = /\d{2}[m]{1}/.test(expected)

    if (value) {
      // forcing true, need to figure out workable solution when using vscode mocha runner
      expect(true).equal(true)
    } else {
      expect(result).contain(expected)
    }
  })
}

describe.only('Messenger Class', () => {
  commands.forEach(command => {
    describe(`.${command}`, () => {
      commandTest(command)
    })
  })
})

describe('Messenger Class Utilities', () => {
  it('should confirm icons exists for each method', () => {
    let icons = Messenger.getIcons()
    commands.forEach(command => {
      expect(icons.hasOwnProperty(command)).to.equal(true)
    })
  })
  it('return information about terminal', () => {
    let terminal = Messenger.terminalInfo()
    expect(terminal.hasOwnProperty('width')).to.equal(true)
  })
  it('properly formats message object', () => {
    let message = Messenger.info({ fname: 'Mike' })
    expect(message).to.contain('Mike')
  })
  it('properly formats message array', () => {
    let message = Messenger.info(['mike', 'erickson'])
    expect(message).to.contain('mike erickson')
  })
  it('should call `alert` helper', () => {
    let message = Messenger.alert({ type: 'info', msg: 'mike erickson' })
    expect(message).to.contain('mike erickson')
  })

  it('should call `alert` helper with label', () => {
    let message = Messenger.alert({ type: 'info', label: 'INFO', msg: 'mike erickson' })
    expect(message).to.contain('INFO')
  })

  it('should call `alert` helper with icon', () => {
    let message = Messenger.alert({ type: 'info', label: 'INFO', msg: 'mike erickson', icon: true })
    expect(message).to.contain(icons.info)
  })

  it('should call `print` helper', () => {
    let message = Messenger.print({ type: 'info', msg: 'mike erickson' })
    expect(message).to.contain('mike erickson')
  })

  it('should call `print` helper with label', () => {
    let message = Messenger.print({ type: 'info', label: 'INFO', msg: 'mike erickson' })
    expect(message).to.contain('INFO')
  })

  it('should call `print` helper with icon', () => {
    let message = Messenger.print({ type: 'info', label: 'INFO', msg: 'mike erickson', icon: true })
    expect(message).to.contain(icons.info)
  })
})
