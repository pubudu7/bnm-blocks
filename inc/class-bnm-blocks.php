<?php

/**
 * bnm blocks functionality.
 */
class BNM_Blocks {

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