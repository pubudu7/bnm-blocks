/**
 * WordPress dependencies
 */
import {
    BaseControl,
    Button,
	ButtonGroup,
    RangeControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import OrderControl from './order-control';
import AuthorControl from './author-control';
import TaxonomyControls from './taxonomy-controls';
import StickyControl from './sticky-control';
import MultiPostSelector from './post-control';

export default function QueryControls( { 
    attributes: { query, specificMode, specificPosts },
    setAttributes,
    setQuery,
    onSpecificModeChange,
    onLoopModeChange
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
        <BaseControl
            label={ __( 'Mode', 'bnm-blocks' ) }
            id="bnm-blocks-content-mode"
            className="bnm-blocks__button-group"
            help={ specificMode ? (
                __( 'The block will display only the specifically selected post(s).', 'bnm-blocks' )
            ) : (
                __( 'The block will display content based on the filtering settings below.', 'bnm-blocks' )
            ) }
        >
            <ButtonGroup>
                <Button
                    variant={ ! specificMode && 'primary' }
                    aria-pressed={ ! specificMode }
                    onClick={ onLoopModeChange }
                >
                    { __( 'Dynamic', 'bnm-blocks' ) }
                </Button>
                <Button
                    variant={ specificMode && 'primary' }
                    aria-pressed={ specificMode }
                    onClick={ onSpecificModeChange }
                >
                    { __( 'Static', 'bnm-blocks' ) }
                </Button>
            </ButtonGroup>
        </BaseControl>
        
        { specificMode ? (
                <MultiPostSelector
                    selectedPosts={specificPosts}
                    setSelectedPosts={(posts) => setAttributes({ specificPosts: posts })}
                />
            ) : (
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
            )
        }
        </>
    );

}