<?php
namespace ThemezHut\DemoImporter;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Resetter {

    /**
	 * Reset widgets data
	 *
	 * @since 1.0.0
	 *
	 * @param array<int, array<string, mixed>> $old_widgets_data widget data.
	 * @return void
	 */
	public static function reset_widgets_data( $old_widgets_data = array() ) {

		$old_widget_ids = array();
		foreach ( $old_widgets_data as $old_sidebar_key => $old_widgets ) {
			if ( ! empty( $old_widgets ) && is_array( $old_widgets ) ) {
				$old_widget_ids = array_merge( $old_widget_ids, $old_widgets );
			}
		}

		// Process if not empty.
		$sidebars_widgets = get_option( 'sidebars_widgets', array() );

		if ( ! empty( $old_widget_ids ) && ! empty( $sidebars_widgets ) ) {

			foreach ( $sidebars_widgets as $sidebar_id => $widgets ) {
				$widgets = (array) $widgets;

				if ( ! empty( $widgets ) && is_array( $widgets ) ) {
					foreach ( $widgets as $widget_id ) {

						if ( in_array( $widget_id, $old_widget_ids, true ) ) {

							// Move old widget to inacitve list.
							$sidebars_widgets['wp_inactive_widgets'][] = $widget_id;

							// Remove old widget from sidebar.
							$sidebars_widgets[ $sidebar_id ] = array_diff( $sidebars_widgets[ $sidebar_id ], array( $widget_id ) );
						}
					}
				}
			}

			update_option( 'sidebars_widgets', $sidebars_widgets );
		}
	}


	/**
	 * Run methods if nonce and not in preview mode
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public static function remove_theme_modifications() {

		// Gets the current theme slug.
		$theme_slug = get_option( 'stylesheet' );

		$customizer_settings = get_option( "theme_mods_{$theme_slug}" );

		if ( $customizer_settings ) {
			delete_option( "theme_mods_{$theme_slug}" );
		}

	}

}