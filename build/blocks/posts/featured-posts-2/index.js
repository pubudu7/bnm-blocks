/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/posts/featured-posts-2/edit.js":
/*!***************************************************!*\
  !*** ./src/blocks/posts/featured-posts-2/edit.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_query_controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/query-controls */ "./src/components/query-controls/index.js");
/* harmony import */ var _components_settings_controls_featured_posts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/settings-controls/featured-posts */ "./src/components/settings-controls/featured-posts/index.js");
/* harmony import */ var _shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/js/utils.js */ "./src/shared/js/utils.js");
/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout.js */ "./src/blocks/posts/featured-posts-2/layout.js");


/**
 * External dependencies
 */


/**
 * WordPress Dependencies.
 */









/**
 * Internal Dependencies.
 */





const DEFAULTS_POSTS_PER_PAGE = 5;
const CATEGORIES_LIST_QUERY = {
  per_page: -1,
  context: 'view'
};
const USERS_LIST_QUERY = {
  per_page: -1,
  has_published_posts: ['post'],
  context: 'view'
};
function Edit(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    queryId,
    query,
    categoryPadding,
    featuredImageSizeSlug
  } = attributes;
  const {
    author,
    order,
    orderBy,
    perPage,
    taxQuery,
    sticky
  } = query;
  const postQueryArgs = {
    author: author,
    order: order,
    orderby: orderBy,
    per_page: perPage,
    _embed: 'wp:featuredmedia'
  };

  if (!sticky) {}

  if (sticky === 'exclude') {
    postQueryArgs.sticky = false;
  }

  if (sticky === 'only') {
    postQueryArgs.sticky = true;
  }

  if (taxQuery) {
    postQueryArgs.categories = taxQuery.category;
    postQueryArgs.tags = taxQuery.post_tag;
  }

  const {
    posts,
    categoriesList,
    authorsList
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const {
      getEntityRecords,
      getUsers
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__.store);
    const postQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.pickBy)(postQueryArgs, value => !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(value));
    return {
      posts: getEntityRecords('postType', 'post', postQuery),
      categoriesList: getEntityRecords('taxonomy', 'category', CATEGORIES_LIST_QUERY),
      authorsList: getUsers(USERS_LIST_QUERY)
    };
  }, [author, order, orderBy, perPage, taxQuery, sticky, featuredImageSizeSlug]);
  const {
    __unstableMarkNextChangeAsNotPersistent
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.useInstanceId)(Edit);
  const {
    postsPerPage
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const {
      getSettings
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
    return {
      postsPerPage: +getSettings().postsPerPage || DEFAULTS_POSTS_PER_PAGE
    };
  }, []); // There are some effects running where some initialization logic is
  // happening and setting some values to some attributes (ex. queryId).
  // These updates can cause an `undo trap` where undoing will result in
  // resetting again, so we need to mark these changes as not persistent
  // with `__unstableMarkNextChangeAsNotPersistent`.
  // Changes in query property (which is an object) need to be in the same callback,
  // because updates are batched after the render and changes in different query properties
  // would cause to override previous wanted changes.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const newQuery = {};

    if (!query.perPage && postsPerPage) {
      newQuery.perPage = postsPerPage;
    }

    if (!!Object.keys(newQuery).length) {
      __unstableMarkNextChangeAsNotPersistent();

      updateQuery(newQuery);
    }
  }, [query.perPage]); // We need this for multi-query block pagination.
  // Query parameters for each block are scoped to their ID.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!Number.isFinite(queryId)) {
      __unstableMarkNextChangeAsNotPersistent();

      setAttributes({
        queryId: instanceId
      });
    }
  }, [queryId, instanceId]); // What to do for undefined values?

  const inlineStyles = {
    '--title-font-size': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.mightBeUnit)(attributes.titleFontSize),
    '--title-font-size-small': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.mightBeUnit)(attributes.titleFontSizeSmall),
    '--title-line-height': attributes.titleLineHeight,
    '--title-line-height-small': attributes.titleLineHeightSmall,
    '--title-letter-spacing': attributes.titleLetterSpacing,
    '--title-letter-spacing-small': attributes.titleLetterSpacingSmall,
    '--title-padding': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.titlePadding),
    '--title-margin': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.titleMargin),
    '--title-color': attributes.titleColor,
    '--title-hover-color': attributes.titleHoverColor,
    '--category-font-size': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.mightBeUnit)(attributes.categoryFontSize),
    '--category-line-height': attributes.categoryLineHeight,
    '--category-letter-spacing': attributes.categoryLetterSpacing,
    '--category-color': attributes.categoryColor,
    '--category-hover-color': attributes.categoryHoverColor,
    '--category-bg-color': attributes.categoryBGColor,
    '--category-bg-hover-color': attributes.categoryBGHoverColor,
    '--category-padding': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.categoryPadding),
    '--category-margin': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.categoryMargin),
    '--meta-font-size': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.mightBeUnit)(attributes.metaFontSize),
    '--meta-font-size-small': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.mightBeUnit)(attributes.metaFontSizeSmall),
    '--meta-line-height': attributes.metaLineHeight,
    '--meta-line-height-small': attributes.metaLineHeightSmall,
    '--meta-letter-spacing': attributes.metaLetterSpacing,
    '--meta-letter-spacing-small': attributes.metaLetterSpacingSmall,
    '--meta-spacing': attributes.metaSpacing,
    '--meta-padding': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.metaPadding),
    '--meta-margin': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.metaMargin),
    '--meta-color': attributes.metaColor,
    '--meta-hover-color': attributes.metaHoverColor,
    '--excerpt-font-size': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.mightBeUnit)(attributes.excerptFontSize),
    '--excerpt-font-size-small': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.mightBeUnit)(attributes.excerptFontSizeSmall),
    '--excerpt-line-height': attributes.excerptLineHeight,
    '--excerpt-line-height-small': attributes.excerptLineHeightSmall,
    '--excerpt-letter-spacing': attributes.excerptLetterSpacing,
    '--excerpt-letter-spacing-small': attributes.excerptLetterSpacingSmall,
    '--excerpt-padding': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.excerptPadding),
    '--excerpt-margin': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.excerptMargin),
    '--excerpt-padding-small': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.excerptPaddingSmall),
    '--excerpt-margin-small': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.excerptMarginSmall),
    '--excerpt-color': attributes.excerptColor
  };
  let hasCategoryClass = false;

  if (Object.keys(categoryPadding).length !== 0 && categoryPadding.constructor === Object) {
    if ((0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.hasValueOnBox)(categoryPadding)) {
      hasCategoryClass = true;
    }
  }

  if (attributes.categoryBGColor || attributes.categoryBGHoverColor) {
    hasCategoryClass = true;
  }

  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('wpbnmfpb2', {
      'bnm-box-cat': hasCategoryClass
    })
  });

  const updateQuery = newQuery => setAttributes({
    query: { ...query,
      ...newQuery
    }
  });

  const hasPosts = !!(posts !== null && posts !== void 0 && posts.length);
  const inspectorControls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_query_controls__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attributes: attributes,
    setQuery: updateQuery
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_settings_controls_featured_posts__WEBPACK_IMPORTED_MODULE_10__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }));

  if (!hasPosts) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, inspectorControls, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Placeholder, null, !Array.isArray(posts) ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Spinner, null) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No posts found')));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, inspectorControls, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_layout_js__WEBPACK_IMPORTED_MODULE_12__.Layout, {
    posts: posts,
    categoriesList: categoriesList,
    authorsList: authorsList,
    blockProps: blockProps,
    inlineStyles: inlineStyles,
    attributes: attributes
  }));
}

/***/ }),

/***/ "./src/blocks/posts/featured-posts-2/index.js":
/*!****************************************************!*\
  !*** ./src/blocks/posts/featured-posts-2/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/posts/featured-posts-2/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/posts/featured-posts-2/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/posts/featured-posts-2/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/posts/featured-posts-2/block.json");
/* harmony import */ var _shared_js_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/js/icons */ "./src/shared/js/icons.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */





