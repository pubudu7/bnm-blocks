/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';

/**
 * Internal dependencies
 */
import createSwiper from './create-swiper';
import './style.scss';

if ( typeof window !== 'undefined' ) {
    domReady( () => {
        const blocksArray = Array.from(
            document.querySelectorAll( '.wp-block-bnm-blocks-posts-slider' )
        );

        blocksArray.forEach( block => {
            //const slidesPerView = parseInt( block.dataset.slidesPerView );
            //const slideCount = parseInt( block.dataset.slideCount );

            console.log( block.dataset.aspectRatio );
            
            createSwiper(
                {
                    block,
                    container: block.querySelector( '.swiper' ),
                    prev: block.querySelector( '.swiper-button-prev' ),
                    next: block.querySelector( '.swiper-button-next' ),
                    pagination: block.querySelector( '.swiper-pagination' ),
                    pause: block.querySelector( '.swiper-button-pause' ),
                    play: block.querySelector( '.swiper-button-play' ,)
                },
                {
                    aspectRatio: parseFloat( block.dataset.aspectRatio ),
					autoplay: !! parseInt( block.dataset.autoplay ),
					delay: parseInt( block.dataset.autoplay_delay ) * 1000,
                    initialSlide: 1 
                }
            );
        } );
    } );
}