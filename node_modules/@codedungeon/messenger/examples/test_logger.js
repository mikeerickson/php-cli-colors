const messenger = require('../src/messenger')
messenger.initLogger(false, 'logs', 'messenger')

/** test logger methods */
messenger.loggerCritical('logger critical message')
messenger.loggerError('logger error message')
messenger.loggerSuccess('logger success message')
messenger.loggerDebug('logger debug message')
messenger.loggerInfo('logger info message')
messenger.loggerImportant('logger important message')
messenger.loggerWarning('logger warning message')
messenger.loggerWarn('logger warn message')
messenger.loggerStatus('logger status message')
messenger.loggerNotice('logger notice message')
messenger.loggerNote('logger note message')
messenger.loggerLog('logger log message')

console.log('')
messenger.success('Logger complete, review sample log output in `logs` directory', 'COMPLETE')
