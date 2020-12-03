const fs = require('fs-extra')
const path = require('path')
const Logger = require('../src/logger')

const logger = new Logger({ path: '__tests__', appName: 'logger-test' })
const filename = logger.file
const expect = require('chai').expect

const dataValidationRule = (entry, data) => {
  if (data === null) {
    return
  }
  expect(data.length).greaterThan(0)
  const test = data.match(entry)
  if (test === null) {
    return
  }
  expect(test.length).greaterThan(0)
}

async function asyncLogger(type, msg) {
  return await logger[type](msg)
}

describe('Logger', () => {
  beforeEach(done => {
    logger.log('beforeEach')
    done()
  })
  after(done => {
    fs.unlink(filename)
    done()
  })
  context('Should validate logs diretory', () => {
    it('should validate existensce of `logs` directory', done => {
      let result = fs.existsSync(path.dirname(logger.file))
      expect(result).to.equal(true)
      done()
    })
  })

  context('it should create various log entries', () => {
    it('should create log file', done => {
      fs.exists(filename)
        .then(result => {
          expect(true).to.equal(true)
          done()
        })
        .catch(err => {
          console.error(err)
          done()
        })
    })
    it('should create `log` entry', done => {
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
    it('should create `debug` entry', done => {
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
    it('should create `critical` entry', done => {
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
    it('should create `error` entry', done => {
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
    it('should create `success` entry', done => {
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
    it('should create `warn` entry', done => {
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

    it('should create `warning` entry', done => {
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
    it('should create `info` entry', done => {
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
    it('should create `notice` entry', done => {
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
    it('should create `note` entry', done => {
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
    it('should create `status` entry', done => {
      asyncLogger('status', 'status entry')
        .then(result => {
          done()
          fs.readFile(filename, 'utf8')
            .then(data => {
              dataValidationRule('status entry', data)
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
})
