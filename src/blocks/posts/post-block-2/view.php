<?php

use ThemezHut\BNM_Blocks\Main;
use ThemezHut\BNM_Blocks\CSS\Blocks\Post_Block_2_CSS;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function bnmbt_post_block_2_init() {

	register_block_type( BNMBT__PLUGIN_DIR . 'build/blocks/posts/post-block-2', array(
		'api_version'		=> 2,
		//'editor_script'	=> 'bnm-blocks-post-block-1',
		'render_callback'	=> 'bnmbt_post_block_2_render_callback'
	) );

}
add_action( 'init', 'bnmbt_post_block_2_init' );

function bnmbt_post_block_2_render_callback( $attributes ) {

	$post_query_args = Main::build_articles_query( $attributes );

	$article_query = new WP_Query( $post_query_args );

	ob_start();
	?>
	<div class="posts-block-2-container">

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
	?>

	<div class="bnm-pb2-posts-grid">

	<?php
		$bnmp_count = 1;

		if ( $article_query -> have_posts() ) {

			while ( $article_query -> have_posts() ) {

				$article_query -> the_post();

				if ( $bnmp_count === 1 || $bnmp_count === 2 ) { ?>
					<article class="bnm-pb2-large">
						<?php if ( has_post_thumbnail() ) : ?>
							<figure class="post-thumbnail">
								<a href="<?php the_permalink(); ?>">
									<?php the_post_thumbnail( 'bnm-featured' ); ?>
								</a>
							</figure>
						<?php endif; ?>

						<div class="bnm-entry-content">

							<?php if ( $attributes['showCategory'] ) { ?>
								<div class="bnm-category-list">
									<?php bnm_blocks_categories_list(); ?>
								</div>
							<?php } ?>

							<?php 
								if ( $attributes['showTitle'] ) {
									the_title( '<h3 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' ); 
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

						</div><!-- ."bnm-pb1-large-post-content -->

					</article><!-- .bnm-pb2-large -->
				<?php } else { ?>
					<article class="bnm-pb2-small">
						<?php if ( has_post_thumbnail() ) : ?>
							<figure class="post-thumbnail">
								<a href="<?php the_permalink(); ?>">
									<?php the_post_thumbnail( 'bnm-featured-thumb' ); ?>
								</a>
							</figure>
						<?php endif; ?>
						<div class="entry-details">
							<?php if ( $attributes['showCategorySmall'] ) { ?>
								<div class="bnm-category-list">
									<?php bnm_blocks_categories_list(); ?>
								</div>
							<?php } ?>

							<?php 
								if ( $attributes['showTitle'] ) {
									the_title( '<h3 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' ); 
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
					</article><!-- .bnm-pb2-small -->
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

	$classes = array( 'wpbnmpb2', 'bnmbcs' );

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