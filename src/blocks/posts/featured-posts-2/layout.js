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
import {
	getFeaturedImageDetails,
} from '../../../components/meta/meta-helper.js';



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
            <div className="bnm-fp2-container">
                <div className="bnm-fp2-top">
                    { posts && posts.length > 0 && posts.map( ( post, index ) => {

                        const {
                            url: imageSourceUrl,
                            alt: featuredImageAlt,
                        } = getFeaturedImageDetails( post, attributes.featuredImageSizeSlug )

                        return(
                            ( index === 0 || index === 1 ) && (
                                
                                <div className="bnm-fp2-large-post">
                                <a href={ post.link }>
                                    <div class="bnm-fp2-inner-container">
                                    
                                    { imageSourceUrl && (
                                        <img 
                                            src={ imageSourceUrl }
                                            alt={ featuredImageAlt }
                                            class="bnm-fp-image"
                                        />
                                    ) }
                                    

                                    <div className="bnm-fp2-post-content">
                                        <div className="bnm-fp2-content-inner">
                                            { attributes.showCategory && (
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
                                            { attributes.displayPostExcerpt && (
                                                <PostExcerpt
                                                    post={post}
                                                    excerptLength={attributes.excerptLength}
                                                    showReadMore={attributes.showReadMore}
                                                />
                                            ) }
                                        </div>
                                    </div>
                                </div>
                                </a>
                                </div>
                                

                            )
                        );

                    } ) }
                </div>
                <div className="bnm-fp2-bottom">
                    { posts && posts.length > 0 && posts.map( ( post, index ) => {

                        const {
                            url: imageSourceUrl,
                            alt: featuredImageAlt,
                        } = getFeaturedImageDetails( post, attributes.featuredImageSizeSlug )

                        return(
                            ( index === 2 || index === 3 || index === 4 ) && (
                                <div className="bnm-fp2-small-post">
                                <a href={ post.link }>
                                    <div class="bnm-fp2-inner-container">
                                    { imageSourceUrl && (
                                        <img 
                                            src={ imageSourceUrl }
                                            alt={ featuredImageAlt }
                                            class="bnm-fp-image"
                                        />
                                    ) }

                                    <div className="bnm-fp2-post-content">
                                        <div className="bnm-fp2-content-inner">
                                            { attributes.showCategory && (
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
                                            { attributes.displayPostExcerpt && (
                                                <PostExcerpt
                                                    post={post}
                                                    excerptLength={attributes.excerptLength}
                                                    showReadMore={attributes.showReadMore}
                                                />
                                            ) }
                                        </div>
                                    </div>
                                    </div>
                                    </a>
                                </div>
                            )
                        );

                    } ) }
                </div>
            </div>
        </div>
    );
};