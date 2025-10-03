/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { 
	RichText
} from '@wordpress/block-editor';
import {
	Placeholder,
	Spinner
} from '@wordpress/components';

/**
 * Internal Dependencies.
 */
import {
	PostExcerpt,
	PostTitle,
	PostCategories,
	FeaturedImage,
	PostAuthor,
	PostAuthorAvatar,
	PostDateTime,
	PostCommentCount,
} from '../../../components/meta/meta.js';

export const Layout = ({
    posts,
    authorsList,
    categoriesList,
    blockProps,
    attributes,
    setAttributes
}) => {
    return(
        <div { ...blockProps }>
            { attributes.showSectionHeader && (
                <div className='bnm-block-title-wrap'>
                    <RichText
                        onChange={ value => setAttributes( { sectionHeader: value } ) }
                        placeholder={ __( 'Write section header…', 'bnm-blocks' ) }
                        value={ attributes.sectionHeader }
                        tagName={ attributes.headerHtmlTag }
                        className="article-section-title"
                    />
                </div>
            ) }

            { ! posts && (
                <Placeholder>
                    <Spinner />
                </Placeholder>
            ) }

            { posts && posts.length === 0 && (
                <Placeholder>
                    { __( 'No Posts Found.', 'bnm-blocks' ) }
                </Placeholder>
            ) }

            <div className="pb1-container">
                <div className="bnm-left-block">
                    { posts && posts.length > 0 && posts.map( ( post, index ) => {

                        const currentAuthor = authorsList?.find(
                            ( writer ) => writer.id === post.author
                        );

                        return(
                            index === 0 && (
                                <article className="bnm-pb1-large" key={ post.id }>
                                    
                                    { attributes.showFeaturedImage && (
                                        <FeaturedImage 
                                            post={post}
                                            featuredImageSizeSlug={attributes.featuredImageSizeSlug}
                                        />
                                    ) }

                                    <div className="bnm-entry-wrapper">
                                        { attributes.showCategory && categoriesList && (
                                            <PostCategories
                                                categoriesList={categoriesList}
                                                post={post}
                                            />
                                        ) }
                                        { attributes.showTitle && (
                                            <PostTitle
                                                post={post}
                                                attributes={attributes}
                                            />
                                        ) }
                                        <div className="entry-meta">
                                            { attributes.showAuthor && attributes.showAvatar && currentAuthor && (
                                                <PostAuthorAvatar
                                                    author={currentAuthor}
                                                />
                                            ) }
                                            
                                            { attributes.showAuthor && currentAuthor && (
                                                <PostAuthor
                                                    author={currentAuthor}
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
                                        { attributes.displayPostExcerpt && (
                                            <PostExcerpt
                                                post={post}
                                                excerptLength={attributes.excerptLength}
                                                showReadMore={attributes.showReadMore}
                                            />
                                        ) }
                                    </div>
                                </article>
                            ) 
                        );
                    } ) }
                </div>
                <div className="bnm-right-block">
                    { posts && posts.length > 0 && posts.map( ( post, index ) => { 

                        const currentAuthor = authorsList?.find(
                            ( writer ) => writer.id === post.author
                        );
                            
                        return(
                            index > 0 && (
                                <article className="bnm-pb1-small" key={ post.id }>
                                    
                                    { attributes.showFeaturedImage && (
                                        <FeaturedImage 
                                            post={post}
                                            featuredImageSizeSlug={attributes.featuredImageSizeSlugSmall}
                                        />
                                    ) }
                                    
                                    <div className="entry-details">

                                        { attributes.showCategorySmall && categoriesList && (
                                            <PostCategories
                                                categoriesList={categoriesList}
                                                post={post}
                                            />
                                        ) }

                                        { attributes.showTitle && (
                                            <PostTitle
                                                post={post}
                                                attributes={attributes}
                                            />
                                        ) }
                                        <div className="entry-meta">
                                            
                                            { attributes.showAuthorSmall && attributes.showAvatarSmall && currentAuthor && (
                                                <PostAuthorAvatar
                                                    author={currentAuthor}
                                                />
                                            ) }
                                            { attributes.showAuthorSmall && currentAuthor && (
                                                <PostAuthor
                                                    author={currentAuthor}
                                                />
                                            ) }
                                            
                                            { attributes.showDateSmall && (
                                                <PostDateTime 
                                                    post={post}
                                                />
                                            ) }
                                            { attributes.showCommentCountSmall && (
                                                <PostCommentCount
                                                    post={post}
                                                />
                                            ) }
                                        </div>
                                        { attributes.displayPostExcerptSmall && (
                                            <PostExcerpt
                                                post={post}
                                                excerptLength={attributes.excerptLengthSmall}
                                                showReadMore={attributes.showReadMoreSmall}
                                            />
                                        ) }
                                    </div>
                                </article>
                            )
                        );
                    } ) }
                </div>
            </div>
        </div>
    );
};