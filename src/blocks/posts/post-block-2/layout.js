/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { 
	RichText
} from '@wordpress/block-editor';

/**
 * Internal Dependencies.
 */
import {
	PostExcerpt,
	PostTitle,
	PostCategories,
	FeaturedImage,
    PostAuthorAvatar,
	PostAuthor,
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
            <div className="posts-block-2-container">
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
                <div className="bnm-pb2-posts-grid">
                    { posts && posts.length > 0 && posts.map( ( post, index ) => {

                        const currentAuthor = authorsList?.find(
                            ( writer ) => writer.id === post.author
                        );

                        return(
                            ( index === 0 || index === 1 ) && (
                                <article className="bnm-pb2-large" key={ post.id }>
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
                
                    { posts && posts.length > 0 && posts.map( ( post, index ) => { 

                        const currentAuthor = authorsList?.find(
                            ( writer ) => writer.id === post.author
                        );

                        return(
                            index > 1 && (
                                <article className="bnm-pb2-small" key={ post.id }>
                                    
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