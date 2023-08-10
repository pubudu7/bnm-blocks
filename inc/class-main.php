<?php

namespace ThemezHut\BNM_Blocks;

/**
 * bnm blocks functionality.
 */
class Main {

    /**
     * Initialize the class.
     */
    public static function init() {
        add_action( 'after_setup_theme', array( __CLASS__, 'add_image_sizes' ) );
        add_filter( 'block_categories_all', array( __CLASS__, 'register_block_categories' ), 11, 2 );
    }

    /**
     * Register our custom block categories.
     */
    public static function register_block_categories( $categories, $block_editor_context ) {
        return array_merge(
            array(
                array(
                    'slug'  => 'bnm-blocks',
                    'title' => __( 'BNM', 'bnm-blocks' )
                )
            ),
            $categories
        );
    }

    /**
	 * Enqueue block scripts and styles for editor.
	 */
    public static function enqueue_block_editor_assets() {
        wp_enqueue_script( 'bnm-blocks-assets-common', BNM_BLOCKS_URL . 'admin/js/blocks.js', array(), '', true );
    
        wp_localize_script(
            'bnm-blocks-assets-common',
            'themezHutGutenberg',
            array(
                'imageSizes'    => function_exists( 'is_wpcom_vip' ) ? array( 'thumbnail', 'medium', 'medium_large', 'large' ) : get_intermediate_image_sizes(), // phpcs:ignore WordPressVIPMinimum.Functions.RestrictedFunctions.get_intermediate_image_sizes_get_intermediate_image_sizes
            )
        );

        $editor_style = plugins_url( BNM_BLOCKS__ADMIN_DIRECTORY . 'css/editor.css', BNM_BLOCKS__PLUGIN_FILE );

		wp_enqueue_style(
			'bnm-blocks-editor',
			$editor_style,
			array(),
			BNM_BLOCKS__VERSION
		);
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
        
        $posts_per_page = $attributes['query']['perPage'];
        $authors = $attributes['query']['author'];
        $taxonomies = $attributes['query']['taxQuery'];
        $orderBy = $attributes['query']['orderBy'];
        $order = $attributes['query']['order'];
        $sticky = $attributes['query']['sticky'];
    
        $post_query_args = array( 
            'posts_per_page' 	=> $posts_per_page
        );
    
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

    /**
     * Gets the excerpt by post id.
     */
    public static function get_excerpt_by_id( $post_id, $excerpt_length = 30 ) {

        $post           = get_post( $post_id );
        $text           = $post->post_excerpt;
        $raw_excerpt    = $text;

        if ( empty( $text ) ) {
            $text = get_the_content( '', false, $post );
            $text = strip_shortcodes( $text );
            $text = excerpt_remove_blocks( $text );
        }

        /** This filter is documented in wp-includes/post-template.php */
        $text = str_replace( ']]>', ']]&gt;', $text );
        $text = wp_trim_words( $text, $excerpt_length );

        return $text;

    }

}
Main::init();