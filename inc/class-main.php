<?php

namespace ThemezHut\BNM_Blocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * bnm blocks functionality.
 */
class Main {

    /**
     * Initialize the class.
     */
    public static function init() {
        add_action( 'enqueue_block_editor_assets', array( __CLASS__, 'enqueue_block_editor_assets' ) );
        add_action( 'after_setup_theme', array( __CLASS__, 'add_image_sizes' ) );
        add_filter( 'block_categories_all', array( __CLASS__, 'register_block_categories' ), 11, 2 );
        add_action( 'wp_enqueue_scripts', array( __CLASS__, 'enqueue_scripts' ) );
    }

    /**
     * Register our custom block categories.
     */
    public static function register_block_categories( $categories, $block_editor_context ) {
        
        $bnm_blocks_category = array(
            'slug'  => 'bnm-blocks',
            'title' => __( 'Magazine Companion', 'bnm-blocks' )
        );
        
        // Add this category at the end of the categories list.
        $categories[] = $bnm_blocks_category;

        return $categories;
    }

    /**
	 * Enqueue block scripts and styles for editor.
	 */
    public static function enqueue_block_editor_assets() {
        wp_enqueue_script( 'bnm-blocks-assets-common', BNMBT_URL . 'admin/js/blocks.js', array(), '', true );
    
        wp_localize_script(
            'bnm-blocks-assets-common',
            'themezHutGutenberg',
            array(
                'imageSizes'    => function_exists( 'is_wpcom_vip' ) ? array( 'thumbnail', 'medium', 'medium_large', 'large' ) : self::get_image_sizes(), // phpcs:ignore WordPressVIPMinimum.Functions.RestrictedFunctions.get_intermediate_image_sizes_get_intermediate_image_sizes
            )
        );

        $editor_style = plugins_url( BNMBT__ADMIN_DIRECTORY . 'css/editor.css', BNMBT__PLUGIN_FILE );

		wp_enqueue_style(
			'bnm-blocks-editor',
			$editor_style,
			array(),
			BNMBT__VERSION
		);

        wp_enqueue_style( 'bnm-blocks-common', BNMBT_URL . 'public/css/style.css', array(), BNMBT__VERSION );
    }

	public static function get_image_sizes() {
        $image_sizes = wp_get_registered_image_subsizes();
        $new_image_sizes = array();
        foreach ($image_sizes as $image_size_handle => $size_data) {

			// Image Size String
			$image_width = $size_data['width'];
			$image_height = $size_data['height'];
			if ( $image_height >= 9999 ) {
				$image_height = 'auto';
			}
            $image_size_string = $image_width . 'X' . $image_height;

			// Image Size Name
			if ( 'bnm-featured' === $image_size_handle ) {
				$image_size_name = "Featured Medium";
			} elseif ( 'bnm-featured-thumb' === $image_size_handle ) {
				$image_size_name = "Featured Thumbnail";
			} else {
				$image_size_name = str_replace(['-', '_'], ' ', $image_size_handle);
				$image_size_name = ucwords($image_size_name);
			}

			// Image Size Select Control Name
			$image_size_option_name = $image_size_name . ' (' .  $image_size_string . ')';

			// Add data array to the array.
            $new_image_sizes[$image_size_handle] = $image_size_option_name;

        }
		return $new_image_sizes;
    }

    public static function enqueue_scripts() {
        wp_enqueue_style( 'bnm-blocks-common', BNMBT_URL . 'public/css/style.css', array(), BNMBT__VERSION );
    }

    /**
     * Registers image sizes.
     */
    public static function add_image_sizes() {
        add_image_size( 'bnm-featured', 610, 344, true );
        add_image_size( 'bnm-featured-thumb', 250, 180, true );
    }

    /**
     * Setups the posts query for WP_Query.
     */
    public static function build_articles_query( $attributes ) {

        // Initialize post query arguments array.
        $post_query_args = array();

        $specific_mode = $attributes['specificMode'];
        $specific_posts = $attributes['specificPosts'];

        if ( $specific_mode && ! empty( $specific_posts ) ) {

            $post_query_args[ 'post_type' ] = 'post';
            $post_query_args[ 'post__in' ] = $specific_posts;
            $post_query_args[ 'orderby' ] = 'post__in';
            $post_query_args[ 'posts_per_page' ] = count($specific_posts);
            $post_query_args[ 'ignore_sticky_posts' ] = true;
            return $post_query_args;

        } else {

            $posts_per_page = $attributes['query']['perPage'];
            $authors = $attributes['query']['author'];
            $taxonomies = $attributes['query']['taxQuery'];
            $orderBy = $attributes['query']['orderBy'];
            $order = $attributes['query']['order'];
            $sticky = $attributes['query']['sticky'];

            $post_query_args[ 'posts_per_page' ] = $posts_per_page;
        
            if ( $authors ) {
                $post_query_args[ 'author' ] = $authors;
            }
        
            if ( $taxonomies ) {
                if ( array_key_exists( 'category', $taxonomies ) && $taxonomies[ 'category' ] ) {
                    $post_query_args[ 'cat' ] = $taxonomies[ 'category' ];
                }
            
                if ( array_key_exists( 'post_tag', $taxonomies ) && $taxonomies[ 'post_tag' ] ) {
                    $post_query_args[ 'tag__in' ] = $taxonomies[ 'post_tag' ];
                }
            } 
        
            if ( $sticky === 'only' ) {
                $sticky = get_option( 'sticky_posts' );
                $post_query_args[ 'post__in' ] = $sticky;
                $post_query_args[ 'ignore_sticky_posts' ] = 1;
            } elseif ( $sticky === 'exclude' ) {
                $post_query_args[ 'post__not_in' ] = get_option( 'sticky_posts' );
            } else {
                $post_query_args[ 'ignore_sticky_posts' ] = false;
            }
        
            if ( $orderBy === 'date' ) {
                $post_query_args[ 'orderby' ] = 'date';
                if ( $order === 'asc' ) {
                    $post_query_args[ 'order' ] = 'ASC';
                } else {
                    $post_query_args[ 'order' ] = 'DESC';
                }
            }
        
            if ( $orderBy === 'title' ) {
                $post_query_args[ 'orderby' ] = 'title';
                if ( $order === 'asc' ) {
                    $post_query_args[ 'order' ] = 'ASC';
                } else {
                    $post_query_args[ 'order' ] = 'DESC';
                }
            }
            return $post_query_args;
        
        }

        
    }

    /**
     * Gets the excerpt by post id.
     */
    public static function get_excerpt_by_id( $post_id, $excerpt_length = 30 ) {

        $post = get_post( $post_id );

        if ( ! $post ) {
            return '';
        }

        $text = $post->post_excerpt;

        if ( empty( $text ) ) {
            $text = get_the_content( '', false, $post );
            $text = strip_shortcodes( $text );
            $text = excerpt_remove_blocks( $text );
        }

        $text = str_replace( ']]>', ']]&gt;', $text );

        // Filterable "more" text (usually ‘ …’)
        $excerpt_more = apply_filters( 'excerpt_more', ' &hellip;' );

        // Trim words
        $text = wp_trim_words( $text, $excerpt_length, $excerpt_more );

        // Allow plugins/themes to filter final output
        $text = apply_filters( 'the_excerpt', $text );

        return $text;

    }

}
Main::init();