/**
 * External dependencies
 */
import { get, isUndefined, pickBy, startCase, toLower, isNumber } from 'lodash';
import classnames from 'classnames';

/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { dateI18n, format, getSettings } from '@wordpress/date';
import { 
	useBlockProps,
	store as blockEditorStore,
	__experimentalImageSizeControl as ImageSizeControl,
} from '@wordpress/block-editor';
import { PanelBody, TabPanel, SelectControl, ToggleControl } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { useInstanceId } from '@wordpress/compose';
import { store as coreStore } from '@wordpress/core-data';
import { store as noticeStore } from '@wordpress/notices';
import { useEffect } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';

/**
 * Internal Dependencies.
 */
import QueryInspectorControls from '../../../components/query-controls';
import BlockExtraSettings from '../../../components/settings-controls/post-type-1';


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

export default function Edit( { attributes, setAttributes } ) {

    const {
		queryId,
		query,
        showTitle,
        titleHtmlTag,
        titleFontSize,
		titleFontSizeSmall,
        titleLineHeight,
        titleLineHeightSmall,
        titlePadding,
        titleColor,
        titleHoverColor,
		showFeaturedImage,
		showFeaturedImageSmall,
        showDate,
        showCategory,
        showAuthor,
        showAvatar,
        showCommentCount,
		displayPostExcerpt,
		excerptLength,
		showReadMore,
		showReadMoreSmall,
		readMoreLabel,
        showDateSmall,
        showCategorySmall,
        showAuthorSmall,
        showAvatarSmall,
        showCommentCountSmall,
		displayPostExcerptSmall,
		excerptLengthSmall,
        metaFontSize,
        metaFontSizeSmall,
        metaColor,
        metaHoverColor,
        categoryFontSize,
        categoryColor,
        categoryHoverColor,
        categoryBGColor,
        categoryBGHoverColor,
		featuredImageAlign,
		featuredImageSizeSlug,
		featuredImageSizeSlugSmall,
		addLinkToFeaturedImage,
    } = attributes;

	const {
		author,
		order,
		orderBy,
		perPage,
		taxQuery,
		sticky,
	} = query;

	const postQueryArgs = {
		author: author,
		order: order,
		orderby: orderBy,
		per_page: perPage,
		_embed: 'wp:featuredmedia'
	};

	if ( ! sticky ) {
		
	}

	if ( sticky === 'exclude' ) {
		postQueryArgs.sticky = false;
	}

	if ( sticky === 'only' ) {
		postQueryArgs.sticky = true;
	}

	if ( taxQuery ) {
		postQueryArgs.categories = taxQuery.category;
		postQueryArgs.tags = taxQuery.post_tag; 
	}

	const { 
		posts,
		categoriesList,
		authorList
	} = useSelect( ( select ) => {
		const { getEntityRecords, getUsers } = select( coreStore );

		const postQuery = pickBy(
			postQueryArgs,
			( value ) => ! isUndefined( value )
		);

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
		taxQuery,
		sticky,
		featuredImageSizeSlug,
	] );

	const { __unstableMarkNextChangeAsNotPersistent } = useDispatch(
		blockEditorStore
	);
	const instanceId = useInstanceId( Edit );

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

	const px = value => value ? `${ value }px` : value;

	const mightBeUnit = value => isNumber( value ) ? px( value ) : value;

	const mightBeBoxed = value => {
		if ( isObject( value ) ) {
			return boxValues( value );
		}

		return mightBeUnit( value );
	};

	const boxValues = values => {
		if ( Object.keys(values).length !== 0 && values.constructor !== Object ) {
			return `${values['top']} ${values['right']} ${values['bottom']} ${values['left']}`;
		}
		return;
	}

	const dateFormat = getSettings().formats.date;
	
	// What to do for undefined values?
	const inlineStyles = {
		'--title-font-size': mightBeUnit(attributes.titleFontSize),
		'--title-font-size-small': mightBeUnit(attributes.titleFontSizeSmall),
		'--title-line-height': attributes.titleLineHeight,
		'--title-line-height-small': attributes.titleLineHeightSmall,
		'--title-letter-spacing': attributes.titleLetterSpacing,
		'--title-letter-spacing-small': attributes.titleLetterSpacingSmall,
		'--title-padding': boxValues(attributes.titlePadding),
		'--title-margin': boxValues(attributes.titleMargin),
		'--title-color': attributes.titleColor,
		'--title-hover-color': attributes.titleHoverColor,
		'--category-font-size': mightBeUnit(attributes.categoryFontSize),
		'--category-line-height': attributes.categoryLineHeight,
		'--category-letter-spacing': attributes.categoryLetterSpacing,
		'--category-color': attributes.categoryColor,
		'--category-hover-color': attributes.categoryHoverColor,
		'--category-bg-color': attributes.categoryBGColor,
		'--category-bg-hover-color': attributes.categoryBGHoverColor,
		'--category-padding': boxValues(attributes.categoryPadding),
		'--category-margin': boxValues(attributes.categoryMargin),
		'--meta-font-size': mightBeUnit(attributes.metaFontSize),
		'--meta-font-size-small': mightBeUnit(attributes.metaFontSizeSmall),
		'--meta-line-height': attributes.metaLineHeight,
		'--meta-line-height-small': attributes.metaLineHeightSmall,
		'--meta-letter-spacing': attributes.metaLetterSpacing,
		'--meta-letter-spacing-small': attributes.metaLetterSpacingSmall,
		'--meta-spacing': attributes.metaSpacing,
		'--meta-padding': boxValues(attributes.metaPadding),
		'--meta-margin': boxValues(attributes.metaMargin),
		'--meta-color': attributes.metaColor,
		'--meta-hover-color': attributes.metaHoverColor,
		'--excerpt-font-size': mightBeUnit(attributes.excerptFontSize),
		'--excerpt-font-size-small': mightBeUnit(attributes.excerptFontSizeSmall),
		'--excerpt-line-height': attributes.excerptLineHeight,
		'--excerpt-line-height-small': attributes.excerptLineHeightSmall,
		'--excerpt-letter-spacing': attributes.excerptLetterSpacing,
		'--excerpt-letter-spacing-small': attributes.excerptLetterSpacingSmall,
		'--excerpt-padding': boxValues(attributes.excerptPadding),
		'--excerpt-margin': boxValues(attributes.excerptMargin),
		'--excerpt-padding-small': boxValues(attributes.excerptPaddingSmall),
		'--excerpt-margin-small': boxValues(attributes.excerptMarginSmall),
		'--excerpt-color': attributes.excerptColor,
	};

	const blockProps = useBlockProps({
		className: classnames( 'thbnm-post-block-1', {
			'has-category-background': categoryBGColor,
		})
	});

	const updateQuery = ( newQuery ) =>
		setAttributes( { query: { ...query, ...newQuery } } );

	const inspectorControls = (
		<InspectorControls>
			<QueryInspectorControls
				attributes={ attributes }
				setQuery={ updateQuery }
			/>

			<BlockExtraSettings
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>

			<PanelBody title={ __( 'Featured Image Settings', 'bnm-blocks') } initialOpen={ false }>

				<TabPanel
					className="thbnm-featured-image-settings-tab-panel thbnm-tab-panel"
					activeclassName="thbnm-active-tab"
					//onSelect={ onSelect }
					initialTabName="big-post"
					tabs={ [
						{
							name: 'big-post',
							title: 'Big Post',
							className: 'tab-big-post',
						},
						{
							name: 'small-post',
							title: 'Small Posts',
							className: 'tab-small-post',
						},
					] }
				>
					{ ( tab ) => {
						if ( tab.name === 'big-post' ) { 
							return (
								<>
									<ToggleControl
										label={ __( 'Display Featured Image', 'bnm-blocks' ) }
										checked={ showFeaturedImage }
										onChange={ () => setAttributes( { showFeaturedImage: ! showFeaturedImage } ) }
									/>
									{ showFeaturedImage && (
										<SelectControl
											label={ __( 'Image Size', 'bnm-blocks' ) }
											value={ attributes.featuredImageSizeSlug }
											options={ window.themezHutGutenberg.imageSizes.map( size => ({
												label: startCase( toLower( size ) ),
												value: size
											}) ) }
											onChange={ imageSize => setAttributes({ featuredImageSizeSlug: imageSize }) }
										/> 
									) }
								</>
							);
						} else if ( tab.name === 'small-post' ) { 
							return (
								<>
									<ToggleControl
										label={ __( 'Display Featured Image', 'bnm-blocks' ) }
										checked={ showFeaturedImageSmall }
										onChange={ () => setAttributes( { showFeaturedImageSmall: ! showFeaturedImageSmall } ) }
									/>
									{ showFeaturedImageSmall && (
										<SelectControl
											label={ __( 'Image Size(Small)', 'bnm-blocks' ) }
											value={ attributes.featuredImageSizeSlugSmall }
											options={ window.themezHutGutenberg.imageSizes.map( size => ({
												label: startCase( toLower( size ) ),
												value: size
											}) ) }
											onChange={ imageSize => setAttributes( { featuredImageSizeSlugSmall: imageSize } ) }
										/>
									) }
								</>
							); 
						}  
					} }
				</TabPanel>
				
			</PanelBody>
		</InspectorControls>
	);

	return (
		<div>
			{ inspectorControls }
			<div { ...blockProps } style={inlineStyles}>
				{ ! posts && 'Loading' }
				{ posts && posts.length === 0 && 'No Posts' }
				<div>
					<div className="posts-block-1-container">
						<div className="bnm-left-block">
							{ posts && posts.length > 0 && posts.map( ( post, index ) => {

								const currentAuthor = authorList?.find(
									( author ) => author.id === post.author
								);

								const authorAvatarUrl = currentAuthor?.avatar_urls?.[48];
								
								const avatarMarkup = authorAvatarUrl && (
									<span className="bnm-avatar">
										<img src={authorAvatarUrl} />
									</span>
								);
						
								const {
									url: imageSourceUrl,
									alt: featuredImageAlt,
								} = getFeaturedImageDetails( post, featuredImageSizeSlug );

								const imageClasses = classnames( {
									'wp-block-bnm-pb1-image-big': true,
									[ `align${ featuredImageAlign }` ]: !! featuredImageAlign,
								} );

								const renderFeaturedImage =
									showFeaturedImage && imageSourceUrl; 
								const featuredImage = renderFeaturedImage && (
									<figure className={ imageClasses }>
										<img
											src={ imageSourceUrl }
											alt={ featuredImageAlt }
										/>
									</figure>
								);

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

								let excerpt = post.excerpt.rendered;

								const excerptElement = document.createElement( 'div' );
								excerptElement.innerHTML = excerpt;

								excerpt = excerptElement.textContent || excerptElement.innerText || '';

								const needsReadMore = excerptLength < excerpt.trim().split( ' ' ).length && post.excerpt.raw === '' && showReadMore;

								const postExcerpt = needsReadMore ? (
									<>
										{ excerpt
											.trim()
											.split( ' ', excerptLength )
											.join( ' ' ) }
										{ /* translators: excerpt truncation character, default .. */ }
										{ __( ' … ' ) }
										<a
											href={ post.link }
											rel="noopenner noreferrer"
											onClick={ showRedirectionPreventedNotice }
											>
												{ readMoreLabel }
											</a>
									</>
								) : (
									<>
										{ excerpt
											.trim()
											.split( ' ', excerptLength )
											.join( ' ' ) }
										{ /* translators: excerpt truncation character, default .. */ }
										{ __( ' … ' ) }
									</>
								);

								return(
									index === 0 && (
										<div className="bnm-pb1-large-post">
											
											{ featuredImage }

											<div className="bnm-pb1-large-post-content">
											
												<div className="bnm-nb-category-list">
													{ categoriesName.map( ( category ) => {
														return (
															<a href="#">
																{ category }
															</a>
														);
													} ) }
												</div>
												<h3 className="entry-title">
													<a 
														href={ post.link }
														rel="noreferrer noopener"
														onClick={ showRedirectionPreventedNotice }
													>
														{ post.title.rendered ? post.title.rendered : __( 'Default title', 'bnm-blocks' ) }
													</a>
												</h3>
												<div className="entry-meta">
													{ showAuthor && currentAuthor && (
														<span className="bnm-nb-post-author">
															<a href="#">
																{ showAvatar && avatarMarkup }
															
																{ sprintf(
																	/* translators: byline. %s: current author. */
																	__( 'by %s' ),
																	currentAuthor.name
																) }
															</a>
														</span>
													) }

													{ showDate && post.date_gmt && (
														<span className="bnm-nb-post-date">
															<time
																dateTime={ format( 'c', post.date_gmt ) }
															>
																<a href="#">
																	{ dateI18n( dateFormat, post.date_gmt ) }
																</a>
															</time>
														</span>
													) }

													{ showCommentCount && post.comment_count && (
														<span className="bnm-nb-comment-count">
															<a href="#">
																{ post.comment_count }
															</a>
														</span>
													) }
												</div>
												{ displayPostExcerpt && (
													<div className="bnm-nb-post-excerpt">
														{ postExcerpt }
													</div>
												) }
											</div>
										</div>
									) 
								);
							} ) }
						</div>
						<div className="bnm-right-block">
							{ posts && posts.length > 0 && posts.map( ( post, index ) => { 
								
								const currentAuthor = authorList?.find(
									( author ) => author.id === post.author
								);

								const authorAvatarUrl = currentAuthor?.avatar_urls?.[48];
								
								const avatarMarkup = authorAvatarUrl && (
									<span className="bnm-avatar">
										<img src={authorAvatarUrl} />
									</span>
								);

								const {
									url: imageSourceUrl,
									alt: featuredImageAlt,
								} = getFeaturedImageDetails( post, featuredImageSizeSlugSmall );

								const imageClasses = classnames( {
									'wp-block-bnm-pb1-image-small': true,
									[ `align${ featuredImageAlign }` ]: !! featuredImageAlign,
								} );

								const renderFeaturedImage =
									showFeaturedImageSmall && imageSourceUrl;

								const featuredImageSmall = renderFeaturedImage && (
									<figure className={ imageClasses }>
										<img
											src={ imageSourceUrl }
											alt={ featuredImageAlt }
										/>
									</figure>
								);

								const list = categoriesList;
								const cat = post.categories;
								const categoriesName = [];
								
								let excerpt = post.excerpt.rendered;

								const excerptElement = document.createElement( 'div' );
								excerptElement.innerHTML = excerpt;

								excerpt = excerptElement.textContent || excerptElement.innerText || '';

								const needsReadMore = excerptLengthSmall < excerpt.trim().split( ' ' ).length && post.excerpt.raw === '' && showReadMoreSmall;

								const postExcerpt = needsReadMore ? (
									<>
										{ excerpt
											.trim()
											.split( ' ', excerptLengthSmall )
											.join( ' ' ) }
										{ /* translators: excerpt truncation character, default .. */ }
										{ __( ' … ' ) }
										<a
											href={ post.link }
											rel="noopenner noreferrer"
											onClick={ showRedirectionPreventedNotice }
											>
												{ readMoreLabel }
											</a>
									</>
								) : (
									<>
										{ excerpt
											.trim()
											.split( ' ', excerptLengthSmall )
											.join( ' ' ) }
										{ /* translators: excerpt truncation character, default .. */ }
										{ __( ' … ' ) }
									</>
								);

								return(
									index > 0 && (
										<div className="bnm-pb1-small-post">
											
											{ featuredImageSmall }
											
											<div className="entry-details">
												{ showTitle && (
													<h3 className="entry-title">
														<a 
															href={ post.link }
															rel="noreferrer noopener"
															onClick={ showRedirectionPreventedNotice }
														>
															{ post.title.rendered ? post.title.rendered : __( 'Default title', 'bnm-blocks' ) }
														</a>
													</h3>
												) }
												<div className="entry-meta">
													{ showAuthorSmall && currentAuthor && (
														<span className="bnm-nb-post-author">
															<a href="#">

																{ showAvatarSmall && avatarMarkup }

																{ sprintf(
																	/* translators: byline. %s: current author. */
																	__( 'by %s' ),
																	currentAuthor.name
																) }
															</a>
														</span>
													) }
													{ showDateSmall && post.date_gmt && (
														<time
															dateTime={ format( 'c', post.date_gmt ) }
															className="bnm-nb-post-date"
														>
															<a href="#">
																{ dateI18n( dateFormat, post.date_gmt ) }
															</a>
														</time>
													) }
													{ showCommentCountSmall && post.comment_count && (
														<span className="bnm-nb-comment-count">
															<a href="#">
																{ post.comment_count }
															</a>
														</span>
													) }
												</div>
												{ displayPostExcerptSmall && (
													<div className="bnm-nb-post-excerpt">
														{ postExcerpt }
													</div>
												) }
											</div>
										</div>
									)
								);
							} ) }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}