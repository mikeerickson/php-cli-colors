# php-cli-colors

Liven up you PHP Console Apps with standard colors

[View on Packagist](https://packagist.org/packages/codedungeon/php-cli-colors)

![image](https://github.com/mikeerickson/php-cli-color/blob/master/resources/example.png)

## Installation

`composer require codedungeon/php-cli-colors '~1.0'`

or update your `composer.json`

```
    ...
    "require": {
        "codedungeon/php-cli-colors": "~1.0"
    },
    ...
```

## How to use

```php
<?php

require __DIR__ . '/vendor/autoload.php';

use Codedungeon\Colors;

echo Color::GREEN . "Hello" . PHP_EOL;
```

See `rainbow.php` sample for more details

## License

Copyright &copy; 2017-2018 Mike Erickson
Released under the MIT license

### Credits

php-cli-color written by Mike Erickson

E-Mail: [codedungeon@gmail.com](mailto:codedungeon@gmail.com)

Twitter: [@codedungeon](http://twitter.com/codedungeon)

Website: [codedungeon.org](http://codedungeon.org)

### Screenshot

![Screenshot](https://raw.githubusercontent.com/mikeerickson/php-cli-colors/master/resources/example.png)
