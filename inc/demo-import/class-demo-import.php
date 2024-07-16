<?php
/**
 * Demo Import Functionality.
 */
class DemoImporter {

    public $import_files;

    public function __construct() {
        add_action( 'bnmbt_display_demo_showcase', array( $this, 'display_demos' ) );
        add_action( 'after_setup_theme', array( $this, 'setup_plugin_with_filter_data' ) );
        add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_scripts' ) );
    }

    public function display_demos() {
        require_once BNMBT_DEMOS_PATH . 'views/demo-showcase.php';
    }

    public function setup_plugin_with_filter_data() {

        if ( ! ( is_admin() || ( defined( 'WP_CLI' ) && WP_CLI ) ) ) {
			return;
		}

        $this->import_files = apply_filters( 'bnmbt_import_files', array() );

    }

    public function admin_enqueue_scripts() {
        $admin_css = plugins_url( BNMBT__ADMIN_DIRECTORY . 'css/admin.css', BNMBT__PLUGIN_FILE );
		wp_enqueue_style( 'bnm-admin-common', $admin_css, array(), BNMBT__VERSION );
    }

}
new DemoImporter(); 
