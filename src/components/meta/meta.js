/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { dateI18n, format, getSettings } from '@wordpress/date';

/**
 * Internal Dependencies
 */
import {
	getFeaturedImageDetails,
} from './meta-helper.js';

export const PostExcerpt = ({
    post,
    excerptLength,
    showReadMore
}) => {
    let excerpt = post.excerpt.rendered;

    const excerptElement = document.createElement( 'div' );
    excerptElement.innerHTML = excerpt;

    excerpt = excerptElement.textContent || excerptElement.innerText || '';

    const postExcerpt = showReadMore ? (
        <div className="bnm-post-excerpt">
            { excerpt
                .trim()
                .split( ' ', excerptLength )
                .join( ' ' ) }
            { /* translators: excerpt truncation character, default .. */ }
            { __( '… ' ) }
            <a
                href="#"
                >
                    { readMoreLabel }
                </a>
        </div>
    ) : (
        <div className="bnm-post-excerpt">
            { excerpt
                .trim()
                .split( ' ', excerptLength )
                .join( ' ' ) }
            { /* translators: excerpt truncation character, default .. */ }
            { __( '… ' ) }
        </div>
    );

    return postExcerpt;
};

export const PostTitle = ({ attributes, post }) => {
    const Tag = attributes.titleHtmlTag || 'h3';
    return (
        <Tag className="entry-title">
            <a 
                href="#"
            >
                { post.title.rendered ? post.title.rendered : __( 'Default title', 'bnm-blocks' ) }
            </a>
        </Tag>
    );
};

export const PostCategories = ({ categoriesList, post }) => {
    const list = categoriesList;
    const cat = post.categories;
    const categoryNames = [];

    if ( list !== undefined && cat !== undefined ) {
        for ( let j = 0; j < list.length; j++ ) {
            for ( let i = 0; i < cat.length; i++ ) {
                if ( list[ j ].id === cat[ i ] ) {
                    categoryNames.push( list[ j ].name );
                }
            }
        }
    }

    return (
        <div className="bnm-category-list">
            { categoryNames.map( ( category ) => {
                return (
                    <a href="#">
                        { category }
                    </a>
                );
            } ) }
        </div>
    );
};

export const FeaturedImage = ({ post, featuredImageSizeSlug }) => {
    const {
        url: imageSourceUrl,
        alt: featuredImageAlt,
    } = getFeaturedImageDetails( post, featuredImageSizeSlug );

    const featuredImage = imageSourceUrl && (
        <figure className="post-thumbnail">
            <img
                src={ imageSourceUrl }
                alt={ featuredImageAlt }
            />
        </figure>
    );

    if ( ! featuredImage ) {
        return null;
    }

    return featuredImage;
};

export const PostAuthorAvatar = ({ author }) => {
    const authorAvatarUrl = author?.avatar_urls?.[48];			
    const avatarMarkup = authorAvatarUrl && (
        <span className="bnm-avatar">
            <img src={authorAvatarUrl} />
        </span>
    );
    if ( ! avatarMarkup ) {
        return null;
    }
    return avatarMarkup;
};

export const PostAuthor = ({ post, authorsList, showAvatar} ) => {
    const currentAuthor = authorsList?.find(
        ( author ) => author.id === post.author
    );

    if ( currentAuthor ) {
        return (
            <span className="bnm-post-author">
                <a href="#">
                    { showAvatar && (
                        <PostAuthorAvatar 
                            author={currentAuthor}
                        />
                    ) }
                
                    { sprintf(
                        /* translators: byline. %s: current author. */
                        __( 'by %s' ),
                        currentAuthor.name
                    ) }
                </a>
            </span>
        );
    }

    return null;
};

export const PostDateTime = ({ post }) => {
    
    const dateFormat = getSettings().formats.date;
    
    if ( post.date_gmt ) {
        return (
            <span className="bnm-post-date">
                <time
                    dateTime={ format( 'c', post.date_gmt ) }
                >
                    <a href="#">
                        { dateI18n( dateFormat, post.date_gmt ) }
                    </a>
                </time>
            </span>
        );
    } 
    return null;
};

export const PostCommentCount = ({ post }) => {
    if ( post.comment_count ) {
        return (
            <span className="bnm-comment-count">
                <a href="#">
                    { post.comment_count }
                </a>
            </span>
        );
    }
    return null;
};

export const PostMeta = ({ post, authorsList, attributes }) => {
    return (
        <div className="entry-meta">
            { attributes.showAuthor && (
                <PostAuthor
                    post={post}
                    authorsList={authorsList}
                    showAvatar={attributes.showAvatar}
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
    );
};