<?php

namespace Codedungeon\PHPCliColors;

class Color
{
    const RESET = "\e[0m";
    const WHITE = "\e[0m";
    const NORMAL = "\e[0m";
    const RED = "\033[0;31m";
    const BG_WHITE = "\e[107m";
    const BLUE = "\033[0;34m";
    const CYAN = "\033[0;36m";
    const BG_RED = "\033[41m";
    const BLACK = "\033[0;30m";
    const GREEN = "\033[0;32m";
    const GRAY = "\033[0;90m";
    const BROWN = "\033[0;33m";
    const BG_BLUE = "\033[44m";
    const BG_CYAN = "\033[46m";
    const PURPLE = "\033[0;35m";
    const MAGENTA = "\033[0;35m";
    const BG_BLACK = "\033[40m";
    const BG_GREEN = "\033[42m";
    const YELLOW = "\033[0;33m";
    const BG_YELLOW = "\033[43m";
    const BG_MAGENTA = "\033[45m";
    const DARK_GRAY = "\033[1;30m";
    const LIGHT_RED = "\033[1;31m";
    const LIGHT_BLUE = "\033[1;34m";
    const LIGHT_CYAN = "\033[1;36m";
    const LIGHT_GRAY = "\033[0;37m";
    const BOLD_WHITE = "\033[1;38m";
    const LIGHT_GREEN = "\033[1;32m";
    const LIGHT_WHITE = "\033[1;38m";
    const BG_LIGHT_GRAY = "\033[47m";
    const LIGHT_PURPLE = "\033[1;35m";
    const LIGHT_YELLOW = "\033[1;93m";
    const LIGHT_MAGENTA = "\033[1;35m";

    /**
     * Colors constructor.
     */
    public function __construct()
    {
    }

    public static function normal()
    {
        return self::NORMAL;
    }

    public static function reset()
    {
        return self::RESET;
    }

    // WHITE
    public static function white()
    {
        return self::WHITE;
    }

    public static function lwhite()
    {
        return self::LIGHT_WHITE;
    }

    public static function light_white()
    {
        return self::LIGHT_WHITE;
    }

    public static function bold_white()
    {
        return self::LIGHT_WHITE;
    }

    public static function bg_white($bold = 0)
    {
        return "\e[{$bold};30;107m";
    }

    // RED
    public static function red()
    {
        return self::RED;
    }

    public static function lred()
    {
        return self::LIGHT_RED;
    }

    public static function light_red()
    {
        return self::LIGHT_RED;
    }

    public static function bold_red()
    {
        return self::LIGHT_RED;
    }

    public static function bg_red($bold = 0)
    {
        return "\e[{$bold};97;41m";
    }

    // BLUE
    public static function blue()
    {
        return self::BLUE;
    }

    public static function lblue()
    {
        return self::LIGHT_BLUE;
    }

    public static function light_blue()
    {
        return self::LIGHT_BLUE;
    }

    public static function bold_blue()
    {
        return self::LIGHT_BLUE;
    }

    public static function bg_blue($bold = 0)
    {
        return "\e[{$bold};30;44m";
    }

    // GREEN
    public static function green()
    {
        return self::GREEN;
    }

    public static function lgreen()
    {
        return self::LIGHT_RED;
    }

    public static function light_green()
    {
        return self::LIGHT_GREEN;
    }

    public static function bold_green()
    {
        return self::LIGHT_GREEN;
    }

    public static function bg_green($bold = 0)
    {
        return "\e[{$bold};30;42m";
    }

    // CYAN
    public static function cyan()
    {
        return self::CYAN;
    }

    public static function lcyan()
    {
        return self::LIGHT_CYAN;
    }

    public static function light_cyan()
    {
        return self::LIGHT_CYAN;
    }

    public static function bold_cyan()
    {
        return self::LIGHT_CYAN;
    }

    public static function bg_cyan($bold = 0)
    {
        return "\e[{$bold};30;46m";
    }

    // YELLOW
    public static function yellow()
    {
        return self::YELLOW;
    }

    public static function lyellow()
    {
        return self::LIGHT_YELLOW;
    }

    public static function light_yellow()
    {
        return self::LIGHT_YELLOW;
    }

    public static function bold_yellow()
    {
        return self::LIGHT_YELLOW;
    }

    public static function bg_yellow($bold = 0)
    {
        return "\e[{$bold};30;43m";
    }

    // MAGENTA
    public static function magenta()
    {
        return self::MAGENTA;
    }

    public static function lmagenta()
    {
        return self::LIGHT_MAGENTA;
    }

    public static function light_magenta()
    {
        return self::LIGHT_MAGENTA;
    }

    public static function bold_magenta()
    {
        return self::LIGHT_MAGENTA;
    }

    public static function bg_magenta($bold = 0)
    {
        return "\e[{$bold};30;45m";
    }

    // PURPLE
    public static function purple()
    {
        return self::MAGENTA;
    }

    public static function lpurple()
    {
        return self::LIGHT_MAGENTA;
    }

    public static function light_purple()
    {
        return self::LIGHT_MAGENTA;
    }

    public static function bold_purple()
    {
        return self::LIGHT_MAGENTA;
    }

    public static function bg_purple($bold = 0)
    {
        return "\e[{$bold};30;45m";
    }

    // GRAY
    public static function gray()
    {
        return self::GRAY;
    }

    public static function lgray()
    {
        return self::LIGHT_GRAY;
    }

    public static function light_gray()
    {
        return self::LIGHT_GRAY;
    }

    public static function bold_gray()
    {
        return self::LIGHT_GRAY;
    }

    public static function bg_gray($bold = 0)
    {
        return "\e[{$bold};30;47m";
    }

}
