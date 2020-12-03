const m = require('../src/messenger')
const expect = require('chai').expect

/** Logger Configuration
 * by default, logger is off for console messages
 * but we need to still define logger settings
 * you can use the `force` parameter to send data to log file
 */
m.initLogger(false, 'logs', 'test-logger')

let commands = [
  'loggerCritical',
  'loggerError',
  'loggerSuccess',
  'loggerWarning',
  'loggerWarn',
  'loggerImportant',
  'loggerInfo',
  'loggerNote',
  'loggerNotice',
  'loggerLog',
  'loggerDebug',
  'loggerStatus'
]

describe('Messenger Class: Logger', () => {
  it('should log critical', done => {
    let msg = 'critical logger message'
    let result = m.loggerCritical(msg)

    expect(result).to.contain(msg)
    expect(commands.includes('loggerCritical')).to.be.true
    done()
  })
  it('should log error', done => {
    let msg = 'error logger message'
    let result = m.loggerError(msg)
    expect(result).to.contain(msg)
    expect(commands.includes('loggerError')).to.be.true
    done()
  })
  it('should log success', done => {
    let msg = 'success logger message'
    let result = m.loggerSuccess(msg)
    expect(result).to.contain(msg)
    expect(commands.includes('loggerSuccess')).to.be.true
    done()
  })
  it('should log warning', done => {
    let msg = 'warning logger message'
    let result = m.loggerWarning(msg)
    expect(result).to.contain(msg)
    expect(commands.includes('loggerWarning')).to.be.true
    done()
  })
  it('should log warn', done => {
    let msg = 'warn logger message'
    let result = m.loggerWarn(msg)
    expect(result).to.contain(msg)
    expect(commands.includes('loggerWarn')).to.be.true
    done()
  })
  it('should log important', done => {
    let msg = 'important logger message'
    let result = m.loggerImportant(msg)
    expect(result).to.contain(msg)
    expect(commands.includes('loggerImportant')).to.be.true
    done()
  })
  it('should log info', done => {
    let msg = 'info logger message'
    let result = m.loggerInfo(msg)
    expect(result).to.contain(msg)
    expect(commands.includes('loggerInfo')).to.be.true
    done()
  })
  it('should log note', done => {
    let msg = 'note logger message'
    let result = m.loggerNote(msg)
    expect(result).to.contain(msg)
    expect(commands.includes('loggerNote')).to.be.true
    done()
  })
  it('should log notice', done => {
    let msg = 'notice logger message'
    let result = m.loggerNotice(msg)
    expect(result).to.contain(msg)
    expect(commands.includes('loggerNotice')).to.be.true
    done()
  })
  it('should log log', done => {
    let msg = 'notice log message'
    let result = m.loggerLog(msg)
    expect(result).to.contain(msg)
    expect(commands.includes('loggerLog')).to.be.true
    done()
  })
  it('should log debug', done => {
    let msg = 'debug log message'
    let result = m.loggerDebug(msg)
    expect(result).to.contain(msg)
    expect(commands.includes('loggerDebug')).to.be.true
    done()
  })
  it('should log status', done => {
    let msg = 'status log message'
    let result = m.loggerStatus(msg)
    expect(result).to.contain(msg)
    expect(commands.includes('loggerStatus')).to.be.true
    done()
  })
})
