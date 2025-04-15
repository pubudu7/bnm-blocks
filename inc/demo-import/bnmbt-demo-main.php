<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Main functions files for demo importer.
 */

define( 'BNMBT_IMPORTER_PATH', plugin_dir_path( __FILE__ ) );
define( 'BNMBT_IMPORTER_URL', plugin_dir_url( __FILE__ ) );

ThemezHut\DemoImporter\DemoImporter::get_instance();

if ( ! function_exists( 'bnmbt_display_demo_showcase' ) ) {
    function bnmbt_display_demo_showcase() {
        do_action( 'bnmbt_display_demo_showcase' );
    }
}

