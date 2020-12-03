/*-------------------------------------------------------------------------------------------
 * @codedungeon/messenger logger
 *
 * Copyright (c) 2020 Mike Erickson / Codedungeon.  All rights reserved.
 * Licensed under the MIT license.  See LICENSE in the project root for license information.
 * -----------------------------------------------------------------------------------------*/

/*eslint no-undef: 0*/

const os = require('os')
const path = require('path')
const fs = require('fs-extra')

/**
 * @param {object} options Options [optional]
 * @param {string} options.path Desired path to the folder [optional] Default: __dirname
 * @param {string} options.appName Desired log file appName [optional] Default: log
 */

/* istanbul ignore next */
function Logger(options) {
  let defOptions = { path: 'logs', appName: 'app' }
  options = Object.assign(defOptions, options)

  const addZero = value => (value <= 9 ? '0' + value : '' + value)

  const dateStamp = (date = new Date()) => {
    return date.getFullYear() + '-' + addZero(date.getMonth() + 1) + '-' + addZero(date.getDate())
  }

  let folder = options.path ? path.resolve(path.normalize(options.path)) : path.resolve(__dirname)
  if (!fs.existsSync(folder)) {
    fs.mkdirpSync(folder)
  }
  let filename = options.appName + '-' + dateStamp() + '.log'

  Object.defineProperties(this, {
    fs: {
      value: fs,
      enumerable: false,
      writable: false,
      configurable: false
    },
    EOL: {
      value: os.EOL,
      enumerable: false,
      writable: false,
      configurable: false
    },
    file: {
      value: path.join(folder, filename),
      enumerable: true,
      writable: false,
      configurable: false
    },
    date: {
      get: function() {
        /* istanbul ignore next */
        return dateStamp(new Date())
      }
    }
  })
}

/* istanbul ignore next */
const formatDate = (date = new Date(), useAMPM = true, showSeconds = true, showMicro = false) => {
  if (!useAMPM) {
    useAMPM = false
  }
  if (!showSeconds) {
    showSeconds = false
  }
  if (!showMicro) {
    showMicro = false
  }

  // ==================================================================
  showMicro = useAMPM ? false : showMicro
  showSeconds = showMicro ? true : showSeconds

  // build time
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  let micro = date.getMilliseconds()
  let ampm = ''

  hours = hours ? hours : 12 // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes
  // seconds = seconds < 10 ? "0" + seconds : seconds;

  if (showSeconds) {
    seconds = seconds < 10 ? '0' + seconds : seconds
    seconds = ':' + seconds
  } else {
    seconds = ''
  }
  if (useAMPM) {
    ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours < 10 ? '0' + hours : hours
  }

  micro = showMicro && !useAMPM ? '.' + micro : ''
  micro = useAMPM ? '' : micro

  let strTime = `${hours}:${minutes}${seconds}${micro} ${ampm}`
  // build date
  let month = date.getMonth() + 1
  month = month < 10 ? '0' + month : month
  let day = date.getDate()
  day = day < 10 ? '0' + day : day

  let strDate = `${date.getFullYear()}-${month}-${day}`
  return `${strDate} ${strTime}`
}

/* istanbul ignore next */
Logger.prototype.format = (logLevel = 'log', logMsg = '') => {
  let ts = formatDate(new Date(), false).padEnd(21)
  let level = logLevel.toUpperCase().padEnd(10)
  return `${ts} | ${level} | ${logMsg}`
}
/**
 * Writes the passed string to the log file
 * @param {string} data The data to be written in the log
 */
/* istanbul ignore next */
Logger.prototype.write = function(data) {
  this.fs.appendFileSync(this.file, data, function(err) {
    if (err) throw err
  })
  return data
}
Logger.prototype.methods = function() {
  return [
    'critical',
    'error',
    'warning',
    'warn',
    'success',
    'info',
    'important',
    'notice',
    'note',
    'debug',
    'log',
    'status'
  ]
}
/**
 * Prints a critical log message
 * @param {string} message The message to be written
 */
Logger.prototype.critical = function(message) {
  return this.write(this.format('CRITICAL', message) + this.EOL)
}
/**
 * Prints an error log message
 * @param {string} message The message to be written
 */
Logger.prototype.error = function(message) {
  return this.write(this.format('ERROR', message) + this.EOL)
}
/**
 * Prints a notice log message
 * @param {string} message The message to be written
 */
Logger.prototype.notice = function(message) {
  return this.write(this.format('NOTICE', message) + this.EOL)
}
/**
 * Prints a note log message
 * @param {string} message The message to be written
 */
Logger.prototype.note = function(message) {
  return this.write(this.format('NOTE', message) + this.EOL)
}
/**
 * Prints a status log message
 * @param {string} message The message to be written
 */
Logger.prototype.status = function(message) {
  return this.write(this.format('STATUS', message) + this.EOL)
}
/**
 * Prints a success log message
 * @param {string} message The message to be written
 */
Logger.prototype.success = function(message) {
  return this.write(this.format('SUCCESS', message) + this.EOL)
}
/**
 * Prints a standard log message
 * @param {string} message The message to be written
 */
Logger.prototype.log = function(message) {
  return this.write(this.format('LOG', message) + this.EOL)
}
/**
 * Prints an info log message
 * @param {string} message The message to be written
 */
Logger.prototype.info = function(message) {
  return this.write(this.format('INFO', message) + this.EOL)
}
/**
 * Prints an important log message
 * @param {string} message The message to be written
 */
Logger.prototype.important = function(message) {
  return this.write(this.format('IMPORTANT', message) + this.EOL)
}
/**
 * Prints a warning log message
 * @param {string} message The message to be printed
 */
Logger.prototype.warning = function(message) {
  return this.write(this.format('WARNING', message) + this.EOL)
}
/**
 * Prints a warning log message
 * @param {string} message The message to be printed
 */
Logger.prototype.warn = function(message) {
  return this.write(this.format('WARN', message) + this.EOL)
}
/**
 * Prints a warning log message
 * @param {string} message The message to be printed
 */
Logger.prototype.debug = function(message) {
  return this.write(this.format('DEBUG', message) + this.EOL)
}
/**
 * Prints a data log message
 * @param {string} message The message to be printed
 */
/* istanbul ignore next */
Logger.prototype.data = function(message) {
  return this.write(this.format('DATA', message) + this.EOL)
}

module.exports = Logger
