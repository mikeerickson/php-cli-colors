<?php
/**
 * Created by PhpStorm.
 * User: lijinma
 * Date: 14/12/23
 * Time: PM1:45
 */

require __DIR__ . '/vendor/autoload.php';


$colorClass = new ReflectionClass ('Lijinma\Color');
$constants = $colorClass->getConstants();

foreach ($constants as $key => $value) {
    if (strpos($key, 'BG') !== false) {
        echo $value . "My background color is $key" . PHP_EOL;
    } else {
        echo $value . "My color is $key" . PHP_EOL;
    }
}
