<?php
namespace ThemezHut\DemoImporter;
/**
 * Helper functions for demo importer.
 */

class Helpers {

	/**
	 * Holds the date and time string for demo import and log file.
	 *
	 * @var string
	 */
	public static $demo_import_start_time = '';

	/**
	 * Filter through the array of import files and get rid of those who do not comply.
	 *
	 * @param  array $import_files list of arrays with import file details.
	 * @return array list of filtered arrays.
	 */
	public static function validate_import_file_info( $import_files ) {
		$filtered_import_file_info = array();

		foreach ( $import_files as $import_file ) {
			if ( self::is_import_file_info_format_correct( $import_file ) ) {
				$filtered_import_file_info[] = $import_file;
			}
		}

		return $filtered_import_file_info;
	}

	/**
	 * Helper function: a simple check for valid import file format.
	 *
	 * @param  array $import_file_info array with import file details.
	 * @return boolean
	 */
	private static function is_import_file_info_format_correct( $import_file_info ) {
		if ( empty( $import_file_info['import_file_name'] ) ) {
			return false;
		}

		return true;
	}
    
    /**
	 * Get the demo page setup data.
	 *
	 * @return array
	 */
	public static function get_demo_page_setup_data() {

        $theme_name = strtolower( wp_get_theme()->get( 'Name' ) );

		return apply_filters( 'bnmbt_importer_display_location_data', array(
			'parent_slug'   => 'themes.php',
			'tab'           => 'starter-templates',
			'menu_slug'     => $theme_name,
		) );

	}

	/**
	 * Set the $demo_import_start_time class variable with the current date and time string.
	 */
	public static function set_demo_import_start_time() {
		self::$demo_import_start_time = date( apply_filters( 'bnmbt_importer_date_format_for_file_names', 'Y-m-d__H-i-s' ) );
	}

	/**
	 * Download import files. Content .xml and widgets .wie|.json files.
	 *
	 * @param  array  $import_file_info array with import file details.
	 * @return array|WP_Error array of paths to the downloaded files or WP_Error object with error message.
	 */
	public static function download_import_files( $import_file_info ) {
		$downloaded_files = array(
			'content'    => '',
			'widgets'    => '',
			'customizer' => '',
			'redux'      => '',
		);
		$downloader = new Downloader();

		$import_file_info = apply_filters('bnmbt_importer_pre_download_import_files', $import_file_info);

		// ----- Set content file path -----

		// Set the filename string for content import file.
		$content_filename = apply_filters( 'bnmbt_importer_downloaded_content_file_prefix', 'demo-content-import-file_' ) . self::$demo_import_start_time . apply_filters( 'bnmbt_importer_downloaded_content_file_suffix_and_file_extension', '.xml' );

		// Download the content import file.
		$downloaded_files['content'] = $downloader->download_file( $import_file_info['import_file_url'], $content_filename );

		// Return from this function if there was an error.
		if ( is_wp_error( $downloaded_files['content'] ) ) {
			return $downloaded_files['content'];
		}

		// ----- Set widget file path -----
		// Get widgets file as well. If defined!
		if ( ! empty( $import_file_info['import_widget_file_url'] ) ) {
			// Set the filename string for widgets import file.
			$widget_filename = apply_filters( 'bnmbt_importer_downloaded_widgets_file_prefix', 'demo-widgets-import-file_' ) . self::$demo_import_start_time . apply_filters( 'bnmbt_importer_downloaded_widgets_file_suffix_and_file_extension', '.json' );

			// Download the widgets import file.
			$downloaded_files['widgets'] = $downloader->download_file( $import_file_info['import_widget_file_url'], $widget_filename );

			// Return from this function if there was an error.
			if ( is_wp_error( $downloaded_files['widgets'] ) ) {
				return $downloaded_files['widgets'];
			}
		}

		// ----- Set customizer file path -----
		// Get customizer import file as well. If defined!
		if ( ! empty( $import_file_info['import_customizer_file_url'] ) ) {
			// Setup filename path to save the customizer content.
			$customizer_filename = apply_filters( 'bnmbt_importer_downloaded_customizer_file_prefix', 'demo-customizer-import-file_' ) . self::$demo_import_start_time . apply_filters( 'bnmbt_importer_downloaded_customizer_file_suffix_and_file_extension', '.dat' );

			// Download the customizer import file.
			$downloaded_files['customizer'] = $downloader->download_file( $import_file_info['import_customizer_file_url'], $customizer_filename );

			// Return from this function if there was an error.
			if ( is_wp_error( $downloaded_files['customizer'] ) ) {
				return $downloaded_files['customizer'];
			}
		}

		return $downloaded_files;
	}

