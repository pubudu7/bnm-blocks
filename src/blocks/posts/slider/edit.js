/**
 * External dependencies
 */
import { isUndefined, pickBy } from 'lodash';
import classnames from 'classnames';

/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { 
	useBlockProps,
	RichText,
	InspectorControls,
	store as blockEditorStore
} from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { useInstanceId } from '@wordpress/compose';
import { store as coreStore } from '@wordpress/core-data';
import { useRef, useEffect } from '@wordpress/element';
import {
	PanelBody,
	Placeholder,
	Spinner
} from '@wordpress/components';

/**
 * Internal Dependencies.
 */
import './editor.scss';
import QueryControls from '../../../components/query-controls/index.js';
import createSwiper from './create-swiper.js';
import { SliderSettings } from './slider-controls.js'; 
import {
	PostTitle,
	PostCategories,
	PostAuthor,
	PostAuthorAvatar,
	PostDateTime,
	PostCommentCount,
} from '../../../components/meta/meta.js';
import {
	getFeaturedImageDetails,
} from '../../../components/meta/meta-helper.js';
import {
	mightBeUnit,
	boxValues,
	hasValueOnBox
} from '../../../shared/js/utils.js';

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

export default function PostsSliderEdit( {
	attributes,
	setAttributes,
} ) {
	const {
		queryId,
		query,
		specificMode,
		specificPosts,
		imageFit,
		hidePagination,
        hideNextPrevBtns,
		showTitle,
        showDate,
        showCategory,
        showAuthor,
        showAvatar,
		showCommentCount,
		categoryPadding
	} = attributes;

	const {
		author,
		order,
		orderBy,
		perPage,
		taxQuery
	} = query;

	const postQueryArgs = {
		author,
		order,
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
		authorsList
	} = useSelect( ( select ) => {
		const { getEntityRecords, getUsers } = select( coreStore );

		const postQuery = pickBy(
			postQueryArgs,
			( value ) => ! isUndefined( value )
		);

		let posts;

		if ( specificMode && specificPosts.length ) {
			posts = getEntityRecords( 'postType', 'post', {
				include: specificPosts,
				orderby: 'include',
				per_page: specificPosts.length,
				_embed: 'wp:featuredmedia'
			} );
		} else {
			posts = getEntityRecords( 
				'postType', 
				'post',
				postQuery 
			);
		}

		return {
			posts,
			categoriesList: getEntityRecords(
				'taxonomy',
				'category',
				CATEGORIES_LIST_QUERY
			),
			authorsList: getUsers( USERS_LIST_QUERY ),
		}

	}, [ 
		author,
		order,
		orderBy,
		perPage,
		taxQuery,
		specificPosts 
	] );

	const { __unstableMarkNextChangeAsNotPersistent } = useDispatch(
		blockEditorStore
	);
	const instanceId = useInstanceId( PostsSliderEdit );

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

	const updateQuery = ( newQuery ) =>
		setAttributes( { query: { ...query, ...newQuery } } );

	const carouselRef = useRef(null);
	const btnPlayRef = useRef(null);
	const btnPauseRef = useRef(null);
	const btnNextRef = useRef(null);
	const btnPrevRef = useRef(null);
	const paginationRef = useRef(null);

	const { aspectRatio, autoplay, delay } = attributes;

	useEffect( () => {
		
		//const swiperInstance = initializeSwiper( 0 );

		const initialSlide = 0;

		const swiperInstance = createSwiper( 
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

		return () => {
			swiperInstance.destroy();
		}
		
	}, [aspectRatio, autoplay, delay] );

	let hasCategoryClass = false;

	if ( Object.keys(categoryPadding).length !== 0 && categoryPadding.constructor === Object ) {
		if ( hasValueOnBox(categoryPadding) ) {
			hasCategoryClass = true;
		}
	} 
	
	if ( attributes.categoryBGColor || attributes.categoryBGHoverColor ) {
		hasCategoryClass = true;
	}

	//const hasPosts = !! posts?.length;
	const inlineStyles = {
		'--bnm-title-font-size': mightBeUnit(attributes.titleFontSize),
		'--bnm-title-line-height': attributes.titleLineHeight,
		'--bnm-title-letter-spacing': attributes.titleLetterSpacing,
		'--bnm-title-margin': boxValues(attributes.titleMargin),
		'--bnm-title-padding': boxValues(attributes.titlePadding),
		'--bnm-title-color': attributes.titleColor,
		'--bnm-title-hover-color': attributes.titleHoverColor,
		'--bnm-category-font-size': mightBeUnit(attributes.categoryFontSize),
		'--bnm-category-line-height': attributes.categoryLineHeight,
		'--bnm-category-letter-spacing': attributes.categoryLetterSpacing,
		'--bnm-category-color': attributes.categoryColor,
		'--bnm-category-hover-color': attributes.categoryHoverColor,
		'--bnm-category-bg-color': attributes.categoryBGColor,
		'--bnm-category-bg-hover-color': attributes.categoryBGHoverColor,
		'--bnm-category-padding': boxValues(categoryPadding),
		'--bnm-category-margin': boxValues(attributes.categoryMargin),
		'--bnm-meta-font-size': mightBeUnit(attributes.metaFontSize),
		'--bnm-meta-line-height': attributes.metaLineHeight,
		'--bnm-meta-letter-spacing': attributes.metaLetterSpacing,
		'--bnm-meta-spacing': attributes.metaSpacing,
		'--bnm-meta-padding': boxValues(attributes.metaPadding),
		'--bnm-meta-margin': boxValues(attributes.metaMargin),
		'--bnm-meta-color': attributes.metaColor,
		'--bnm-meta-hover-color': attributes.metaHoverColor,
		'--bnm-header-font-size': mightBeUnit(attributes.headerFontSize),
		'--bnm-header-line-height': attributes.headerLineHeight,
		'--bnm-header-letter-spacing': attributes.headerLetterSpacing,
		'--bnm-header-padding': boxValues(attributes.headerPadding),
		'--bnm-header-margin': boxValues(attributes.headerMargin),
		'--bnm-header-color': attributes.headerColor,
		'--bnm-header-hover-color': attributes.headerHoverColor
	}

	const blockProps = useBlockProps( {
		className: classnames( 
			'wpbnmposw', 'bnmbcs',
			{
				'hide-pagination': hidePagination,
				'hide-next-prev-btns': hideNextPrevBtns,
				'bnm-box-cat': hasCategoryClass
			}	
		),
		style: inlineStyles
	} );

	const inspectorControls = (
		<InspectorControls>
			<PanelBody title={ __( 'Content Settings', 'bnm-blocks' ) } initialOpen={ false }>
				<QueryControls
					attributes={ attributes }
					setQuery={ updateQuery }
					setAttributes={ setAttributes }
					onSpecificModeChange={ () => setAttributes( { specificMode: true } ) }
					onLoopModeChange={ () => setAttributes( { specificMode: false } ) }
				/>
			</PanelBody>
			<SliderSettings
				attributes={ attributes } 
				setAttributes={ setAttributes }
			>
			</SliderSettings>
		</InspectorControls>
	);

	return ( 
		<>
			{ inspectorControls }

			<div { ...blockProps }>

				{ attributes.showSectionHeader && (
					<div className='bnm-block-title-wrap'>
						<RichText
							onChange={ value => setAttributes( { sectionHeader: value } ) }
							placeholder={ __( 'Write section header…', 'bnm-blocks' ) }
							value={ attributes.sectionHeader }
							tagName={ attributes.headerHtmlTag }
							className="article-section-title"
						/>
					</div>
				) }

				{ ! posts && (
					<Placeholder>
						<Spinner />
					</Placeholder>
				) }

				{ posts && posts.length === 0 && (
					<Placeholder>
						{ __( 'No Posts Found For Slider' ) }
					</Placeholder>
				) }
			
				<div className="thbnm-swiper swiper" ref={ carouselRef }>

					<div className="swiper-wrapper">

						{ posts && posts.map( ( post ) => {
							
							const {
								url: imageSourceUrl,
								alt: featuredImageAlt,
							} = getFeaturedImageDetails( post, attributes.featuredImageSizeSlug );

							const currentAuthor = authorsList?.find(
								( writer ) => writer.id === post.author
							);

							return (
								<article className="swiper-slide" key={ post.id }>

									<figure className="post-thumbnail">
										{ imageSourceUrl ? (
											<img
												className={ `image-fit-${ imageFit }` }
												src={ imageSourceUrl }
												alt={ featuredImageAlt }
											/>
										) : (
											<div className="bnm-img-placeholder"></div>
										) }
									</figure>

									<div className="bnmslovrlay inside-gut-editor">
										<a className="bnmlnkovrlay-ge" href="#"></a>
									</div>

									{ ( showCategory || showTitle || showAuthor || showDate || showCommentCount ) && (
										
										<div className="bnm-slider-content">

											{ showCategory && categoriesList && (
												<PostCategories
													categoriesList={categoriesList}
													post={post}
												/>
											) }
											
											{ attributes.showTitle && (
												<PostTitle
													post={post}
													attributes={attributes}
												/>
											) }

											<div className="entry-meta">

												{ showAuthor && showAvatar && currentAuthor && (
													<PostAuthorAvatar
														author={currentAuthor}
													/>
												) }
												
												{ showAuthor && currentAuthor && (
													<PostAuthor
														author={currentAuthor}
													/>
												) }

												{ attributes.showDate && (
													<PostDateTime 
														post={post}
													/>
												) }

												{ attributes.showCommentCount && (
													<PostCommentCount
														post={post}
													/>
												) }

											</div>

										</div>

									) }
								</article>
							);
						} ) }
					</div>

					<div className="swiper-pagination bnm-swiper-pagination" ref={paginationRef}></div>
								
					<div className="swiper-button-prev bnm-swiper-btn-prev" ref={btnPrevRef}></div>
					<div className="swiper-button-next bnm-swiper-btn-next" ref={btnNextRef}></div>
					
				</div>
			
			</div>
		</>
		
	);
}