/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  icon: _shared_js_icons__WEBPACK_IMPORTED_MODULE_5__.FeaturedBlock2Icon,

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/blocks/posts/featured-posts-2/layout.js":
/*!*****************************************************!*\
  !*** ./src/blocks/posts/featured-posts-2/layout.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layout": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meta_meta_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/meta/meta.js */ "./src/components/meta/meta.js");
/* harmony import */ var _components_meta_meta_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/meta/meta-helper.js */ "./src/components/meta/meta-helper.js");



/**
 * Internal Dependencies.
 */


const Layout = _ref => {
  let {
    posts,
    authorsList,
    categoriesList,
    blockProps,
    inlineStyles,
    attributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
    style: inlineStyles
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "bnm-fp2-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "bnm-fp2-top"
  }, posts && posts.length > 0 && posts.map((post, index) => {
    const {
      url: imageSourceUrl,
      alt: featuredImageAlt
    } = (0,_components_meta_meta_helper_js__WEBPACK_IMPORTED_MODULE_3__.getFeaturedImageDetails)(post, attributes.featuredImageSizeSlug);
    return (index === 0 || index === 1) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "bnm-fp2-large-post"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "bnm-fp2-inner-container"
    }, imageSourceUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      src: imageSourceUrl,
      alt: featuredImageAlt,
      className: "bnm-fp-image"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "bnmfpovrlay inside-gut-editor"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
      className: "bnmlnkovrlay-ge",
      href: "#"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "bnm-fp2-post-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "bnm-fp2-content-inner"
    }, attributes.showCategory && categoriesList && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_2__.PostCategories, {
      categoriesList: categoriesList,
      post: post
    }), attributes.showTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_2__.PostTitle, {
      post: post,
      attributes: attributes
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "entry-meta"
    }, attributes.showAuthor && authorsList && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_2__.PostAuthor, {
      post: post,
      authorsList: authorsList,
      showAvatar: attributes.showAvatar
    }), attributes.showDate && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_2__.PostDateTime, {
      post: post
    }), attributes.showCommentCount && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_2__.PostCommentCount, {
      post: post
    })), attributes.displayPostExcerpt && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_2__.PostExcerpt, {
      post: post,
      excerptLength: attributes.excerptLength,
      showReadMore: attributes.showReadMore,
      readMoreLabel: attributes.readMoreLabel
    })))));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "bnm-fp2-bottom"
  }, posts && posts.length > 0 && posts.map((post, index) => {
    const {
      url: imageSourceUrl,
      alt: featuredImageAlt
    } = (0,_components_meta_meta_helper_js__WEBPACK_IMPORTED_MODULE_3__.getFeaturedImageDetails)(post, attributes.featuredImageSizeSlug);
    return (index === 2 || index === 3 || index === 4) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "bnm-fp2-small-post"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "bnm-fp2-inner-container"
    }, imageSourceUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      src: imageSourceUrl,
      alt: featuredImageAlt,
      className: "bnm-fp-image"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "bnmfpovrlay inside-gut-editor"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
      className: "bnmlnkovrlay-ge",
      href: "#"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "bnm-fp2-post-content"
    }, attributes.showCategorySmall && categoriesList && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_2__.PostCategories, {
      categoriesList: categoriesList,
      post: post
    }), attributes.showTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_2__.PostTitle, {
      post: post,
      attributes: attributes
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "entry-meta"
    }, attributes.showAuthorSmall && authorsList && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_2__.PostAuthor, {
      post: post,
      authorsList: authorsList,
      showAvatar: attributes.showAvatar
    }), attributes.showDateSmall && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_2__.PostDateTime, {
      post: post
    }), attributes.showCommentCountSmall && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_2__.PostCommentCount, {
      post: post
    })), attributes.displayPostExcerptSmall && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_2__.PostExcerpt, {
      post: post,
      excerptLength: attributes.excerptLengthSmall,
      showReadMore: attributes.showReadMoreSmall,
      readMoreLabel: attributes.readMoreLabel
    }))));
  }))));
};

/***/ }),

/***/ "./src/blocks/posts/featured-posts-2/save.js":
/*!***************************************************!*\
  !*** ./src/blocks/posts/featured-posts-2/save.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save() {
  return null;
}

/***/ }),

/***/ "./src/components/color-control/index.js":
/*!***********************************************!*\
  !*** ./src/components/color-control/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColorPopupButton)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




function ColorPopupButton(_ref) {
  let {
    color,
    onChange,
    label
  } = _ref;
  const [isVisible, setIsVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [moduleColor, setModuleColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(color);

  const toggleVisible = () => {
    setIsVisible(state => !state);
  };

  const toggleClose = () => {
    if (isVisible === true) {
      setIsVisible(false);
    }
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "thbnm-color-picker-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "thbnm-color-control-label"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "thbnm-color-control-click-side"
  }, isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Color')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "thbnm-color-indicator-button",
    onClick: toggleClose
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
    colorValue: moduleColor
  }))), !isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Color')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "thbnm-color-indicator-button",
    onClick: toggleVisible
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
    colorValue: moduleColor
  }))), isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    onClose: toggleClose,
    position: "top left"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
    color: color,
    onChange: newColor => {
      onChange(newColor);
      setModuleColor(newColor);
    },
    enableAlpha: true,
    defaultValue: ""
  }))));
}
;

/***/ }),

/***/ "./src/components/meta/meta-helper.js":
/*!********************************************!*\
  !*** ./src/components/meta/meta-helper.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFeaturedImageDetails": () => (/* binding */ getFeaturedImageDetails)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @param {Object} post 
 * @param {String} size 
 * @returns {url: String, alt: String}.
 */

function getFeaturedImageDetails(post, size) {
  var _image$media_details$, _image$media_details, _image$media_details$2, _image$media_details$3;

  const image = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(post, ['_embedded', 'wp:featuredmedia', '0']);
  return {
    url: (_image$media_details$ = image === null || image === void 0 ? void 0 : (_image$media_details = image.media_details) === null || _image$media_details === void 0 ? void 0 : (_image$media_details$2 = _image$media_details.sizes) === null || _image$media_details$2 === void 0 ? void 0 : (_image$media_details$3 = _image$media_details$2[size]) === null || _image$media_details$3 === void 0 ? void 0 : _image$media_details$3.source_url) !== null && _image$media_details$ !== void 0 ? _image$media_details$ : image === null || image === void 0 ? void 0 : image.source_url,
    alt: image === null || image === void 0 ? void 0 : image.alt_text
  };
}

/***/ }),

/***/ "./src/components/meta/meta.js":
/*!*************************************!*\
  !*** ./src/components/meta/meta.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedImage": () => (/* binding */ FeaturedImage),
/* harmony export */   "PostAuthor": () => (/* binding */ PostAuthor),
/* harmony export */   "PostAuthorAvatar": () => (/* binding */ PostAuthorAvatar),
/* harmony export */   "PostCategories": () => (/* binding */ PostCategories),
/* harmony export */   "PostCommentCount": () => (/* binding */ PostCommentCount),
/* harmony export */   "PostDateTime": () => (/* binding */ PostDateTime),
/* harmony export */   "PostExcerpt": () => (/* binding */ PostExcerpt),
/* harmony export */   "PostMeta": () => (/* binding */ PostMeta),
/* harmony export */   "PostTitle": () => (/* binding */ PostTitle)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meta_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meta-helper.js */ "./src/components/meta/meta-helper.js");


/**
 * WordPress Dependencies.
 */


/**
 * Internal Dependencies
 */


