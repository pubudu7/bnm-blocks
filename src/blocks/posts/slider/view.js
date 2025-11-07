/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';

/**
 * Internal dependencies
 */
import createSwiper from './create-swiper';
//import './style.scss';

if ( typeof window !== 'undefined' ) {
    domReady( () => {
        const blocksArray = Array.from(
            document.querySelectorAll( '.wp-block-bnm-blocks-posts-slider' )
        );

        blocksArray.forEach( block => {            
            createSwiper(
                {
                    block,
                    container: block.querySelector( '.thbnm-swiper' ),
                    prev: block.querySelector( '.bnm-swiper-button-prev' ),
                    next: block.querySelector( '.bnm-swiper-button-next' ),
                    pagination: block.querySelector( '.swiper-pagination' ),
                    pause: block.querySelector( '.swiper-button-pause' ),
                    play: block.querySelector( '.swiper-button-play' ,)
                },
                {
                    sliderStyle: block.dataset.sliderStyle,
                    aspectRatio: parseFloat( block.dataset.aspectRatio ),
					autoplay: !! parseInt( block.dataset.autoplay ),
					delay: parseInt( block.dataset.autoplay_delay ) * 1000,
                    initialSlide: 0,
                    slidesPerView: parseInt( block.dataset.slidesPerView ),
                    spaceBetweenSlides: parseInt( block.dataset.spaceBetweenSlides ),
                    thumbSlidesPerView: parseInt( block.dataset.thumbSlidesPerView )
                }
            );
        } );
    } );
}