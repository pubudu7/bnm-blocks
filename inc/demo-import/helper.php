<?php

class Helpers {

    /**
	 * Get the plugin page setup data.
	 *
	 * @return array
	 */
	public static function get_plugin_page_setup_data() {
		return apply_filters( 'bnmbt_importer_display_location_data', array(
			'parent_slug' => 'themes.php',
			'page_title'  => esc_html__( 'One Click Demo Import' , 'one-click-demo-import' ),
			'menu_title'  => esc_html__( 'Import Demo Data' , 'one-click-demo-import' ),
			'capability'  => 'import',
			'menu_slug'   => 'one-click-demo-import',
		) );
	}

}