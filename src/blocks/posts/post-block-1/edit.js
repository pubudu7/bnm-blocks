/**
 * External dependencies
 */
import { isUndefined, pickBy } from 'lodash';
import classnames from 'classnames';

/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { dateI18n, format, getSettings } from '@wordpress/date';
import { 
	useBlockProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { useInstanceId } from '@wordpress/compose';
import { store as coreStore } from '@wordpress/core-data';
import { store as noticeStore } from '@wordpress/notices';
import { useEffect } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import {
	Disabled,
	Placeholder,
	Spinner
} from '@wordpress/components';

/**
 * Internal Dependencies.
 */
import QueryInspectorControls from '../../../components/query-controls';
import BlockExtraSettings from '../../../components/settings-controls/post-type-1';
import {
	mightBeUnit,
	boxValues
} from '../../../shared/js/utils.js';
import {
	getFeaturedImageDetails,
} from '../shared/template-functions.js';

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
		categoryBGColor,
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
		authorsList
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
			authorsList: getUsers( USERS_LIST_QUERY ),
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
		</InspectorControls>
	);

	const PostExcerpt = ({
		post,
		excerptLength,
		showReadMore
	}) => {
		let excerpt = post.excerpt.rendered;

		const excerptElement = document.createElement( 'div' );
		excerptElement.innerHTML = excerpt;

		excerpt = excerptElement.textContent || excerptElement.innerText || '';

		const postExcerpt = showReadMore ? (
			<>
				{ excerpt
					.trim()
					.split( ' ', excerptLength )
					.join( ' ' ) }
				{ /* translators: excerpt truncation character, default .. */ }
				{ __( '… ' ) }
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
				{ __( '… ' ) }
			</>
		);

		return postExcerpt;
	};

	const PostTitle = ({ attributes, post }) => {
		const Tag = attributes.titleHtmlTag || 'h3';
		return (
			<Tag className="entry-title">
				<a 
					href={ post.link }
					rel="noreferrer noopener"
					onClick={ showRedirectionPreventedNotice }
				>
					{ post.title.rendered ? post.title.rendered : __( 'Default title', 'bnm-blocks' ) }
				</a>
			</Tag>
		);
	};

	const PostCategories = ({ categoriesList, post }) => {
		const list = categoriesList;
		const cat = post.categories;
		const categoryNames = [];

		if ( list != undefined && cat != undefined ) {
			for ( let j = 0; j < list.length; j++ ) {
				for ( let i = 0; i < cat.length; i++ ) {
					if ( list[ j ].id === cat[ i ] ) {
						categoryNames.push( list[ j ].name );
					}
				}
			}
		}

		return (
			categoryNames.map( ( category ) => {
				return (
					<a href="#">
						{ category }
					</a>
				);
			} )
		);
	};

	const FeaturedImage = ({ post, featuredImageSizeSlug }) => {
		const {
			url: imageSourceUrl,
			alt: featuredImageAlt,
		} = getFeaturedImageDetails( post, featuredImageSizeSlug );

		const featuredImage = imageSourceUrl && (
			<figure className="post-thumbnail">
				<img
					src={ imageSourceUrl }
					alt={ featuredImageAlt }
				/>
			</figure>
		);

		if ( ! featuredImage ) {
			return null;
		}

		return featuredImage;
	}

	const Preview = ({
		posts,
		authorsList,
		categoriesList,
		blockProps,
		inlineStyles,
		attributes
	}) => {
		if ( ! posts || ! categoriesList || ! authorsList ) {
			return (
				<div { ...blockProps }>
					<Placeholder>
						<Spinner />
						{ __( 'Loading Posts', 'bnm-blocks') }
					</Placeholder>
				</div>
			);
		}

		if ( 0 === posts.length ) {
			return (
				<div { ...blockProps }>
					<Placeholder>
						{ __( 'No Posts', 'bnm-blocks' ) }
					</Placeholder>
				</div>
			);
		}

		return (
			<div { ...blockProps } style={ inlineStyles }>
				<div className="posts-block-1-container">
					<div className="bnm-left-block">
						{ posts && posts.length > 0 && posts.map( ( post, index ) => {

							const currentAuthor = authorsList?.find(
								( author ) => author.id === post.author
							);

							const authorAvatarUrl = currentAuthor?.avatar_urls?.[48];
							
							const avatarMarkup = authorAvatarUrl && (
								<span className="bnm-avatar">
									<img src={authorAvatarUrl} />
								</span>
							);

							return(
								index === 0 && (
									<div className="bnm-pb1-large-post">
										
										{ showFeaturedImage && (
											<FeaturedImage 
												post={post}
												featuredImageSizeSlug={featuredImageSizeSlug}
											/>
										) }

										<div className="bnm-pb1-large-post-content">
											{ showCategory && (
												<div className="bnm-nb-category-list">
													<PostCategories
														categoriesList={categoriesList}
														post={post}
													/>
												</div>
											) }
											
											{ showTitle && (
												<PostTitle
													post={post}
													attributes={attributes}
												/>
											) }
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
													<PostExcerpt
														post={post}
														excerptLength={attributes.excerptLength}
														showReadMore={attributes.showReadMore}
													/>
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
							
							const currentAuthor = authorsList?.find(
								( author ) => author.id === post.author
							);

							const authorAvatarUrl = currentAuthor?.avatar_urls?.[48];
							
							const avatarMarkup = authorAvatarUrl && (
								<span className="bnm-avatar">
									<img src={authorAvatarUrl} />
								</span>
							);

							return(
								index > 0 && (
									<div className="bnm-pb1-small-post">
										
										{ showFeaturedImage && (
											<FeaturedImage 
												post={post}
												featuredImageSizeSlug={featuredImageSizeSlugSmall}
											/>
										) }
										
										<div className="entry-details">

											{ showCategorySmall && (
												<div className="bnm-nb-category-list">
													<PostCategories
														categoriesList={categoriesList}
														post={post}
													/>
												</div>
											) }

											{ showTitle && (
												<PostTitle
													post={post}
													attributes={attributes}
												/>
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
													<PostExcerpt
														post={post}
														excerptLength={attributes.excerptLengthSmall}
														showReadMore={attributes.showReadMoreSmall}
													/>
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
		);
	};


	return (
		<Fragment>
			{ inspectorControls }
			<Preview 
				posts={ posts }
				categoriesList={ categoriesList }
				authorsList={ authorsList }
				blockProps={ blockProps }
				inlineStyles={ inlineStyles }
				attributes={ attributes }
			/>
		</Fragment>
	);
}