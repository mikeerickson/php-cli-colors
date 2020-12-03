# @codedungeon/messenger

## Description

Messenger is a simple node module for displaying pretty console logs (with lots of formatting options) and support for logging messages to `.log` files (including daily rotation)

![Screenshot](https://github.com/mikeerickson/messenger/blob/master/docs/messenger-example.png)

## Install

```bash
> npm install @codedungeon/messenger
```

## Usage

```js
const msg = require('@codedungeon/messenger')
const pkgInfo = require('./package.json')
msg.initLogger(true, 'logs', pkgInfo.name)

console.log('')
let showIcons = false
let showLabels = false

msg.critical('critical message', showLabels ? 'CRITICAL' : '', showIcons)
msg.danger('critical message', showLabels ? 'DANGER' : '', showIcons)
msg.error('error message', showLabels ? 'ERROR' : '', showIcons)
msg.success('success message', showLabels ? 'SUCCESS' : '', showIcons)
msg.warning('warning message', showLabels ? 'WARNING' : '', showIcons)
msg.important('important message', showLabels ? 'IMPORTANT' : '', showIcons)
msg.warn('warn message', showLabels ? 'WARN' : '', showIcons)
msg.notice('notice message', showLabels ? 'NOTICE' : '', showIcons)
msg.note('note message', showLabels ? 'NOTE' : '', showIcons)
msg.status('status message', showLabels ? 'STATUS' : '', showIcons)
msg.info('info message', showLabels ? 'INFO' : '', showIcons)
msg.debug('debug message', showLabels ? 'DEBUG' : '', showIcons)
```

If you want to pass a standard JavaScript `object` or `array` Messenger will use the `dump` method to display message, and if you supply `label` parameter, it will be displayed first and then message will be displayed (see the `./examples/test-messenger-obj.js` example method for further information)

```js
let obj = { fname: 'Mike', lname: 'Erickson', kids: ['Joelle', 'Brady', 'Bailey', 'Trevor'] }
Messenger.success(obj, 'FAMILY')
```

## Using `alert` helper

You can also invoke any of the Messenger methods using the `alert` helper which accepts an object of options as opposed to passing the 3 separate parameters

Note: This method does **not** support calling statically

```js
type - default "info"
msg  - notification message
icon - default "false"

alert({ type: 'info', msg: 'hello world', icon: false })
print({ type: 'info', msg: 'hello world', icon: false })
```

```js
let msg = 'Hello World'
messenger.alert({ msg })
messenger.alert({ type: 'status', msg, label: '', icon: false })
messenger.alert({ type: 'status', msg, label: 'STATUS', icon: false })
messenger.alert({ type: 'status', msg, label: 'STATUS', icon: true })
```

## Using `print` helper (same options as `alert`)

Or, if you choose, you can use the `print` helper

```js
let msg = 'Hello World'
messenger.print({ type: 'success', msg })
messenger.print({ type: 'success', msg, label: 'SUCCESS', icon: false })
messenger.print({ type: 'success', msg, label: 'SUCCESS', icon: true })
```

### License

Copyright &copy; 2019-2021 Mike Erickson
Released under the MIT license

### Credits

messenger written by Mike Erickson

E-Mail: [mike.erickson@codedungeon.io](mailto:mike.erickson@codedungeon.io)

Twitter: [@codedungeon](http://twitter.com/codedungeon)

Website: [codedungeon.io](http://codedungeon.io)
