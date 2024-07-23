<?php
namespace ThemezHut\DemoImporter;

use WP_Error;

/**
 * Main Demo Import Functionality.
 */
class DemoImporter {

	/**
	 * The instance *Singleton* of this class
	 *
	 * @var object
	 */
	private static $instance;

	/**
	 * The instance of the OCDI\Importer class.
	 *
	 * @var object
	 */
	public $importer;

    /**
	 * Holds the import files.
	 *
	 * @var array
	 */
    public $import_files;

    /**
	 * The path of the log file.
	 *
	 * @var string
	 */
	public $log_file_path;

    /**
	 * The index of the `import_files` array (which import files was selected).
	 *
	 * @var int
	 */
	private $selected_index;

	/**
	 * The paths of the actual import files to be used in the import.
	 *
	 * @var array
	 */
	private $selected_import_files;

    /**
	 * Holds any error messages, that should be printed out at the end of the import.
	 *
	 * @var string
	 */
	public $frontend_error_messages = array();

    /**
	 * Was the before content import already triggered?
	 *
	 * @var boolean
	 */
	private $before_import_executed = false;

	/**
	 * Make demo page options available to other methods.
	 *
	 * @var array
	 */
	private $demo_page_setup = array();

    /**
	 * Imported terms.
	 *
	 * @var array
	 */
	private $imported_terms = array();


    public function __construct() {
        add_action( 'admin_menu', array( $this, 'set_demo_page_setup' ) );
        add_action( 'after_setup_theme', array( $this, 'setup_plugin_with_filter_data' ) );
        add_action( 'bnmbt_display_demo_showcase', array( $this, 'display_demos' ) );
        add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_scripts' ) );
        add_action( 'wp_ajax_bnmbt_import_demo_data', array( $this, 'import_demo_data_ajax_callback' ) );
		add_action( 'wp_ajax_bnmbt_import_customizer_data', array( $this, 'import_customizer_data_ajax_callback' ) );
    }

	/**
	 * Returns the *Singleton* instance of this class.
	 *
	 * @return OneClickDemoImport the *Singleton* instance.
	 */
	public static function get_instance() {
		if ( null === static::$instance ) {
			static::$instance = new static();
		}

		return static::$instance;
	}

	/**
	 * Private clone method to prevent cloning of the instance of the *Singleton* instance.
	 *
	 * @return void
	 */
	private function __clone() {}

	/**
	 * Empty unserialize method to prevent unserializing of the *Singleton* instance.
	 *
	 * @return void
	 */
	public function __wakeup() {}

	/**
     * sets the $demo_page_setup array.
     */
    public function set_demo_page_setup( $location_data ) {

        $this->demo_page_setup = Helpers::get_demo_page_setup_data();

        register_importer( 'bnm-blocks-importer', 'BNM Blocks Importer', 'Importer by ThemezHut', apply_filters( 'bnmbt_demo_page_display_callback_function', array( $this, 'display_demos' ) ) );
        
    }

    public function display_demos() {
        if ( isset( $_GET['step'] ) && 'import' === $_GET['step'] ) {
            require_once BNMBT_IMPORTER_PATH . 'views/before-import.php';
            return;
        }

        require_once BNMBT_IMPORTER_PATH . 'views/demo-showcase.php';
    }

	/**
	 * Enqueue admin scripts (JS and CSS)
	 *
	 * @param string $hook holds info on which admin page you are currently loading.
	 */
	public function admin_enqueue_scripts() {
        $admin_css = plugins_url( BNMBT__ADMIN_DIRECTORY . 'css/admin.css', BNMBT__PLUGIN_FILE );
		wp_enqueue_style( 'bnmbt-admin-common', BNMBT_URL . 'admin/css/admin.css', array(), BNMBT__VERSION );

        // TO DO : Load files only when the user is in the demo import page.
        wp_enqueue_script( 'bnmbt-importer-main', BNMBT_URL . 'admin/js/import-main.js', array( 'jquery' ), BNMBT__VERSION );
        wp_localize_script( 'bnmbt-importer-main', 'bnmbti', array(
            'ajax_url'          => admin_url( 'admin-ajax.php' ),
            'ajax_nonce'        => wp_create_nonce( 'bnmbt-importer-ajax-verification' ),
            'import_files'      => $this->import_files,
        	'wp_customize_on'  	=> apply_filters( 'bnmbt_importer_enable_wp_customize_save_hooks', false ),
		) );
    }

