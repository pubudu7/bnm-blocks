<?php

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

	// CSS styles
	$title_color = $attributes[ 'titleColor' ];
	$title_font_size = isset( $attributes[ 'titleFontSize' ] ) ? $attributes[ 'titleFontSize' ] : '';
	$meta_color = $attributes[ 'metaColor' ];
	$meta_font_size = isset( $attributes[ 'metaFontSize' ] ) ? $attributes[ 'metaFontSize' ]: '';
	$category_color = $attributes[ 'categoryColor' ];
	$category_font_size = isset( $attributes[ 'categoryFontSize' ] ) ? $attributes[ 'categoryFontSize' ]: '';

	$title_style = "";
	$title_classes = "bnm-entry-title entry-title";

	$meta_style = "";
	$meta_classes = "bnm-entry-meta entry-meta";

	$category_style = "";
	$category_classes = "bnm-entry-category cat-links bnm-oi-category-list";

	if ( ! empty( $title_color ) ) {
		$title_style .= '
			color: '. $title_color .';
		';
		$title_classes .= " has-custom-title-color";
	}
	if ( ! empty( $title_font_size ) ) {
		$title_style .= '
			font-size: '. $title_font_size .'px;
		';
	}
	
	if ( ! empty( $meta_color ) ) {
		$meta_style .= '
			color: '. $meta_color .';
		';
		$meta_classes .= " has-meta-text-color";
	}
	if ( ! empty( $meta_font_size ) ) {
		$meta_style .= '
			font-size: '. $meta_font_size .'px;
		';
	}

	if ( ! empty( $category_color ) ) {
		$category_style .= '
			color: '. $category_color .';
		';
		$category_classes .= " has-custom-category-color";
	}
	if ( ! empty( $category_font_size ) ) {
		$category_style .= '
			font-size: '. $category_font_size .'px;
		';
	}

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
										the_post_thumbnail();
									} else {
										echo '<div class="thbnm-carousel-img-placeholder"></div>';
									}
								?>
							</figure>

							<div class="bnmslovrlay">
								<a class="bnmlnkovrlay" href="<?php echo esc_url( get_permalink() ); ?>"></a>
							</div>

							<div class="bnm-slider-content">
								<?php if ( $attributes['showCategory'] ) : ?>
									<span class="<?php echo esc_attr( $category_classes ); ?>" style="<?php echo esc_attr( $category_style ); ?>">
										<?php the_category( ' ' ); ?>
									</span>
								<?php endif; ?>
								
								<?php  if ( $attributes['showTitle'] ) { 
									$tag = ( isset ( $attributes['titleHtmlTag'] ) && ! empty( $attributes['titleHtmlTag'] ) ) ? $attributes['titleHtmlTag'] : 'h3';									
									echo "<". esc_attr($tag) ." class=\"". esc_attr( $title_classes ) . "\" style=\"". esc_attr( $title_style)."\">";
									?>
										<a href="<?php echo esc_url( get_permalink() ); ?>" rel="bookmark">
											<?php the_title(); ?>
										</a>
									
								<?php 
									echo "</".esc_attr($tag).">";
								} 
								?>

								<div class="<?php echo esc_attr( $meta_classes ); ?>" style="<?php echo esc_attr( $meta_style ); ?>">
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

	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => implode( ' ', $classes ) ) );

	// TO DO: Apply Styles. For now $style variable is empty.
	$styles = "";

	// aspectRatio: 0.5625,
	// autoplay: true,
	// delay: 5 * 1000,
	// initialSlide: 1

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