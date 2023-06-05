<?php

use ThemezHut\BNM_Blocks\CSS\Blocks\Post_Block_3_CSS;

function bnm_blocks_post_block_3_init() {

	register_block_type( BNM_BLOCKS__PLUGIN_DIR . 'build/blocks/posts/post-block-3', array(
		'api_version'		=> 2,
		'render_callback'	=> 'bnm_blocks_post_block_3_render_callback'
	) );

}
add_action( 'init', 'bnm_blocks_post_block_3_init' );

function bnm_blocks_post_block_3_render_callback( $attributes ) {

	$post_query_args = BNM_Blocks::build_articles_query( $attributes );

	$article_query = new WP_Query( $post_query_args );

	ob_start();
	?>
	<div class="posts-block-3-container">
	<div class="bnm-pb3-posts-grid">

	<?php
		$bnmp_count = 1;

		if ( $article_query -> have_posts() ) {

			while ( $article_query -> have_posts() ) {

				$article_query -> the_post(); ?>
				
				<div class="bnm-pb3-post">
					<?php if ( has_post_thumbnail() ) : ?>
						<figure class="post-thumbnail">
							<a href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
								<?php the_post_thumbnail( 'bnm-featured' ); ?>
							</a>
						</figure>
					<?php endif; ?>

					<div class="bnm-pb3-post-content">

						<?php if ( $attributes['showCategory'] ) { ?>
							<div class="bnm-category-list">
								<?php the_category( ' ' ); ?>
							</div>
						<?php } ?>

						<?php 
							if ( $attributes['showTitle'] ) {
								the_title( '<h3 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' ); 
							}
						?>

						<div class="entry-meta">
							<?php if ( $attributes['showAuthor'] ) { ?>
								<span class="bnm-post-author">
									<?php bnm_posted_by(); ?>
								</span>
							<?php } ?>

							<?php if ( $attributes['showDate'] ) { ?>
								<span class="bnm-post-date">
									<?php bnm_posted_on(); ?>
								</span>
							<?php } ?>

							<?php if ( $attributes['showCommentCount'] ) { ?>
								<span class="bnm-comment-count">
									<?php bnm_comments_link(); ?>
								</span>
							<?php } ?>
						</div><!-- .entry-meta-->

						<?php if ( $attributes['displayPostExcerpt'] && ( isset( $attributes['excerptLength'] ) && $attributes['excerptLength']  > 0 ) ) { ?>
							<div class="bnm-post-excerpt">
								
								<?php echo wp_kses_post( BNM_Blocks::get_excerpt_by_id( get_the_id(), $attributes['excerptLength'] ) ); ?>
								
								<?php if ( $attributes['showReadMore'] && ! empty( $attributes['readMoreLabel'] ) ) { ?>
									<span class="bnm-readmore">
										<a href="<?php the_permalink(); ?>" class="bnm-readmore-link">
											<?php the_title( '<span class="screen-reader-text">', '</span>' ); ?>
											<?php echo esc_html( $attributes['readMoreLabel'] ); ?>
										</a>
									</span>
								<?php } ?>

							</div>
						<?php } ?>

					</div><!-- ."bnm-pb1-large-post-content -->

				</div><!-- .bnm-pb3-post -->
		<?php

			$bnmp_count++;

			} // Endwhile;

			wp_reset_postdata();	

		} // Endif;

		?>

		</div><!-- .bnm-pb2-posts-grid -->
		</div><!-- .posts-block-2-container -->
	
	<?php

	
	$block = ob_get_clean();
	
	$css = new Post_Block_3_CSS();
	$styles = $css->render_css( $attributes );

	$classes = array( 'wpbnmpb3' );

	if ( $attributes['categoryBGColor'] || $attributes['categoryBGHoverColor'] || ! empty($attributes['categoryPadding']) ) {
		$classes[] = 'bnm-box-cat';
	}

	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => implode( ' ', $classes ) ) );
	
	return sprintf( '<div %1$s style="%2$s">%3$s</div>', 
		$wrapper_attributes, 
		esc_attr( $styles ), 
		$block
	);

}