    /**
     * Main function for Importing Demo Data.
     */
    public function import_demo_data_ajax_callback() {

        // Try to update PHP memory limit (so that it does not run out of it).
		ini_set( 'memory_limit', apply_filters( 'bnmbt_import_memory_limit', '350M' ) );

		// Verify if the AJAX call is valid (checks nonce and current_user_can).
		Helpers::verify_ajax_call();

        // Is this a new AJAX call to continue the previous import?
		$use_existing_importer_data = $this->use_existing_importer_data();

        if ( ! $use_existing_importer_data ) {

            // Create a date and time string to use for demo and log file names.
			Helpers::set_demo_import_start_time();

			// Define log file path.
			$this->log_file_path = Helpers::get_log_path();

			// Get selected file index or set it to 0.
			$this->selected_index = empty( $_POST['selected'] ) ? 0 : absint( $_POST['selected'] );

            if ( ! empty( $this->import_files[ $this->selected_index ] ) ) { // Use predefined import files from wp filter: bnmbt_import_files.

				// Download the import files (content, widgets and customizer files).
				$this->selected_import_files = Helpers::download_import_files( $this->import_files[ $this->selected_index ] );

				// Check Errors.
				if ( is_wp_error( $this->selected_import_files ) ) {
					// Write error to log file and send an AJAX response with the error.
					Helpers::log_error_and_send_ajax_response(
						$this->selected_import_files->get_error_message(),
						$this->log_file_path,
						esc_html__( 'Downloaded files', 'one-click-demo-import' )
					);
				}

				// Add this message to log file.
				$log_added = Helpers::append_to_file(
					sprintf( /* translators: %s - the name of the selected import. */
						__( 'The import files for: %s were successfully downloaded!', 'one-click-demo-import' ),
						$this->import_files[ $this->selected_index ]['import_file_name']
					) . Helpers::import_file_info( $this->selected_import_files ),
					$this->log_file_path,
					esc_html__( 'Downloaded files' , 'one-click-demo-import' )
				);
			} else {
				// Send JSON Error response to the AJAX call.
				wp_send_json( esc_html__( 'No import files specified!', 'one-click-demo-import' ) );
			}
        
        }

        // Save the initial import data as a transient, so other import parts (in new AJAX calls) can use that data.
		Helpers::set_bnmbt_import_data_transient( $this->get_current_importer_data() );

		if ( ! $this->before_import_executed ) {
			$this->before_import_executed = true;

			/**
			 * 2). Execute the actions hooked to the 'bnmbt_importer_before_content_import_execution' action:
			 *
			 * Default actions:
			 * 1 - Before content import WP action (with priority 10).
			 */
			do_action( 'bnmbt_importer_before_content_import_execution', $this->selected_import_files, $this->import_files, $this->selected_index );
		}

		/**
		 * 3). Import content (if the content XML file is set for this import).
		 * Returns any errors greater then the "warning" logger level, that will be displayed on front page.
		 */
		if ( ! empty( $this->selected_import_files['content'] ) ) {
			$this->append_to_frontend_error_messages( $this->importer->import_content( $this->selected_import_files['content'] ) );
		}

		/**
		 * 4). Execute the actions hooked to the 'bnmbt_importer_after_content_import_execution' action:
		 *
		 * Default actions:
		 * 1 - Before widgets import setup (with priority 10).
		 * 2 - Import widgets (with priority 20).
		 * 3 - Import Redux data (with priority 30).
		 */
		do_action( 'bnmbt_importer_after_content_import_execution', $this->selected_import_files, $this->import_files, $this->selected_index );

		// Save the import data as a transient, so other import parts (in new AJAX calls) can use that data.
		Helpers::set_bnmbt_import_data_transient( $this->get_current_importer_data() );

		// Request the customizer import AJAX call.
		if ( ! empty( $this->selected_import_files['customizer'] ) ) {
			wp_send_json( array( 'status' => 'customizerAJAX' ) );
		}

		// Request the after all import AJAX call.
		if ( false !== Helpers::has_action( 'bnmbt_importer_after_all_import_execution' ) ) {
			wp_send_json( array( 'status' => 'afterAllImportAJAX' ) );
		}

		// Update terms count.
		$this->update_terms_count();

		// Send a JSON response with final report.
		$this->final_response();
    }	


