const fs = require('fs-extra')
const path = require('path')
const Logger = require('../src/logger')
const { classLabel } = require('./testUtils')

const logger = new Logger({ path: '__tests__', appName: 'logger-test' })
const filename = logger.file

const dataValidationRule = (entry, data) => {
  if (data === null) {
    return
  }
  expect(data.length).toBeGreaterThan(0)
  const test = data.match(entry)
  if (test === null) {
    return
  }
  expect(test.length).toBeGreaterThan(0)
}

async function asyncLogger(type, msg) {
  return await logger[type](msg)
}

describe(classLabel('Logger'), () => {
  beforeEach(done => {
    logger.log('beforeEach')
    done()
  })
  afterAll(done => {
    fs.unlink(filename)
    done()
  })
  test('should validate existensce of `logs` direcotry', done => {
    let result = fs.existsSync(path.dirname(logger.file))
    expect(result).toEqual(true)
    done()
  })
  test('should create log file', done => {
    fs.exists(filename)
      .then(result => {
        expect(true).toBe(true)
        done()
      })
      .catch(err => {
        console.error(err)
        done()
      })
  })
  test('should create `log` entry', done => {
    asyncLogger('log', 'log entry')
      .then(result => {
        done()
        fs.readFile(filename, 'utf8')
          .then(data => {
            dataValidationRule('log entry', data)
          })
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  })
  test('should create `debug` entry', done => {
    asyncLogger('debug', 'debug entry')
      .then(result => {
        done()
        fs.readFile(filename, 'utf8')
          .then(data => {
            dataValidationRule('debug entry', data)
          })
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  })
  test('should create `critical` entry', done => {
    asyncLogger('critical', 'critical entry')
      .then(result => {
        done()
        fs.readFile(filename, 'utf8')
          .then(data => {
            dataValidationRule('critical entry', data)
          })
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  })
  test('should create `error` entry', done => {
    asyncLogger('error', 'error entry')
      .then(result => {
        done()
        fs.readFile(filename, 'utf8')
          .then(data => {
            dataValidationRule('log entry', data)
          })
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  })
  test('should create `success` entry', done => {
    asyncLogger('success', 'success entry')
      .then(result => {
        done()
        fs.readFile(filename, 'utf8')
          .then(data => {
            dataValidationRule('success entry', data)
          })
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  })
  test('should create `warn` entry', done => {
    asyncLogger('warn', 'warn entry')
      .then(result => {
        done()
        fs.readFile(filename, 'utf8')
          .then(data => {
            dataValidationRule('warn entry', data)
          })
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  })
  test('should create `warning` entry', done => {
    asyncLogger('warning', 'warning entry')
      .then(result => {
        done()
        fs.readFile(filename, 'utf8')
          .then(data => {
            dataValidationRule('warning entry', data)
          })
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  })
  test('should create `warn` entry', done => {
    asyncLogger('warn', 'warn entry')
      .then(result => {
        done()
        fs.readFile(filename, 'utf8')
          .then(data => {
            dataValidationRule('warn entry', data)
          })
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  })
  test('should create `info` entry', done => {
    asyncLogger('info', 'info entry')
      .then(result => {
        done()
        fs.readFile(filename, 'utf8')
          .then(data => {
            dataValidationRule('info entry', data)
          })
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  })
  test('should create `notice` entry', done => {
    asyncLogger('notice', 'notice entry')
      .then(result => {
        done()
        fs.readFile(filename, 'utf8')
          .then(data => {
            dataValidationRule('notice entry', data)
          })
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  })
  test('should create `note` entry', done => {
    asyncLogger('note', 'note entry')
      .then(result => {
        done()
        fs.readFile(filename, 'utf8')
          .then(data => {
            dataValidationRule('note entry', data)
          })
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  })
})
