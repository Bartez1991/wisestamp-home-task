<?php

Class ScriptsAndStyles{

    static function addThemeScriptsAndStyles(){
        add_action( 'wp_enqueue_scripts', 'ScriptsAndStyles::addThemeScripts' );
        add_action( 'wp_enqueue_scripts', 'ScriptsAndStyles::addThemeStyles');
    }

    static function addThemeScripts(){       
        wp_enqueue_script( 'momentjs', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js', array(), null, true);
    }

    static function addThemeStyles() {
        wp_enqueue_style('child-css', get_stylesheet_directory_uri() . '/assets/public/theme.min.css', array('twenty-twenty-one-style'), '', 'screen');
    }

}

?>