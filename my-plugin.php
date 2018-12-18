<?php
/*
Plugin Name: my-plugin
Plugin URI:
Description: My Plugin For WordPress.
Version: 1.0.0
Author:
Author URI:
License: GPLv2 or later
*/


// ここからコードをいれてください。
/**
 * GoogleMaps jsを追加 footer
 *
 * License: GPLv2 or later
 */
function add_footer_enqueue_scripts_googlemaps_js() {
    wp_enqueue_script( 'googlemapapi', 'https://maps.googleapis.com/maps/api/js?key=', array(), '', true );
}
add_action( 'wp_enqueue_scripts', 'add_footer_enqueue_scripts_googlemaps_js', 99 );
