import { get } from 'lodash';

/**
 * @param {Object} post 
 * @param {String} size 
 * @returns {url: String, alt: String}.
 */
export function getFeaturedImageDetails( post, size ) {
    const image = get( post, [ '_embedded', 'wp:featuredmedia', '0' ] );

    return {
        url:
            image?.media_details?.sizes?.[ size ]?.source_url ??
            image?.source_url,
        alt: image?.alt_text,
    };
}