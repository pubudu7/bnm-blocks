<?php
/**
 * Plugin Name:       BNM Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bnm-blocks
 *
 * @package           bnm-blocks
 */

define( 'BNM_BLOCKS_URL', plugins_url( '/', __FILE__ ) );
define( 'BNM_BLOCKS__PLUGIN_FILE', __FILE__ );
define( 'BNM_BLOCKS__BLOCKS_DIRECTORY', 'build/' );
define( 'BNM_BLOCKS__PLUGIN_DIR', plugin_dir_path( BNM_BLOCKS__PLUGIN_FILE ) );
define( 'BNM_BLOCKS__VERSION', '0.1' );

$src_directory = BNM_BLOCKS__PLUGIN_DIR . 'src/blocks/';
$dist_directory = BNM_BLOCKS__PLUGIN_DIR . 'build/';
$inc_directory = BNM_BLOCKS__PLUGIN_DIR . 'inc/';

require_once $inc_directory . 'class-bnm-blocks.php';
require_once $inc_directory . 'css/class-css-utility.php';
require_once $inc_directory . 'css/blocks/class-post-block-1-css.php';
require_once $inc_directory . 'css/blocks/class-post-block-2-css.php';

include_once $inc_directory . 'template-functions.php';
include_once $src_directory . 'slider/view.php';
include_once $src_directory . 'posts/post-block-1/view.php';
include_once $src_directory . 'posts/post-block-2/view.php';

function bnm_add_image_sizes() {
    add_image_size( 'bnm-featured', 610, 344, true );
    add_image_size( 'bnm-featured-thumb', 250, 180, true );
}
add_action( 'after_setup_theme', 'bnm_add_image_sizes' );

function bnm_enqueue_block_editor_assets() {
    wp_enqueue_script( 'bnm-blocks-assets-common', BNM_BLOCKS_URL . 'build/blocks/blocks.js', array(), '', true );

    wp_localize_script(
        'bnm-blocks-assets-common',
        'themezHutGutenberg',
        array(
            'imageSizes'    => function_exists( 'is_wpcom_vip' ) ? array( 'thumbnail', 'medium', 'medium_large', 'large' ) : get_intermediate_image_sizes(), // phpcs:ignore WordPressVIPMinimum.Functions.RestrictedFunctions.get_intermediate_image_sizes_get_intermediate_image_sizes
        )
    );
}
add_action( 'enqueue_block_editor_assets', 'bnm_enqueue_block_editor_assets' );