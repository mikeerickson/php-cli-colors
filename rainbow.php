<?php

require __DIR__ . '/src/Color.php';

$color = new Codedungeon\PHPCliColors\Color();

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
    $bold_method = "bold_" . $colorItem;
    $light_method = "light_" . $colorItem;
    $bg_method = "bg_" . $colorItem;

    echo $color::$method() . "Regular {$colorItem}, "
        . $color::reset()
        . $color::$bold_method() . "Bold {$colorItem}, "
        . $color::reset()
        . $color::$light_method() . "Light {$colorItem}, "
        . $color::reset()
        . $color::$bg_method() . "Background {$colorItem}, "
        . $color::reset()
        . $color::$bg_method(true) . "Bold White on Background {$colorItem}, "
        . $color::black() . "Black on Background {$colorItem}"
        . $color::reset()
        . PHP_EOL;
}

