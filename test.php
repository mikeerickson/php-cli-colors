<?php

require __DIR__ . '/src/Color.php';

$colorClass = new ReflectionClass ('Codedungeon\Color');
$constants  = $colorClass->getConstants();

foreach ($constants as $key => $value) {
    if (strpos($key, 'BG') !== false) {
        echo $value . "My background color is $key" . PHP_EOL;
    } else {
        echo $value . "My color is $key" . PHP_EOL;
    }
}
