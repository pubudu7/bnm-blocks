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
	InspectorControls,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { useInstanceId } from '@wordpress/compose';
import { store as coreStore } from '@wordpress/core-data';
import { useEffect, Fragment } from '@wordpress/element';
import {
	PanelBody,
	Placeholder,
	Spinner,
	__experimentalUnitControl as UnitControl
} from '@wordpress/components';

/**
 * Internal Dependencies.
 */
import QueryControls from '../../../components/query-controls';
import BlockExtraSettings from '../../../components/settings-controls/post-type-1';
import {
	mightBeUnit,
	boxValues,
	hasValueOnBox
} from '../../../shared/js/utils.js';
import {
	Layout
} from './layout.js';

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
		categoryPadding,
		featuredImageSizeSlug,
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
		'--header-font-size': mightBeUnit(attributes.headerFontSize),
		'--header-line-height': attributes.headerLineHeight,
		'--header-letter-spacing': attributes.headerLetterSpacing,
		'--header-padding': boxValues(attributes.headerPadding),
		'--header-margin': boxValues(attributes.headerMargin),
		'--header-color': attributes.headerColor,
		'--header-hover-color': attributes.headerHoverColor,
		'--col-gap': attributes.colGap,
		'--image-width': attributes.featuredImageWidth,
		'--content-width': attributes.entryContentWidth,
		'--image-margin': boxValues(attributes.featuredImageMargin)
	};

	const updateQuery = ( newQuery ) =>
		setAttributes( { query: { ...query, ...newQuery } } );

	const hasPosts = !! posts?.length;

	const inspectorControls = (
		<InspectorControls>
			<PanelBody title={ __( 'Content Settings', 'bnm-blocks' ) } initialOpen={ true }>
				<QueryControls
					attributes={ attributes }
					setQuery={ updateQuery }
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
			</PanelBody>
			<BlockExtraSettings
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
		</InspectorControls>
	);

	let hasCategoryClass = false;

	if ( Object.keys(categoryPadding).length !== 0 && categoryPadding.constructor === Object ) {
		if ( hasValueOnBox(categoryPadding) ) {
			hasCategoryClass = true;
		}
	} 
	
	if ( attributes.categoryBGColor || attributes.categoryBGHoverColor ) {
		hasCategoryClass = true;
	}

	const blockProps = useBlockProps({
		className: classnames( 'wpbnmpb1', {
			'bnm-box-cat': hasCategoryClass
		})
	});

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
			<Layout 
				posts={ posts }
				categoriesList={ categoriesList }
				authorsList={ authorsList }
				blockProps={ blockProps }
				inlineStyles={ inlineStyles }
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
		</>
	);
}