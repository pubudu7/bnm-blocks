<?php

use ThemezHut\BNM_Blocks\Main;
use ThemezHut\BNM_Blocks\CSS\Blocks\Post_Block_SP_CSS;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function bnmbt_posts_ultra_init() {

	register_block_type( BNMBT__PLUGIN_DIR . 'build/blocks/posts/posts-ultra', array(
		'api_version'		=> 2,
		'render_callback'	=> 'bnmbt_posts_ultra_render_callback'
	) );

}
add_action( 'init', 'bnmbt_posts_ultra_init' );

function bnmbt_posts_ultra_render_callback( $attributes ) {

	$post_query_args = Main::build_articles_query( $attributes );

	$article_query = new WP_Query( $post_query_args );

	ob_start();
	?>

	<div class="bnmspp-container">

	<?php 
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

		if ( $article_query -> have_posts() ) {

			while ( $article_query -> have_posts() ) {

				$article_query -> the_post(); 

				$post_classes = 'bnmsp-post';

				$has_post_thumbnail = has_post_thumbnail();
				
				if ( $attributes[ 'showFeaturedImage' ] && $has_post_thumbnail ) {
					$post_classes .= ' post-has-image';
				}

				$article_styles = '';

				if ( "behind" === $attributes[ 'imagePosition' ] && $attributes[ 'showFeaturedImage' ] && $has_post_thumbnail ) {
					$article_styles .= "min-height: ". $attributes[ 'imageMinHeight' ] ."vh;";
				}

				if ( "behind" === $attributes[ 'imagePosition' ] && $attributes[ 'showFeaturedImage' ] && $has_post_thumbnail ) {
					$padding_top = $attributes[ 'imageMinHeight' ] / 5;
					$article_styles .= " padding-top: ". $padding_top ."vh;";
				}
				
				?>
				
				<article class="<?php echo esc_attr( $post_classes ); ?>" style="<?php echo esc_attr( $article_styles ); ?>">
					<?php if ( $has_post_thumbnail ) : ?>
						<figure class="post-thumbnail">
							<a href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
								<?php the_post_thumbnail( $attributes['featuredImageSizeSlug'] ); ?>
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
								if ( $attributes['showAuthor'] && $attributes['showAvatar'] ) {
									bnmbt_author_avatar();
								}
								if ( $attributes['showAuthor'] ) { 
									bnmbt_posted_by(); 
								} 
								if ( $attributes['showDate'] ) { 
									bnmbt_posted_on(); 
								} 
								if ( $attributes['showCommentCount'] ) { 
									bnmbt_comments_link(); 
								} 
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

	$classes = array( 'wpbnmspp' );

	if ( $attributes['categoryBGColor'] || $attributes['categoryBGHoverColor'] || ! empty($attributes['categoryPadding']) ) {
		$classes[] = 'bnm-box-cat';
	}

	if ( isset( $attributes['postLayout'] ) && 'grid' === $attributes['postLayout'] ) {
		$classes[] = 'is-grid';
	}

	if ( isset( $attributes['columns'] ) && 'grid' === $attributes['postLayout'] ) {
		$classes[] = 'columns-' . $attributes['columns'];
	}

	if ( $attributes['showFeaturedImage'] && isset( $attributes['imagePosition'] ) ) {
		$classes[] = 'image-align' . $attributes['imagePosition'];
	}

	if ( $attributes['textAlign'] ) {
		$classes[] = 'has-text-align' . $attributes['textAlign'];
	}

	if ( "33%" !== $attributes['featuredImageWidth'] || "67%" !== $attributes['entryContentWidth'] ) {
		$classes[] = 'custom-image-width';
	}

	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => implode( ' ', $classes ) ) );
	
	return sprintf( '<div %1$s style="%2$s">%3$s</div>', 
		$wrapper_attributes, 
		esc_attr( $styles ), 
		$block
	);

}