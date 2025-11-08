<?php

use ThemezHut\BNM_Blocks\Main;
use ThemezHut\BNM_Blocks\CSS\Blocks\Post_Slider_1_CSS;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function bnmbt_posts_slider_block_1_init() {

	register_block_type( BNMBT__PLUGIN_DIR . 'build/blocks/posts/slider', array(
		'api_version'		=> 2,
		'render_callback'	=> 'bnmbt_posts_slider_block_1_render_callback'
	) );

}
add_action( 'init', 'bnmbt_posts_slider_block_1_init' );


function bnmbt_posts_slider_block_1_render_callback( $attributes ) {
	// Naming convention: '{namespace}-{blockname}-view-script
	wp_enqueue_script( 'bnm-blocks-posts-slider-view-script' );

	$post_query_args = Main::build_articles_query( $attributes );

	$article_query = new WP_Query( $post_query_args );

	$slider_style = isset( $attributes['sliderStyle'] ) ? $attributes['sliderStyle'] : 'style-1';
	$slides_per_view = isset( $attributes['slidesPerView'] ) ? $attributes['slidesPerView'] : 1;
	$asepec_ratio = isset( $attributes['aspectRatio'] ) ? $attributes['aspectRatio'] : 0.5625;
	$space_between_slides = isset( $attributes['spaceBetweenSlides'] ) ? $attributes['spaceBetweenSlides'] : 20;
	$autoplay = isset( $attributes['autoplay'] ) ? $attributes['autoplay'] : false;
	$delay    = isset( $attributes['delay'] ) ? absint( $attributes['delay'] ) : 5;
	$featured_image_slug = ! empty( $attributes['featuredImageSizeSlug'] ) ? $attributes['featuredImageSizeSlug'] : '';
	$slider_thumb_size = ! empty( $attributes['slideThumbSize'] ) ? $attributes['slideThumbSize'] : '';
	$image_fit = ! empty( $attributes['imageFit'] ) ? $attributes['imageFit'] : 'cover';
	$thumbSlidesPerView = isset( $attributes['thumbSlidesPerView'] ) ? $attributes['thumbSlidesPerView'] : 5;
	$slide_image_class = "image-fit-{$image_fit}";

	ob_start(); 

	if ( '' !== $attributes['sectionHeader'] && true === $attributes['showSectionHeader'] ) {
		echo "<div class=\"bnm-block-title-wrap\">";
			$allowed_tags = bnmbt_get_allowed_header_tags();
			$tag = isset( $attributes['headerHtmlTag'] ) && in_array( strtolower( $attributes['headerHtmlTag'] ), $allowed_tags, true ) ? strtolower( $attributes['headerHtmlTag'] ) : 'h2';								
			echo "<". esc_attr($tag) ." class=\"article-section-title\">";
				echo "<span>";
					echo wp_kses_post( $attributes['sectionHeader'] ); 
				echo "</span>";
			echo "</".esc_attr($tag).">";
		echo "</div>";
	}	
	
	?>

	<div class="bnm-slider-wrapper">
	
	<div class="swiper thbnm-swiper">
		<div class="swiper-wrapper">
		
			<?php

			if ( $article_query -> have_posts() ) {

				while ( $article_query -> have_posts() ) {

					$article_query -> the_post();

					?>

						<article class="swiper-slide">
							<figure class="post-thumbnail">
								<?php 
									if ( has_post_thumbnail() ) {
										the_post_thumbnail( $featured_image_slug, [ 'class' => $slide_image_class ] );
									} else {
										//echo '<div class="bnm-img-placeholder"></div>'; 
										?>
										<img src="data:image/gif;base64,R0lGODlhAQABAAAAACw=" alt="">
										<?php
									}
								?>
							</figure>

							<div class="bnmslovrlay">
								<a class="bnmlnkovrlay" href="<?php echo esc_url( get_permalink() ); ?>" aria-label="<?php the_title_attribute(); ?>"></a>
							</div>

							<div class="bnm-slider-content">
								<?php if ( $attributes['showCategory'] ) : ?>
									<div class="bnm-category-list">
										<?php bnmbt_post_categories_list(); ?>
									</div>
								<?php endif; ?>
								
								<?php  if ( $attributes['showTitle'] ) { 
									$allowed_tags = bnmbt_get_allowed_header_tags();
									$tag = isset( $attributes['titleHtmlTag'] ) && in_array( strtolower( $attributes['titleHtmlTag'] ), $allowed_tags, true ) ? strtolower( $attributes['titleHtmlTag'] ) : 'h3';									
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
								</div><!-- .entry-meta -->
							</div><!-- .bnm-slider-content -->
						</article><!-- .swiper-slide -->

					<?php

				} // Endwhile

				wp_reset_postdata();

			} else {
				// No posts found
			}

			?>

		</div><!-- .swiper-wrapper -->
		
		

	</div><!-- .swiper -->

	<?php if ( $attributes['hidePagination'] === false ) : ?>
		<div class="swiper-pagination"></div>
	<?php endif; ?>

	<?php if ( $attributes['hideNextPrevBtns'] === false ) : ?>
		<div class="bnm-swiper-button-prev"></div>
		<div class="bnm-swiper-button-next"></div>
	<?php endif; ?>	

	</div><!-- .bnm-slider-wrapper -->

	<?php if ( $attributes['sliderStyle'] === 'style-4' ) : ?>
		<div thumbsSlider="" class="bnm-thumbnail-swiper swiper">
			<div class="swiper-wrapper">
			<?php

				if ( $article_query -> have_posts() ) {
					
					while ( $article_query -> have_posts() ) {
						
						$article_query -> the_post(); ?>

						<div class="swiper-slide">
							<div class="bnm-swiper-thumb-bg">
								<?php 
									if ( has_post_thumbnail() ) {
										the_post_thumbnail( $slider_thumb_size );
									} else {
										echo '<div class="bnm-img-thumb-placeholder"></div>';
									}
								?>
							</div>
						</div><!-- .swiper-slide -->

						<?php

					} // Endwhile

					wp_reset_postdata();

				} else {
					// No posts found
				}

			?>
			</div><!-- .swiper-wrapper -->
		</div><!-- .swiper .bnm-swiper-wrappr -->
	<?php endif; ?>

	

	<?php 

	$slider_block = ob_get_clean();

	// Slider style class name.
	$slider_style_class = 'bnm-sw-' . $attributes['sliderStyle'];

	$classes = array( 'wpbnmposw', 'bnmbcs', $slider_style_class );

	if ( $attributes['categoryBGColor'] || $attributes['categoryBGHoverColor'] || ! empty($attributes['categoryPadding']) ) {
		$classes[] = 'bnm-box-cat';
	}

	if ( $attributes['sectionHeaderStyle'] ) {
		$classes[] = 'bnm-bhs-' . $attributes['sectionHeaderStyle'];
	}	

	$css = new Post_Slider_1_CSS();
	$styles = $css->render_css( $attributes );

	$wrapper_attributes = get_block_wrapper_attributes( array( 
		'class' => implode( ' ', $classes ),
		'style' => $styles,
	) );

	$data_attributes = [
		//'data-current-post-id=' . $post_id,
		'data-slider-style=' . $slider_style,
		'data-aspect-ratio=' . $asepec_ratio,
		'data-slides-per-view=' . $slides_per_view,
		'data-space-between-slides=' . $space_between_slides,
		'data-thumb-slides-per-view=' . $thumbSlidesPerView
	];

	if ( $autoplay ) {
		$data_attributes[] = 'data-autoplay=1';
		$data_attributes[] = sprintf( 'data-autoplay_delay=%s', esc_attr( $delay ) );
	}

	return sprintf( '<div %1$s %2$s>%3$s</div>', 
		$wrapper_attributes,
		esc_attr( implode( ' ', $data_attributes ) ),
		$slider_block
	);
}