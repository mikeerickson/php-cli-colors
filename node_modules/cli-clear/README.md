# cli-clear [![NPM Version](http://badge.fury.io/js/cli-clear.svg)](http://badge.fury.io/js/cli-clear)

> Cross-platform terminal screen clear for Node.js

ANSI escape codes don't always work in Windows.

## Getting Started
[Node.js](http://nodejs.org/) `~0.8.0` is required. To install, type this at the command line:
```
npm install cli-clear --save-dev
```

### Usage
```js
var clear = require("cli-clear");

clear();
```

## Release History
* 1.0.4 added Node 0.12+ support
* 1.0.3 minor performance enhancements
* 1.0.2 package.json optimization
* 1.0.1 nearly pointless fix
* 1.0.0 fixed extra line break issue
* 0.1.0 initial release
