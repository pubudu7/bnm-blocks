/**
 * Internal Dependencies.
 */
import {
	PostExcerpt,
	PostTitle,
	PostCategories,
	FeaturedImage,
	PostAuthor,
	PostDateTime,
	PostCommentCount,
} from '../../../components/meta/meta.js';

export const Layout = ({
    posts,
    authorsList,
    categoriesList,
    blockProps,
    inlineStyles,
    attributes
}) => {
    return(
        <div { ...blockProps } style={ inlineStyles }>
            <div className="bnmspp-container">
                { posts && posts.length > 0 && posts.map( ( post, index ) => {
                    return(
                        <article key={post.id} className="bnmsp-post">
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
                                    { attributes.showAuthor && authorsList && (
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
                                { attributes.displayPostExcerpt && (
                                    <PostExcerpt
                                        post={post}
                                        excerptLength={attributes.excerptLength}
                                        showReadMore={attributes.showReadMore}
                                    />
                                ) }
                            </div>
                        </article>
                    );
                } ) }
            </div>
        </div>
    );
};