	/**
	 * AJAX callback for importing the customizer data.
	 * This request has the wp_customize set to 'on', so that the customizer hooks can be called
	 * (they can only be called with the $wp_customize instance). But if the $wp_customize is defined,
	 * then the widgets do not import correctly, that's why the customizer import has its own AJAX call.
	 */
	public function import_customizer_data_ajax_callback() {
		// Verify if the AJAX call is valid (checks nonce and current_user_can).
		Helpers::verify_ajax_call();

		// Get existing import data.
		if ( $this->use_existing_importer_data() ) {
			/**
			 * Execute the customizer import actions.
			 *
			 * Default actions:
			 * 1 - Customizer import (with priority 10).
			 */
			do_action( 'bnmbt_importer_customizer_import_execution', $this->selected_import_files );
		}

		// Request the after all import AJAX call.
		if ( false !== has_action( 'bnmbt_importer_after_all_import_execution' ) ) {
			wp_send_json( array( 'status' => 'afterAllImportAJAX' ) );
		}

		// Send a JSON response with final report.
		$this->final_response();
	}


	/**
	 * Get data from filters, after the theme has loaded and instantiate the importer.
	 */
    public function setup_plugin_with_filter_data() {

        if ( ! ( is_admin() || ( defined( 'WP_CLI' ) && WP_CLI ) ) ) {
			return;
		}

        // Get info of import data files and filter it.
        $this->import_files = Helpers::validate_import_file_info( apply_filters( 'bnmbt_import_files', array() ) );

		/**
		 * Register all default actions (before content import, widget, customizer import and other actions)
		 * to the 'before_content_import_execution' and the 'bnmbt_importer_after_content_import_execution' action hook.
		 */
		$import_actions = new ImportActions();
		$import_actions->register_hooks();

		// Importer options array.
		$importer_options = apply_filters( 'bnmbt_importer_importer_options', array(
			'fetch_attachments' => true,
		) );

		// Logger options for the logger used in the importer.
		$logger_options = apply_filters( 'bnmbt_importer_logger_options', array(
			'logger_min_level' => 'warning',
		) );

		// Configure logger instance and set it to the importer.
		$logger            = new Logger();
		$logger->min_level = $logger_options['logger_min_level'];

		// Create importer instance with proper parameters.
		$this->importer = new Importer( $importer_options, $logger );
        
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
	 * Get content importer data, so we can continue the import with this new AJAX request.
	 *
	 * @return boolean
	 */
	private function use_existing_importer_data() {
		if ( $data = get_transient( 'bnmbt_importer_data' ) ) {
			$this->frontend_error_messages = empty( $data['frontend_error_messages'] ) ? array() : $data['frontend_error_messages'];
			$this->log_file_path           = empty( $data['log_file_path'] ) ? '' : $data['log_file_path'];
			$this->selected_index          = empty( $data['selected_index'] ) ? 0 : $data['selected_index'];
			$this->selected_import_files   = empty( $data['selected_import_files'] ) ? array() : $data['selected_import_files'];
			$this->import_files            = empty( $data['import_files'] ) ? array() : $data['import_files'];
			$this->before_import_executed  = empty( $data['before_import_executed'] ) ? false : $data['before_import_executed'];
			$this->imported_terms          = empty( $data['imported_terms'] ) ? [] : $data['imported_terms'];
			$this->importer->set_importer_data( $data );

			return true;
		}
		return false;
	}

	/**
	 * Get the current state of selected data.
	 *
	 * @return array
	 */
	public function get_current_importer_data() {
		return array(
			'frontend_error_messages' => $this->frontend_error_messages,
			'log_file_path'           => $this->log_file_path,
			'selected_index'          => $this->selected_index,
			'selected_import_files'   => $this->selected_import_files,
			'import_files'            => $this->import_files,
			'before_import_executed'  => $this->before_import_executed,
			'imported_terms'          => $this->imported_terms,
		);
	}

	/**
	 * Setter function to append additional value to the private frontend_error_messages value.
	 *
	 * @param string $additional_value The additional value that will be appended to the existing frontend_error_messages.
	 */
	public function append_to_frontend_error_messages( $text ) {
		$lines = array();

		if ( ! empty( $text ) ) {
			$text = str_replace( '<br>', PHP_EOL, $text );
			$lines = explode( PHP_EOL, $text );
		}

		foreach ( $lines as $line ) {
			if ( ! empty( $line ) && ! in_array( $line , $this->frontend_error_messages ) ) {
				$this->frontend_error_messages[] = $line;
			}
		}
	}	

	/**
	 * Getter function to retrieve the private log_file_path value.
	 *
	 * @return string The log_file_path value.
	 */
	public function get_log_file_path() {
		return $this->log_file_path;
	}

}
new DemoImporter(); 