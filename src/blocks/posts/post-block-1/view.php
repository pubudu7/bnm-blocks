<?php

function bnm_blocks_post_block_1_init() {

	//$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/blocks/slider/index.asset.php' );

	// wp_register_script(
	// 	'bnm-blocks-post-block-1',
	// 	plugins_url( 'build/index.js', __FILE__ ),
	// 	$asset_file[ 'dependencies' ],
	// 	$asset_file[ 'version' ]
	// );

	register_block_type( BNM_BLOCKS__PLUGIN_DIR . 'build/blocks/posts/post-block-1', array(
		'api_version'		=> 2,
		//'editor_script'	=> 'bnm-blocks-post-block-1',
		'render_callback'	=> 'bnm_blocks_post_block_1_render_callback'
	) );

}
add_action( 'init', 'bnm_blocks_post_block_1_init' );

function bnm_blocks_post_block_1_render_callback( $attributes ) {

	$post_query_args = BNM_Blocks::build_articles_query( $attributes );

	$article_query = new WP_Query( $post_query_args );

	$styles = '';
	// '--title-font-size': mightBeUnit( attributes.titleFontSize ),
	// '--title-font-size-small': mightBeUnit( attributes.titleFontSizeSmall ),
	// '--title-line-height': attributes.titleLineHeight,
	// '--title-line-height-small': attributes.titleLineHeightSmall,
	// '--title-letter-spacing': attributes.titleLetterSpacing,
	// '--title-letter-spacing-small': attributes.titleLetterSpacingSmall,

	
	if ( '' !== $attributes['titleFontSize'] ) {
		$styles .= '--title-font-size:' . $attributes['titleFontSize'] . 'px;';
	}
	if ( ! empty( $attributes['titleFontSizeSmall'] ) ) {
		$styles .= '--title-font-size-small:' . $attributes['titleFontSizeSmall'] . 'px;';
	}
	if ( ! empty( $attributes['titleLineHeight'] ) ) {
		$styles .= '--title-line-height:' . $attributes['titleLineHeight'].';';
	}
	if ( ! empty( $attributes['titleLineHeightSmall'] ) ) {
		$styles .= '--title-line-height-small:' . $attributes['titleLineHeightSmall'].';';
	}
	if ( ! empty( $attributes['titleLetterSpacing'] ) ) {
		$styles .= '--title-letter-spacing:' . $attributes['titleLetterSpacing'].';';
	}
	if ( ! empty( $attributes['titleLetterSpacingSmall'] ) ) {
		$styles .= '--title-letter-spacing-small:' . $attributes['titleLetterSpacingSmall'].';';
	}

	ob_start();
	?>
	<div>
		<div class="posts-block-1-container">

		<?php
			$bnmp_count = 1;

			if ( $article_query -> have_posts() ) {

				while ( $article_query -> have_posts() ) {

					$article_query -> the_post();

					if ( $bnmp_count === 1 ) { ?>

						<div class="bnm-left-block">
							<div class="bnm-pb1-large-post">
								<?php if ( has_post_thumbnail() ) : ?>
									<figure class="wp-block-bnm-pb1-image-big">
										<?php the_post_thumbnail( 'bnm-featured' ); ?>
									</figure>
								<?php endif; ?>

								<div class="bnm-pb1-large-post-content">

									<div class="bnm-nb-category-list">
										<?php the_category( ' ' ); ?>
									</div>

									<?php the_title( '<h3 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' ); ?>

									<div class="entry-meta">
										<span class="bnm-nb-post-author">
											<?php bnm_posted_by(); ?>
										</span>

										<span class="bnm-nb-post-date">
											<?php bnm_posted_on(); ?>
										</span>

										<span class="bnm-nb-comment-count">
											<?php bnm_comments_link(); ?>
										</span>
									</div><!-- .entry-meta-->

									<?php if ( $attributes['displayPostExcerpt'] && ( isset( $attributes['excerptLength'] ) && $attributes['excerptLength']  > 0 ) ) { ?>
										<div class="bnm-nb-post-excerpt">
											<?php echo wp_kses_post( BNM_Blocks::get_excerpt_by_id( get_the_id(), $attributes['excerptLength'] ) ); ?>
										</div>
									<?php } ?>

								</div><!-- ."bnm-pb1-large-post-content -->

							</div><!-- .bnm-pb1-large-post -->
						</div><!-- .bnm-left-block -->

						<div class="bnm-right-block">

					<?php } else { ?>
						<div class="bnm-pb1-small-post">
							<?php if ( has_post_thumbnail() ) : ?>
								<figure class="wp-block-bnm-pb1-image-small">
									<?php the_post_thumbnail( 'bnm-featured-thumb' ); ?>
								</figure>
							<?php endif; ?>
							<div class="entry-details">
								<?php the_title( '<h3 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' ); ?>
							
								<div class="entry-meta">
									<?php if ( $attributes['showAuthorSmall'] ) { ?>
										<span class="bnm-nb-post-author">
											<?php bnm_posted_by(); ?>
										</span>
									<?php } ?>

									<?php if ( $attributes['showDateSmall'] ) { ?>
										<span class="bnm-nb-post-date">
											<?php bnm_posted_on(); ?>
										</span>
									<?php } ?>

									<?php if ( $attributes['showCommentCountSmall'] ) { ?>
										<span class="bnm-nb-comment-count">
											<?php bnm_comments_link(); ?>
										</span>
									<?php } ?>
								</div><!-- .entry-meta -->
								<?php if ( $attributes['displayPostExcerptSmall'] && ( isset( $attributes['excerptLengthSmall'] ) && $attributes['excerptLengthSmall']  > 0 ) ) { ?>
									<div class="bnm-nb-post-excerpt">
										<?php echo wp_kses_post( BNM_Blocks::get_excerpt_by_id( get_the_id(), $attributes['excerptLengthSmall'] ) ); ?>
									</div>
								<?php } ?>
							</div>
						</div>
					<?php } ?>

						

			<?php

				$bnmp_count++;

				} // Endwhile;

				echo '</div><!-- .bnm-right-block -->';

				wp_reset_postdata();	

			} // Endif;

			?>

		</div>
	</div>
	<?php

	$wrapper_attributes = get_block_wrapper_attributes();
	$block = ob_get_clean();
	
	return sprintf( '<div %1$s style="%2$s">%3$s</div>', 
		$wrapper_attributes, 
		esc_attr( $styles ), 
		$block
	);

}