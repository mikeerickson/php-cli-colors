/*-------------------------------------------------------------------------------------------
 * @codedungeon/messenger
 *
 * Copyright (c) 2020 Mike Erickson / Codedungeon.  All rights reserved.
 * Licensed under the MIT license.  See LICENSE in the project root for license information.
 * -----------------------------------------------------------------------------------------*/

const os = require('os')
const colors = require('chalk')
const utils = require('./utils')
const Logger = require('./logger')
const clearCli = require('cli-clear')
const stripAnsi = require('strip-ansi')
let windowSize = require('window-size')
const { dd, dump } = require('dumper.js')
const { format, getMilliseconds } = require('date-fns')

const pkgInfo = require('../package.json')

/* istanbul ignore next */
if (windowSize === undefined) {
  // this is required when message executed in non terminal window -- such as VSCode code runner
  windowSize = { width: 100 }
}

/**
 * print
 *
 * @param {string} [type=""]
 * @param {*} args
 * @memberof Messenger
 */
const print = args => {
  // console.log(args);
  // this has been disabled, using jest function mock instead
  /* istanbul ignore next */
  process.env.NODE_ENV === 'test' ? null : console.log(args)
}

/**
 * Messenger
 *
 * @class Messenger
 */
class Messenger {
  /**
   *Creates an instance of Messenger.
   * @memberof Messenger
   */
  /**
   *Creates an instance of Messenger.
   * @memberof Messenger
   */
  constructor() {
    this.appName = '@codedungeon/messenger'
    this.logToFile = false
    this.methods = [
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
  }

  /**
   * version
   *
   * @returns
   * @memberof Messenger
   */

  icons(type) {
    return utils.icons(type)
  }

  /**
   * messageColors
   *
   * @param {string} [type='info']
   * @return {*}
   * @memberof Messenger
   */
  messageColors(type = 'info') {
    return utils.messageColors(type)
  }

  /**
   * version
   *
   * @return {*}
   * @memberof Messenger
   */
  version() {
    return pkgInfo.version
  }

  /**
   * alert
   *
   * @param {*} [config={}]
   * @return {*}
   * @memberof Messenger
   */
  alert(config = {}) {
    let alertConfig = this.validateConfig(Object.assign({ type: 'info', msg: '', icon: false }, config))
    return this[alertConfig.type](alertConfig.msg, alertConfig.label, alertConfig.icon)
  }

  /**
   *
   *
   * @param {*} [config={}]
   * @return {*}
   * @memberof Messenger
   */
  print(config = {}) {
    let alertConfig = this.validateConfig(Object.assign({ type: 'info', msg: '', icon: false }, config))
    return this[alertConfig.type](alertConfig.msg, alertConfig.label, alertConfig.icon)
  }

  /* istanbul ignore next */
  /**
   * initLogger
   *
   * @param {boolean} [logToFile=false]
   * @param {string} [logDir="logs"]
   * @param {string} [appName="app"]
   * @memberof Messenger
   */
  initLogger(logToFile = false, logDir = 'logs', appName = 'app') {
    this.logToFile = logToFile
    this.appName = appName
    this.logger = new Logger({ path: logDir, appName })
    this.methods = this.logger.methods()
  }

  /* istanbul ignore next */
  /**
   * writeToLog
   *
   * @param {string} [type=""]
   * @param {*} args
   * @memberof Messenger
   */
  writeToLog(type = '', args, forceLogToFile = false) {
    if (this.logToFile || forceLogToFile) {
      if (this.methods.includes(type)) {
        return this.logger[type](stripAnsi(args).replace(/\n/gi, ' - '))
      }
    }
    return ''
  }

  /**
   * clear
   *
   * @memberof Messenger
   */
  clear() {
    clearCli()
  }

  /**
   * critical
   *
   * @param {*} msg
   * @param {string} [label=""]
   * @param {boolean} [showIcon=false]
   * @returns
   * @memberof Messenger
   */
  critical(msg, label = '', showIcon = false) {
    if (utils.object('critical', msg, label)) {
      return
    }
    label = label ? ' ' + label + ' ' : ''
    let icon = showIcon ? utils.icons.critical + '  ' : ''
    msg = utils.formatMessage(msg)
    let output = `${colors.bgKeyword('orangered').black(label)}${label ? ' ' : ''}${icon}${colors.keyword(
      'orangered'
    )(msg)}`
    print(output)
    if (this !== undefined) {
      this.writeToLog('critical', output)
    }
    return output
  }

  /**
   * loggerCritical
   *
   * @param {*} msg
   * @returns
   * @memberof Messenger
   */
  loggerCritical(msg) {
    return this.writeToLog('critical', msg, true)
  }

  /**
   * error
   *
   * @param {*} msg
   * @param {string} [label=""]
   * @param {boolean} [showIcon=false]
   * @returns
   * @memberof Messenger
   */
  error(msg, label = '', showIcon = false) {
    if (utils.object('error', msg, label)) {
      return
    }
    label = label ? ' ' + label + ' ' : ''
    let icon = showIcon ? utils.icons.error + ' ' : ''
    msg = utils.formatMessage(msg)
    let output = `${colors.bgRed.black(label)}${label ? ' ' : ''}${colors.red(icon + msg)}`
    print(output)
    if (this !== undefined) {
      this.writeToLog('error', output)
    }
    return output
  }

  /**
   * danger
   *
   * @param {*} msg
   * @param {string} [label=""]
   * @param {boolean} [showIcon=false]
   * @returns
   * @memberof Messenger
   */
  danger(msg, label = '', showIcon = false) {
    if (utils.object('danger', msg, label)) {
      return
    }
    label = label ? ' ' + label + ' ' : ''
    let icon = showIcon ? utils.icons.danger + ' ' : ''
    msg = utils.formatMessage(msg)
    let output = `${colors.bgRed.black(label)}${label ? ' ' : ''}${colors.red(icon + msg)}`
    print(output)
    if (this !== undefined) {
      this.writeToLog('error', output)
    }
    return output
  }

  /**
   * loggerError
   *
   * @param {*} msg
   * @returns
   * @memberof Messenger
   */
  loggerError(msg) {
    return this.writeToLog('error', msg, true)
  }

  /**
   * success
   *
   * @param {*} msg
   * @param {string} [label=""]
   * @param {boolean} [showIcon=false]
   * @returns
   * @memberof Messenger
   */
  success(msg, label = '', showIcon = false) {
    if (utils.object('success', msg, label)) {
      return
    }

    label = label ? ' ' + label + ' ' : ''
    let icon = showIcon ? utils.icons.success + ' ' : ''
    msg = utils.formatMessage(msg)
    let output = `${colors.bgGreen.black(label)}${label ? ' ' : ''}${colors.green(icon + msg)}`

    print(output)
    if (this !== undefined) {
      this.writeToLog('success', output)
    }
    return output
  }

  /**
   * loggerSuccess
   *
   * @param {*} msg
   * @returns
   * @memberof Messenger
   */
  loggerSuccess(msg) {
    return this.writeToLog('success', msg, true)
  }

  /**
   * warning
   *
   * @param {*} msg
   * @param {string} [label=""]
   * @param {boolean} [showIcon=false]
   * @returns
   * @memberof Messenger
   */
  warning(msg, label = '', showIcon = false) {
    if (utils.object('warning', msg, label)) {
      return
    }
    label = label ? ' ' + label + ' ' : ''
    let icon = showIcon ? utils.icons.warning + '  ' : ''
    msg = utils.formatMessage(msg)
    let output = `${colors.bgYellow.black(label)}${label ? ' ' : ''}${colors.yellow(icon + msg)}`
    print(output)
    if (this !== undefined) {
      this.writeToLog('warning', output)
    }
    return output
  }

  /**
   * loggerWarning
   *
   * @param {*} msg
   * @returns
   * @memberof Messenger
   */
  loggerWarning(msg) {
    return this.writeToLog('warning', msg, true)
  }

  /**
   * warn
   *
   * @param {*} msg
   * @param {string} [label=""]
   * @param {boolean} [showIcon=false]
   * @returns
   * @memberof Messenger
   */
  warn(msg, label = '', showIcon = false) {
    if (utils.object('warn', msg, label)) {
      return
    }
    label = label ? ' ' + label + ' ' : ''
    let icon = showIcon ? utils.icons.warn + '  ' : ''
    msg = utils.formatMessage(msg)
    let output = `${colors.bgYellow.black(label)}${label ? ' ' : ''}${colors.yellow(icon + msg)}`
    print(output)
    if (this !== undefined) {
      this.writeToLog('warn', output)
    }
    return output
  }

  /**
   * loggerWarn
   *
   * @param {*} msg
   * @returns
   * @memberof Messenger
   */
  loggerWarn(msg) {
    return this.writeToLog('warn', msg, true)
  }

  /**
   * important
   *
   * @param {*} msg
   * @param {string} [label=""]
   * @param {boolean} [showIcon=false]
   * @returns
   * @memberof Messenger
   */
  important(msg, label = '', showIcon = false) {
    if (utils.object('important', msg, label)) {
      return
    }
    label = label ? ' ' + label + ' ' : ''
    let icon = showIcon ? utils.icons.important + '  ' : ''
    msg = utils.formatMessage(msg)
    let output = `${colors.bgYellow.black(label)}${label ? ' ' : ''}${colors.yellow(icon + msg)}`
    print(output)
    if (this !== undefined) {
      this.writeToLog('important', output)
    }
    return output
  }

  /**
   * loggerImportant
   *
   * @param {*} msg
   * @returns
   * @memberof Messenger
   */
  loggerImportant(msg) {
    return this.writeToLog('important', msg, true)
  }

  /**
   * info
   *
   * @param {*} msg
   * @param {string} [label=""]
   * @param {boolean} [showIcon=false]
   * @returns
   * @memberof Messenger
   */
  info(msg, label = '', showIcon = false) {
    if (utils.object('info', msg, label)) {
      return
    }
    label = label ? ' ' + label + ' ' : ''
    let icon = showIcon ? utils.icons.info + '  ' : ''
    msg = utils.formatMessage(msg)
    let output = `${colors.bgCyan.black(label)}${label ? ' ' : ''}${colors.cyan(icon + msg)}`
    print(output)
    if (this !== undefined) {
      this.writeToLog('info', output)
    }
    return output
  }

  /**
   * loggerInfo
   *
   * @param {*} msg
   * @returns
   * @memberof Messenger
   */
  loggerInfo(msg) {
    return this.writeToLog('info', msg, true)
  }

  /**
   * debug
   *
   * @param {*} msg
   * @param {string} [label=""]
   * @param {boolean} [showIcon=false]
   * @returns
   * @memberof Messenger
   */

  debug(msg, label = '', showIcon = false) {
    if (utils.object('debug', msg, label)) {
      return
    }
    label = label ? ' ' + label + ' ' : ''
    let icon = showIcon ? utils.icons.debug + '  ' : ''
    msg = utils.formatMessage(msg)
    let output = `${colors.bgKeyword('darkgray').black(label)}${label ? ' ' : ''}${colors.gray(icon + msg)}`
    print(output)
    if (this !== undefined) {
      this.writeToLog('debug', output)
    }
    return output
  }

  /**
   * loggerDebug
   *
   * @param {*} msg
   * @returns
   * @memberof Messenger
   */
  loggerDebug(msg) {
    return this.writeToLog('debug', msg, true)
  }

  /**
   * log
   *
   * @param {*} msg
   * @param {string} [label=""]
   * @param {boolean} [showIcon=false]
   * @returns
   * @memberof Messenger
   */
  log(msg, label = '', showIcon = false) {
    if (utils.object('log', msg, label)) {
      return
    }
    label = label ? ' ' + label + ' ' : ''
    let icon = showIcon ? utils.icons.log + '  ' : ''
    msg = utils.formatMessage(msg)
    let output = `${colors.bgWhite.black(label)}${label ? ' ' : ''}${icon + msg}`
    print(output)
    if (this !== undefined) {
      this.writeToLog('log', output)
    }
    return output
  }

  /**
   * loggerLog
   *
   * @param {*} msg
   * @returns
   * @memberof Messenger
   */
  loggerLog(msg) {
    return this.writeToLog('log', msg, true)
  }

  /**
   * status
   *
   * @param {*} msg
   * @param {string} [label=""]
   * @param {boolean} [showIcon=false]
   * @returns
   * @memberof Messenger
   */
  status(msg, label = '', showIcon = false) {
    if (utils.object('status', msg, label)) {
      return
    }
    label = label ? ' ' + label + ' ' : ''
    let icon = showIcon ? utils.icons.status + '  ' : ''
    msg = utils.formatMessage(msg)
    let output = `${colors.bgMagenta.black(label)}${label ? ' ' : ''}${colors.magenta(icon + msg)}`
    print(output)
    if (this !== undefined) {
      this.writeToLog('status', output)
    }
    return output
  }

  /**
   * loggerStatus
   *
   * @param {*} msg
   * @returns
   * @memberof Messenger
   */
  loggerStatus(msg) {
    return this.writeToLog('status', msg, true)
  }

  /**
   * notice
   *
   * @param {*} msg
   * @param {string} [label=""]
   * @param {boolean} [showIcon=false]
   * @returns
   * @memberof Messenger
   */
  notice(msg, label = '', showIcon = false) {
    if (utils.object('notice', msg, label)) {
      return
    }
    label = label ? ' ' + label + ' ' : ''
    let icon = showIcon ? utils.icons.notice + ' ' : ''
    msg = utils.formatMessage(msg)
    let output = `${colors.bgBlue.black(label)}${label ? ' ' : ''}${colors.blue(icon + msg)}`
    print(output)
    if (this !== undefined) {
      this.writeToLog('notice', output)
    }
    return output
  }

  /**
   * loggerNotice
   *
   * @param {*} msg
   * @returns
   * @memberof Messenger
   */
  loggerNotice(msg) {
    return this.writeToLog('notice', msg, true)
  }

  /**
   * note
   *
   * @param {*} msg
   * @param {string} [label=""]
   * @param {boolean} [showIcon=false]
   * @returns
   * @memberof Messenger
   */
  note(msg, label = '', showIcon = false) {
    if (utils.object('note', msg, label)) {
      return
    }
    label = label ? ' ' + label + ' ' : ''
    let icon = showIcon ? utils.icons.note + ' ' : ''
    msg = utils.formatMessage(msg)
    let output = `${colors.bgKeyword('orange').black(label)}${label ? ' ' : ''}${colors.keyword('orange')(
      icon + msg
    )}`
    print(output)
    if (this !== undefined) {
      this.writeToLog('note', output)
    }
    return output
  }

  /**
   * loggerNote
   *
   * @param {*} msg
   * @returns
   * @memberof Messenger
   */
  loggerNote(msg) {
    return this.writeToLog('note', msg, true)
  }

  /* istanbul ignore next */

  /**
   * processing
   *
   * @param {*} msg
   * @memberof Messenger
   */
  processing(msg) {
    console.log(colors.yellow(msg))
  }

  /**
   * timestamp
   *
   * @param {boolean} [useAMPM=false]
   * @param {boolean} [showSeconds=true]
   * @param {boolean} [showMicro=false]
   * @returns
   * @memberof Messenger
   */
  /* istanbul ignore next */
  timestamp(useAMPM = false, showSeconds = true, showMicro = false) {
    let tsd = new Date()
    let tsFormat = showSeconds ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd HH:mm'
    tsFormat = useAMPM ? tsFormat + ' a' : tsFormat
    let ms = showMicro && !useAMPM ? '.' + padZero(getMilliseconds(tsd), 3) : ''
    return format(tsd, tsFormat) + ms
  }

  /**
   * terminalInfo
   *
   * @returns
   * @memberof Messenger
   */
  terminalInfo() {
    return windowSize
  }

  /**
   * dd (die dump)
   *
   * @param {*} data
   * @memberof Messenger
   */
  /* istanbul ignore next */
  dd(...data) {
    dd(data)
  }

  /**
   * dump
   *
   * @param {*} data
   * @memberof Messenger
   */
  /* istanbul ignore next */
  dump(...data) {
    dump(data)
  }

  /**
   * line
   *
   * @param {string} [msg=""]
   * @memberof Messenger
   */
  /* istanbul ignore next */
  line(msg = '') {
    let output = msg
    if (windowSize !== undefined) {
      output = msg.repeat(windowSize.width - 2, msg)
    }
    print(output)
    return output
  }

  /**
   * center
   *
   * @param {string} [msg=""]
   * @param {string} [fillText=" "]
   * @memberof Messenger
   */
  /* istanbul ignore next */
  center(msg = '', fillText = ' ') {
    // if the terminal width is shorter than message length, dont display fillText
    let width = windowSize === undefined ? 100 : windowSize.width
    if (stripAnsi(msg).length >= width) {
      print(msg)
      return msg
    } else {
      let left = parseInt((width - stripAnsi(msg).length) / 2, 10)
      let padStr = fillText.repeat(left / stripAnsi(fillText).length)
      let output = padStr + msg + padStr
      print(output)
      return output
    }
  }

  /**
   * icons
   *
   * @returns
   * @memberof Messenger
   */
  getIcons() {
    return utils.icons
  }

  /**
   * validateConfig
   *
   * @param {*} [config={}]
   * @return {*}
   * @memberof Messenger
   */
  validateConfig(config = {}) {
    let finalConfig = Object.assign(config)
    finalConfig.type = finalConfig.type === '' ? 'info' : finalConfig.type
    if (!this.methods.includes(finalConfig.type)) {
      finalConfig.type = 'info'
    }

    return finalConfig
  }
}

// export all methods so they call be used statically
exports.critical = new Messenger().critical
exports.danger = new Messenger().danger
exports.error = new Messenger().error
exports.success = new Messenger().success
exports.warning = new Messenger().warning
exports.warn = new Messenger().warn
exports.important = new Messenger().important
exports.info = new Messenger().info
exports.notice = new Messenger().notice
exports.status = new Messenger().status
exports.debug = new Messenger().debug
exports.log = new Messenger().log
exports.dd = new Messenger().dd
exports.dump = new Messenger().dump
exports.terminalInfo = new Messenger().terminalInfo
exports.center = new Messenger().center
exports.line = new Messenger().line
exports.icons = new Messenger().icons
exports.getIcons = new Messenger().getIcons
exports.messageColors = new Messenger().messageColors

module.exports = new Messenger()
