<?php
/**
 * Main functions files for demo importer.
 */

define( 'BNMBT_IMPORTER_PATH', plugin_dir_path( __FILE__ ) );

if ( ! class_exists( 'WP_Importer' ) ) {
	require ABSPATH . '/wp-admin/includes/class-wp-importer.php';
}

require BNMBT_IMPORTER_PATH . 'class-wp-importer-logger.php';
require BNMBT_IMPORTER_PATH . 'class-logger-cli.php';
require BNMBT_IMPORTER_PATH . 'class-logger.php';
require BNMBT_IMPORTER_PATH . 'class-wxr-import-info.php';
require BNMBT_IMPORTER_PATH . 'class-wxr-importer.php';
require BNMBT_IMPORTER_PATH . 'class-wxr-importer2.php';
require BNMBT_IMPORTER_PATH . 'class-helpers.php';
require BNMBT_IMPORTER_PATH . 'class-downloader.php';
require BNMBT_IMPORTER_PATH . 'class-importer.php';
require BNMBT_IMPORTER_PATH . 'class-demo-import.php';

if ( ! function_exists( 'bnmbt_display_demo_showcase' ) ) {
    function bnmbt_display_demo_showcase() {
        do_action( 'bnmbt_display_demo_showcase' );
    }
}