const PostExcerpt = _ref => {
  let {
    post,
    excerptLength,
    showReadMore,
    readMoreLabel
  } = _ref;
  let excerpt = post.excerpt.rendered;
  const excerptElement = document.createElement('div');
  excerptElement.innerHTML = excerpt;
  excerpt = excerptElement.textContent || excerptElement.innerText || '';
  const postExcerpt = showReadMore ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bnm-post-excerpt"
  }, excerpt.trim().split(' ', excerptLength).join(' '), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('… '), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "bnm-readmore"
  }, readMoreLabel)) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bnm-post-excerpt"
  }, excerpt.trim().split(' ', excerptLength).join(' '), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('… '));
  return postExcerpt;
};
const PostTitle = _ref2 => {
  let {
    attributes,
    post
  } = _ref2;
  const Tag = attributes.titleHtmlTag || 'h3';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
    className: "entry-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#"
  }, post.title.rendered ? post.title.rendered : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default title', 'bnm-blocks')));
};
const PostCategories = _ref3 => {
  let {
    categoriesList,
    post
  } = _ref3;
  const list = categoriesList;
  const cat = post.categories;
  const categoryNames = [];

  if (list !== undefined && cat !== undefined) {
    for (let j = 0; j < list.length; j++) {
      for (let i = 0; i < cat.length; i++) {
        if (list[j].id === cat[i]) {
          categoryNames.push(list[j].name);
        }
      }
    }
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bnm-category-list"
  }, categoryNames.map(category => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#"
    }, category);
  }));
};
const FeaturedImage = _ref4 => {
  let {
    post,
    featuredImageSizeSlug
  } = _ref4;
  const {
    url: imageSourceUrl,
    alt: featuredImageAlt
  } = (0,_meta_helper_js__WEBPACK_IMPORTED_MODULE_3__.getFeaturedImageDetails)(post, featuredImageSizeSlug);
  const featuredImage = imageSourceUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: "post-thumbnail"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageSourceUrl,
    alt: featuredImageAlt
  }));

  if (!featuredImage) {
    return null;
  }

  return featuredImage;
};
const PostAuthorAvatar = _ref5 => {
  var _author$avatar_urls;

  let {
    author
  } = _ref5;
  const authorAvatarUrl = author === null || author === void 0 ? void 0 : (_author$avatar_urls = author.avatar_urls) === null || _author$avatar_urls === void 0 ? void 0 : _author$avatar_urls[48];
  const avatarMarkup = authorAvatarUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "bnm-avatar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: authorAvatarUrl
  }));

  if (!avatarMarkup) {
    return null;
  }

  return avatarMarkup;
};
const PostAuthor = _ref6 => {
  let {
    post,
    authorsList,
    showAvatar
  } = _ref6;
  const currentAuthor = authorsList === null || authorsList === void 0 ? void 0 : authorsList.find(author => author.id === post.author);

  if (currentAuthor) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "bnm-post-author"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#"
    }, showAvatar && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PostAuthorAvatar, {
      author: currentAuthor
    }), sprintf(
    /* translators: byline. %s: current author. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('by %s'), currentAuthor.name)));
  }

  return null;
};
const PostDateTime = _ref7 => {
  let {
    post
  } = _ref7;
  const dateFormat = (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_2__.getSettings)().formats.date;

  if (post.date_gmt) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "bnm-post-date"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("time", {
      dateTime: (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_2__.format)('c', post.date_gmt)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#"
    }, (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_2__.dateI18n)(dateFormat, post.date_gmt))));
  }

  return null;
};
const PostCommentCount = _ref8 => {
  let {
    post
  } = _ref8;

  if (post.comment_count) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "bnm-comment-count"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#"
    }, post.comment_count));
  }

  return null;
};
const PostMeta = _ref9 => {
  let {
    post,
    authorsList,
    attributes
  } = _ref9;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "entry-meta"
  }, attributes.showAuthor && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PostAuthor, {
    post: post,
    authorsList: authorsList,
    showAvatar: attributes.showAvatar
  }), attributes.showDate && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PostDateTime, {
    post: post
  }), attributes.showCommentCount && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PostCommentCount, {
    post: post
  }));
};

/***/ }),

/***/ "./src/components/query-controls/author-control.js":
/*!*********************************************************!*\
  !*** ./src/components/query-controls/author-control.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/components/query-controls/utils.js");


/**
 * WordPress Dependencies.
 */




/**
 * Internal Dependencies.
 */


const AUTHORS_QUERY = {
  who: 'authors',
  per_page: -1,
  _fields: 'id,name',
  context: 'view'
};

function AuthorControl(_ref) {
  let {
    value,
    onChange
  } = _ref;
  const authorsList = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getUsers
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store);
    return getUsers(AUTHORS_QUERY);
  }, []);

  if (!authorsList) {
    return null;
  }

  const authorsInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getEntitiesInfo)(authorsList);
  /**
   * We need to normalize the value because the block operates on a
   * comma(`,`) separated string value and `FormTokenFiels` needs an
   * array.
   */

  const normalizedValue = !value ? [] : value.toString().split(','); // Returns only the existing authors ids. This prevents the component
  // from crashing in the editor, when non existing ids are provided.

  const sanitizedValue = normalizedValue.reduce((accumulator, authorId) => {
    const author = authorsInfo.mapById[authorId];

    if (author) {
      accumulator.push({
        id: authorId,
        value: author.name
      });
    }

    return accumulator;
  }, []);

  const getIdByValue = (entitiesMappedByName, authorValue) => {
    var _entitiesMappedByName;

    const id = (authorValue === null || authorValue === void 0 ? void 0 : authorValue.id) || ((_entitiesMappedByName = entitiesMappedByName[authorValue]) === null || _entitiesMappedByName === void 0 ? void 0 : _entitiesMappedByName.id);
    if (id) return id;
  };

  const onAuthorChange = newValue => {
    const ids = Array.from(newValue.reduce((accumulator, author) => {
      // Verify that new values point to existing entities.
      const id = getIdByValue(authorsInfo.mapByName, author);
      if (id) accumulator.add(id);
      return accumulator;
    }, new Set()));
    onChange({
      author: ids.join(',')
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FormTokenField, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Authors'),
    value: sanitizedValue,
    suggestions: authorsInfo.names,
    onChange: onAuthorChange
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthorControl);

/***/ }),

/***/ "./src/components/query-controls/index.js":
/*!************************************************!*\
  !*** ./src/components/query-controls/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QueryInspectorControls)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _order_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-control */ "./src/components/query-controls/order-control.js");
/* harmony import */ var _author_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./author-control */ "./src/components/query-controls/author-control.js");
/* harmony import */ var _taxonomy_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./taxonomy-controls */ "./src/components/query-controls/taxonomy-controls.js");
/* harmony import */ var _sticky_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sticky-control */ "./src/components/query-controls/sticky-control.js");
/* harmony import */ var _post_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post-control */ "./src/components/query-controls/post-control.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */






function QueryInspectorControls(_ref) {
  let {
    attributes: {
      query
    },
    setQuery
  } = _ref;
  const {
    posts,
    order,
    orderBy,
    author: authorIds,
    sticky,
    perPage
  } = query;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Content Settings')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_taxonomy_controls__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onChange: setQuery,
    query: query
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_author_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: authorIds,
    onChange: setQuery
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_order_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    order,
    orderBy,
    onChange: setQuery
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sticky_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: sticky,
    onChange: value => setQuery({
      sticky: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Number of items'),
    value: perPage,
    onChange: value => setQuery({
      perPage: value
    }),
    min: 2,
    max: 15,
    required: true
  })));
}

/***/ }),

/***/ "./src/components/query-controls/order-control.js":
/*!********************************************************!*\
  !*** ./src/components/query-controls/order-control.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies.
 */


const orderOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Newest to oldest'),
  value: 'date/desc'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Oldest to newest'),
  value: 'date/asc'
}, {
  /* translators: label for ordering posts by title in ascending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('A → Z'),
  value: 'title/asc'
}, {
  /* translators: label for ordering posts by title in descending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Z → A'),
  value: 'title/desc'
}];

function OrderControl(_ref) {
  let {
    order,
    orderBy,
    onChange
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Order by'),
    value: `${orderBy}/${order}`,
    options: orderOptions,
    onChange: value => {
      const [newOrderBy, newOrder] = value.split('/');
      onChange({
        order: newOrder,
        orderBy: newOrderBy
      });
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderControl);

/***/ }),

/***/ "./src/components/query-controls/post-control.js":
/*!*******************************************************!*\
  !*** ./src/components/query-controls/post-control.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostSelectControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);






const MAX_FETCHED_TERMS = 10;

const onPostsChange = newValue => {//console.log( newValue );
};

function PostSelectControl(value, onChange) {
  const postsList = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getEntityRecords
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store);
    const postQuery = {
      per_page: MAX_FETCHED_TERMS
    };
    return getEntityRecords('postType', 'post', postQuery);
  }, []);

  if (!postsList) {
    return null;
  }

  const postTitles = postsList.map(post => {
    return post.title.rendered;
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FormTokenField, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Custom Posts'),
    suggestions: postTitles,
    onChange: onPostsChange
  });
}

/***/ }),

/***/ "./src/components/query-controls/sticky-control.js":
/*!*********************************************************!*\
  !*** ./src/components/query-controls/sticky-control.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StickyControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


const stickyOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Include'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Exclude'),
  value: 'exclude'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Only'),
  value: 'only'
}];
function StickyControl(_ref) {
  let {
    value,
    onChange
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sticky posts'),
    options: stickyOptions,
    value: value,
    onChange: onChange
  });
}

/***/ }),

/***/ "./src/components/query-controls/taxonomy-controls.js":
/*!************************************************************!*\
  !*** ./src/components/query-controls/taxonomy-controls.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/components/query-controls/utils.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies.
 */


const MAX_FETCHED_TERMS = 100; // Helper function to get the term id based on user input in terms `FormTokenField`.

const getTermIdByTermValue = (termsMappedByName, termValue) => {
  var _termsMappedByName$te;

  // First we check for exact match by `term.id` or case sensitive `term.name` match.
  const termId = (termValue === null || termValue === void 0 ? void 0 : termValue.id) || ((_termsMappedByName$te = termsMappedByName[termValue]) === null || _termsMappedByName$te === void 0 ? void 0 : _termsMappedByName$te.id);
  if (termId) return termId;
  /**
   * Here we make an extra check for entered terms in a non case sensitive way,
   * to match user expectations, due to `FormTokenField` behaviour that shows
   * suggestions which are case insensitive.
   *
   * Although WP tries to discourage users to add terms with the same name (case insensitive),
   * it's still possible if you manually change the name, as long as the terms have different slugs.
   * In this edge case we always apply the first match from the terms list.
   */

  const termValueLower = termValue.toLocaleLowerCase();

  for (const term in termsMappedByName) {
    if (term.toLocaleLowerCase() === termValueLower) {
      return termsMappedByName[term].id;
    }
  }
};

function TaxonomyControls(_ref) {
  let {
    onChange,
    query
  } = _ref;
  const taxonomies = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.useTaxonomies)(query.postType);
  const taxonomiesInfo = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getEntityRecords
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store);
    const termsQuery = {
      per_page: MAX_FETCHED_TERMS
    };

    const _taxonomiesInfo = taxonomies === null || taxonomies === void 0 ? void 0 : taxonomies.map(_ref2 => {
      let {
        slug,
        name
      } = _ref2;

      const _terms = getEntityRecords('taxonomy', slug, termsQuery);

      return {
        slug,
        name,
        terms: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getEntitiesInfo)(_terms)
      };
    });

    return _taxonomiesInfo;
  }, [taxonomies]);

  const onTermsChange = taxonomySlug => newTermValues => {
    const taxonomyInfo = taxonomiesInfo.find(_ref3 => {
      let {
        slug
      } = _ref3;
      return slug === taxonomySlug;
    });
    if (!taxonomyInfo) return;
    const termIds = Array.from(newTermValues.reduce((accumulator, termValue) => {
      const termId = getTermIdByTermValue(taxonomyInfo.terms.mapByName, termValue);
      if (termId) accumulator.add(termId);
      return accumulator;
    }, new Set()));
    const newTaxQuery = { ...query.taxQuery,
      [taxonomySlug]: termIds
    };
    onChange({
      taxQuery: newTaxQuery
    });
  }; // Returns only the existing term ids in proper format to be
  // used in `FormTokenField`. This prevents the component from
  // crashing in the editor, when non existing term ids were provided.


  const getExistingTaxQueryValue = taxonomySlug => {
    var _query$taxQuery;

    const taxonomyInfo = taxonomiesInfo.find(_ref4 => {
      let {
        slug
      } = _ref4;
      return slug === taxonomySlug;
    });
    if (!taxonomyInfo) return [];
    return (((_query$taxQuery = query.taxQuery) === null || _query$taxQuery === void 0 ? void 0 : _query$taxQuery[taxonomySlug]) || []).reduce((accumulator, termId) => {
      const term = taxonomyInfo.terms.mapById[termId];

      if (term) {
        accumulator.push({
          id: termId,
          value: term.name
        });
      }

      return accumulator;
    }, []);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !!(taxonomiesInfo !== null && taxonomiesInfo !== void 0 && taxonomiesInfo.length) && taxonomiesInfo.map(_ref5 => {
    var _terms$names;

    let {
      slug,
      name,
      terms
    } = _ref5;

    if (!(terms !== null && terms !== void 0 && (_terms$names = terms.names) !== null && _terms$names !== void 0 && _terms$names.length)) {
      return null;
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormTokenField, {
      key: slug,
      label: name,
      value: getExistingTaxQueryValue(slug),
      suggestions: terms.names,
      onChange: onTermsChange(slug)
    });
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaxonomyControls);

/***/ }),

/***/ "./src/components/query-controls/utils.js":
/*!************************************************!*\
  !*** ./src/components/query-controls/utils.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEntitiesInfo": () => (/* binding */ getEntitiesInfo),
/* harmony export */   "usePostTypes": () => (/* binding */ usePostTypes),
/* harmony export */   "useTaxonomies": () => (/* binding */ useTaxonomies)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



/**
 * @typedef IHasNameAndId
 * @property {string|number} id   The entity's id.
 * @property {string}        name The entity's name.
 */

/**
 * The object used in Query block that contains info and helper mappings
 * from an array of IHasNameAndId objects.
 *
 * @typedef {Object} QueryEntitiesInfo
 * @property {IHasNameAndId[]}               entities  The array of entities.
 * @property {Object<string, IHasNameAndId>} mapById   Object mapping with the id as key and the entity as value.
 * @property {Object<string, IHasNameAndId>} mapByName Object mapping with the name as key and the entity as value.
 * @property {string[]}                      names     Array with the entities' names.
 */

/**
 * Returns a helper object with mapping from Objects that implement
 * the `IHasNameAndId` interface. The returned object is used for
 * integration with `FormTokenField` component.
 *
 * @param {IHasNameAndId[]} entities The entities to extract of helper object.
 * @return {QueryEntitiesInfo} The object with the entities information.
 */

const getEntitiesInfo = entities => {
  const mapping = entities === null || entities === void 0 ? void 0 : entities.reduce((accumulator, entity) => {
    const {
      mapById,
      mapByName,
      names
    } = accumulator;
    mapById[entity.id] = entity;
    mapByName[entity.name] = entity;
    names.push(entity.name);
    return accumulator;
  }, {
    mapById: {},
    mapByName: {},
    names: []
  });
  return {
    entities,
    ...mapping
  };
};
/**
 * Hook that returns the taxonomies associated with a specific post type.
 *
 * @param {string} postType The post type from which to retrieve the associated taxonomies.
 * @return {Object[]} An array of the associated taxonomies.
 */

