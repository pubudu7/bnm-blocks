<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Template functions.
 */

/**
 * Prints HTML with meta information for the current author.
 */
function bnmbt_posted_by() {

	$byline = sprintf(
		/* translators: %s: post author. */
		esc_html_x( 'by %s', 'post author', 'bnm-blocks' ),
		'<span class="author vcard bnm-post-author"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
	);

	return '<span class="byline">' . $byline . '</span>';

}

/**
 * Prints author avatar
 */
function bnmbt_author_avatar() {
	
	$author_email	= get_the_author_meta( 'user_email' );
	$avatar_url		= get_avatar_url( $author_email );
	return '<span class="bnm-avatar"><img class="author-photo" alt="' . esc_attr( get_the_author() ) . '" src="' . esc_url( $avatar_url ) . '" /></span>';

}

/**
 * Prints comments link
 */
function bnmbt_comments_link() {

	if ( ! post_password_required() && ( comments_open() || get_comments_number() ) ) {

		$num_comments = esc_attr( get_comments_number() );

		return sprintf(
			'<span class="comments-link bnm-comment-count"><a href="%s">%s</a></span>',
			esc_url( get_comments_link() ),
			number_format_i18n( $num_comments )
		);
	}	

	return '';

}

/**
 * Prints HTML with meta information for the current post-date/time.
 */
function bnmbt_posted_on() {
	$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
	if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
		$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
	}

	$time_string = sprintf( $time_string,
		esc_attr( get_the_date( DATE_W3C ) ),
		esc_html( get_the_date() ),
		esc_attr( get_the_modified_date( DATE_W3C ) ),
		esc_html( get_the_modified_date() )
	);

	$posted_on = '<span class="posted-on bnm-post-date"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a></span>';

	return $posted_on;
}

/**
 * Entry Meta
 */
function bnmbt_entry_meta( $meta_array = array() ) {
	// Allow overriding meta_array via filter
	$meta_array = apply_filters( 'bnm_blocks_meta_order', $meta_array );

	$meta_data_strings = array();

	if ( in_array( 'avatar', $meta_array, true ) ) {
		$meta_data_strings['avatar'] = bnmbt_author_avatar();
	}

	if ( in_array( 'author', $meta_array, true ) ) {
		$meta_data_strings['author'] = bnmbt_posted_by();
	} 

	if ( in_array( 'date', $meta_array, true ) ) {
		$meta_data_strings['date'] = bnmbt_posted_on();
	} 

	if ( in_array( 'comments', $meta_array, true ) ) {
		$meta_data_strings['comments'] = bnmbt_comments_link();
	}

	$meta_data_strings = apply_filters( 'bnm_blocks_meta_data_strings', $meta_data_strings );

	$meta_data_separator = apply_filters( 'bnm_blocks_meta_data_separator', '' );

	// Order output based on the original meta_array
	$ordered_meta = array();
	foreach ( $meta_array as $meta_item ) {
		if ( isset( $meta_data_strings[ $meta_item ] ) ) {
			$ordered_meta[] = $meta_data_strings[ $meta_item ];
		}
	}

	echo implode( $meta_data_separator, $ordered_meta ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
}

/**
 * Displays cateogories list
 */
function bnmbt_post_categories_list() {
	if ( 'post' === get_post_type() ) {

		add_filter( 'the_category', 'bnmbt_custom_class_to_category', 10, 3 );
		$categories_list = get_the_category_list();
		remove_filter( 'the_category', 'bnmbt_custom_class_to_category', 10, 3 );

		if ( $categories_list ) {
			/* translators: 1: posted in label 2: list of categories. */
			printf( 
				'<span class="bnm-cat-links"><span class="screen-reader-text">%1$s</span>%2$s</span>', 
				esc_html__( 'Posted in', 'bnm-blocks' ),
				apply_filters( 'bnm_blocks_categories_list', $categories_list )
			); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
	}

}

function bnmbt_custom_class_to_category( $thelist, $separator, $parents ) {
    // Use regex to find and replace the category links with the added class
    $thelist = preg_replace_callback(
        '/<a href="([^"]+)"(.*?)>(.*?)<\/a>/',
        function( $matches ) {
			$category_id = get_cat_ID( $matches[3] );
			$term        = get_term( $category_id );
			return sprintf( '<a href="%s" class="cat-%d" rel="' . $term->taxonomy . '" >%s</a>', $matches[1], $category_id, $matches[3] );
        },
        $thelist
    );
    return $thelist;
}

/**
 * Get list of allowed HTML tags for headings.
 *
 * @return array
 */
function bnmbt_get_allowed_header_tags() {
    return array( 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p' );
}