<?php

use ThemezHut\BNM_Blocks\CSS\Blocks\Post_Slider_1_CSS;

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_bnm_blocks_block_init() {

	//$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/blocks/slider/index.asset.php' );

	// wp_register_script(
	// 	'bnm-blocks-post-block-1',
	// 	plugins_url( 'build/index.js', __FILE__ ),
	// 	$asset_file[ 'dependencies' ],
	// 	$asset_file[ 'version' ]
	// );

	register_block_type( BNM_BLOCKS__PLUGIN_DIR . 'build/blocks/slider', array(
		'api_version'		=> 2,
		//'editor_script'	=> 'bnm-blocks-post-block-1',
		'render_callback'	=> 'bnm_blocks_slider_posts_block_1_render_callback'
	) );

}
add_action( 'init', 'create_block_bnm_blocks_block_init' );


function bnm_blocks_slider_posts_block_1_render_callback( $attributes ) {
	// Naming convention: '{namespace}-{blockname}-view-script
	wp_enqueue_script( 'bnm-blocks-posts-slider-view-script' );

	$post_query_args = BNM_Blocks::build_articles_query( $attributes );

	$article_query = new WP_Query( $post_query_args );

	$autoplay = isset( $attributes['autoplay'] ) ? $attributes['autoplay'] : false;
	$delay    = isset( $attributes['delay'] ) ? absint( $attributes['delay'] ) : 5;
	$featured_image_slug = ! empty( $attributes['featuredImageSizeSlug'] ) ? $attributes['featuredImageSizeSlug'] : 'bnm-featured';
	$image_fit = ! empty( $attributes['imageFit'] ) ? $attributes['imageFit'] : 'cover';
	$slide_image_class = "image-fit-{$image_fit}"

	?>

	<?php ob_start(); ?>

	<div class="swiper thbnm-swiper">
		<div class="swiper-wrapper">
		
			<?php

			if ( $article_query -> have_posts() ) {

				while ( $article_query -> have_posts() ) {

					$article_query -> the_post();

					?>

						<div class="swiper-slide">
							<figure class="post-thumbnail">
								<?php 
									if ( has_post_thumbnail() ) {
										the_post_thumbnail( $featured_image_slug, [ 'class' => $slide_image_class ] );
									} else {
										echo '<div class="bnm-img-placeholder"></div>';
									}
								?>
							</figure>

							<div class="bnmslovrlay">
								<a class="bnmlnkovrlay" href="<?php echo esc_url( get_permalink() ); ?>"></a>
							</div>

							<div class="bnm-slider-content">
								<?php if ( $attributes['showCategory'] ) : ?>
									<div class="bnm-category-list">
										<?php the_category( ' ' ); ?>
									</div>
								<?php endif; ?>
								
								<?php  if ( $attributes['showTitle'] ) { 
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
								</div><!-- .entry-meta -->
							</div><!-- .bnm-slider-content -->
						</div><!-- .swiper-slide -->

					<?php

				} // Endwhile

				wp_reset_postdata();

			} else {
				// No posts found
			}

			?>

		</div><!-- .swiper-wrapper -->
		
		<?php if ( $attributes['hidePagination'] === false ) : ?>
			<div class="swiper-pagination"></div>
		<?php endif; ?>

		<?php if ( $attributes['hideNextPrevBtns'] === false ) : ?>
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		<?php endif; ?>	

	</div><!-- .swiper -->

	<?php 

	$slider_block = ob_get_clean();

	$classes = array( 'wpbnmposw' );

	if ( $attributes['categoryBGColor'] || $attributes['categoryBGHoverColor'] || ! empty($attributes['categoryPadding']) ) {
		$classes[] = 'bnm-box-cat';
	}

	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => implode( ' ', $classes ) ) );

	$css = new Post_Slider_1_CSS();
	$styles = $css->render_css( $attributes );

	$data_attributes = [
		//'data-current-post-id=' . $post_id,
		'data-aspect-ratio=' . $attributes['aspectRatio'],
	];

	if ( $autoplay ) {
		$data_attributes[] = 'data-autoplay=1';
		$data_attributes[] = sprintf( 'data-autoplay_delay=%s', esc_attr( $delay ) );
	}

	return sprintf( '<div %1$s style="%2$s" %3$s>%4$s</div>', 
		$wrapper_attributes, 
		esc_attr( $styles ), 
		esc_attr( implode( ' ', $data_attributes ) ),
		$slider_block
	);
}