<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function bnmbt_editor_block_styles() {
    wp_enqueue_script(
        'bnm-blocks-block-styles',
        BNMBT_URL . 'build/block-styles.js',
        array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ),
        filemtime( BNMBT__PLUGIN_DIR . 'build/block-styles.js' ),
        true
    ); 
    wp_enqueue_style(
        'bnm-blocks-block-styles',
        BNMBT_URL . 'build/block-styles.css',
        array(),
        BNMBT__VERSION
    );  
}
add_action( 'enqueue_block_editor_assets', 'bnmbt_editor_block_styles' );

function bnmbt_frontend_block_styles() {
    wp_enqueue_style(
        'bnm-blocks-block-styles',
        BNMBT_URL . 'build/block-styles.css',
        array(),
        BNMBT__VERSION
    );   
}
add_action( 'wp_enqueue_scripts', 'bnmbt_frontend_block_styles' );