const useTaxonomies = postType => {
  const taxonomies = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      getTaxonomies
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
    const filteredTaxonomies = getTaxonomies({
      type: postType,
      per_page: -1,
      context: 'view'
    });
    return filteredTaxonomies;
  }, [postType]);
  return taxonomies;
};
/**
 * Returns a helper object that contains:
 * 1. An `options` object from the available post types, to be passed to a `SelectControl`.
 * 2. A helper map with available taxonomies per post type.
 *
 * @return {Object} The helper object related to post types.
 */

const usePostTypes = () => {
  const postTypes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    var _getPostTypes;

    const {
      getPostTypes
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
    const excludedPostTypes = ['attachment'];
    const filteredPostTypes = (_getPostTypes = getPostTypes({
      per_page: -1
    })) === null || _getPostTypes === void 0 ? void 0 : _getPostTypes.filter(_ref => {
      let {
        viewable,
        slug
      } = _ref;
      return viewable && !excludedPostTypes.includes(slug);
    });
    return filteredPostTypes;
  }, []);
  const postTypesTaxonomiesMap = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!(postTypes !== null && postTypes !== void 0 && postTypes.length)) return;
    return postTypes.reduce((accumulator, type) => {
      accumulator[type.slug] = type.taxonomies;
      return accumulator;
    }, {});
  }, [postTypes]);
  const postTypesSelectOptions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (postTypes || []).map(_ref2 => {
    let {
      labels,
      slug
    } = _ref2;
    return {
      label: labels.singular_name,
      value: slug
    };
  }), [postTypes]);
  return {
    postTypesTaxonomiesMap,
    postTypesSelectOptions
  };
};

/***/ }),

/***/ "./src/components/settings-controls/featured-posts/index.js":
/*!******************************************************************!*\
  !*** ./src/components/settings-controls/featured-posts/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlockExtraSettings)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../color-control */ "./src/components/color-control/index.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../typography */ "./src/components/typography/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






