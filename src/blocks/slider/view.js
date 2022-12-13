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
            document.querySelectorAll( '.thbnm-swiper-block' )
        );

        blocksArray.forEach( block => {
            //const slidesPerView = parseInt( block.dataset.slidesPerView );
            //const slideCount = parseInt( block.dataset.slideCount );

            console.log( block.querySelector( '.swiper' ) );
            
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
                    aspectRatio: 0.75,
					autoplay: true,
					delay: 5 * 1000,
                    initialSlide: 1
                }
            );
        } );
    } );
}