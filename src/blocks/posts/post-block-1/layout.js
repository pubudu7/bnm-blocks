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
} from '../../../components/meta/meta.js'


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
            <div className="posts-block-1-container">
                <div className="bnm-left-block">
                    { posts && posts.length > 0 && posts.map( ( post, index ) => {

                        const currentAuthor = authorsList?.find(
                            ( writer ) => writer.id === post.author
                        );

                        return(
                            index === 0 && (
                                <div className="bnm-pb1-large-post">
                                    
                                    { attributes.showFeaturedImage && (
                                        <FeaturedImage 
                                            post={post}
                                            featuredImageSizeSlug={attributes.featuredImageSizeSlug}
                                        />
                                    ) }

                                    <div className="bnm-pb1-large-post-content">
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
                                </div>
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
                                <div className="bnm-pb1-small-post">
                                    
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
                                </div>
                            )
                        );
                    } ) }
                </div>
            </div>
        </div>
    );
};