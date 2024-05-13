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

	$markup = '<span class="byline">';
		$markup .= $byline;
	$markup .= '</span>';

	echo wp_kses_post( $markup );

}

/**
 * Prints author avatar
 */
function bnmbt_author_avatar() {
	
	$author_email	= get_the_author_meta( 'user_email' );
	$avatar_url		= get_avatar_url( $author_email );
	echo '<span class="bnm-avatar"><img class="author-photo" alt="' . esc_attr( get_the_author() ) . '" src="' . esc_url( $avatar_url ) . '" /></span>';

}

/**
 * Prints comments link
 */
function bnmbt_comments_link() {

	if ( ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
		echo '<span class="comments-link bnm-comment-count">';
			comments_popup_link( '0', '1', '%' );
		echo '</span>';
	}
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

	printf(
		'<span class="posted-on bnm-post-date"><a href="%1$s" rel="bookmark">%2$s</a></span>',
		esc_url( get_permalink() ),
		wp_kses( 
			$time_string, 
			array(
				'time' => array(
					'class' => array(),
					'datetime' => array()
				)
			)
		)
	);
}

/**
 * Entry Meta
 */
function bnmbt_entry_meta( $meta_array ) {
	if ( in_array( 'avatar', $meta_array ) ) {
		bnmbt_author_avatar();
	}
	if ( in_array( 'author', $meta_array ) ) { 
		bnmbt_posted_by(); 
	} 
	if ( in_array( 'date', $meta_array ) ) { 
		bnmbt_posted_on(); 
	} 
	if ( in_array( 'comments', $meta_array ) ) { 
		bnmbt_comments_link(); 
	} 
}