function BlockExtraSettings(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    showTitle,
    titleHtmlTag,
    titleFontSize,
    titleFontSizeSmall,
    titleLineHeight,
    titleLineHeightSmall,
    titleLetterSpacing,
    titleLetterSpacingSmall,
    titleMargin,
    titlePadding,
    showFeaturedImage,
    showFeaturedImageSmall,
    showDate,
    showCategory,
    showAuthor,
    showAvatar,
    showCommentCount,
    displayPostExcerpt,
    showDateSmall,
    showCategorySmall,
    categoryMargin,
    categoryPadding,
    showAuthorSmall,
    showAvatarSmall,
    showCommentCountSmall,
    displayPostExcerptSmall,
    excerptLength,
    excerptLengthSmall,
    excerptFontSize,
    excerptFontSizeSmall,
    excerptLineHeight,
    excerptLineHeightSmall,
    excerptLetterSpacing,
    excerptLetterSpacingSmall,
    excerptMargin,
    excerptMarginSmall,
    excerptPadding,
    excerptPaddingSmall,
    showReadMore,
    showReadMoreSmall,
    readMoreLabel,
    metaFontSize,
    metaFontSizeSmall,
    metaLineHeight,
    metaLineHeightSmall,
    metaLetterSpacing,
    metaLetterSpacingSmall,
    metaMargin,
    metaPadding,
    categoryFontSize,
    categoryLineHeight,
    categoryLetterSpacing
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Post Title', 'bnm-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show Title', 'bnm-blocks'),
    checked: showTitle,
    onChange: () => setAttributes({
      showTitle: !showTitle
    })
  }), showTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "thbnm-settings-panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Title HTML tag', 'bnm-blocks'),
    labelPosition: "side",
    value: titleHtmlTag,
    options: [{
      label: 'h1',
      value: 'h1'
    }, {
      label: 'h2',
      value: 'h2'
    }, {
      label: 'h3',
      value: 'h3'
    }, {
      label: 'h4',
      value: 'h4'
    }, {
      label: 'h5',
      value: 'h5'
    }, {
      label: 'h6',
      value: 'h6'
    }, {
      label: 'span',
      value: 'span'
    }, {
      label: 'p',
      value: 'p'
    }],
    onChange: newTitleTag => setAttributes({
      titleHtmlTag: newTitleTag
    }),
    __nextHasNoMarginBottom: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Typography (Big Post Title)', 'bnm-blocks'),
    fontSize: titleFontSize,
    onFontSizeChange: newFontSize => setAttributes({
      titleFontSize: newFontSize
    }),
    lineHeight: titleLineHeight,
    onLineHeightChange: newLineHeight => setAttributes({
      titleLineHeight: newLineHeight
    }),
    letterSpacing: titleLetterSpacing,
    onLetterSpacingChange: newLetterSpacing => setAttributes({
      titleLetterSpacing: newLetterSpacing
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Typography (Small Post Titles)', 'bnm-blocks'),
    fontSize: titleFontSizeSmall,
    onFontSizeChange: newFontSize => setAttributes({
      titleFontSizeSmall: newFontSize
    }),
    lineHeight: titleLineHeightSmall,
    onLineHeightChange: newLineHeight => setAttributes({
      titleLineHeightSmall: newLineHeight
    }),
    letterSpacing: titleLetterSpacingSmall,
    onLetterSpacingChange: newLetterSpacing => setAttributes({
      titleLetterSpacingSmall: newLetterSpacing
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Margin', 'bnm-blocks'),
    values: titleMargin,
    onChange: nextValues => setAttributes({
      titleMargin: nextValues
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Padding', 'bnm-blocks'),
    values: titlePadding,
    onChange: nextValues => setAttributes({
      titlePadding: nextValues
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Color', 'bnm-blocks'),
    initialOpen: false,
    colorSettings: [{
      value: attributes.titleColor,
      onChange: titleColor => setAttributes({
        titleColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Title Color', 'bnm-blocks')
    }, {
      value: attributes.titleHoverColor,
      onChange: titleHoverColor => setAttributes({
        titleHoverColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Title Hover', 'bnm-blocks')
    }]
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Category', 'bnm-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show Category', 'bnm-blocks'),
    checked: showCategory,
    onChange: () => setAttributes({
      showCategory: !showCategory
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show Category(Small Posts)', 'bnm-blocks'),
    checked: showCategorySmall,
    onChange: () => setAttributes({
      showCategorySmall: !showCategorySmall
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Typography', 'bnm-blocks'),
    fontSize: categoryFontSize,
    onFontSizeChange: newFontSize => setAttributes({
      categoryFontSize: newFontSize
    }),
    lineHeight: categoryLineHeight,
    onLineHeightChange: newLineHeight => setAttributes({
      categoryLineHeight: newLineHeight
    }),
    letterSpacing: categoryLetterSpacing,
    onLetterSpacingChange: newLetterSpacing => setAttributes({
      categoryLetterSpacing: newLetterSpacing
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Margin', 'bnm-blocks'),
    values: categoryMargin,
    onChange: nextValues => setAttributes({
      categoryMargin: nextValues
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Padding', 'bnm-blocks'),
    values: categoryPadding,
    onChange: nextValues => setAttributes({
      categoryPadding: nextValues
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Category Color', 'bnm-blocks'),
    initialOpen: false,
    colorSettings: [{
      value: attributes.categoryColor,
      onChange: categoryColor => setAttributes({
        categoryColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text Color', 'bnm-blocks')
    }, {
      value: attributes.categoryHoverColor,
      onChange: categoryHoverColor => setAttributes({
        categoryHoverColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text Color: Hover', 'bnm-blocks')
    }, {
      value: attributes.categoryBGColor,
      onChange: categoryBGColor => setAttributes({
        categoryBGColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Color', 'bnm-blocks')
    }, {
      value: attributes.categoryBGHoverColor,
      onChange: categoryBGHoverColor => setAttributes({
        categoryBGHoverColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Color: Hover', 'bnm-blocks')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Post Meta', 'bnm-blocks'),
    className: "thbnm-panelbody",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "thbnm-featured-image-settings-tab-panel thbnm-tab-panel",
    activeClass: "thbnm-active-tab" //onSelect={ onSelect }
    ,
    initialTabName: "big-post",
    tabs: [{
      name: 'big-post',
      title: 'Big Post',
      className: 'tab-big-post'
    }, {
      name: 'small-post',
      title: 'Small Posts',
      className: 'tab-small-post'
    }]
  }, tab => {
    if (tab.name === 'big-post') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show Author', 'bnm-blocks'),
        checked: showAuthor,
        onChange: () => setAttributes({
          showAuthor: !showAuthor
        })
      }), showAuthor && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show Author Avatar', 'bnm-blocks'),
        checked: showAvatar,
        onChange: () => setAttributes({
          showAvatar: !showAvatar
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show Date', 'bnm-blocks'),
        checked: showDate,
        onChange: () => setAttributes({
          showDate: !showDate
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show Comment Count', 'bnm-blocks'),
        checked: showCommentCount,
        onChange: () => setAttributes({
          showCommentCount: !showCommentCount
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Typography', 'bnm-blocks'),
        fontSize: metaFontSize,
        onFontSizeChange: newFontSize => setAttributes({
          metaFontSize: newFontSize
        }),
        lineHeight: metaLineHeight,
        onLineHeightChange: newLineHeight => setAttributes({
          metaLineHeight: newLineHeight
        }),
        letterSpacing: metaLetterSpacing,
        onLetterSpacingChange: newLetterSpacing => setAttributes({
          metaLetterSpacing: newLetterSpacing
        })
      }));
    } else if (tab.name === 'small-post') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show Author', 'bnm-blocks'),
        checked: showAuthorSmall,
        onChange: () => setAttributes({
          showAuthorSmall: !showAuthorSmall
        })
      }), showAuthorSmall && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show Author Avatar', 'bnm-blocks'),
        checked: showAvatarSmall,
        onChange: () => setAttributes({
          showAvatarSmall: !showAvatarSmall
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show Date', 'bnm-blocks'),
        checked: showDateSmall,
        onChange: () => setAttributes({
          showDateSmall: !showDateSmall
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show Comment Count', 'bnm-blocks'),
        checked: showCommentCountSmall,
        onChange: () => setAttributes({
          showCommentCountSmall: !showCommentCountSmall
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Typography', 'bnm-blocks'),
        fontSize: metaFontSizeSmall,
        onFontSizeChange: newFontSize => setAttributes({
          metaFontSizeSmall: newFontSize
        }),
        lineHeight: metaLineHeightSmall,
        onLineHeightChange: newLineHeight => setAttributes({
          metaLineHeightSmall: newLineHeight
        }),
        letterSpacing: metaLetterSpacingSmall,
        onLetterSpacingChange: newLetterSpacing => setAttributes({
          metaLetterSpacingSmall: newLetterSpacing
        })
      }));
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Margin', 'bnm-blocks'),
    values: metaMargin,
    onChange: nextValues => setAttributes({
      metaMargin: nextValues
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Padding', 'bnm-blocks'),
    values: metaPadding,
    onChange: nextValues => setAttributes({
      metaPadding: nextValues
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Post Meta Color', 'bnm-blocks'),
    initialOpen: false,
    colorSettings: [{
      value: attributes.metaColor,
      onChange: metaColor => setAttributes({
        metaColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text Color', 'bnm-blocks')
    }, {
      value: attributes.metaHoverColor,
      onChange: metaHoverColor => setAttributes({
        metaHoverColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text Color: Hover', 'bnm-blocks')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Post Excerpt', 'bnm-blocks'),
    className: "thbnm-panelbody",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "thbnm-featured-image-settings-tab-panel thbnm-tab-panel",
    activeClass: "thbnm-active-tab" //onSelect={ onSelect }
    ,
    initialTabName: "big-post",
    tabs: [{
      name: 'big-post',
      title: 'Big Post',
      className: 'tab-big-post'
    }, {
      name: 'small-post',
      title: 'Small Posts',
      className: 'tab-small-post'
    }]
  }, tab => {
    if (tab.name === 'big-post') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show Post Excerpt', 'bnm-blocks'),
        checked: displayPostExcerpt,
        onChange: () => setAttributes({
          displayPostExcerpt: !displayPostExcerpt
        })
      }), displayPostExcerpt && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Max number of words in excerpt', 'bnm-blocks'),
        value: excerptLength,
        onChange: value => setAttributes({
          excerptLength: value
        }),
        min: 5,
        max: 100
      }), displayPostExcerpt && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add a "Read More" link', 'bnm-blocks'),
        checked: showReadMore,
        onChange: () => setAttributes({
          showReadMore: !showReadMore
        })
      }), displayPostExcerpt && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Typography', 'bnm-blocks'),
        fontSize: excerptFontSize,
        onFontSizeChange: newFontSize => setAttributes({
          excerptFontSize: newFontSize
        }),
        lineHeight: excerptLineHeight,
        onLineHeightChange: newLineHeight => setAttributes({
          excerptLineHeight: newLineHeight
        }),
        letterSpacing: excerptLetterSpacing,
        onLetterSpacingChange: newLetterSpacing => setAttributes({
          excerptLetterSpacing: newLetterSpacing
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), showReadMore && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('"Read More" link text', 'bnm-blocks'),
        value: readMoreLabel,
        placeholder: readMoreLabel,
        onChange: value => setAttributes({
          readMoreLabel: value
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Margin', 'bnm-blocks'),
        values: excerptMargin,
        onChange: nextValues => setAttributes({
          excerptMargin: nextValues
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Padding', 'bnm-blocks'),
        values: excerptPadding,
        onChange: nextValues => setAttributes({
          excerptPadding: nextValues
        })
      }));
    } else if (tab.name === 'small-post') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show Post Excerpt', 'bnm-blocks'),
        checked: displayPostExcerptSmall,
        onChange: () => setAttributes({
          displayPostExcerptSmall: !displayPostExcerptSmall
        })
      }), displayPostExcerptSmall && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Max number of words in excerpt', 'bnm-blocks'),
        value: excerptLengthSmall,
        onChange: value => setAttributes({
          excerptLengthSmall: value
        }),
        min: 5,
        max: 100
      }), displayPostExcerptSmall && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add a "Read More" link', 'bnm-blocks'),
        checked: showReadMoreSmall,
        onChange: () => setAttributes({
          showReadMoreSmall: !showReadMoreSmall
        })
      }), displayPostExcerptSmall && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Typography', 'bnm-blocks'),
        fontSize: excerptFontSizeSmall,
        onFontSizeChange: newFontSize => setAttributes({
          excerptFontSizeSmall: newFontSize
        }),
        lineHeight: excerptLineHeightSmall,
        onLineHeightChange: newLineHeight => setAttributes({
          excerptLineHeightSmall: newLineHeight
        }),
        letterSpacing: excerptLetterSpacingSmall,
        onLetterSpacingChange: newLetterSpacing => setAttributes({
          excerptLetterSpacingSmall: newLetterSpacing
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), showReadMoreSmall && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('"Read More" link text', 'bnm-blocks'),
        value: readMoreLabel,
        placeholder: readMoreLabel,
        onChange: value => setAttributes({
          readMoreLabel: value
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Margin', 'bnm-blocks'),
        values: excerptMarginSmall,
        onChange: nextValues => setAttributes({
          excerptMarginSmall: nextValues
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Padding', 'bnm-blocks'),
        values: excerptPaddingSmall,
        onChange: nextValues => setAttributes({
          excerptPaddingSmall: nextValues
        })
      }));
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Color', 'bnm-blocks'),
    initialOpen: false,
    colorSettings: [{
      value: attributes.excerptColor,
      onChange: excerptColor => setAttributes({
        excerptColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Excerpt Color', 'bnm-blocks')
    }]
  })));
}

/***/ }),

/***/ "./src/components/typography/index.js":
/*!********************************************!*\
  !*** ./src/components/typography/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TypographyControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




function TypographyControl(props) {
  const [isVisible, setIsVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const toggleVisible = () => {
    setIsVisible(state => !state);
  };

  const fontSizes = [{
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Small'),
    slug: 'small',
    size: 16
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Medium'),
    slug: 'medium',
    size: 24
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Large'),
    slug: 'large',
    size: 32
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Extra Large'),
    slug: 'extra-large',
    size: 42
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "thbnm-typography-control-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "thbnm-control-label"
  }, props.label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "thbnm-color-control-click-side"
  }, isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "thbnm-typograpy-control-button",
    onClick: toggleVisible
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "edit"
  })), !isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "thbnm-typograpy-control-button",
    onClick: toggleVisible
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "edit"
  })), isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    position: "top left",
    onClose: toggleVisible
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "thbnm-typography-controls-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FontSizePicker, {
    __nextHasNoMarginBottom: true,
    value: props.fontSize,
    onChange: props.onFontSizeChange,
    fontSizes: fontSizes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Line Height', 'bnm-blocks'),
    value: props.lineHeight,
    onChange: props.onLineHeightChange,
    step: 0.1,
    units: [{
      a11yLabel: 'Unitless (-)',
      label: '-',
      step: 0.1,
      value: ''
    }, {
      a11yLabel: 'Pixels (px)',
      label: 'px',
      step: 0.1,
      value: 'px'
    }, {
      a11yLabel: 'Percentage (%)',
      label: '%',
      step: 1,
      value: '%'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Letter Spacing', 'bnm-blocks'),
    value: props.letterSpacing,
    onChange: props.onLetterSpacingChange,
    step: 0.1,
    min: -50,
    max: 100
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null)))));
}

/***/ }),

/***/ "./src/shared/js/icons.js":
/*!********************************!*\
  !*** ./src/shared/js/icons.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedBlock1Icon": () => (/* binding */ FeaturedBlock1Icon),
/* harmony export */   "FeaturedBlock2Icon": () => (/* binding */ FeaturedBlock2Icon),
/* harmony export */   "PostBlock2Icon": () => (/* binding */ PostBlock2Icon),
/* harmony export */   "PostBlock3Icon": () => (/* binding */ PostBlock3Icon),
/* harmony export */   "Slider1Icon": () => (/* binding */ Slider1Icon),
/* harmony export */   "postBlock1Icon": () => (/* binding */ postBlock1Icon)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const postBlock1Icon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    version: "1.1",
    viewBox: "0 0 12.7 12.7"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    fillRule: "evenodd"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.251",
    d: "M0 .794h5.556v3.704H0z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.418",
    d: "M6.88.794h2.645v1.852H6.879z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.265",
    d: "M0 5.82h5.556v1.06H0z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.187",
    d: "M0 7.938h5.556v.529H0z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.247",
    d: "M0 8.996h5.556v.529H0z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.247",
    d: "M0 10.054h5.556v.53H0z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.195",
    d: "M0 11.113h3.44v.529H0z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.279",
    d: "M10.054.794H12.7v.529h-2.646z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.283",
    d: "M10.054 1.852h2.117v.53h-2.117z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.418",
    d: "M6.88 3.704h2.645v1.852H6.879z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.418",
    d: "M6.88 6.615h2.645v1.852H6.879z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.418",
    d: "M6.88 9.525h2.645v1.852H6.879z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.279",
    d: "M10.054 3.704H12.7v.53h-2.646z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.279",
    d: "M10.054 6.615H12.7v.529h-2.646z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.279",
    d: "M10.054 9.525H12.7v.53h-2.646z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.283",
    d: "M10.054 4.763h2.117v.529h-2.117z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.283",
    d: "M10.054 7.673h2.117v.53h-2.117z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.283",
    d: "M10.054 10.583h2.117v.53h-2.117z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  })));
};
const PostBlock2Icon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    version: "1.1",
    viewBox: "0 0 12.7 12.7"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    fill: "#000",
    fillOpacity: "1",
    fillRule: "evenodd"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.251",
    d: "M0 0h5.556v3.704H0z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.418",
    d: "M7.144 7.144H9.79v1.852H7.144z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.265",
    d: "M0 4.498h5.556v1.058H0z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.418",
    d: "M7.144 10.054H9.79v1.852H7.144z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.418",
    d: "M0 10.054h2.646v1.852H0z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.418",
    d: "M0 7.144h2.646v1.852H0z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.279",
    d: "M3.175 10.054h2.646v.53H3.175z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.265",
    d: "M3.175 7.144h2.381v.529H3.175z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.283",
    d: "M3.175 11.113h2.117v.529H3.175z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.283",
    d: "M3.175 8.202h2.117v.53H3.175z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.265",
    d: "M10.319 7.144H12.7v.529h-2.381z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.283",
    d: "M10.319 8.202h2.116v.53H10.32z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.265",
    d: "M10.319 10.054H12.7v.53h-2.381z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.283",
    d: "M10.319 11.113h2.116v.529H10.32z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.251",
    d: "M7.144 0H12.7v3.704H7.144z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.265",
    d: "M7.144 4.498H12.7v1.058H7.144z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  })));
};
const PostBlock3Icon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    version: "1.1",
    viewBox: "0 0 12.7 12.7"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    fillRule: "evenodd"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000",
    fillOpacity: "1",
    strokeWidth: "0.158",
    d: "M0 1.323h3.44v2.381H0z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000",
    fillOpacity: "1",
    strokeWidth: "0.158",
    d: "M4.498 1.323h3.44v2.381h-3.44z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000",
    fillOpacity: "1",
    strokeWidth: "0.158",
    d: "M8.996 1.323h3.44v2.381h-3.44z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000",
    fillOpacity: "1",
    strokeWidth: "0.158",
    d: "M0 7.408h3.44V9.79H0z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000",
    fillOpacity: "1",
    strokeWidth: "0.158",
    d: "M4.498 7.408h3.44V9.79h-3.44z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000",
    fillOpacity: "1",
    strokeWidth: "0.158",
    d: "M8.996 7.408h3.44V9.79h-3.44z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.265",
    d: "M0 4.498h3.44v.794H0z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.265",
    d: "M4.498 4.498h3.44v.794h-3.44z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.265",
    d: "M8.996 4.498h3.44v.794h-3.44z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.265",
    d: "M0 10.583h3.44v.794H0z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.265",
    d: "M4.498 10.583h3.44v.794h-3.44z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.265",
    d: "M8.996 10.583h3.44v.794h-3.44z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  })));
};
const FeaturedBlock1Icon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    version: "1.1",
    viewBox: "0 0 12.7 12.7"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    fillRule: "evenodd"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.235",
    d: "M0 3.704h7.408v5.027H0z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#333",
    strokeWidth: "0.266",
    d: "M8.202 3.704H12.7v2.117H8.202z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#333",
    strokeWidth: "0.266",
    d: "M8.202 6.615H12.7V8.73H8.202z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  })));
};
const FeaturedBlock2Icon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    version: "1.1",
    viewBox: "0 0 12.7 12.7"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    fillRule: "evenodd"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.197",
    d: "M0 2.381h5.82V6.88H0z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#333",
    strokeWidth: "0.256",
    d: "M0 7.673h3.704v2.381H0z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.197",
    d: "M6.88 2.381h5.82V6.88H6.88z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#333",
    strokeWidth: "0.256",
    d: "M4.498 7.673h3.704v2.381H4.498z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#333",
    strokeWidth: "0.256",
    d: "M8.996 7.673H12.7v2.381H8.996z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  })));
};
const Slider1Icon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    version: "1.1",
    viewBox: "0 0 12.7 12.7"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    strokeWidth: "0.276",
    d: "M0 1.587h12.7v9.526H0z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#fff",
    fillRule: "evenodd",
    strokeWidth: "0.278",
    d: "M.794 2.381h11.112v7.938H.794z",
    opacity: "1",
    stopColor: "#000",
    stopOpacity: "1",
    vectorEffect: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    strokeOpacity: "1",
    strokeWidth: "0.265",
    d: "M2.91 5.027L1.852 6.35 2.91 7.408v0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    strokeOpacity: "1",
    strokeWidth: "0.265",
    d: "M2.91 5.027L1.852 6.35 2.91 7.408v0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    strokeOpacity: "1",
    strokeWidth: "0.265",
    d: "M9.608 7.47l.975-1.385-1.12-.991v0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.172",
    d: "M5.3 9.147a.456.39 0 01-.456.39.456.39 0 01-.457-.39.456.39 0 01.457-.39.456.39 0 01.456.39z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.172",
    d: "M6.804 9.147a.456.39 0 01-.457.39.456.39 0 01-.456-.39.456.39 0 01.456-.39.456.39 0 01.457.39z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeWidth: "0.172",
    d: "M8.34 9.131a.456.39 0 01-.457.39.456.39 0 01-.457-.39.456.39 0 01.457-.39.456.39 0 01.456.39z"
  })));
};

/***/ }),

/***/ "./src/shared/js/utils.js":
/*!********************************!*\
  !*** ./src/shared/js/utils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boxValues": () => (/* binding */ boxValues),
/* harmony export */   "hasValueOnBox": () => (/* binding */ hasValueOnBox),
/* harmony export */   "mightBeBoxed": () => (/* binding */ mightBeBoxed),
/* harmony export */   "mightBeUnit": () => (/* binding */ mightBeUnit),
/* harmony export */   "px": () => (/* binding */ px)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependancies.
 */

/**
 * returns the px value.
 */

const px = value => value ? `${value}px` : value;
/**
 * Checks if it is only a number and returns the px value. 
 * Returns the default value if it is not a number
 */

const mightBeUnit = value => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value) ? px(value) : value;
const mightBeBoxed = value => {
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isObject)(value)) {
    return boxValues(value);
  }

  return mightBeUnit(value);
};
/**
 * Returns the values from a box type.
 *
 * @param values
 */

const boxValues = values => {
  if (Object.keys(values).length !== 0 && values.constructor === Object && hasValueOnBox(values)) {
    var _values$top, _values$right, _values$bottom, _values$left;

    return `${(_values$top = values.top) !== null && _values$top !== void 0 ? _values$top : '0px'} ${(_values$right = values.right) !== null && _values$right !== void 0 ? _values$right : '0px'} ${(_values$bottom = values.bottom) !== null && _values$bottom !== void 0 ? _values$bottom : '0px'} ${(_values$left = values.left) !== null && _values$left !== void 0 ? _values$left : '0px'}`;
  }
};
/**
 * Check if any property has at least one value other than undefined.
 *
 * @param {Object} obj
 * @return boolean
 */

const hasValueOnBox = obj => {
  for (const key in obj) {
    if (obj[key] !== undefined) {
      return true;
    }
  }

  return false;
};

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/blocks/posts/featured-posts-2/style.scss":
/*!******************************************************!*\
  !*** ./src/blocks/posts/featured-posts-2/style.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["date"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/blocks/posts/featured-posts-2/block.json":
/*!******************************************************!*\
  !*** ./src/blocks/posts/featured-posts-2/block.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"bnm-blocks/featured-posts-2","title":"Featured Posts: #2","category":"bnm-blocks","icon":"smiley","description":"Featured Posts Block style #2.","supports":{"html":false},"textdomain":"bnm-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"queryId":{"type":"number"},"query":{"type":"object","default":{"posts":[],"perPage":5,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true,"taxQuery":null}},"specificMode":{"type":"boolean","default":"false"},"specificPosts":{"type":"array","default":[],"items":{"type":"integer"}},"showTitle":{"type":"boolean","default":true},"titleHtmlTag":{"type":"string","default":"h3"},"titleFontSize":{"type":["string","number"]},"titleFontSizeSmall":{"type":["string","number"]},"titleLineHeight":{"type":["number","string"]},"titleLineHeightSmall":{"type":["number","string"]},"titleLetterSpacing":{"type":["number","string"]},"titleLetterSpacingSmall":{"type":["number","string"]},"titlePadding":{"type":["number","object"],"default":[]},"titleMargin":{"type":["number","object"],"default":[]},"titleColor":{"type":"string","default":""},"titleHoverColor":{"type":"string","default":""},"featuredImageSizeSlug":{"type":"string","default":"bnm-featured"},"featuredImageSizeSlugSmall":{"type":"string","default":"bnm-featured-thumb"},"addLinkToFeaturedImage":{"type":"boolean","default":false},"showDate":{"type":"boolean","default":false},"showCategory":{"type":"boolean","default":true},"showAuthor":{"type":"boolean","default":false},"showAvatar":{"type":"boolean","default":false},"showCommentCount":{"type":"boolean","default":false},"displayPostExcerpt":{"type":"boolean","default":false},"showDateSmall":{"type":"boolean","default":true},"showCategorySmall":{"type":"boolean","default":false},"categoryPadding":{"type":["number","object"],"default":[]},"categoryMargin":{"type":["number","object"],"default":[]},"showAuthorSmall":{"type":"boolean","default":false},"showAvatarSmall":{"type":"boolean","default":false},"showCommentCountSmall":{"type":"boolean","default":false},"displayPostExcerptSmall":{"type":"boolean","default":false},"excerptLength":{"type":"number","default":20},"excerptLengthSmall":{"type":"number","default":10},"excerptFontSize":{"type":["string","number"]},"excerptFontSizeSmall":{"type":["string","number"]},"excerptLineHeight":{"type":["number","string"]},"excerptLetterSpacing":{"type":["number","string"]},"excerptLineHeightSmall":{"type":["number","string"]},"excerptLetterSpacingSmall":{"type":["number","string"]},"excerptPadding":{"type":["number","object"],"default":[]},"excerptPaddingSmall":{"type":["number","object"],"default":[]},"excerptMargin":{"type":["number","object"],"default":[]},"excerptMarginSmall":{"type":["number","object"],"default":[]},"excerptColor":{"type":"string","default":""},"showReadMore":{"type":"boolean","default":false},"showReadMoreSmall":{"type":"boolean","default":false},"readMoreLabel":{"type":"string","default":"Keep reading"},"metaFontSize":{"type":["string","number"]},"metaFontSizeSmall":{"type":["string","number"]},"metaLineHeight":{"type":["number","string"]},"metaLetterSpacing":{"type":["number","string"]},"metaLineHeightSmall":{"type":["number","string"]},"metaLetterSpacingSmall":{"type":["number","string"]},"metaSpacing":{"type":["number","object"],"default":[]},"metaPadding":{"type":["number","object"],"default":[]},"metaMargin":{"type":["number","object"],"default":[]},"metaColor":{"type":"string","default":""},"metaHoverColor":{"type":"string","default":""},"categoryFontSize":{"type":["string","number"]},"categoryLineHeight":{"type":["number","string"]},"categoryLetterSpacing":{"type":["number","string"]},"categoryColor":{"type":"string","default":""},"categoryHoverColor":{"type":"string","default":""},"categoryBGColor":{"type":"string","default":""},"categoryBGHoverColor":{"type":"string","default":""}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/posts/featured-posts-2/index": 0,
/******/ 			"blocks/posts/featured-posts-2/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkbnm_blocks"] = globalThis["webpackChunkbnm_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/posts/featured-posts-2/style-index"], () => (__webpack_require__("./src/blocks/posts/featured-posts-2/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map