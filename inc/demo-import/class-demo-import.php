<?php
namespace ThemezHut\DemoImporter;

use WP_Error;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

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

	/**
	 * Import content.
	 * 
	 * @var boolean
	 */
	private $import_demo_content;

	/**
	 * Theme Pro URL
	 * 
	 * @var string
	 */
	public $pro_url;

	/**
	 * Theme Pro URL
	 * 
	 * @var boolean
	 */
	public $license_active = false;

	/**
	 * Class construct function, to initiate the plugin.
	 * Protected constructor to prevent creating a new instance of the
	 * *Singleton* via the `new` operator from outside of this class.
	 */
    public function __construct() {
        add_action( 'admin_menu', array( $this, 'set_demo_page_setup' ) );
        add_action( 'after_setup_theme', array( $this, 'setup_plugin_with_filter_data' ) );
        add_action( 'bnmbt_display_demo_showcase', array( $this, 'display_demos' ) );
        add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_scripts' ) );
        add_action( 'wp_ajax_bnmbt_import_demo_data', array( $this, 'import_demo_data_ajax_callback' ) );
		add_action( 'wp_ajax_bnmbt_import_customizer_data', array( $this, 'import_customizer_data_ajax_callback' ) );
		add_action( 'wp_ajax_bnmbt_importer_after_import_data', array( $this, 'after_all_import_data_ajax_callback' ) );
		add_action( 'wp_import_insert_post', array( $this, 'save_wp_navigation_import_mapping' ), 10, 4 );
		add_action( 'bnmbt_importer_after_import', array( $this, 'fix_imported_wp_navigation' ) );
    }

	/**
	 * Returns the *Singleton* instance of this class.
	 *
	 * @return DemoImporter the *Singleton* instance.
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
            require_once BNMBT_IMPORTER_PATH . 'views/import.php';
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
			'assets_url'		=> BNMBT__ADMIN_DIRECTORY_URL,
			'texts'            	=> array(
				'missing_preview_image'    => esc_html__( 'No preview image defined for this import.', 'bnm-blocks' ),
				'dialog_title'             => esc_html__( 'Are you sure?', 'bnm-blocks' ),
				'dialog_no'                => esc_html__( 'Cancel', 'bnm-blocks' ),
				'dialog_yes'               => esc_html__( 'Yes, import!', 'bnm-blocks' ),
				'selected_import_title'    => esc_html__( 'Selected demo import:', 'bnm-blocks' ),
				'installing'               => esc_html__( 'Installing...', 'bnm-blocks' ),
				'importing'                => esc_html__( 'Importing...', 'bnm-blocks' ),
				'successful_import'        => esc_html__( 'Successfully Imported!', 'bnm-blocks' ),
				'install_plugin'           => esc_html__( 'Install Plugin', 'bnm-blocks' ),
				'installed'                => esc_html__( 'Installed', 'bnm-blocks' ),
				'import_failed'            => esc_html__( 'Import Failed', 'bnm-blocks' ),
				'import_failed_subtitle'   => esc_html__( 'Whoops, there was a problem importing your content.', 'bnm-blocks' ),
				'plugin_install_failed'    => esc_html__( 'Looks like some of the plugins failed to install. Please try again. If this issue persists, please manually install the failing plugins and come back to this step to import the theme demo data.', 'bnm-blocks' ),
				'content_filetype_warn'    => esc_html__( 'Invalid file type detected! Please select an XML file for the Content Import.', 'bnm-blocks' ),
				'widgets_filetype_warn'    => esc_html__( 'Invalid file type detected! Please select a JSON or WIE file for the Widgets Import.', 'bnm-blocks' ),
				'customizer_filetype_warn' => esc_html__( 'Invalid file type detected! Please select a DAT file for the Customizer Import.', 'bnm-blocks' ),
			),
		) );
    }

	/**
	 * Main AJAX callback function for:
	 * 1). prepare import files (uploaded or predefined via filters)
	 * 2). execute 'before content import' actions (before import WP action)
	 * 3). import content
	 * 4). execute 'after content import' actions (before widget import WP action, widget import, customizer import, after import WP action)
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

			if ( isset( $_POST['importContent'] ) && 'content' === $_POST['importContent'] ) {
				$this->import_demo_content = true;
			} else {
				$this->import_demo_content = false;
			}

            if ( ! empty( $this->import_files[ $this->selected_index ] ) ) { // Use predefined import files from wp filter: bnmbt_import_files.

				// Download the import files (content, widgets and customizer files).
				$this->selected_import_files = Helpers::download_import_files( $this->import_files[ $this->selected_index ] );

				// Check Errors.
				if ( is_wp_error( $this->selected_import_files ) ) {
					// Write error to log file and send an AJAX response with the error.
					Helpers::log_error_and_send_ajax_response(
						$this->selected_import_files->get_error_message(),
						$this->log_file_path,
						esc_html__( 'Downloaded files', 'bnm-blocks' )
					);
				}

				// Add this message to log file.
				$log_added = Helpers::append_to_file(
					sprintf( /* translators: %s - the name of the selected import. */
						__( 'The import files for: %s were successfully downloaded!', 'bnm-blocks' ),
						$this->import_files[ $this->selected_index ]['import_file_name']
					) . Helpers::import_file_info( $this->selected_import_files ),
					$this->log_file_path,
					esc_html__( 'Downloaded files' , 'bnm-blocks' )
				);
			} else {
				// Send JSON Error response to the AJAX call.
				wp_send_json( esc_html__( 'No import files specified!', 'bnm-blocks' ) );
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
		 * 3). Import content (if the content XML file is set for this import and the user opted to import content).
		 * Returns any errors greater then the "warning" logger level, that will be displayed on front page.
	     */
		if ( ! empty( $this->selected_import_files['content'] ) && true == $this->import_demo_content ) {

			$log = $this->importer->import_content( $this->selected_import_files['content'] );
			$this->append_to_frontend_error_messages( $log );
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
		if ( false !== has_action( 'bnmbt_importer_after_all_import_execution' ) ) {
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

		// Reset the customizer before importing new customizer settings.
		Resetter::remove_theme_modifications();

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
	 * AJAX callback for the after all import action.
	 */
	public function after_all_import_data_ajax_callback() {
		// Verify if the AJAX call is valid (checks nonce and current_user_can).
		Helpers::verify_ajax_call();

		// Get existing import data.
		if ( $this->use_existing_importer_data() ) {
			/**
			 * Execute the after all import actions.
			 *
			 * Default actions:
			 * 1 - after_import action (with priority 10).
			 */
			do_action( 'bnmbt_importer_after_all_import_execution', $this->selected_import_files, $this->import_files, $this->selected_index );
		}

		// Update terms count.
		$this->update_terms_count();

		// Send a JSON response with final report.
		$this->final_response();
	}	


	/**
	 * Send a JSON response with final report.
	 */
	private function final_response() {
		// Delete importer data transient for current import.
		delete_transient( 'bnmbt_importer_data' );
		delete_transient( 'bnmbt_importer_data_failed_attachment_imports' );
		delete_transient( 'bnmbt_import_menu_mapping' );
		delete_transient( 'bnmbt_import_posts_with_nav_block' );

		// Display final messages (success or warning messages).
		$response['title'] = esc_html__( 'Import Complete!', 'bnm-blocks' );
		$response['subtitle'] = '<p>' . esc_html__( 'Congrats, your demo was imported successfully. You can now begin editing your site.', 'bnm-blocks' ) . '</p>';
		$response['message'] = '<img class="bnmbti-imported-content-imported bnmbti-imported-content-imported--success" src="' . esc_url( BNMBT__ADMIN_DIRECTORY_URL . 'images/success.svg' ) . '" alt="' . esc_attr__( 'Successful Import', 'bnm-blocks' ) . '">';

		if ( ! empty( $this->frontend_error_messages ) ) {
			$response['subtitle'] = '<p>' . esc_html__( 'Your import completed, but some things may not have imported properly.', 'bnm-blocks' ) . '</p>';
			$response['subtitle'] .= sprintf(
				wp_kses(
				/* translators: %s - link to the log file. */
					__( '<p><a href="%s" target="_blank">View error log</a> for more information.</p>', 'bnm-blocks' ),
					array(
						'p'      => [],
						'a'      => [
							'href'   => [],
							'target' => [],
						],
					)
				),
				Helpers::get_log_url( $this->log_file_path )
			);

			$response['message'] = '<div class="notice notice-warning"><p>' . $this->frontend_error_messages_display() . '</p></div>';
		}

		wp_send_json( $response );
	}	


    /**
	 * Get content importer data, so we can continue the import with this new AJAX request.
	 *
	 * @return boolean
	 */
	private function use_existing_importer_data() {
		if ( $data = get_transient( 'bnmbt_importer_data' ) ) {
			$this->frontend_error_messages		= empty( $data['frontend_error_messages'] ) ? array() : $data['frontend_error_messages'];
			$this->log_file_path				= empty( $data['log_file_path'] ) ? '' : $data['log_file_path'];
			$this->selected_index				= empty( $data['selected_index'] ) ? 0 : $data['selected_index'];
			$this->selected_import_files		= empty( $data['selected_import_files'] ) ? array() : $data['selected_import_files'];
			$this->import_files					= empty( $data['import_files'] ) ? array() : $data['import_files'];
			$this->before_import_executed		= empty( $data['before_import_executed'] ) ? false : $data['before_import_executed'];
			$this->imported_terms				= empty( $data['imported_terms'] ) ? [] : $data['imported_terms'];
			$this->import_demo_content			= empty( $data['import_demo_content'] ) ? false : $data['import_demo_content'];
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
			'frontend_error_messages'		=> $this->frontend_error_messages,
			'log_file_path'					=> $this->log_file_path,
			'selected_index'				=> $this->selected_index,
			'selected_import_files'			=> $this->selected_import_files,
			'import_files'					=> $this->import_files,
			'before_import_executed'		=> $this->before_import_executed,
			'imported_terms'				=> $this->imported_terms,
			'import_demo_content'			=> $this->import_demo_content,
		);
	}


	/**
	 * Getter function to retrieve the private log_file_path value.
	 *
	 * @return string The log_file_path value.
	 */
	public function get_log_file_path() {
		return $this->log_file_path;
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
	 * Display the frontend error messages.
	 *
	 * @return string Text with HTML markup.
	 */
	public function frontend_error_messages_display() {
		$output = '';

		if ( ! empty( $this->frontend_error_messages ) ) {
			foreach ( $this->frontend_error_messages as $line ) {
				$output .= esc_html( $line );
				$output .= '<br>';
			}
		}

		return $output;
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
		$importer_options = apply_filters( 'bnmbt_importer_options', array(
			'fetch_attachments' => false,
		) );

		// Logger options for the logger used in the importer.
		$logger_options = apply_filters( 'bnmbt_importer_logger_options', array(
			'logger_min_level' => 'warning',
		) );

		$this->pro_url = apply_filters( 'bnmbt_importer_pro_url', 'https://themezhut.com/' );

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
	 * Output the begining of the container div for all notices, but only on OCDI pages.
	 */
	public function start_notice_output_capturing() {
		$screen = get_current_screen();

		if ( false === strpos( $screen->base, $this->demo_page_setup['menu_slug'] ) ) {
			return;
		}

		echo '<div class="bnmbti-notices-wrapper js-bnmbti-notice-wrapper">';
	}


	/**
	 * Output the ending of the container div for all notices, but only on OCDI pages.
	 */
	public function finish_notice_output_capturing() {
		if ( is_network_admin() ) {
			return;
		}

		$screen = get_current_screen();

		if ( false === strpos( $screen->base, $this->plugin_page_setup['menu_slug'] ) ) {
			return;
		}

		echo '</div><!-- /.bnmbti-notices-wrapper -->';
	}


    /**
     * Get the demo settings url
     */
    public function get_demo_settings_url( $query_parameters = [] ) {

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
	 * Add imported terms.
	 *
	 * Mainly it's needed for saving all imported terms and trigger terms count updates.
	 * WP core term defer counting is not working, since import split to chunks and we are losing `$_deffered` array
	 * items between ajax calls.
	 */
	public function add_imported_terms( $object_id, $terms, $tt_ids, $taxonomy, $append, $old_tt_ids ){

		if ( ! isset( $this->imported_terms[ $taxonomy ] ) ) {
			$this->imported_terms[ $taxonomy ] = array();
		}

		$this->imported_terms[ $taxonomy ] = array_unique( array_merge( $this->imported_terms[ $taxonomy ], $tt_ids ) );
	}


	/**
	 * Returns an empty array if current attachment to be imported is in the failed imports list.
	 *
	 * This will skip the current attachment import.
	 *
	 * @since 3.2.0
	 *
	 * @param array $data Post data to be imported.
	 *
	 * @return array
	 */
	public function skip_failed_attachment_import( $data ) {
		// Check if failed import.
		if (
			! empty( $data ) &&
			! empty( $data['post_type'] ) &&
			$data['post_type'] === 'attachment' &&
			! empty( $data['attachment_url'] )
		) {
			// Get the previously failed imports.
			$failed_media_imports = Helpers::get_failed_attachment_imports();

			if ( ! empty( $failed_media_imports ) && in_array( $data['attachment_url'], $failed_media_imports, true ) ) {
				// If the current attachment URL is in the failed imports, then skip it.
				return [];
			}
		}

		return $data;
	}

	/**
	 * Save the failed attachment import.
	 *
	 * @since 3.2.0
	 *
	 * @param WP_Error $post_id Error object.
	 * @param array    $data Raw data imported for the post.
	 * @param array    $meta Raw meta data, already processed.
	 * @param array    $comments Raw comment data, already processed.
	 * @param array    $terms Raw term data, already processed.
	 */
	public function handle_failed_attachment_import( $post_id, $data, $meta, $comments, $terms ) {

		if ( empty( $data ) || empty( $data['post_type'] ) || $data['post_type'] !== 'attachment' ) {
			return;
		}

		Helpers::set_failed_attachment_import( $data['attachment_url'] );
	}


	/**
	 * Save the information needed to process the navigation block.
	 *
	 * @since 3.2.0
	 *
	 * @param int   $post_id     The new post ID.
	 * @param int   $original_id The original post ID.
	 * @param array $postdata    The post data used to insert the post.
	 * @param array $data        Post data from the WXR file.
	 */
	public function save_wp_navigation_import_mapping( $post_id, $original_id, $postdata, $data ) {

		if ( empty( $postdata['post_content'] ) ) {
			return;
		}

		if ( $postdata['post_type'] !== 'wp_navigation' ) {

			/*
			 * Save the post ID that has navigation block in transient.
			 */
			if ( strpos( $postdata['post_content'], '<!-- wp:navigation' ) !== false ) {
				// Keep track of POST ID that has navigation block.
				$bnmbt_post_nav_block = get_transient( 'bnmbt_import_posts_with_nav_block' );

				if ( empty( $bnmbt_post_nav_block ) ) {
					$bnmbt_post_nav_block = [];
				}

				$bnmbt_post_nav_block[] = $post_id;

				set_transient( 'bnmbt_import_posts_with_nav_block', $bnmbt_post_nav_block, HOUR_IN_SECONDS );
			}
		} else {

			/*
			 * Save the `wp_navigation` post type mapping of the original menu ID and the new menu ID
			 * in transient.
			 */
			$bnmbt_menu_mapping = get_transient( 'bnmbt_import_menu_mapping' );

			if ( empty( $bnmbt_menu_mapping ) ) {
				$bnmbt_menu_mapping = [];
			}

			// Let's save the mapping of the original menu ID and the new menu ID.
			$bnmbt_menu_mapping[] = [
				'original_menu_id' => $original_id,
				'new_menu_id'      => $post_id,
			];

			set_transient( 'bnmbt_import_menu_mapping', $bnmbt_menu_mapping, HOUR_IN_SECONDS );
		}
	}

	/**
	 * Fix issue with WP Navigation block.
	 *
	 * We did this by looping through all the imported posts with the WP Navigation block
	 * and replacing the original menu ID with the new menu ID.
	 *
	 * @since 3.2.0
	 */
	public function fix_imported_wp_navigation() {

		// Get the `wp_navigation` import mapping.
		$nav_import_mapping = get_transient( 'bnmbt_import_menu_mapping' );

		// Get the post IDs that needs to be updated.
		$posts_nav_block = get_transient( 'bnmbt_import_posts_with_nav_block' );

		if ( empty( $nav_import_mapping ) || empty( $posts_nav_block ) ) {
			return;
		}

		$replace_pairs = [];

		foreach ( $nav_import_mapping as $mapping ) {
			$replace_pairs[ '<!-- wp:navigation {"ref":' . $mapping['original_menu_id'] . '} /-->' ] = '<!-- wp:navigation {"ref":' . $mapping['new_menu_id'] . '} /-->';
		}

		// Loop through each the posts that needs to be updated.
		foreach ( $posts_nav_block as $post_id ) {
			$post_nav_block = get_post( $post_id );

			if ( empty( $post_nav_block ) || empty( $post_nav_block->post_content ) ) {
				return;
			}

			wp_update_post(
				[
					'ID'           => $post_id,
					'post_content' => strtr( $post_nav_block->post_content, $replace_pairs ),
				]
			);
		}
	}

	/**
	 * Update imported terms count.
	 */
	private function update_terms_count() {

		foreach ( $this->imported_terms as $tax => $terms ) {
			wp_update_term_count_now( $terms, $tax );
		}
	}


	/**
	 * Get the import buttons HTML for the successful import page.
	 *
	 * @since 3.2.0
	 *
	 * @return string
	 */
	public function get_import_successful_buttons_html() {

		/**
		 * Filter the buttons that are displayed on the successful import page.
		 *
		 * @since 3.2.0
		 *
		 * @param array $buttons {
		 *     Array of buttons.
		 *
		 *     @type string $label  Button label.
		 *     @type string $class  Button class.
		 *     @type string $href   Button URL.
		 *     @type string $target Button target. Can be `_blank`, `_parent`, `_top`. Default is `_self`.
		 * }
		 */
		$buttons = apply_filters(
			'bnmbt_import_successful_buttons',
			[
				[
					'label'  => __( 'Theme Settings' , 'bnm-blocks' ),
					'class'  => 'button button-primary button-hero',
					'href'   => admin_url( 'customize.php' ),
					'target' => '_blank',
				],
				[
					'label'  => __( 'Visit Site' , 'bnm-blocks' ),
					'class'  => 'button button-primary button-hero',
					'href'   => get_home_url(),
					'target' => '_blank',
				],
			]
		);

		if ( empty( $buttons ) || ! is_array( $buttons ) ) {
			return '';
		}

		ob_start();

		foreach ( $buttons as $button ) {

			if ( empty( $button['href'] ) || empty( $button['label'] ) ) {
				continue;
			}

			$target = '_self';
			if (
				! empty( $button['target'] ) &&
				in_array( strtolower( $button['target'] ), [ '_blank', '_parent', '_top' ], true )
			) {
				$target = $button['target'];
			}

			$class = 'button button-primary button-hero';
			if ( ! empty( $button['class'] ) ) {
				$class = $button['class'];
			}

			printf(
				'<a href="%1$s" class="%2$s" target="%3$s">%4$s</a>',
				esc_url( $button['href'] ),
				esc_attr( $class ),
				esc_attr( $target ),
				esc_html( $button['label'] )
			);
		}

		$buttons_html = ob_get_clean();

		return empty( $buttons_html ) ? '' : $buttons_html;
	}

}