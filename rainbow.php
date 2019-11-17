<?php

use Codedungeon\PHPCliColors\Color;

require __DIR__ . '/src/Color.php';

$colors = [
    'white',
    'red',
    'blue',
    'green',
    'cyan',
    'yellow',
    'magenta',
    'gray',
    'purple',
];

foreach ($colors as $colorItem) {
    $method = $colorItem;
    $bold_method = 'bold_' . $colorItem;
    $light_method = 'light_' . $colorItem;
    $bg_method = 'bg_' . $colorItem;

    echo Color::$method() . "Regular {$colorItem}, "
        . Color::reset()
        . Color::$bold_method() . "Bold {$colorItem}, "
        . Color::reset()
        . Color::$light_method() . "Light {$colorItem}, "
        . Color::reset()
        . Color::$bg_method() . "Background {$colorItem}, "
        . Color::reset()
        . Color::$bg_method(true) . "Bold White on Background {$colorItem}, "
        . Color::black() . "Black on Background {$colorItem}"
        . Color::reset()
        . PHP_EOL;
}
