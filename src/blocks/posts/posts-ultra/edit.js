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
	BlockControls,
	InspectorControls,
	AlignmentControl,
	RichText,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { useInstanceId } from '@wordpress/compose';
import { store as coreStore } from '@wordpress/core-data';
import { useEffect, Fragment } from '@wordpress/element';
import {
	PanelBody,
	RangeControl,
	Placeholder,
	Spinner,
	Toolbar,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import {
	Icon,
	formatListBullets,
	grid,
	image,
	postFeaturedImage,
	pullLeft,
	pullRight,
} from '@wordpress/icons'; 

/**
 * Internal Dependencies.
 */
import QueryControls from '../../../components/query-controls';
import BlockExtraSettings from '../../../components/settings-controls/post-type-2';
import { 
	mightBeUnit,
	boxValues,
	hasValueOnBox
} from '../../../shared/js/utils.js';
import {
	PostExcerpt,
	PostTitle,
	PostCategories,
	FeaturedImage,
	PostAuthor,
	PostAuthorAvatar,
	PostDateTime,
	PostCommentCount,
} from '../../../components/meta/meta.js';
import { hasFeaturedImage } from '../../../components/meta/meta-helper.js';

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
		sectionHeader,
		queryId,
		query,
		categoryPadding,
		showFeaturedImage,
		featuredImageSizeSlug,
		featuredImageWidth,
		featuredImageMargin,
		entryContentWidth,
		imagePosition,
		imageMinHeight,
		columns,
		postLayout,
		textAlign
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
		author,
		order,
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
	
	// What to do for undefined values?
	const inlineStyles = {
		'--bnm-title-font-size': mightBeUnit(attributes.titleFontSize),
		'--bnm-title-line-height': attributes.titleLineHeight,
		'--bnm-title-letter-spacing': attributes.titleLetterSpacing,
		'--bnm-title-padding': boxValues(attributes.titlePadding),
		'--bnm-title-margin': boxValues(attributes.titleMargin),
		'--bnm-title-color': attributes.titleColor,
		'--bnm-title-hover-color': attributes.titleHoverColor,
		'--bnm-category-font-size': mightBeUnit(attributes.categoryFontSize),
		'--bnm-category-line-height': attributes.categoryLineHeight,
		'--bnm-category-letter-spacing': attributes.categoryLetterSpacing,
		'--bnm-category-color': attributes.categoryColor,
		'--bnm-category-hover-color': attributes.categoryHoverColor,
		'--bnm-category-bg-color': attributes.categoryBGColor,
		'--bnm-category-bg-hover-color': attributes.categoryBGHoverColor,
		'--bnm-category-padding': boxValues(attributes.categoryPadding),
		'--bnm-category-margin': boxValues(attributes.categoryMargin),
		'--bnm-meta-font-size': mightBeUnit(attributes.metaFontSize),
		'--bnm-meta-line-height': attributes.metaLineHeight,
		'--bnm-meta-letter-spacing': attributes.metaLetterSpacing,
		'--bnm-meta-spacing': attributes.metaSpacing,
		'--bnm-meta-padding': boxValues(attributes.metaPadding),
		'--bnm-meta-margin': boxValues(attributes.metaMargin),
		'--bnm-meta-color': attributes.metaColor,
		'--bnm-meta-hover-color': attributes.metaHoverColor,
		'--bnm-excerpt-font-size': mightBeUnit(attributes.excerptFontSize),
		'--bnm-excerpt-line-height': attributes.excerptLineHeight,
		'--bnm-excerpt-letter-spacing': attributes.excerptLetterSpacing,
		'--bnm-excerpt-padding': boxValues(attributes.excerptPadding),
		'--bnm-excerpt-margin': boxValues(attributes.excerptMargin),
		'--bnm-excerpt-color': attributes.excerptColor,
		'--bnm-col-gap': attributes.colGap,
		'--bnm-row-gap': attributes.rowGap,
		'--bnm-image-width': attributes.featuredImageWidth,
		'--bnm-content-width': attributes.entryContentWidth,
		'--bnm-image-margin': boxValues(attributes.featuredImageMargin),
		'--bnm-header-font-size': mightBeUnit(attributes.headerFontSize),
		'--bnm-header-line-height': attributes.headerLineHeight,
		'--bnm-header-letter-spacing': attributes.headerLetterSpacing,
		'--bnm-header-padding': boxValues(attributes.headerPadding),
		'--bnm-header-margin': boxValues(attributes.headerMargin),
		'--bnm-header-color': attributes.headerColor,
		'--bnm-header-hover-color': attributes.headerHoverColor
	};

	let hasCategoryClass = false;
	let hasCustomImageMargin = false;

	if ( Object.keys(categoryPadding).length !== 0 && categoryPadding.constructor === Object ) {
		if ( hasValueOnBox(categoryPadding) ) {
			hasCategoryClass = true;
		}
	} 

	if ( Object.keys(featuredImageMargin).length !== 0 && featuredImageMargin.constructor === Object ) {
		if ( hasValueOnBox(featuredImageMargin) ) {
			hasCustomImageMargin = true;
		}
	} 
	
	if ( attributes.categoryBGColor || attributes.categoryBGHoverColor ) {
		hasCategoryClass = true;
	}

	const blockProps = useBlockProps({
		className: classnames( 'wpbnmspp', 'bnmbcs', {
			'is-grid': postLayout === 'grid',
			[ `columns-${columns}` ]: postLayout === 'grid',
			[ `image-align${imagePosition}`]: showFeaturedImage,
			'bnm-box-cat': hasCategoryClass,
			[`has-text-align-${ textAlign }`]: textAlign,
			'custom-image-width': ( featuredImageWidth !== "33%" ) || ( entryContentWidth !== "67%" ),
			'custom-image-margin': hasCustomImageMargin
		})
	});

	const updateQuery = ( newQuery ) =>
		setAttributes( { query: { ...query, ...newQuery } } );

	const hasPosts = !! posts?.length;

	const blockControls = [
		{
			icon: <Icon icon={ grid } />,
			title: __( 'Grid View', 'bnm-blocks' ),
			onClick: () => setAttributes( { postLayout: 'grid' } ),
			isActive: postLayout === 'grid',
		},
		{
			icon: <Icon icon={ formatListBullets } />,
			title: __( 'List View', 'bnm-blocks' ),
			onClick: () => setAttributes( { postLayout: 'list' } ),
			isActive: postLayout === 'list',
		},
	];

	const blockControlsImages = [
		{
			icon: <Icon icon={ postFeaturedImage } />,
			title: __( 'Show image on top', 'bnm-blocks' ),
			isActive: imagePosition === 'top',
			onClick: () => setAttributes( { imagePosition: 'top' } ),
		},
		{
			icon: <Icon icon={ pullLeft } />,
			title: __( 'Show image on left', 'bnm-blocks' ),
			isActive: imagePosition === 'left',
			onClick: () => setAttributes( { imagePosition: 'left' } ),
		},
		{
			icon: <Icon icon={ pullRight } />,
			title: __( 'Show image on right', 'bnm-blocks' ),
			isActive: imagePosition === 'right',
			onClick: () => setAttributes( { imagePosition: 'right' } ),
		},
		{
			icon: <Icon icon={ image } />,
			title: __( 'Show image behind', 'bnm-blocks' ),
			isActive: imagePosition === 'behind',
			onClick: () => setAttributes( { imagePosition: 'behind' } ),
		},
	];

	const inspectorControls = (
		<Fragment>
			<BlockControls>
				<Toolbar>
					<AlignmentControl
						value={ attributes.textAlign }
						onChange={ nextAlign => {
							setAttributes( { textAlign: nextAlign } );
						} }
					/>
				</Toolbar>
				<Toolbar controls={ blockControls } />
				<Toolbar controls={ blockControlsImages } />
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'Content Settings', 'bnm-blocks' ) } initialOpen={ true }>
					<QueryControls
						attributes={ attributes }
						setQuery={ updateQuery }
					/>
					{ postLayout === 'grid' && (
						<>
						<RangeControl
							label={ __( 'Number of columns', 'bnm-blocks' ) }
							value={ columns }
							onChange={ ( value ) => setAttributes( { columns: value } ) }
							min={ 2 }
							max={ 6 }
							required
						/>

						<UnitControl
							label={ __( 'Column Gap', 'bnm-blocks' ) }
							value={ attributes.colGap }
							onChange={ ( value ) => setAttributes( { colGap: value } ) }
							step={ 5 }
							units={[
								{ value: 'px', label: 'px', },
								{ value: '%', label: '%', },
								{ value: 'em', label: 'em'}
							]}
						/>

						<UnitControl
							label={ __( 'Row Gap', 'bnm-blocks' ) }
							value={ attributes.rowGap }
							onChange={ ( value ) => setAttributes( { rowGap: value } ) }
							step={ 5 }
							units={[
								{ value: 'px', label: 'px', },
								{ value: '%', label: '%', },
								{ value: 'em', label: 'em'}
							]}
						/>
						</>
					) }
				</PanelBody>
				<BlockExtraSettings
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			</InspectorControls>
		</Fragment>
	);

	if ( ! hasPosts ) {
		return (
			<div { ...blockProps }>
				{ inspectorControls }
				<Placeholder>
					{ ! Array.isArray( posts ) ? (
						<Spinner />
					) : (
						__( 'No posts found' )
					) }
				</Placeholder>
			</div>
		);
	}

	return (
		<>

		{ inspectorControls }
			
		<div { ...blockProps } style={ inlineStyles }>
            
			<div className="bnmspp-container">

				{ attributes.showSectionHeader && (
					<div className='bnm-block-title-wrap'>
						<RichText
							onChange={ value => setAttributes( { sectionHeader: value } ) }
							placeholder={ __( 'Write section header…', 'bnm-blocks' ) }
							value={ sectionHeader }
							tagName={ attributes.headerHtmlTag }
							className="article-section-title"
						/>
					</div>
				) }
                
				{ posts && posts.length > 0 && posts.map( ( post ) => {

					const currentAuthor = authorsList?.find(
						( writer ) => writer.id === post.author
					);

					const postHasImage = attributes.showFeaturedImage && hasFeaturedImage( post, attributes.featuredImageSizeSlug );
					
					const postClasses = classnames( 'bnmsp-post', {
						'post-has-image': postHasImage
					} );

					const articleStyles = {
						minHeight:
							imagePosition === 'behind' &&
							showFeaturedImage &&
							postHasImage &&
							imageMinHeight + 'vh',
						paddingTop:
							imagePosition === 'behind' &&
							showFeaturedImage &&
							postHasImage &&
							imageMinHeight / 5 + 'vh',
					};

                    return(
                        <article key={post.id} className={postClasses} style={articleStyles}>
                            { attributes.showFeaturedImage && (
                                <FeaturedImage 
                                    post={post}
                                    featuredImageSizeSlug={attributes.featuredImageSizeSlug}
                                />
                            ) }
							
							{ imagePosition === 'behind' && showFeaturedImage && postHasImage && (
								<div className="bnmfpovrlay inside-gut-editor">
									<a className="bnmlnkovrlay-ge" href="#"></a>
								</div>
							)}

                            <div className="bnm-entry-wrapper">
                                { attributes.showCategory && categoriesList && (
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

									{ attributes.showAuthor && attributes.showAvatar && currentAuthor && (
										<PostAuthorAvatar
											author={currentAuthor}
										/>
									) }
									
                                    { attributes.showAuthor && currentAuthor && (
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
                                { attributes.displayPostExcerpt && (
                                    <PostExcerpt
                                        post={post}
                                        excerptLength={attributes.excerptLength}
                                        showReadMore={attributes.showReadMore}
										readMoreLabel={attributes.readMoreLabel}
                                    />
                                ) }
                            </div>
                        </article>
                    );
                } ) }
            </div>
        </div>
		</>
	);
}