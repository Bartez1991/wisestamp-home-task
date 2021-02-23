<?php

Class ScriptsAndStyles{

    static function addThemeScriptsAndStyles(){
        add_action( 'wp_enqueue_scripts', 'ScriptsAndStyles::addThemeScripts' );
    }

    static function addThemeScripts(){
       
        wp_enqueue_script( 'momentjs', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js', array(), null, true);
    }

}

?>