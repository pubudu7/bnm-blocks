/**
 * External dependencies
 */
import { debounce } from 'lodash';

/**
 * WordPress dependencies
 */
import {
    PanelBody,
    RangeControl, 
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import OrderControl from './order-control';
import AuthorControl from './author-control';
import TaxonomyControls from './taxonomy-controls';
import StickyControl from './sticky-control';
import PostSelectControl from './post-control';

export default function QueryInspectorControls( { 
    attributes: { query },
    setQuery
} ) {
    const {
        posts,
        order,
        orderBy,
        author: authorIds,
        sticky,
        perPage
    } = query;

    return (
        <InspectorControls>
            <PanelBody title={ __( 'Content Settings' ) }>
                <PostSelectControl></PostSelectControl>
                <TaxonomyControls onChange={ setQuery } query={ query } />
                <AuthorControl value={ authorIds } onChange={ setQuery } />
                <OrderControl
                    { ...{ order, orderBy } }
                    onChange={ setQuery }
                />
                <StickyControl
                    value={ sticky }
                    onChange={ ( value ) => setQuery( { sticky: value } ) }
                />
                <RangeControl
                    label={ __( 'Number of items' ) }
                    value={ perPage }
                    onChange={ ( value ) => setQuery( { perPage: value } ) }
                    min={ 2 }
                    max={ 15 }
                    required
                />
            </PanelBody>
        </InspectorControls>
    );

}