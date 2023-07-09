import { get } from 'lodash';

export function getFeaturedImageDetails( post, size ) {
    const image = get( post, [ '_embedded', 'wp:featuredmedia', '0' ] );

    return {
        url:
            image?.media_details?.sizes?.[ size ]?.source_url ??
            image?.source_url,
        alt: image?.alt_text,
    };
}

export function hasFeaturedImage( post, size ) {
    const data = getFeaturedImageDetails( post, size );
    if ( data.url ) {
        return true;
    }
    return false;
}