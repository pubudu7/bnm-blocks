/**
 * Internal Dependencies.
 */
import {
	PostExcerpt,
	PostTitle,
	PostCategories,
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
            <div className="bnm-fp1-container">
                <div className="bnm-fp1-left-side">
                { posts && posts.length > 0 && posts.map( ( post, index ) => {

                    const {
                        url: imageSourceUrl,
                        alt: featuredImageAlt,
                    } = getFeaturedImageDetails( post, attributes.featuredImageSizeSlug );

                    return(
                        index === 0 && (
                            <div className="bnm-fp1-large-post">
                            { imageSourceUrl && (
                                <img
                                    src={ imageSourceUrl }
                                    alt={ featuredImageAlt }
                                    className="bnm-fp-img"
                                />
                            ) }
                            <div className="bnmfpovrlay inside-gut-editor">
                                <a className="bnmlnkovrlay-ge" href="#"></a>
                            </div>

                            <div className="bnm-fp1-post-content">
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
                                        readMoreLabel={attributes.readMoreLabel}
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
                                <div className="bnm-fp1-small-post">
                                { imageSourceUrl && (
                                    <img
                                        src={ imageSourceUrl }
                                        alt={ featuredImageAlt }
                                        className="bnm-fp-img"
                                    />
                                ) }

                                <div className="bnmfpovrlay inside-gut-editor">
                                    <a className="bnmlnkovrlay-ge" href="#"></a>
                                </div>

                                <div className="bnm-fp1-post-content">
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
                                        { attributes.showAuthorSmall && authorsList && (
                                            <PostAuthor
                                                post={post}
                                                authorsList={authorsList}
                                                showAvatar={attributes.showAvatar}
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
                                            readMoreLabel={attributes.readMoreLabel}
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