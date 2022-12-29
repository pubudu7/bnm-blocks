<?php

use ThemezHut\BNM_Blocks\CSS\Blocks\Post_Block_2_CSS;

function bnm_blocks_post_block_2_init() {

	register_block_type( BNM_BLOCKS__PLUGIN_DIR . 'build/blocks/posts/post-block-2', array(
		'api_version'		=> 2,
		//'editor_script'	=> 'bnm-blocks-post-block-1',
		'render_callback'	=> 'bnm_blocks_post_block_2_render_callback'
	) );

}
add_action( 'init', 'bnm_blocks_post_block_2_init' );

function bnm_blocks_post_block_2_render_callback( $attributes ) {

	$post_query_args = BNM_Blocks::build_articles_query( $attributes );

	$article_query = new WP_Query( $post_query_args );

	ob_start();
	?>
	<div class="posts-block-2-container">
	<div class="bnm-pb2-posts-grid">

	<?php
		$bnmp_count = 1;

		if ( $article_query -> have_posts() ) {

			while ( $article_query -> have_posts() ) {

				$article_query -> the_post();

				if ( $bnmp_count === 1 || $bnmp_count === 2 ) { ?>
					<div class="bnm-pb2-large-post">
						<?php if ( has_post_thumbnail() ) : ?>
							<figure class="post-thumbnail">
								<?php the_post_thumbnail( 'bnm-featured' ); ?>
							</figure>
						<?php endif; ?>

						<div class="bnm-pb2-large-post-content">

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

					</div><!-- .bnm-pb2-large-post -->
				<?php } else { ?>
					<div class="bnm-pb2-small-post">
						<?php if ( has_post_thumbnail() ) : ?>
							<figure class="post-thumbnail">
								<?php the_post_thumbnail( 'bnm-featured-thumb' ); ?>
							</figure>
						<?php endif; ?>
						<div class="entry-details">
							<?php if ( $attributes['showCategorySmall'] ) { ?>
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
								<?php if ( $attributes['showAuthorSmall'] ) { ?>
									<span class="bnm-post-author">
										<?php bnm_posted_by(); ?>
									</span>
								<?php } ?>

								<?php if ( $attributes['showDateSmall'] ) { ?>
									<span class="bnm-post-date">
										<?php bnm_posted_on(); ?>
									</span>
								<?php } ?>

								<?php if ( $attributes['showCommentCountSmall'] ) { ?>
									<span class="bnm-comment-count">
										<?php bnm_comments_link(); ?>
									</span>
								<?php } ?>
							</div><!-- .entry-meta -->

							<?php if ( $attributes['displayPostExcerptSmall'] && ( isset( $attributes['excerptLengthSmall'] ) && $attributes['excerptLengthSmall']  > 0 ) ) { ?>
								<div class="bnm-post-excerpt">
									<?php echo wp_kses_post( BNM_Blocks::get_excerpt_by_id( get_the_id(), $attributes['excerptLengthSmall'] ) ); ?>

									<?php if ( $attributes['showReadMoreSmall'] && ! empty( $attributes['readMoreLabel'] ) ) { ?>
										<span class="bnm-readmore">
											<a href="<?php the_permalink(); ?>" class="bnm-readmore-link">
												<?php the_title( '<span class="screen-reader-text">', '</span>' ); ?>
												<?php echo esc_html( $attributes['readMoreLabel'] ); ?>
											</a>
										</span>
									<?php } ?>
								</div>
							<?php } ?>
						</div>
					</div><!-- .bnm-pb2-small-post -->
				<?php } ?>

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
	
	$css = new Post_Block_2_CSS();
	$styles = $css->render_css( $attributes );

	$classes = '';

	if ( isset( $attributes['categoryBGColor'] ) ) {
		$classes .= 'has-category-background';
	}

	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $classes ) );
	
	return sprintf( '<div %1$s style="%2$s">%3$s</div>', 
		$wrapper_attributes, 
		esc_attr( $styles ), 
		$block
	);

}