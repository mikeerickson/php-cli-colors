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

describe(classLabel('Messenger Class'), () => {
  let message
  beforeEach(() => {
    message = 'Messenger Test'
  })
  describe(commandLabel('Miscellaneous'), () => {
    test('version returns `pkgInfo.version` property', done => {
      expect(print.version()).toEqual(pkgInfo.version)
      done()
    })
    test('console.log has been called', done => {
      // https://stackoverflow.com/questions/44467657/jest-better-way-to-disable-console-inside-unit-tests
      console.log = jest.fn()
      console.log('hello world')
      expect(console.log).toHaveBeenCalled()
      done()
    })
  })
  describe(commandLabel('Critical'), () => {
    test('critical static', () => {
      expect(typeof critical).toBe('function')
      critical(message)
    })
  })
  describe(commandLabel('Error'), () => {
    test('error static', () => {
      expect(typeof error).toBe('function')
      error(message)
    })
  })
  describe(commandLabel('Success'), () => {
    test('success static', () => {
      expect(typeof success).toBe('function')
      success(message)
    })
  })
  describe(commandLabel('Warning'), () => {
    test('warning static', () => {
      expect(typeof warning).toBe('function')
      warning(message)
    })
  })
  describe(commandLabel('Warn'), () => {
    test('warn static', () => {
      expect(typeof warn).toBe('function')
      warn(message)
    })
  })
  describe(commandLabel('Info'), () => {
    test('info static', () => {
      expect(typeof info).toBe('function')
      info(message)
    })
  })
  describe(commandLabel('Important'), () => {
    test('important static', () => {
      expect(typeof important).toBe('function')
      important(message)
    })
  })
  describe(commandLabel('Status'), () => {
    test('status static', () => {
      expect(typeof status).toBe('function')
      status(message)
    })
  })
  describe(commandLabel('Note'), () => {
    test('note static', () => {
      expect(typeof note).toBe('function')
      note(message)
    })
  })
  describe(commandLabel('Notice'), () => {
    test('notice static', () => {
      expect(typeof notice).toBe('function')
      notice(message)
    })
  })
  describe(commandLabel('Log'), () => {
    test('log static', () => {
      expect(typeof log).toBe('function')
      log(message)
    })
  })
  describe(commandLabel('Debug'), () => {
    test('debug static', () => {
      expect(typeof debug).toBe('function')
      debug(message)
    })
  })
  describe(commandLabel('Center'), () => {
    test('center static', () => {
      expect(typeof center).toBe('function')
      center(message)
    })
  })
  describe(commandLabel('Line'), () => {
    test('line static', () => {
      expect(typeof line).toBe('function')
      line(message)
    })
  })
})
