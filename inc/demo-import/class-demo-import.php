<?php
/**
 * Demo Import Functionality.
 */
class DemoImporter {

    /**
	 * Holds the import files.
	 *
	 * @var array
	 */
    public $import_files;

    public $importer;

    public $demo_page_setup = array();

    public function __construct() {
        add_action( 'after_setup_theme', array( $this, 'setup_plugin_with_filter_data' ) );
        add_action( 'bnmbt_display_demo_showcase', array( $this, 'display_demos' ) );
        add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_scripts' ) );
        add_action( 'wp_ajax_bnmbt_import_demo_data', array( $this, 'import_demo_data_ajax_callback' ) );
    }

    public function display_demos() {
        if ( isset( $_GET['step'] ) && 'import' === $_GET['step'] ) {
            require_once BNMBT_IMPORTER_PATH . 'views/before-import.php';
            return;
        }

        require_once BNMBT_IMPORTER_PATH . 'views/demo-showcase.php';
    }

    /**
     * The theme can use 'bnmbt_import_files' filter to add import data.
     */
    public function setup_plugin_with_filter_data() {

        if ( ! ( is_admin() || ( defined( 'WP_CLI' ) && WP_CLI ) ) ) {
			return;
		}

        /**
         * TO DO: validate import file data via a function.
         * Return if is not array or empty.
         */
        $this->import_files = apply_filters( 'bnmbt_import_files', array() );

        $display_location_data = apply_filters( 'bnmbt_importer_display_location_data', array() );

        if ( ! is_array( $display_location_data ) || empty( $display_location_data ) ) {
            return;
        } else {
            $this->set_demo_page_setup( $display_location_data );
        }

        $this->importer = new WXR_Importer();
        $logger = new WP_Importer_Logger();
        $this->importer->set_logger($logger);
        
    }

    public function admin_enqueue_scripts() {
        $admin_css = plugins_url( BNMBT__ADMIN_DIRECTORY . 'css/admin.css', BNMBT__PLUGIN_FILE );
		wp_enqueue_style( 'bnmbt-admin-common', BNMBT_URL . 'admin/css/admin.css', array(), BNMBT__VERSION );

        // TO DO : Load files only when the user is in the demo import page.
        wp_enqueue_script( 'bnmbt-importer-main', BNMBT_URL . 'admin/js/import-main.js', array( 'jquery' ), BNMBT__VERSION );
        wp_localize_script( 'bnmbt-importer-main', 'bnmbti', array(
            'ajax_url'          => admin_url( 'admin-ajax.php' ),
            'import_files'      => $this->import_files
        ) );

    }

    /**
     * sets the $demo_page_setup array.
     */
    public function set_demo_page_setup( $location_data ) {
        if ( is_array( $location_data ) ) {
            if ( isset( $location_data[ 'parent_slug' ] ) ) {
                $this->demo_page_setup[ 'parent_slug' ] = $location_data[ 'parent_slug' ];
            }
            if ( isset( $location_data[ 'menu_slug' ] ) ) {
                $this->demo_page_setup[ 'menu_slug' ] = $location_data[ 'menu_slug' ];
            }
            if ( isset( $location_data[ 'tab' ] ) ) {
                $this->demo_page_setup[ 'tab' ] = $location_data[ 'tab' ];
            } 
        }
    }

    /**
     * Returns the $demo_page_setup array.
     */
    public function get_demo_page_setup() {
        return $this->demo_page_setup;
    }

    /**
     * Get the demo settings url
     */
    public function get_demo_settings_url( $query_parameters ) {

        $parameters = array_merge(
            array( 
                'page' => $this->demo_page_setup['menu_slug'], 
                'tab' => $this->demo_page_setup['tab'] 
            ),
            $query_parameters
        );

        $url = menu_page_url( $this->demo_page_setup['parent_slug'], false );

        if ( empty( $url ) ) {
			$url = self_admin_url( $this->demo_page_setup['parent_slug'] );
		}

        return add_query_arg( $parameters, $url );

    }

    /**
     * Main function for Importing Demo Data.
     */
    public function import_demo_data_ajax_callback() {
        //$file = BNMBT_IMPORTER_PATH . '/demo-content.xml';
        //$this->importer->import($file);
    }

}
new DemoImporter(); 
