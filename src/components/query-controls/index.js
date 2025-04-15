/**
 * WordPress dependencies
 */
import {
    RangeControl, 
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import OrderControl from './order-control';
import AuthorControl from './author-control';
import TaxonomyControls from './taxonomy-controls';
import StickyControl from './sticky-control';

export default function QueryControls( { 
    attributes: { query },
    setQuery
} ) {
    const {
        order,
        orderBy,
        author: authorIds,
        sticky,
        perPage
    } = query;

    return (
        <>
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
                label={ __( 'Number of items', 'bnm-blocks' ) }
                value={ perPage }
                onChange={ ( value ) => setQuery( { perPage: value } ) }
                min={ 1 }
                max={ 100 }
                required
            />
        </>
    );

}