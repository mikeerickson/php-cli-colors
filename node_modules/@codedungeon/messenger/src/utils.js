/*-------------------------------------------------------------------------------------------
 * @codedungeon/messenger/utils
 *
 * Copyright (c) 2020 Mike Erickson / Codedungeon.  All rights reserved.
 * Licensed under the MIT license.  See LICENSE in the project root for license information.
 * -----------------------------------------------------------------------------------------*/

const os = require('os')
const colors = require('chalk')
const { dd, dump } = require('dumper.js')

module.exports = {
  getIcon: function(type) {
    return this.icons(type)
  },

  icons: function(type) {
    let icons = {
      critical: '🚫',
      danger: '🚫',
      error: '✖',
      success: '✔',
      warn: '⚠️',
      warning: '⚠️',
      info: '⌽',
      info_alt: '💡',
      important: '★',
      status: '◯',
      notice: '◉',
      note: '◉',
      log: '⇢',
      debug: '◼'
    }
    return icons[type]
  },

  padZero: (num = 0, size = 3) => {
    return ('000000000' + num).substr(-size)
  },

  formatMessage: msg => {
    let result = msg
    if (typeof msg === 'object') {
      if (Array.isArray(msg)) {
        result = msg.toString().replace(/,/gi, ' ')
      } else {
        result = JSON.stringify(msg)
        result = result.replace(/,/gi, ', ').replace(/:/gi, ': ')
      }
    }
    return result
  },

  messageColors: type => {
    let colors = {
      critical: { fg: '38m', bg: '48m' },
      danger: { fg: '31m', bg: '41m' },
      debug: { fg: '90m', bg: '48m' },
      error: { fg: '31m', bg: '41m' },
      important: { fg: '33m', bg: '43m' },
      info: { fg: '36m', bg: '46m' },
      log: { fg: '37m', bg: '47m' },
      note: { fg: '38m', bg: '48m' },
      notice: { fg: '34m', bg: '44m' },
      status: { fg: '35m', bg: '45m' },
      success: { fg: '32m', bg: '42m' },
      warn: { fg: '33m', bg: '43m' },
      warning: { fg: '33m', bg: '43m' }
    }
    // if (os.platform() === 'linux') {
    //   messageColors.critical.fg = '001b[91m'
    //   messageColors.critical.bg = '001b[101m'
    //   messageColors.note.fg = '001b[93m'
    //   messageColors.note.bg = '001b[103m'
    //   messageColors.debug.fg = '001b[90m'
    //   messageColors.debug.bg = '001b[47m'
    // }
    return colors[type]
  },

  label: function(type = 'info', label = '') {
    /* eslint-disable */
    let output = ''
    if (label.length === 0) {
      return
    }
    label = label[0] === ' ' ? label : ' ' + label + ' '

    switch (type) {
      case 'critical':
        output = `${colors.bgKeyword('orangered').black(label)}\n`
        break
      case 'danger':
      case 'error':
        output = `${colors.bgRed.black(label)}\n`
        break
      case 'debug':
        output = `${colors.bgKeyword('darkgray').black(label)}\n`
        break

      case 'important':
        output = `${colors.bgYellow.black(label)}\n`
        break
      case 'info':
        output = `${colors.bgCyan.black(label)}\n`
        break
      case 'log':
        output = `${colors.bgWhite.black(label)}\n`
        break
      case 'note':
        output = `${colors.bgKeyword('orange').black(label)}\n`
        break
      case 'notice':
        output = `${colors.bgBlue.black(label)}\n`
        break
      case 'success':
        output = `${colors.bgGreen.black(label)}\n`
        break
      case 'status':
        output = `${colors.bgMagenta.black(label)}${label ? ' ' : ''}\n`
        break
      case 'warn':
      case 'warning':
        output = `${colors.bgYellow.black(label)}${label ? ' ' : ''}\n`
        break
      default:
        output = `${colors.bgCyan.black(label)}\n`
        break
    }
    if (output.length > 0) {
      process.env.NODE_ENV === 'test' ? null : console.log(output)
    }
    /* eslint-enable */
  },

  object: function(type, obj = null, label = null) {
    if (typeof obj === 'object') {
      if (label) {
        this.label(type, label)
      }
      dump(obj)
      return true
    }
    return false
  }
}
