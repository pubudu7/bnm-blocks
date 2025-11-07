<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Register block styles.
 */
if ( function_exists( 'register_block_style' ) ) {

    function bnmbt_register_block_styles() {
        wp_register_style( 'bnm-blocks-block-styles', BNMBT_URL . 'public/css/block-styles.css' );
        register_block_style(
            'core/columns',
            array(
                'name'         => 'bnm-borders',
                'label'        => __( 'Borders', 'bnm-blocks' ),
                'style_handle' => 'bnm-blocks-block-styles',
            )
        );
    }
    add_action( 'init', 'bnmbt_register_block_styles' );

}
