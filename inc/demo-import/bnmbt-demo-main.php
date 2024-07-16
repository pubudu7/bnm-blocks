<?php
/**
 * Main functions files for demo importer.
 */

define( 'BNMBT_DEMOS_PATH', plugin_dir_path( __FILE__ ) );

require_once BNMBT_DEMOS_PATH . 'class-demo-import.php';

if ( ! function_exists( 'bnmbt_display_demo_showcase' ) ) {
    function bnmbt_display_demo_showcase() {
        do_action( 'bnmbt_display_demo_showcase' );
    }
}

