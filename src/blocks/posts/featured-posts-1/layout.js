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
} from '../components/meta.js';
import {
	getFeaturedImageDetails,
} from '../shared/template-functions.js';



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
            <div class="bnm-fp1-container">
                <div className="bnm-fp1-left-side">
                { posts && posts.length > 0 && posts.map( ( post, index ) => {

                    const {
                        url: imageSourceUrl,
                        alt: featuredImageAlt,
                    } = getFeaturedImageDetails( post, attributes.featuredImageSizeSlug );

                    return(
                        index === 0 && (
                            <div class="bnm-fp1-large-post">
                            { imageSourceUrl && (
                                <img
                                    src={ imageSourceUrl }
                                    alt={ featuredImageAlt }
                                    class="bnm-fp-img"
                                />
                            ) }

                            <div className="bnm-fp1-post-content">
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
                        )
                    );
                } ) }
                </div>

                <div className="bnm-fp1-right-side">
                    
                    { posts && posts.length > 0 && posts.map( ( post, index ) => {

                        const {
                            url: imageSourceUrl,
                            alt: featuredImageAlt,
                        } = getFeaturedImageDetails( post, attributes.featuredImageSizeSlug );

                        return(
                            ( index === 1 || index === 2 ) && (
                                <div class="bnm-fp1-small-post">
                                { imageSourceUrl && (
                                    <img
                                        src={ imageSourceUrl }
                                        alt={ featuredImageAlt }
                                        class="bnm-fp-img"
                                    />
                                ) }

                                <div className="bnm-fp1-post-content">
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
                            )
                        );
                    } ) }                        
                </div>
            </div>
        </div>
    );
};