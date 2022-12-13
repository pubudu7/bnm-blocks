<?php
/**
 * Helper functions.
 */

/**
 * Prints HTML with meta information for the current author.
 */
function bnm_posted_by( $show_avatar = true ) {

	$author_email	= get_the_author_meta( 'user_email' );
	$avatar_url		= get_avatar_url( $author_email );
	$avatar_markup  = '<span class="bnm-avatar"><img class="author-photo" alt="' . esc_attr( get_the_author() ) . '" src="' . esc_url( $avatar_url ) . '" /></span>';
	//$icon_markup 	= '<i class="fas fa-user"></i>';

	$byline = sprintf(
		/* translators: %s: post author. */
		esc_html_x( 'by %s', 'post author', 'bnm-blocks' ),
		'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
	);

	$markup = '<span class="byline"> ';
	if( $show_avatar ) {
		$markup .= $avatar_markup;
	} else {
		//$markup .= $icon_markup;
	}
	$markup .= $byline;
	$markup .= '</span>';

	echo $markup; // WPCS: XSS OK.

}

/**
 * Prints comments link
 */
function bnm_comments_link() {

	if ( ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
		echo '<span class="comments-link">';
			comments_popup_link( '0', '1', '%' );
		echo '</span>';
	}
}

/**
 * Prints HTML with meta information for the current post-date/time.
 */
function bnm_posted_on() {
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
		'<span class="posted-on"><a href="%1$s" rel="bookmark">%2$s</a></span>',
		esc_url( get_permalink() ),
		$time_string
	); // WPCS: XSS OK.

}