    /**
	 * Helper function: check for WP file-system credentials needed for reading and writing to a file.
	 *
	 * @return boolean|WP_Error
	 */
	private static function check_wp_filesystem_credentials() {
		// Check if the file-system method is 'direct', if not display an error.
		if ( ! ( 'direct' === get_filesystem_method() ) ) {
			return new \WP_Error(
				'no_direct_file_access',
				sprintf( /* translators: %1$s and %2$s - strong HTML tags, %3$s - HTML link to a doc page. */
					__( 'This WordPress page does not have %1$sdirect%2$s write file access. This plugin needs it in order to save the demo import xml file to the upload directory of your site. You can change this setting with these instructions: %3$s.', 'one-click-demo-import' ),
					'<strong>',
					'</strong>',
					'<a href="http://gregorcapuder.com/wordpress-how-to-set-direct-filesystem-method/" target="_blank">How to set <strong>direct</strong> filesystem method</a>'
				)
			);
		}

		// Get plugin page settings.
		$demo_page_setup = self::get_demo_page_setup_data();

		// Get user credentials for WP file-system API.
		$demo_import_page_url = wp_nonce_url( $demo_page_setup['parent_slug'] . '?page=' . $demo_page_setup['menu_slug'], $demo_page_setup['menu_slug'] );

		if ( false === ( $creds = request_filesystem_credentials( $demo_import_page_url, '', false, false, null ) ) ) {
			return new \WP_error(
				'filesystem_credentials_could_not_be_retrieved',
				__( 'An error occurred while retrieving reading/writing permissions to your server (could not retrieve WP filesystem credentials)!', 'one-click-demo-import' )
			);
		}

		// Now we have credentials, try to get the wp_filesystem running.
		if ( ! WP_Filesystem( $creds ) ) {
			return new \WP_Error(
				'wrong_login_credentials',
				__( 'Your WordPress login credentials don\'t allow to use WP_Filesystem!', 'one-click-demo-import' )
			);
		}

		return true;
	}

    /**
	 * Write content to a file.
	 *
	 * @param string $content content to be saved to the file.
	 * @param string $file_path file path where the content should be saved.
	 * @return string|WP_Error path to the saved file or WP_Error object with error message.
	 */
	public static function write_to_file( $content, $file_path ) {
		// Verify WP file-system credentials.
		$verified_credentials = self::check_wp_filesystem_credentials();

		if ( is_wp_error( $verified_credentials ) ) {
			return $verified_credentials;
		}

		// By this point, the $wp_filesystem global should be working, so let's use it to create a file.
		global $wp_filesystem;

		if ( ! $wp_filesystem->put_contents( $file_path, $content ) ) {
			return new \WP_Error(
				'failed_writing_file_to_server',
				sprintf( /* translators: %1$s - br HTML tag, %2$s - file path */
					__( 'An error occurred while writing file to your server! Tried to write a file to: %1$s%2$s.', 'one-click-demo-import' ),
					'<br>',
					$file_path
				)
			);
		}

		// Return the file path on successful file write.
		return $file_path;
	}

		/**
	 * Append content to the file.
	 *
	 * @param string $content content to be saved to the file.
	 * @param string $file_path file path where the content should be saved.
	 * @param string $separator_text separates the existing content of the file with the new content.
	 * @return boolean|WP_Error, path to the saved file or WP_Error object with error message.
	 */
	public static function append_to_file( $content, $file_path, $separator_text = '' ) {
		// Verify WP file-system credentials.
		$verified_credentials = self::check_wp_filesystem_credentials();

		if ( is_wp_error( $verified_credentials ) ) {
			return $verified_credentials;
		}

		// By this point, the $wp_filesystem global should be working, so let's use it to create a file.
		global $wp_filesystem;

		$existing_data = '';
		if ( file_exists( $file_path ) ) {
			$existing_data = $wp_filesystem->get_contents( $file_path );
		}

		// Style separator.
		$separator = PHP_EOL . '---' . $separator_text . '---' . PHP_EOL;

		if ( ! $wp_filesystem->put_contents( $file_path, $existing_data . $separator . $content . PHP_EOL ) ) {
			return new \WP_Error(
				'failed_writing_file_to_server',
				sprintf( /* translators: %1$s - br HTML tag, %2$s - file path */
					__( 'An error occurred while writing file to your server! Tried to write a file to: %1$s%2$s.', 'one-click-demo-import' ),
					'<br>',
					$file_path
				)
			);
		}

		return true;
	}

	/**
	 * Check if the AJAX call is valid.
	 */
	public static function verify_ajax_call() {
		check_ajax_referer( 'bnmbt-importer-ajax-verification', 'security' );

		// Check if user has the WP capability to import data.
		if ( ! current_user_can( 'import' ) ) {
			wp_die(
				sprintf( /* translators: %1$s - opening div and paragraph HTML tags, %2$s - closing div and paragraph HTML tags. */
					__( '%1$sYour user role isn\'t high enough. You don\'t have permission to import demo data.%2$s', 'one-click-demo-import' ),
					'<div class="notice  notice-error"><p>',
					'</p></div>'
				)
			);
		}
	}

	/**
	 * Set the transient with the current importer data.
	 *
	 * @param array $data Data to be saved to the transient.
	 */
	public static function set_bnmbt_import_data_transient( $data ) {
		set_transient( 'bnmbt_importer_data', $data, 0.1 * HOUR_IN_SECONDS );
	}

}