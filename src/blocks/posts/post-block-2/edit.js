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
import { store as noticeStore } from '@wordpress/notices';
import { useEffect } from '@wordpress/element';
import {
	PanelBody,
	Placeholder,
	Spinner,
	__experimentalUnitControl as UnitControl,
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
	
	// What to do for undefined values?
	const inlineStyles = {
		'--bnm-title-font-size': mightBeUnit(attributes.titleFontSize),
		'--bnm-title-font-size-small': mightBeUnit(attributes.titleFontSizeSmall),
		'--bnm-title-line-height': attributes.titleLineHeight,
		'--bnm-title-line-height-small': attributes.titleLineHeightSmall,
		'--bnm-title-letter-spacing': attributes.titleLetterSpacing,
		'--bnm-title-letter-spacing-small': attributes.titleLetterSpacingSmall,
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
		'--bnm-meta-font-size-small': mightBeUnit(attributes.metaFontSizeSmall),
		'--bnm-meta-line-height': attributes.metaLineHeight,
		'--bnm-meta-line-height-small': attributes.metaLineHeightSmall,
		'--bnm-meta-letter-spacing': attributes.metaLetterSpacing,
		'--bnm-meta-letter-spacing-small': attributes.metaLetterSpacingSmall,
		'--bnm-meta-spacing': attributes.metaSpacing,
		'--bnm-meta-padding': boxValues(attributes.metaPadding),
		'--bnm-meta-margin': boxValues(attributes.metaMargin),
		'--bnm-meta-color': attributes.metaColor,
		'--bnm-meta-hover-color': attributes.metaHoverColor,
		'--bnm-excerpt-font-size': mightBeUnit(attributes.excerptFontSize),
		'--bnm-excerpt-font-size-small': mightBeUnit(attributes.excerptFontSizeSmall),
		'--bnm-excerpt-line-height': attributes.excerptLineHeight,
		'--bnm-excerpt-line-height-small': attributes.excerptLineHeightSmall,
		'--bnm-excerpt-letter-spacing': attributes.excerptLetterSpacing,
		'--bnm-excerpt-letter-spacing-small': attributes.excerptLetterSpacingSmall,
		'--bnm-excerpt-padding': boxValues(attributes.excerptPadding),
		'--bnm-excerpt-margin': boxValues(attributes.excerptMargin),
		'--bnm-excerpt-padding-small': boxValues(attributes.excerptPaddingSmall),
		'--bnm-excerpt-margin-small': boxValues(attributes.excerptMarginSmall),
		'--bnm-excerpt-color': attributes.excerptColor,
		'--bnm-col-gap': attributes.colGap,
		'--bnm-row-gap': attributes.rowGap,
		'--bnm-header-font-size': mightBeUnit(attributes.headerFontSize),
		'--bnm-header-line-height': attributes.headerLineHeight,
		'--bnm-header-letter-spacing': attributes.headerLetterSpacing,
		'--bnm-header-padding': boxValues(attributes.headerPadding),
		'--bnm-header-margin': boxValues(attributes.headerMargin),
		'--bnm-header-color': attributes.headerColor,
		'--bnm-header-hover-color': attributes.headerHoverColor,
		'--bnm-image-width': attributes.featuredImageWidth,
		'--bnm-content-width': attributes.entryContentWidth,
		'--bnm-image-margin': boxValues(attributes.featuredImageMargin)
	};

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
		className: classnames( 'wpbnmpb2', 'bnmbcs', {
			'bnm-box-cat': hasCategoryClass
		})
	});

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
			</PanelBody>
			<BlockExtraSettings
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
		</InspectorControls>
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