/**
 * Internal Dependencies.
 */
import {
	PostExcerpt,
	PostTitle,
	PostCategories,
	FeaturedImage,
    PostMeta
} from '../components/meta.js'


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

                        return(
                            index === 0 && (
                                <div className="bnm-pb1-large-post">
                                    
                                    { attributes.showFeaturedImage && (
                                        <FeaturedImage 
                                            post={ post }
                                            featuredImageSizeSlug={ attributes.featuredImageSizeSlug }
                                        />
                                    ) }

                                    <div className="bnm-pb1-large-post-content">
                                        { attributes.showCategory && (
                                            <PostCategories
                                                categoriesList={ categoriesList }
                                                post={ post }
                                            />
                                        ) }
                                        { attributes.showTitle && (
                                            <PostTitle
                                                post={ post }
                                                attributes={ attributes }
                                            />
                                        ) }
                                        <PostMeta 
                                            post={ post }
                                            authorsList={ authorsList }
                                            attributes={ attributes }
                                        />
                                        { attributes.displayPostExcerpt && (
                                            <PostExcerpt
                                                post={ post }
                                                excerptLength={ attributes.excerptLength }
                                                showReadMore={ attributes.showReadMore }
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

                                        { attributes.showCategorySmall && (
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
                                        <PostMeta 
                                            post={ post }
                                            authorsList={ authorsList }
                                            attributes={ attributes }
                                        />
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