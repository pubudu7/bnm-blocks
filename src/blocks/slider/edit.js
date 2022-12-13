/**
 * External dependencies
 */
import { get, isUndefined, pickBy, isEqual } from 'lodash';
import classnames from 'classnames';

/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { dateI18n, format, getSettings } from '@wordpress/date';
import { 
	useBlockProps,
	store as blockEditorStore
} from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { useInstanceId } from '@wordpress/compose';
import { store as coreStore } from '@wordpress/core-data';
import { store as noticeStore } from '@wordpress/notices';
import { useState, useRef, useEffect } from '@wordpress/element';

/**
 * Internal Dependencies.
 */
import './editor.scss';
import QueryInspectorControls from '../../components/query-controls';
import createSwiper from './create-swiper';
import { SliderSettings } from './slider-controls'; 

/**
 * Module Constants.
 */
const DEFAULTS_POSTS_PER_PAGE = 5;
const CATEGORIES_LIST_QUERY = {
	per_page: -1,
	context: 'view',
};
const USERS_LIST_QUERY = {
	per_page: -1,
	has_published_posts: [ 'post' ],
	context: 'view',
};

export function QueryContent( {
	attributes,
	setAttributes,
} ) {
	const {
		queryId,
		query,
		imageFit,
		hidePagination,
        hideNextPrevBtns,
		showTitle,
		titleFontSize,
		titleColor,
		titleHoverColor,
		titleLineHeight,
        showDate,
        showCategory,
        showAuthor,
        showAvatar,
		showCommentCount,
		metaFontSize,
        metaColor,
        metaHoverColor,
        categoryFontSize,
        categoryColor,
        categoryHoverColor,
        categoryBGColor,
        categoryBGHoverColor
	} = attributes;

	const {
		author,
		order,
		orderBy,
		perPage,
		taxQuery
	} = query;

	const [ swiperInstance, setSwiperInstance ] = useState(null);

	const postQueryArgs = {
		author: author,
		order: order,
		orderby: orderBy,
		per_page: perPage,
		_embed: 'wp:featuredmedia',
	};

	if ( taxQuery ) {
		postQueryArgs.categories = taxQuery.category;
		postQueryArgs.tags = taxQuery.post_tag; 
	}

	// const sticky = query.sticky;
	
	const { 
		posts,
		categoriesList,
		authorList
	} = useSelect( ( select ) => {
		
		const postQuery = pickBy(
			postQueryArgs,
			( value ) => ! isUndefined( value )
		);

		const { getEntityRecords, getUsers } = select( coreStore );

		return {
			posts: getEntityRecords( 
				'postType', 
				'post',
				postQuery 
			),
			categoriesList: getEntityRecords(
				'taxonomy',
				'category',
				CATEGORIES_LIST_QUERY
			),
			authorList: getUsers( USERS_LIST_QUERY ),
		}

	}, [ 
		author,
		order,
		orderBy,
		perPage,
		taxQuery 
	] );

	const classes = classnames(
		'swiper', 
		'thbnm-swiper',
		{
			'hide-pagination': hidePagination,
			'hide-next-prev-btns': hideNextPrevBtns
		}
	);

	const { __unstableMarkNextChangeAsNotPersistent } = useDispatch(
		blockEditorStore
	);
	const instanceId = useInstanceId( QueryContent );

	const { postsPerPage } = useSelect( ( select ) => {
		const { getSettings } = select( blockEditorStore );
		return {
			postsPerPage:
				+getSettings().postsPerPage || DEFAULTS_POSTS_PER_PAGE,
		};
	}, [] );

	// There are some effects running where some initialization logic is
	// happening and setting some values to some attributes (ex. queryId).
	// These updates can cause an `undo trap` where undoing will result in
	// resetting again, so we need to mark these changes as not persistent
	// with `__unstableMarkNextChangeAsNotPersistent`.

	// Changes in query property (which is an object) need to be in the same callback,
	// because updates are batched after the render and changes in different query properties
	// would cause to override previous wanted changes.
	useEffect( () => { 
		const newQuery = {};
		if ( ! query.perPage && postsPerPage ) {
			newQuery.perPage = postsPerPage;
		}
		if ( !! Object.keys( newQuery ).length ) {
			__unstableMarkNextChangeAsNotPersistent();
			updateQuery( newQuery );
		}
	}, [ query.perPage ] );
	// We need this for multi-query block pagination.
	// Query parameters for each block are scoped to their ID.
	useEffect( () => {
		if ( ! Number.isFinite( queryId ) ) {
			__unstableMarkNextChangeAsNotPersistent();
			setAttributes( { queryId: instanceId } );
		}
	}, [ queryId, instanceId ] );

	// If a user clicks to a link prevent redirection and show a warning.
	const { createWarningNotice, removeNotice } = useDispatch( noticeStore );
	let noticeId;
	const showRedirectionPreventedNotice = ( event ) => {
		event.preventDefault();
		// Remove previous warning if any, to show one at a time per block.
		removeNotice( noticeId );
		noticeId = `bnm-blocks/posts-slider/${ instanceId }`;
		createWarningNotice( __( 'Links are disabled in the editor.' ), {
			id: noticeId,
			type: 'snackbar',
		} );
	};

	function getFeaturedImageDetails( post, size ) {
		const image = get( post, [ '_embedded', 'wp:featuredmedia', '0' ] );
	
		return {
			url:
				image?.media_details?.sizes?.[ size ]?.source_url ??
				image?.source_url,
			alt: image?.alt_text,
		};
	}

	const updateQuery = ( newQuery ) =>
		setAttributes( { query: { ...query, ...newQuery } } );

	const carouselRef = useRef(null);
	const btnPlayRef = useRef(null);
	const btnPauseRef = useRef(null);
	const btnNextRef = useRef(null);
	const btnPrevRef = useRef(null);
	const paginationRef = useRef(null);

	useEffect( () => {

		let initialSlide = 0;

		if ( swiperInstance ) {
			if ( posts && swiperInstance.realIndex < posts.length ) {
				initialSlide = swiperInstance.realIndex;
			}
			swiperInstance.destroy( true, true );
		}
		
		initializeSwiper( initialSlide );

	}, [ attributes ] );

	const initializeSwiper = ( initialSlide ) => {

		const { aspectRatio, autoplay, delay } = attributes;

		const newSwiper = createSwiper( 
			{ 
				block: carouselRef.current,
				container: carouselRef.current,
				next: btnNextRef.current,
				prev: btnPrevRef.current,
				pagination: paginationRef.current
			}, 
			{ 
				initialSlide,
				aspectRatio,
				autoplay,
				delay: delay * 1000
			} 
		);

		if( newSwiper ) {
			setSwiperInstance( newSwiper );
		}
		
	}

	const dateFormat = getSettings().formats.date;

	return ( 
		<>
			<QueryInspectorControls
				attributes={ attributes }
				setQuery={ updateQuery }
			/>
			<SliderSettings
				attributes={ attributes } 
				setAttributes={ setAttributes }
			>
			</SliderSettings>
			<h1>BNM BLOCKS</h1>
			<Fragment>
			{ ! posts && 'Loading' }
			{ posts && posts.length === 0 && 'No Posts' }
			<div className={ classes } ref={ carouselRef }>
				<div className="swiper-wrapper">

					{ posts && posts.map( ( post ) => {
						
						const currentAuthor = authorList?.find(
							( author ) => author.id === post.author
						);
						
						const {
							url: imageSourceUrl,
							alt: featuredImageAlt,
						} = getFeaturedImageDetails( post, 'large' );

						const list = categoriesList;
						const cat = post.categories;
						const categoriesName = [];

						if ( list != undefined && cat != undefined ) {
							for ( let j = 0; j < list.length; j++ ) {
								for ( let i = 0; i < cat.length; i++ ) {
									if ( list[ j ].id === cat[ i ] ) {
										categoriesName.push( list[ j ].name );
									}
								}
							}
						}

						return (
							<div className="swiper-slide" key={ post.id }>

								<figure className="post-thumbnail">
									{ imageSourceUrl ? (
										<img
											className={ `image-fit-${ imageFit }` }
											src={ imageSourceUrl }
											alt={ featuredImageAlt }
										/>
									) : (
										<div className="thbnm-carousel-img-placeholder"></div>
									)
									}
								</figure>

								{ ( showCategory || showTitle || showAuthor || showDate || showCommentCount ) && (
									
									<div className="entry-wrapper">

										{ showCategory && 0 !== categoriesName.length && (
											<div class="bnm-oi-category-list">
												{ categoriesName.map( ( category ) => {
													return (
														<a
														style={{
															fontSize: categoryFontSize,
															color: categoryColor,
															backgroundColor: categoryBGColor
														}}	
														href="#">
															{ category }
														</a>
													);
												} ) }
											</div>
										) }
										
										{ showTitle && (
											<h3 className="entry-title"
												style={ {
													fontSize: titleFontSize,
													lineHeight: titleLineHeight,
												} }
											>
												<a 
													href={ post.link }
													rel="noreferrer noopener"
													onClick={ showRedirectionPreventedNotice }
													style={ {
														color: titleColor
													} }
												>
													{ post.title.rendered ? post.title.rendered : __( 'Default title', 'bnm-blocks' ) }
												</a>
											</h3>
										) }

										<div className="entry-meta">

											{ showAuthor && currentAuthor && (
												<span className="bnm-oi-post-author">
													<a 
														href="#"
														style={{
															fontSize: metaFontSize,
															color: metaColor
														}}>
														{ sprintf(
															/* translators: byline. %s: current author. */
															__( 'by %s' ),
															currentAuthor.name
														) }
													</a>
												</span>
											) }

											{ showDate && post.date_gmt && (
												<time
													dateTime={ format( 'c', post.date_gmt ) }
													className="bnm-oi-post-date"
												>
													<a 
														href="#"
														style={{
															fontSize: metaFontSize,
															color: metaColor
														}}>
														{ dateI18n( dateFormat, post.date_gmt ) }
													</a>
												</time>
											) }

											{ showCommentCount && post.comment_count && (
												<span class="bnm-oi-comment-count">
													<a 
														href="#"
														style={{
															fontSize: metaFontSize,
															color: metaColor
														}}>
														{ post.comment_count }
													</a>
												</span>
											) }

										</div>

									</div>

								) }
							</div>
						);
					} ) }
				</div>
								
				<div className="swiper-pagination thbnm-swiper-pagination" ref={paginationRef}></div>

				<div className="swiper-button-prev thbnm-swiper-btn-prev" ref={btnPrevRef}></div>
				<div className="swiper-button-next thbnm-swiper-btn-next" ref={btnNextRef}></div>
			</div>
			</Fragment>
		</>
		
	);
}

export default function Edit( props ) {

	const Component = QueryContent;
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps } >
			<QueryContent 
				{ ...props }
			/>
			
		</div>
	);
}
