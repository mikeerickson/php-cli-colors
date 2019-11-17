<?php

namespace Codedungeon\PHPCliColors;

class Color
{
    // Reset all
    const RESET = "\e[0m";
    const NORMAL = "\e[0m";

    // Attributes
    const BOLD = "\e[1m";
    const UN_BOLD = "\e[21m";
    const DIM = "\e[2m";
    const UN_DIM = "\e[22m";
    const UNDERLINED = "\e[4m";
    const UN_UNDERLINED = "\e[24m";
    const BLINK = "\e[5m";
    const UN_BLINK = "\e[25m";
    const REVERSE = "\e[7m";
    const UN_REVERSE = "\e[27m";
    const HIDDEN = "\e[8m";
    const UN_HIDDEN = "\e[28m";

    // Forground colors (Warning: some include bold / unbold)
    const BLACK = "\033[2;30m";
    const DARK_GRAY = "\033[1;30m";
    const RED = "\033[2;31m";
    const LIGHT_RED = "\033[1;31m";
    const GREEN = "\033[2;32m";
    const LIGHT_GREEN = "\033[1;32m";
    const BROWN = "\033[2;33m";
    const YELLOW = "\033[2;33m";
    const BLUE = "\033[2;34m";
    const LIGHT_BLUE = "\033[1;34m";
    const MAGENTA = "\033[2;35m";
    const PURPLE = "\033[2;35m";
    const LIGHT_MAGENTA = "\033[1;35m";
    const LIGHT_PURPLE = "\033[1;35m";
    const CYAN = "\033[2;36m";
    const LIGHT_CYAN = "\033[1;36m";
    const LIGHT_GRAY = "\033[2;37m";
    const BOLD_WHITE = "\033[1;38m";
    const LIGHT_WHITE = "\033[1;38m";
    const WHITE = "\033[2;38m";
    const FG_DEFAULT = "\033[39m";
    const GRAY = "\033[2;90m";
    const LIGHT_RED_ALT = "\033[91m";
    const LIGHT_GREEN_ALT = "\033[92m";
    const LIGHT_YELLOW_ALT = "\033[93m";
    const LIGHT_YELLOW = "\033[1;93m";
    const LIGHT_BLUE_ALT = "\033[94m";
    const LIGHT_MAGENTA_ALT = "\033[95m";
    const LIGHT_CYAN_ALT = "\033[96m";
    const LIGHT_WHITE_ALT = "\033[97m";

    // Backgrounds
    const BG_BLACK = "\033[40m";
    const BG_RED = "\033[41m";
    const BG_GREEN = "\033[42m";
    const BG_YELLOW = "\033[43m";
    const BG_BLUE = "\033[44m";
    const BG_MAGENTA = "\033[45m";
    const BG_CYAN = "\033[46m";
    const BG_LIGHT_GRAY = "\033[47m";
    const BG_DEFAULT = "\033[49m";
    const BG_DARK_GRAY = "\e[100m";
    const BG_LIGHT_RED = "\e[101m";
    const BG_LIGHT_GREEN = "\e[102m";
    const BG_LIGHT_YELLOW = "\e[103m";
    const BG_LIGHT_BLUE = "\e[104m";
    const BG_LIGHT_MAGENTA = "\e[105m";
    const BG_LIGHT_CYAN = "\e[106m";
    const BG_WHITE = "\e[107m";

    // Reset
    public static function normal()
    {
        return self::NORMAL;
    }

    public static function reset()
    {
        return self::RESET;
    }
    public static function reset_bb() { return self::BG_DEFAULT;}
    public static function reset_fg() { return self::FG_DEFAULT;}

    // Atributes
    public static function bold() { return self::BOLD;}
    public static function un_bold() { return self::UN_BOLD;}
    public static function dim() { return self::DIM;}
    public static function un_dim() { return self::UN_DIM;}
    public static function underlined() { return self::UNDERLINED;}
    public static function un_underlined() { return self::UN_UNDERLINED;}
    public static function blink() { return self::BLINK;}
    public static function un_blink() { return self::UN_BLINK;}
    public static function reverse() { return self::REVERSE;}
    public static function un_reverse() { return self::UN_REVERSE;}
    public static function hidden() { return self::HIDDEN;}
    public static function un_hidden() { return self::UN_HIDDEN;}


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

    public static function bg_white($bold = null)
    {
        if ($bold === null) {
            return self::BG_WHITE;
        }

        return self::BG_WHITE . ($bold ? self::BOLD : self::UN_BOLD);
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

    public static function bg_red($bold = null)
    {
        if ($bold === null) {
            return self::BG_RED;
        }

        return self::BG_RED . ($bold ? self::BOLD : self::UN_BOLD);
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

    public static function bg_blue($bold = null)
    {
        if ($bold === null) {
            return self::BG_BLUE;
        }

        return self::BG_BLUE . ($bold ? self::BOLD : self::UN_BOLD);
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

    public static function bg_green($bold = null)
    {
        if ($bold === null) {
            return self::BG_GREEN;
        }

        return self::BG_GREEN . ($bold ? self::BOLD : self::UN_BOLD);
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

    public static function bg_cyan($bold = null)
    {
        if ($bold === null) {
            return self::BG_CYAN;
        }

        return self::BG_CYAN . ($bold ? self::BOLD : self::UN_BOLD);
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

    public static function bg_yellow($bold = null)
    {
        if ($bold === null) {
            return self::BG_LIGHT_YELLOW;
        }

        return self::BG_LIGHT_YELLOW . ($bold ? self::BOLD : self::UN_BOLD);
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

    public static function bg_magenta($bold = null)
    {
        if ($bold === null) {
            return self::BG_MAGENTA;
        }

        return self::BG_MAGENTA . ($bold ? self::BOLD : self::UN_BOLD);
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

    public static function bg_purple($bold = null)
    {
        if ($bold === null) {
            return self::BG_MAGENTA;
        }

        return self::BG_MAGENTA . ($bold ? self::BOLD : self::UN_BOLD);
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

    public static function bg_gray($bold = null)
    {
        if ($bold === null) {
            return self::BG_LIGHT_GRAY;
        }

        return self::BG_LIGHT_GRAY . ($bold ? self::BOLD : self::UN_BOLD);
    }

    // Other
    public static function black()
    {
        return self::BLACK;
    }
    public static function dark_gray() { return self::DARK_GRAY;}
    public static function brown() { return self::BROWN;}

    public static function bg_black() { return self::BG_BLACK;}
    public static function bg_brown() { return self::BG_YELLOW;}
    public static function bg_dark_gray() { return self::BG_DARK_GRAY;}
    public static function bg_light_red() { return self::BG_LIGHT_RED;}
    public static function bg_light_green() { return self::BG_LIGHT_GREEN;}
    public static function bg_light_blue() { return self::BG_LIGHT_BLUE;}
    public static function bg_light_magenta() { return self::BG_LIGHT_MAGENTA;}
    public static function bg_light_cyan() { return self::BG_LIGHT_CYAN;}
}
