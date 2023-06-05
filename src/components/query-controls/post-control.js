import { __ } from '@wordpress/i18n';
import { FormTokenField } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { useState } from '@wordpress/element';

const MAX_FETCHED_TERMS = 10;

const onPostsChange = ( newValue ) => {
    //console.log( newValue );
};

export default function PostSelectControl( value, onChange ) {
    const postsList = useSelect( ( select ) => {
        const { getEntityRecords } = select( coreStore );
        const postQuery = { per_page: MAX_FETCHED_TERMS }
        return getEntityRecords( 'postType', 'post', postQuery );
    }, [] );

    if ( ! postsList ) {
        return null;
    }

    const postTitles = postsList.map( ( post ) => {
        return post.title.rendered;
    } );

    return(
        <FormTokenField
            label={ __( 'Select Custom Posts' ) }
            suggestions={ postTitles }
            onChange={ onPostsChange }
        />
    );
}