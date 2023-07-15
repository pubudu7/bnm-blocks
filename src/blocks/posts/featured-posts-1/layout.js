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
	PostAuthor,
	PostAuthorAvatar,
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
    attributes,
    setAttributes
}) => {
    return(
        <div { ...blockProps } style={ inlineStyles }>
        
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

            <div className="bnm-fp1-container">
                <div className="bnm-fp1-left-side">
                { posts && posts.length > 0 && posts.map( ( post, index ) => {

                    const {
                        url: imageSourceUrl,
                        alt: featuredImageAlt,
                    } = getFeaturedImageDetails( post, attributes.featuredImageSizeSlug );

                    const currentAuthor = authorsList?.find(
                        ( writer ) => writer.id === post.author
                    );

                    return(
                        index === 0 && (
                            <article className="bnm-fp1-large">
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
                                            readMoreLabel={attributes.readMoreLabel}
                                        />
                                    ) }
                                </div>
                            </article>
                        )
                    );
                } ) }
                </div>

                <div className="bnm-fp1-right-side">
                    
                    { posts && posts.length > 0 && posts.map( ( post, index ) => {

                        const {
                            url: imageSourceUrl,
                            alt: featuredImageAlt,
                        } = getFeaturedImageDetails( post, attributes.featuredImageSizeSlugSmall );

                        const currentAuthor = authorsList?.find(
                            ( writer ) => writer.id === post.author
                        );

                        return(
                            ( index === 1 || index === 2 ) && (
                                <article className="bnm-fp1-small">
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
                                                readMoreLabel={attributes.readMoreLabel}
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