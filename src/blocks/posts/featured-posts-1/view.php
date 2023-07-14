<?php

use ThemezHut\BNM_Blocks\CSS\Blocks\Post_Block_1_CSS;

function bnm_blocks_featured_posts_block_1_init() {

	register_block_type( BNM_BLOCKS__PLUGIN_DIR . 'build/blocks/posts/featured-posts-1', array(
		'api_version'		=> 2,
		'render_callback'	=> 'bnm_blocks_featured_posts_block_1_render_callback'
	) );

}
add_action( 'init', 'bnm_blocks_featured_posts_block_1_init' );

function bnm_blocks_featured_posts_block_1_render_callback( $attributes ) {

	$post_query_args = BNM_Blocks::build_articles_query( $attributes );

	$article_query = new WP_Query( $post_query_args );

	$featured_image_slug = ! empty( $attributes['featuredImageSizeSlug'] ) ? $attributes['featuredImageSizeSlug'] : 'bnm-featured';
	$featured_image_slug_small = ! empty( $attributes['featuredImageSizeSlugSmall'] ) ? $attributes['featuredImageSizeSlugSmall'] : 'bnm-featured';

	ob_start();

	if ( '' !== $attributes['sectionHeader'] && true === $attributes['showSectionHeader'] ) {
		echo "<div class=\"bnm-block-title-wrap\">";
			$tag = ( isset ( $attributes['headerHtmlTag'] ) && ! empty( $attributes['headerHtmlTag'] ) ) ? $attributes['headerHtmlTag'] : 'h2';									
			echo "<". esc_attr($tag) ." class=\"article-section-title\">";
				echo "<span>";
					echo wp_kses_post( $attributes['sectionHeader'] ); 
				echo "</span>";
			echo "</".esc_attr($tag).">";
		echo "</div>";
	}

	?>
	<div class="bnm-fp1-container">
	<?php
		$bnmp_count = 1;

		if ( $article_query -> have_posts() ) {

			while ( $article_query -> have_posts() ) {

				$article_query -> the_post(); 

				if ( $bnmp_count === 1 ) { ?>

				<div class="bnm-fp1-left-side">
					<article class="bnm-fp1-large">
						
						<?php 
							if ( has_post_thumbnail() ) {
								the_post_thumbnail( $featured_image_slug, array( 'class' => 'bnm-fp-img') );
							} 
						?>

						<div class="bnmfp1ovrlay">
							<a class="bnmlnkovrlay" href="<?php echo esc_url( get_permalink() ); ?>"></a>
						</div>

						<div class="bnm-fp1-post-content">

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
								<?php 
									if ( $attributes['showAuthor'] && $attributes['showAvatar'] ) {
										bnm_author_avatar();
									}
									if ( $attributes['showAuthor'] ) { 
										bnm_posted_by(); 
									} 
									if ( $attributes['showDate'] ) { 
										bnm_posted_on(); 
									} 
									if ( $attributes['showCommentCount'] ) { 
										bnm_comments_link(); 
									} 
								?>
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
					</article><!-- .bnm-fp1-large -->
				</div><!-- .bnm-fp1-left-side -->

				<div class="bnm-fp1-right-side">

				<?php } elseif ( $bnmp_count === 2 || $bnmp_count === 3 ) { ?>
					<article class="bnm-fp1-small">

						<?php 
							if ( has_post_thumbnail() ) {
								the_post_thumbnail( $featured_image_slug_small, array( 'class' => 'bnm-fp-img') );
							} 
						?>	
						
						<div class="bnmfp1ovrlay">
							<a class="bnmlnkovrlay" href="<?php echo esc_url( get_permalink() ); ?>"></a>
						</div>

						<div class="bnm-fp1-post-content">

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
								<?php 
									if ( $attributes['showAuthorSmall'] && $attributes['showAvatarSmall'] ) {
										bnm_author_avatar();
									}
									if ( $attributes['showAuthorSmall'] ) { 
										bnm_posted_by(); 
									} 
									if ( $attributes['showDateSmall'] ) { 
										bnm_posted_on(); 
									} 
									if ( $attributes['showCommentCountSmall'] ) { 
										bnm_comments_link(); 
									} 
								?>
							</div><!-- .entry-meta-->

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

						</div><!-- ."bnm-fp1-post-content -->

					</article><!-- .bnm-fp1-small -->
				<?php } ?>
		<?php

			$bnmp_count++;

			} // Endwhile;

			echo '</div><!-- .bnm-fp1-right-side -->';

			wp_reset_postdata();	

		} // Endif;

		?>

		</div><!-- .bnm-fp1-container -->
	
	<?php

	
	$block = ob_get_clean();
	
	$css = new Post_Block_1_CSS();
	$styles = $css->render_css( $attributes );

	$classes = array( 'wpbnmfpb1' );

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