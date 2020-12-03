const expect = require('chai').expect
const print = require('../src/messenger')
const pkgInfo = require('../package.json')

const {
  critical,
  error,
  success,
  warning,
  warn,
  important,
  info,
  notice,
  note,
  status,
  debug,
  log,
  center,
  line
} = require('../src/messenger')

describe('Messenger Static', () => {
  let message
  beforeEach(() => {
    message = 'Messenger Static Test'

    // silence actual output
    process.env.NODE_ENV = 'test'
  })
  describe('Miscellaneous', () => {
    it('version returns `pkgInfo.version` property', done => {
      expect(print.version()).to.equal(pkgInfo.version)
      done()
    })
  })
  describe('Critical Static', () => {
    it('critical static', () => {
      expect(typeof critical).to.be.equal('function')
      critical(message)
    })
  })
  describe('Error Static', () => {
    it('error static', () => {
      expect(typeof error).to.be.equal('function')
      error(message)
    })
  })
  describe('Success Static', () => {
    it('success static', () => {
      expect(typeof success).to.be.equal('function')
      success(message)
    })
  })
  describe('Warning Static', () => {
    it('warning static', () => {
      expect(typeof warning).to.be.equal('function')
      warning(message)
    })
  })
  describe('Warn Static', () => {
    it('warn static', () => {
      expect(typeof warn).to.be.equal('function')
      warn(message)
    })
  })
  describe('Info Static', () => {
    it('info static', () => {
      expect(typeof info).to.be.equal('function')
      info(message)
    })
  })
  describe('Important Static', () => {
    it('important static', () => {
      expect(typeof important).to.be.equal('function')
      important(message)
    })
  })
  describe('Status Static', () => {
    it('status static', () => {
      expect(typeof status).to.be.equal('function')
      status(message)
    })
  })
  describe('Note Static', () => {
    it('note static', () => {
      expect(typeof note).to.be.equal('function')
      note(message)
    })
  })
  describe('Notice Static', () => {
    it('notice static', () => {
      expect(typeof notice).to.be.equal('function')
      notice(message)
    })
  })
  describe('Log Static', () => {
    it('log static', () => {
      expect(typeof log).to.be.equal('function')
      log(message)
    })
  })
  describe('Debug Static', () => {
    it('debug static', () => {
      expect(typeof debug).to.be.equal('function')
      debug(message)
    })
  })
  describe('Center', () => {
    it('center static', () => {
      expect(typeof center).to.be.equal('function')
    })
  })
  describe('Line', () => {
    it('line static', () => {
      expect(typeof line).to.be.equal('function')
    })
  })
})
