import { speak } from '@wordpress/a11y';
import { escapeHTML } from '@wordpress/escape-html';
import { __, sprintf } from '@wordpress/i18n';
// eslint-disable-next-line import/no-unresolved
import Swiper from 'swiper/bundle';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/bundle';

/**
 * A helper for IE11-compatible iteration over NodeList elements.
 *
 * @param {Object}   nodeList List of nodes to be iterated over.
 * @param {Function} cb       Invoked for each iteratee.
 */
 function forEachNode( nodeList, cb ) {
	/**
	 * Calls Array.prototype.forEach for IE11 compatibility.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/NodeList
	 */
	Array.prototype.forEach.call( nodeList, cb );
}

/**
 * Modifies attributes on slide HTML to make it accessible.
 *
 * @param {HTMLElement} slide Slide DOM element
 */
function activateSlide( slide ) {
	if ( slide ) {
		slide.setAttribute( 'aria-hidden', 'false' );
		forEachNode( slide.querySelectorAll( 'a' ), el => el.removeAttribute( 'tabindex' ) );
	}
}

/**
 * Modifies attributes on slide HTML to make it accessible.
 *
 * @param {HTMLElement} slide Slide DOM element
 */
function deactivateSlide( slide ) {
	if ( slide ) {
		slide.setAttribute( 'aria-hidden', 'true' );
		forEachNode( slide.querySelectorAll( 'a' ), el => el.setAttribute( 'tabindex', '-1' ) );
	}
}

export default function createSwiper( element, config={} ) {

	const slides = element.container.querySelectorAll('.swiper-slide');

	const swiper = new Swiper( element.container, {
		slidesPerView: config.slidesPerView,
		grabCursor: true,
		observer: true,
		observeParents: true, 
		a11y: false,
		init: false,
		spaceBetween: 16,
		speed: 400,
		autoplay: !! config.autoplay && {
				delay: config.delay,
				disableOnInteraction: true,
			},
		// Optional parameters
		direction: 'horizontal',
		loop: slides.length > 1,
		initialSlide: config.initialSlide,
		spaceBetween: config.spaceBetweenSlides,
	
		// If we need pagination
		pagination: {
		el: element.pagination,
		clickable: true
		},
	
		// Navigation arrows
		navigation: {
		nextEl: element.next,
		prevEl: element.prev,
		},
		preventClicksPropagation: false, // Necessary for normal block interactions.
		touchStartPreventDefault: false, // Necessary for normal block interactions.
		releaseFormElements: false,
		setWrapperSize: true,

		on: {
				init() {
					forEachNode( this.wrapperEl.querySelectorAll( '.swiper-slide' ), slide =>
						deactivateSlide( slide )
					);

					activateSlide( this.slides[ this.activeIndex ] ); // Set-up our active slide.
				},

				slideChange() {
					const currentSlide = this.slides[ this.activeIndex ];

					deactivateSlide( this.slides[ this.previousIndex ] );

					activateSlide( currentSlide );

					/**
					 * If we're autoplaying, don't announce the slide change, as that would
					 * be supremely annoying.
					 */
					if ( ! this.autoplay?.running ) {
						// Announce the contents of the slide.
						const currentImage = currentSlide.querySelector( 'img' );
						const alt = currentImage ? currentImage?.alt : false;

						const slideInfo = sprintf(
							/* translators: 1: current slide number and 2: total number of slides */
							__( 'Slide %1$s of %2$s', 'bnm-blocks' ),
							this.realIndex + 1,
							this.pagination?.bullets?.length || 0
						);

						speak(
							escapeHTML(
								`${ currentSlide.innerText },
								${
									alt
										? /* translators: the title of the image. */ sprintf(
												__( 'Image: %s, ', 'bnm-blocks' ),
												alt
										)
										: ''
								}
								${ slideInfo }`
							),
							'assertive'
						);
					}
				},
		},
	} );

	/**
	 * Forces an aspect ratio for each slide.
	 */
	function setAspectRatio() {

		const { aspectRatio } = config;
		const slides = Array.from( this.slides );

		slides.forEach( slide => {
		slide.style.height = `${ slide.clientWidth * aspectRatio }px`;
		} );
		
	} 
  
	swiper.on( 'beforeSlideChangeStart', setAspectRatio );
	swiper.on( 'resize', setAspectRatio );

	swiper.init();

	return swiper;
}