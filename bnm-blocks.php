<?php
/**
 * Plugin Name:       BNM Blocks
 * Description:       A Collection of Blocks for Blogs, Newspapers and Magazine websites.
 * Requires at least: 6.0
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            ThemezHut
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bnm-blocks
 *
 * @package           bnm-blocks
 */

define( 'BNM_BLOCKS_URL', plugins_url( '/', __FILE__ ) );
define( 'BNM_BLOCKS__PLUGIN_FILE', __FILE__ );
define( 'BNM_BLOCKS__BLOCKS_DIRECTORY', 'build/' );
define( 'BNM_BLOCKS__ADMIN_DIRECTORY', 'admin/' );
define( 'BNM_BLOCKS__PLUGIN_DIR', plugin_dir_path( BNM_BLOCKS__PLUGIN_FILE ) );
define( 'BNM_BLOCKS__VERSION', '1.0.0' );

$src_directory = BNM_BLOCKS__PLUGIN_DIR . 'src/blocks/';
$dist_directory = BNM_BLOCKS__PLUGIN_DIR . 'build/';
$inc_directory = BNM_BLOCKS__PLUGIN_DIR . 'inc/';

require_once $inc_directory . 'class-bnm-blocks.php';
require_once $inc_directory . 'css/class-css-utility.php';
require_once $inc_directory . 'css/blocks/class-post-block-1-css.php';
require_once $inc_directory . 'css/blocks/class-post-block-2-css.php';
require_once $inc_directory . 'css/blocks/class-post-block-sp-css.php';
require_once $inc_directory . 'css/blocks/class-post-slider-1-css.php';

include_once $inc_directory . 'template-functions.php';
include_once $src_directory . 'slider/view.php';
include_once $src_directory . 'posts/post-block-1/view.php';
include_once $src_directory . 'posts/post-block-2/view.php';
include_once $src_directory . 'posts/posts-grid/view.php';
include_once $src_directory . 'posts/featured-posts-1/view.php';
include_once $src_directory . 'posts/featured-posts-2/view.php';


add_action( 'enqueue_block_editor_assets', array( 'BNM_Blocks', 'enqueue_block_editor_assets' ) );