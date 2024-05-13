<?php

use ThemezHut\BNM_Blocks\Main;
use ThemezHut\BNM_Blocks\CSS\Blocks\Post_Block_1_CSS;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function bnmbt_post_block_1_init() {

	register_block_type( BNMBT__PLUGIN_DIR . 'build/blocks/posts/post-block-1', array(
		'api_version'		=> 2,
		//'editor_script'	=> 'bnm-blocks-post-block-1',
		'render_callback'	=> 'bnmbt_post_block_1_render_callback'
	) );

}
add_action( 'init', 'bnmbt_post_block_1_init' );

function bnmbt_post_block_1_render_callback( $attributes ) {

	$post_query_args = Main::build_articles_query( $attributes );
	
	$article_query = new WP_Query( $post_query_args );

	$featured_image_slug = ! empty( $attributes['featuredImageSizeSlug'] ) ? $attributes['featuredImageSizeSlug'] : 'bnm-featured';
	$featured_image_slug_small = ! empty( $attributes['featuredImageSizeSlugSmall'] ) ? $attributes['featuredImageSizeSlugSmall'] : 'bnm-featured-thumb';

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
	<div class="pb1-container">

	<?php
		$bnmp_count = 1;

		if ( $article_query -> have_posts() ) {

			while ( $article_query -> have_posts() ) {

				$article_query -> the_post();

				if ( $bnmp_count === 1 ) { ?>

					<div class="bnm-left-block">
						<article class="bnm-pb1-large">
							<?php if ( has_post_thumbnail() ) : ?>
								<figure class="post-thumbnail">
									<a href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
										<?php the_post_thumbnail( $featured_image_slug ); ?>
									</a>
								</figure>
							<?php endif; ?>

							<div class="bnm-entry-wrapper">

								<?php if ( $attributes['showCategory'] ) { ?>
									<div class="bnm-category-list">
										<?php the_category( ' ' ); ?>
									</div>
								<?php } ?>

								<?php 
									if ( $attributes['showTitle'] ) { 
										$tag = ( isset ( $attributes['titleHtmlTag'] ) && ! empty( $attributes['titleHtmlTag'] ) ) ? $attributes['titleHtmlTag'] : 'h3';									
										echo "<". esc_attr($tag) ." class=\"entry-title\">";
										?>
											<a href="<?php echo esc_url( get_permalink() ); ?>" rel="bookmark">
												<?php the_title(); ?>
											</a>
										
									<?php 
										echo "</".esc_attr($tag).">";
									} 
								?>

								<div class="entry-meta">
									<?php 
										$meta_array = array();
										if ( $attributes['showAuthor'] && $attributes['showAvatar'] ) {
											$meta_array[] = 'avatar';
										}
										if ( $attributes['showAuthor'] ) { 
											$meta_array[] = 'author';
										} 
										if ( $attributes['showDate'] ) { 
											$meta_array[] = 'date';
										} 
										if ( $attributes['showCommentCount'] ) { 
											$meta_array[] = 'comments';
										} 
										bnmbt_entry_meta( $meta_array );
									?>
								</div><!-- .entry-meta-->

								<?php if ( $attributes['displayPostExcerpt'] && ( isset( $attributes['excerptLength'] ) && $attributes['excerptLength']  > 0 ) ) { ?>
									<div class="bnm-post-excerpt">
										
										<?php echo wp_kses_post( Main::get_excerpt_by_id( get_the_id(), $attributes['excerptLength'] ) ); ?>
										
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

							</div><!-- ."bnm-entry-wrapper -->

						</article><!-- .bnm-pb1-large -->
					</div><!-- .bnm-left-block -->

					<div class="bnm-right-block">

				<?php } else { ?>
					<article class="bnm-pb1-small">
						<?php if ( has_post_thumbnail() ) : ?>
							<figure class="post-thumbnail">
								<a href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
									<?php the_post_thumbnail( $featured_image_slug_small ); ?>
								</a>
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
									$tag = ( isset ( $attributes['titleHtmlTag'] ) && ! empty( $attributes['titleHtmlTag'] ) ) ? $attributes['titleHtmlTag'] : 'h3';									
									echo "<". esc_attr($tag) ." class=\"entry-title\">";
									?>
										<a href="<?php echo esc_url( get_permalink() ); ?>" rel="bookmark">
											<?php the_title(); ?>
										</a>
									
								<?php 
									echo "</".esc_attr($tag).">";
								} 
							?>
						
							<div class="entry-meta">
								<?php 
									$meta_array = array();
									if ( $attributes['showAuthorSmall'] && $attributes['showAvatarSmall'] ) {
										$meta_array[] = 'avatar';
									}
									if ( $attributes['showAuthorSmall'] ) { 
										$meta_array[] = 'author';
									} 
									if ( $attributes['showDateSmall'] ) { 
										$meta_array[] = 'date';
									} 
									if ( $attributes['showCommentCountSmall'] ) { 
										$meta_array[] = 'comments';
									} 
									bnmbt_entry_meta( $meta_array );
								?>
							</div><!-- .entry-meta -->

							<?php if ( $attributes['displayPostExcerptSmall'] && ( isset( $attributes['excerptLengthSmall'] ) && $attributes['excerptLengthSmall']  > 0 ) ) { ?>
								<div class="bnm-post-excerpt">
									<?php echo wp_kses_post( Main::get_excerpt_by_id( get_the_id(), $attributes['excerptLengthSmall'] ) ); ?>

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
					</article>
				<?php } ?>

					

		<?php

			$bnmp_count++;

			} // Endwhile;

			echo '</div><!-- .bnm-right-block -->';

			wp_reset_postdata();	

		} // Endif;

		?>

		</div>
	
	<?php

	
	$block = ob_get_clean();
	
	$css = new Post_Block_1_CSS();
	$styles = $css->render_css( $attributes );

	$classes = array( 'wpbnmpb1' );

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