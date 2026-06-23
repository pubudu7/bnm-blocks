<?php

use ThemezHut\BNM_Blocks\Main;
use ThemezHut\BNM_Blocks\CSS\Blocks\Post_Block_SP_CSS;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function bnmbt_posts_ultra_init() {

	register_block_type( BNMBT__PLUGIN_DIR . 'build/blocks/posts/posts-ultra', array(
		'api_version'		=> 3,
		'render_callback'	=> 'bnmbt_posts_ultra_render_callback'
	) );

}
add_action( 'init', 'bnmbt_posts_ultra_init' );

function bnmbt_posts_ultra_render_callback( $attributes ) {

	$post_query_args = Main::build_articles_query( $attributes );

	$article_query = new WP_Query( $post_query_args );

	$show_featured_image = $attributes[ 'showFeaturedImage' ];
	$image_position = $attributes[ 'imagePosition' ];
	$image_min_height = isset( $attributes[ 'imageMinHeight' ] ) ? (float) $attributes[ 'imageMinHeight' ] : 0;
	
	$allowed_tags = bnmbt_get_allowed_header_tags();
	$title_html_tag = isset( $attributes['titleHtmlTag'] ) && in_array( strtolower( $attributes['titleHtmlTag'] ), $allowed_tags, true ) ? strtolower( $attributes['titleHtmlTag'] ) : 'h3';
	$header_html_tag = isset( $attributes['headerHtmlTag'] ) && in_array( strtolower( $attributes['headerHtmlTag'] ), $allowed_tags, true ) ? strtolower( $attributes['headerHtmlTag'] ) : 'h2';
	
	ob_start();
	?>

	<div class="bnmspp-container">

	<?php 
		if ( '' !== $attributes['sectionHeader'] && true === $attributes['showSectionHeader'] ) {
			echo "<div class=\"bnm-block-title-wrap\">";								
				echo "<". esc_attr($header_html_tag) ." class=\"article-section-title\">";
					echo "<span>";
						echo wp_kses_post( $attributes['sectionHeader'] ); 
					echo "</span>";
				echo "</".esc_attr($header_html_tag).">";
			echo "</div>";
		}

		if ( $article_query -> have_posts() ) {

			while ( $article_query -> have_posts() ) {

				$article_query -> the_post(); 

				$post_classes = 'bnmsp-post';

				$has_post_thumbnail = has_post_thumbnail();
				
				if ( $show_featured_image && $has_post_thumbnail ) {
					$post_classes .= ' post-has-image';
				}

				$article_styles = '';

				if ( "behind" === $image_position && $show_featured_image && $has_post_thumbnail ) {
					$article_styles .= "min-height: {$image_min_height}vh;";
					$article_styles .= "padding-top: " . ( $image_min_height / 5 ) . "vh;";
				}
				
				?>
				
				<article class="<?php echo esc_attr( $post_classes ); ?>" style="<?php echo esc_attr( $article_styles ); ?>">
					<?php if ( $show_featured_image && $has_post_thumbnail ) : ?>
						<figure class="post-thumbnail">
							<a href="<?php the_permalink(); ?>" aria-label="<?php the_title_attribute(); ?>">
								<?php the_post_thumbnail( $attributes['featuredImageSizeSlug'] ); ?>
							</a>
						</figure>
					<?php endif; ?>

					<div class="bnm-entry-wrapper">

						<?php if ( $attributes['showCategory'] ) { ?>
							<div class="bnm-category-list">
								<?php bnmbt_post_categories_list(); ?>
							</div>
						<?php } ?>

						<?php 
							if ( $attributes['showTitle'] ) {								
								echo "<". esc_attr($title_html_tag) ." class=\"entry-title\">";
								?>
									<a href="<?php echo esc_url( get_permalink() ); ?>" rel="bookmark">
										<?php the_title(); ?>
									</a>
								
							<?php 
								echo "</".esc_attr($title_html_tag).">";
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

				</article>
		<?php

			} // Endwhile;

			wp_reset_postdata();	

		} // Endif;

		?>

	</div><!-- .bnmspp-container -->
	
	<?php

	
	$block = ob_get_clean();
	
	$css = new Post_Block_SP_CSS();
	$styles = $css->render_css( $attributes );

	$classes = array( 'wpbnmspp', 'bnmbcs' );

	if ( $attributes['categoryBGColor'] || $attributes['categoryBGHoverColor'] || ! empty($attributes['categoryPadding']) ) {
		$classes[] = 'bnm-box-cat';
	}

	if ( isset( $attributes['postLayout'] ) && 'grid' === $attributes['postLayout'] ) {
		$classes[] = 'is-grid';
	}

	if ( isset( $attributes['columns'] ) && 'grid' === $attributes['postLayout'] ) {
		$classes[] = sanitize_html_class( 'columns-' . $attributes['columns'] );
	}

	if ( $show_featured_image && isset( $image_position ) ) {
		$classes[] = sanitize_html_class( 'image-align' . $image_position );
	}

	if ( $attributes['textAlign'] ) {
		$classes[] = sanitize_html_class( 'has-text-align' . $attributes['textAlign'] );
	}

	if ( "33%" !== $attributes['featuredImageWidth'] || "67%" !== $attributes['entryContentWidth'] ) {
		$classes[] = 'custom-image-width';
	}

	if ( $attributes['hasPostBorder'] ) {
		$classes[] = 'is-style-bnm-borders';
	}

	if ( $attributes['sectionHeaderStyle'] ) {
		$classes[] = sanitize_html_class( 'bnm-bhs-' . $attributes['sectionHeaderStyle'] );
	}

	if ( ! empty( $attributes['featuredImageMargin'] ) ) {
		$classes[] = 'custom-image-margin';
	}

	$wrapper_attributes = get_block_wrapper_attributes( array( 
		'class' => implode( ' ', $classes ),
		'style' => $styles,
	) );
	
	return sprintf( '<div %1$s>%2$s</div>', 
		$wrapper_attributes, 
		$block
	);

}