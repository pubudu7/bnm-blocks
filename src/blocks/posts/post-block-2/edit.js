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
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { useInstanceId } from '@wordpress/compose';
import { store as coreStore } from '@wordpress/core-data';
import { store as noticeStore } from '@wordpress/notices';
import { useEffect, Fragment } from '@wordpress/element';
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
		categoryBGColor,
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
			<Layout
				posts={ posts }
				categoriesList={ categoriesList }
				authorsList={ authorsList }
				blockProps={ blockProps }
				inlineStyles={ inlineStyles }
				attributes={ attributes }
			/>
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