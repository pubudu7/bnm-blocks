/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
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
	} else // removed by dead control flow
{}
}());


/***/ }),

/***/ "./src/blocks/posts/post-block-1/block.json":
/*!**************************************************!*\
  !*** ./src/blocks/posts/post-block-1/block.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"bnm-blocks/post-block-1","title":"Posts Block: #1","category":"bnm-blocks","description":"Posts block style #1.","supports":{"html":false,"color":{"text":false,"background":true}},"textdomain":"bnm-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"queryId":{"type":"number"},"query":{"type":"object","default":{"posts":[],"perPage":5,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"exclude","inherit":true,"taxQuery":null}},"specificMode":{"type":"boolean","default":false},"specificPosts":{"type":"array","default":[],"items":{"type":"integer"}},"showSectionHeader":{"type":"boolean","default":true},"sectionHeaderStyle":{"type":"string","default":"1"},"sectionHeader":{"type":"string","default":""},"headerHtmlTag":{"type":"string","default":"h2"},"headerFontSize":{"type":["string","number"]},"headerLineHeight":{"type":["number","string"]},"headerLetterSpacing":{"type":["number","string"]},"headerPadding":{"type":["number","object"],"default":[]},"headerMargin":{"type":["number","object"],"default":[]},"headerColor":{"type":"string","default":""},"headerHoverColor":{"type":"string","default":""},"colGap":{"type":["number","string"]},"showTitle":{"type":"boolean","default":true},"titleHtmlTag":{"type":"string","default":"h3"},"titleFontSize":{"type":["string","number"]},"titleFontSizeSmall":{"type":["string","number"]},"titleLineHeight":{"type":["number","string"]},"titleLineHeightSmall":{"type":["number","string"]},"titleLetterSpacing":{"type":["number","string"]},"titleLetterSpacingSmall":{"type":["number","string"]},"titlePadding":{"type":["number","object"],"default":[]},"titleMargin":{"type":["number","object"],"default":[]},"titleColor":{"type":"string","default":""},"titleHoverColor":{"type":"string","default":""},"showFeaturedImage":{"type":"boolean","default":true},"showFeaturedImageSmall":{"type":"boolean","default":true},"featuredImageAlign":{"type":"string","enum":["left","center","right"]},"featuredImageSizeSlug":{"type":"string","default":"bnm-featured"},"featuredImageSizeSlugSmall":{"type":"string","default":"bnm-featured-thumb"},"featuredImageWidth":{"type":["number","string"],"default":"33%"},"entryContentWidth":{"type":["number","string"],"default":"67%"},"featuredImageMargin":{"type":["number","object"],"default":[]},"addLinkToFeaturedImage":{"type":"boolean","default":false},"showDate":{"type":"boolean","default":true},"showCategory":{"type":"boolean","default":true},"showAuthor":{"type":"boolean","default":true},"showAvatar":{"type":"boolean","default":false},"showCommentCount":{"type":"boolean","default":true},"displayPostExcerpt":{"type":"boolean","default":true},"showDateSmall":{"type":"boolean","default":true},"showCategorySmall":{"type":"boolean","default":false},"categoryPadding":{"type":["number","object"],"default":[]},"categoryMargin":{"type":["number","object"],"default":[]},"showAuthorSmall":{"type":"boolean","default":false},"showAvatarSmall":{"type":"boolean","default":false},"showCommentCountSmall":{"type":"boolean","default":false},"displayPostExcerptSmall":{"type":"boolean","default":false},"excerptLength":{"type":"number","default":20},"excerptLengthSmall":{"type":"number","default":10},"excerptFontSize":{"type":["string","number"]},"excerptFontSizeSmall":{"type":["string","number"]},"excerptLineHeight":{"type":["number","string"]},"excerptLetterSpacing":{"type":["number","string"]},"excerptLineHeightSmall":{"type":["number","string"]},"excerptLetterSpacingSmall":{"type":["number","string"]},"excerptPadding":{"type":["number","object"],"default":[]},"excerptPaddingSmall":{"type":["number","object"],"default":[]},"excerptMargin":{"type":["number","object"],"default":[]},"excerptMarginSmall":{"type":["number","object"],"default":[]},"excerptColor":{"type":"string","default":""},"showReadMore":{"type":"boolean","default":false},"showReadMoreSmall":{"type":"boolean","default":false},"readMoreLabel":{"type":"string","default":"Keep reading"},"metaFontSize":{"type":["string","number"]},"metaFontSizeSmall":{"type":["string","number"]},"metaLineHeight":{"type":["number","string"]},"metaLetterSpacing":{"type":["number","string"]},"metaLineHeightSmall":{"type":["number","string"]},"metaLetterSpacingSmall":{"type":["number","string"]},"metaSpacing":{"type":["number","string"]},"metaPadding":{"type":["number","object"],"default":[]},"metaMargin":{"type":["number","object"],"default":[]},"metaColor":{"type":"string","default":""},"metaHoverColor":{"type":"string","default":""},"categoryFontSize":{"type":["string","number"]},"categoryLineHeight":{"type":["number","string"]},"categoryLetterSpacing":{"type":["number","string"]},"categoryColor":{"type":"string","default":""},"categoryHoverColor":{"type":"string","default":""},"categoryBGColor":{"type":"string","default":""},"categoryBGHoverColor":{"type":"string","default":""},"hasPostBorder":{"type":"boolean","default":false},"postBorderColor":{"type":"string","default":""}}}');

/***/ }),

/***/ "./src/blocks/posts/post-block-1/edit.js":
/*!***********************************************!*\
  !*** ./src/blocks/posts/post-block-1/edit.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_query_controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/query-controls */ "./src/components/query-controls/index.js");
/* harmony import */ var _components_settings_controls_post_type_1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/settings-controls/post-type-1 */ "./src/components/settings-controls/post-type-1/index.js");
/* harmony import */ var _shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/js/utils.js */ "./src/shared/js/utils.js");
/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout.js */ "./src/blocks/posts/post-block-1/layout.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
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
function Edit({
  attributes,
  setAttributes
}) {
  const {
    sectionHeaderStyle,
    queryId,
    query,
    specificMode,
    specificPosts,
    categoryPadding,
    featuredImageSizeSlug,
    hasPostBorder,
    postBorderColor
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
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getEntityRecords,
      getUsers
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store);
    const postQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pickBy)(postQueryArgs, value => !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(value));
    let posts;
    if (specificMode && specificPosts.length) {
      posts = getEntityRecords('postType', 'post', {
        include: specificPosts,
        orderby: 'include',
        per_page: specificPosts.length,
        _embed: 'wp:featuredmedia'
      });
    } else {
      posts = getEntityRecords('postType', 'post', postQuery);
    }
    return {
      posts,
      categoriesList: getEntityRecords('taxonomy', 'category', CATEGORIES_LIST_QUERY),
      authorsList: getUsers(USERS_LIST_QUERY)
    };
  }, [author, order, orderBy, perPage, taxQuery, sticky, featuredImageSizeSlug, specificPosts]);
  const {
    __unstableMarkNextChangeAsNotPersistent
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useInstanceId)(Edit);
  const {
    postsPerPage
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getSettings
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    return {
      postsPerPage: +getSettings().postsPerPage || DEFAULTS_POSTS_PER_PAGE
    };
  }, []);

  // There are some effects running where some initialization logic is
  // happening and setting some values to some attributes (ex. queryId).
  // These updates can cause an `undo trap` where undoing will result in
  // resetting again, so we need to mark these changes as not persistent
  // with `__unstableMarkNextChangeAsNotPersistent`.

  // Changes in query property (which is an object) need to be in the same callback,
  // because updates are batched after the render and changes in different query properties
  // would cause to override previous wanted changes.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    const newQuery = {};
    if (!query.perPage && postsPerPage) {
      newQuery.perPage = postsPerPage;
    }
    if (!!Object.keys(newQuery).length) {
      __unstableMarkNextChangeAsNotPersistent();
      updateQuery(newQuery);
    }
  }, [query.perPage]);
  // We need this for multi-query block pagination.
  // Query parameters for each block are scoped to their ID.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    if (!Number.isFinite(queryId)) {
      __unstableMarkNextChangeAsNotPersistent();
      setAttributes({
        queryId: instanceId
      });
    }
  }, [queryId, instanceId]);

  // What to do for undefined values?
  const inlineStyles = {
    '--bnm-title-font-size': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.mightBeUnit)(attributes.titleFontSize),
    '--bnm-title-font-size-small': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.mightBeUnit)(attributes.titleFontSizeSmall),
    '--bnm-title-line-height': attributes.titleLineHeight,
    '--bnm-title-line-height-small': attributes.titleLineHeightSmall,
    '--bnm-title-letter-spacing': attributes.titleLetterSpacing,
    '--bnm-title-letter-spacing-small': attributes.titleLetterSpacingSmall,
    '--bnm-title-padding': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.titlePadding),
    '--bnm-title-margin': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.titleMargin),
    '--bnm-title-color': attributes.titleColor,
    '--bnm-title-hover-color': attributes.titleHoverColor,
    '--bnm-category-font-size': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.mightBeUnit)(attributes.categoryFontSize),
    '--bnm-category-line-height': attributes.categoryLineHeight,
    '--bnm-category-letter-spacing': attributes.categoryLetterSpacing,
    '--bnm-category-color': attributes.categoryColor,
    '--bnm-category-hover-color': attributes.categoryHoverColor,
    '--bnm-category-bg-color': attributes.categoryBGColor,
    '--bnm-category-bg-hover-color': attributes.categoryBGHoverColor,
    '--bnm-category-padding': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.categoryPadding),
    '--bnm-category-margin': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.categoryMargin),
    '--bnm-meta-font-size': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.mightBeUnit)(attributes.metaFontSize),
    '--bnm-meta-font-size-small': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.mightBeUnit)(attributes.metaFontSizeSmall),
    '--bnm-meta-line-height': attributes.metaLineHeight,
    '--bnm-meta-line-height-small': attributes.metaLineHeightSmall,
    '--bnm-meta-letter-spacing': attributes.metaLetterSpacing,
    '--bnm-meta-letter-spacing-small': attributes.metaLetterSpacingSmall,
    '--bnm-meta-spacing': attributes.metaSpacing,
    '--bnm-meta-padding': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.metaPadding),
    '--bnm-meta-margin': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.metaMargin),
    '--bnm-meta-color': attributes.metaColor,
    '--bnm-meta-hover-color': attributes.metaHoverColor,
    '--bnm-excerpt-font-size': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.mightBeUnit)(attributes.excerptFontSize),
    '--bnm-excerpt-font-size-small': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.mightBeUnit)(attributes.excerptFontSizeSmall),
    '--bnm-excerpt-line-height': attributes.excerptLineHeight,
    '--bnm-excerpt-line-height-small': attributes.excerptLineHeightSmall,
    '--bnm-excerpt-letter-spacing': attributes.excerptLetterSpacing,
    '--bnm-excerpt-letter-spacing-small': attributes.excerptLetterSpacingSmall,
    '--bnm-excerpt-padding': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.excerptPadding),
    '--bnm-excerpt-margin': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.excerptMargin),
    '--bnm-excerpt-padding-small': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.excerptPaddingSmall),
    '--bnm-excerpt-margin-small': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.excerptMarginSmall),
    '--bnm-excerpt-color': attributes.excerptColor,
    '--bnm-header-font-size': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.mightBeUnit)(attributes.headerFontSize),
    '--bnm-header-line-height': attributes.headerLineHeight,
    '--bnm-header-letter-spacing': attributes.headerLetterSpacing,
    '--bnm-header-padding': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.headerPadding),
    '--bnm-header-margin': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.headerMargin),
    '--bnm-header-color': attributes.headerColor,
    '--bnm-header-hover-color': attributes.headerHoverColor,
    '--bnm-col-gap': attributes.colGap,
    '--bnm-image-width': attributes.featuredImageWidth,
    '--bnm-content-width': attributes.entryContentWidth,
    '--bnm-image-margin': (0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.boxValues)(attributes.featuredImageMargin),
    '--bnm-border-color': attributes.postBorderColor
  };
  const updateQuery = newQuery => setAttributes({
    query: {
      ...query,
      ...newQuery
    }
  });
  const inspectorControls = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Settings', 'bnm-blocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_query_controls__WEBPACK_IMPORTED_MODULE_9__["default"], {
          attributes: attributes,
          setQuery: updateQuery,
          setAttributes: setAttributes,
          onSpecificModeChange: () => setAttributes({
            specificMode: true
          }),
          onLoopModeChange: () => setAttributes({
            specificMode: false
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.__experimentalUnitControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Column Gap', 'bnm-blocks'),
          value: attributes.colGap,
          onChange: value => setAttributes({
            colGap: value
          }),
          step: 5,
          units: [{
            value: 'px',
            label: 'px'
          }, {
            value: '%',
            label: '%'
          }, {
            value: 'em',
            label: 'em'
          }]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_settings_controls_post_type_1__WEBPACK_IMPORTED_MODULE_10__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      group: "styles",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Separator', 'textdomain'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show borders', 'bnm-blocks'),
          checked: hasPostBorder,
          onChange: () => setAttributes({
            hasPostBorder: !hasPostBorder
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'bnm-blocks'),
          initialOpen: false,
          colorSettings: [{
            value: postBorderColor,
            onChange: postBorderColor => setAttributes({
              postBorderColor
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Color', 'bnm-blocks')
          }]
        })]
      })
    })]
  });
  let hasCategoryClass = false;
  if (Object.keys(categoryPadding).length !== 0 && categoryPadding.constructor === Object) {
    if ((0,_shared_js_utils_js__WEBPACK_IMPORTED_MODULE_11__.hasValueOnBox)(categoryPadding)) {
      hasCategoryClass = true;
    }
  }
  if (attributes.categoryBGColor || attributes.categoryBGHoverColor) {
    hasCategoryClass = true;
  }
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('wpbnmpb1', 'bnmbcs', {
      'bnm-box-cat': hasCategoryClass,
      'is-style-bnm-borders': hasPostBorder
    }, sectionHeaderStyle ? `bnm-bhs-${sectionHeaderStyle}` : null),
    style: inlineStyles
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: [inspectorControls, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_layout_js__WEBPACK_IMPORTED_MODULE_12__.Layout, {
      posts: posts,
      categoriesList: categoriesList,
      authorsList: authorsList,
      blockProps: blockProps,
      attributes: attributes,
      setAttributes: setAttributes
    })]
  });
}

/***/ }),

/***/ "./src/blocks/posts/post-block-1/index.js":
/*!************************************************!*\
  !*** ./src/blocks/posts/post-block-1/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/posts/post-block-1/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/posts/post-block-1/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/posts/post-block-1/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/posts/post-block-1/block.json");
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
  icon: _shared_js_icons__WEBPACK_IMPORTED_MODULE_5__.postBlock1Icon,
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

/***/ "./src/blocks/posts/post-block-1/layout.js":
/*!*************************************************!*\
  !*** ./src/blocks/posts/post-block-1/layout.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Layout: () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meta_meta_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/meta/meta.js */ "./src/components/meta/meta.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress Dependencies.
 */




/**
 * Internal Dependencies.
 */


const Layout = ({
  posts,
  authorsList,
  categoriesList,
  blockProps,
  attributes,
  setAttributes
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    ...blockProps,
    children: [attributes.showSectionHeader && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "bnm-block-title-wrap",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        onChange: value => setAttributes({
          sectionHeader: value
        }),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Write section header…', 'bnm-blocks'),
        value: attributes.sectionHeader,
        tagName: attributes.headerHtmlTag,
        className: "article-section-title"
      })
    }), !posts && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, {})
    }), posts && posts.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No Posts Found.', 'bnm-blocks')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "pb1-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "bnm-left-block",
        children: posts && posts.length > 0 && posts.map((post, index) => {
          const currentAuthor = authorsList?.find(writer => writer.id === post.author);
          return index === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("article", {
            className: "bnm-pb1-large",
            children: [attributes.showFeaturedImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_3__.FeaturedImage, {
              post: post,
              featuredImageSizeSlug: attributes.featuredImageSizeSlug
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "bnm-entry-wrapper",
              children: [attributes.showCategory && categoriesList && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_3__.PostCategories, {
                categoriesList: categoriesList,
                post: post
              }), attributes.showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_3__.PostTitle, {
                post: post,
                attributes: attributes
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "entry-meta",
                children: [attributes.showAuthor && attributes.showAvatar && currentAuthor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_3__.PostAuthorAvatar, {
                  author: currentAuthor
                }), attributes.showAuthor && currentAuthor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_3__.PostAuthor, {
                  author: currentAuthor
                }), attributes.showDate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_3__.PostDateTime, {
                  post: post
                }), attributes.showCommentCount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_3__.PostCommentCount, {
                  post: post
                })]
              }), attributes.displayPostExcerpt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_3__.PostExcerpt, {
                post: post,
                excerptLength: attributes.excerptLength,
                showReadMore: attributes.showReadMore
              })]
            })]
          }, post.id);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "bnm-right-block",
        children: posts && posts.length > 0 && posts.map((post, index) => {
          const currentAuthor = authorsList?.find(writer => writer.id === post.author);
          return index > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("article", {
            className: "bnm-pb1-small",
            children: [attributes.showFeaturedImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_3__.FeaturedImage, {
              post: post,
              featuredImageSizeSlug: attributes.featuredImageSizeSlugSmall
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "entry-details",
              children: [attributes.showCategorySmall && categoriesList && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_3__.PostCategories, {
                categoriesList: categoriesList,
                post: post
              }), attributes.showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_3__.PostTitle, {
                post: post,
                attributes: attributes
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "entry-meta",
                children: [attributes.showAuthorSmall && attributes.showAvatarSmall && currentAuthor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_3__.PostAuthorAvatar, {
                  author: currentAuthor
                }), attributes.showAuthorSmall && currentAuthor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_3__.PostAuthor, {
                  author: currentAuthor
                }), attributes.showDateSmall && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_3__.PostDateTime, {
                  post: post
                }), attributes.showCommentCountSmall && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_3__.PostCommentCount, {
                  post: post
                })]
              }), attributes.displayPostExcerptSmall && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_meta_meta_js__WEBPACK_IMPORTED_MODULE_3__.PostExcerpt, {
                post: post,
                excerptLength: attributes.excerptLengthSmall,
                showReadMore: attributes.showReadMoreSmall
              })]
            })]
          }, post.id);
        })
      })]
    })]
  });
};

/***/ }),

/***/ "./src/blocks/posts/post-block-1/save.js":
/*!***********************************************!*\
  !*** ./src/blocks/posts/post-block-1/save.js ***!
  \***********************************************/
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

/***/ "./src/blocks/posts/post-block-1/style.scss":
/*!**************************************************!*\
  !*** ./src/blocks/posts/post-block-1/style.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/meta/meta-helper.js":
/*!********************************************!*\
  !*** ./src/components/meta/meta-helper.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFeaturedImageDetails: () => (/* binding */ getFeaturedImageDetails),
/* harmony export */   hasFeaturedImage: () => (/* binding */ hasFeaturedImage)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function getFeaturedImageDetails(post, size) {
  var _image$media_details$;
  const image = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(post, ['_embedded', 'wp:featuredmedia', '0']);
  return {
    url: (_image$media_details$ = image?.media_details?.sizes?.[size]?.source_url) !== null && _image$media_details$ !== void 0 ? _image$media_details$ : image?.source_url,
    alt: image?.alt_text
  };
}
function hasFeaturedImage(post, size) {
  const data = getFeaturedImageDetails(post, size);
  if (data.url) {
    return true;
  }
  return false;
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
/* harmony export */   FeaturedImage: () => (/* binding */ FeaturedImage),
/* harmony export */   PostAuthor: () => (/* binding */ PostAuthor),
/* harmony export */   PostAuthorAvatar: () => (/* binding */ PostAuthorAvatar),
/* harmony export */   PostCategories: () => (/* binding */ PostCategories),
/* harmony export */   PostCommentCount: () => (/* binding */ PostCommentCount),
/* harmony export */   PostDateTime: () => (/* binding */ PostDateTime),
/* harmony export */   PostExcerpt: () => (/* binding */ PostExcerpt),
/* harmony export */   PostMeta: () => (/* binding */ PostMeta),
/* harmony export */   PostTitle: () => (/* binding */ PostTitle)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _meta_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meta-helper.js */ "./src/components/meta/meta-helper.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress Dependencies.
 */



/**
 * Internal Dependencies
 */


const PostExcerpt = ({
  post,
  excerptLength,
  showReadMore,
  readMoreLabel
}) => {
  let excerpt = post.excerpt.rendered;
  const excerptElement = document.createElement('div');
  excerptElement.innerHTML = excerpt;
  excerpt = excerptElement.textContent || excerptElement.innerText || '';
  const postExcerpt = showReadMore ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "bnm-post-excerpt",
    children: [excerpt.trim().split(' ', excerptLength).join(' '), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('… '), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
      href: "#",
      className: "bnm-readmore",
      children: readMoreLabel
    })]
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "bnm-post-excerpt",
    children: [excerpt.trim().split(' ', excerptLength).join(' '), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('… ')]
  });
  return postExcerpt;
};
const PostTitle = ({
  attributes,
  post
}) => {
  const Tag = attributes.titleHtmlTag || 'h3';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Tag, {
    className: "entry-title",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
      href: "#",
      children: post.title.rendered ? post.title.rendered : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default title', 'bnm-blocks')
    })
  });
};
const PostCategories = ({
  categoriesList,
  post
}) => {
  const list = categoriesList;
  const cat = post.categories;
  const categoryNames = [];
  if (list !== undefined && cat !== undefined) {
    for (let j = 0; j < list.length; j++) {
      for (let i = 0; i < cat.length; i++) {
        if (list[j].id === cat[i]) {
          categoryNames.push({
            id: list[j].id,
            name: list[j].name
          });
        }
      }
    }
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "bnm-category-list",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: "bnm-cat-links",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
        className: "post-categories",
        children: categoryNames.map(category => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: "#",
              children: category.name
            })
          }, category.id);
        })
      })
    })
  });
};
const FeaturedImage = ({
  post,
  featuredImageSizeSlug
}) => {
  const {
    url: imageSourceUrl,
    alt: featuredImageAlt
  } = (0,_meta_helper_js__WEBPACK_IMPORTED_MODULE_2__.getFeaturedImageDetails)(post, featuredImageSizeSlug);
  const featuredImage = imageSourceUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("figure", {
    className: "post-thumbnail",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
      src: imageSourceUrl,
      alt: featuredImageAlt
    })
  });
  if (!featuredImage) {
    return null;
  }
  return featuredImage;
};
const PostAuthor = ({
  author
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
    className: "byline",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: "author vcard bnm-post-author",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
        href: "#",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)(/* translators: byline. %s: current author. */
        (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('by %s'), author.name)
      })
    })
  });
};
const PostAuthorAvatar = ({
  author
}) => {
  const authorAvatarUrl = author?.avatar_urls?.[48];
  const avatarMarkup = authorAvatarUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
    className: "bnm-avatar",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
      src: authorAvatarUrl
    })
  });
  if (!avatarMarkup) {
    return null;
  }
  return avatarMarkup;
};
const PostDateTime = ({
  post
}) => {
  const dateFormat = (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_1__.getSettings)().formats.date;
  if (post.date_gmt) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: "posted-on bnm-post-date",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("time", {
        className: "entry-date published",
        dateTime: (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_1__.format)('c', post.date_gmt),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
          href: "#",
          children: (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_1__.dateI18n)(dateFormat, post.date_gmt)
        })
      })
    });
  }
  return null;
};
const PostCommentCount = ({
  post
}) => {
  if (post.comment_count) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: "comments-link bnm-comment-count",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
        href: "#",
        children: post.comment_count
      })
    });
  }
  return null;
};
const PostMeta = ({
  post,
  authorsList,
  attributes
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "entry-meta",
    children: [attributes.showAuthor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(PostAuthor, {
      post: post,
      authorsList: authorsList,
      showAvatar: attributes.showAvatar
    }), attributes.showDate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(PostDateTime, {
      post: post
    }), attributes.showCommentCount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(PostCommentCount, {
      post: post
    })]
  });
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/components/query-controls/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
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
function AuthorControl({
  value,
  onChange
}) {
  const authorsList = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getUsers
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store);
    return getUsers(AUTHORS_QUERY);
  }, []);
  if (!authorsList) {
    return null;
  }
  const authorsInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getEntitiesInfo)(authorsList);
  /**
   * We need to normalize the value because the block operates on a
   * comma(`,`) separated string value and `FormTokenFiels` needs an
   * array.
   */
  const normalizedValue = !value ? [] : value.toString().split(',');
  // Returns only the existing authors ids. This prevents the component
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
    const id = authorValue?.id || entitiesMappedByName[authorValue]?.id;
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormTokenField, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Authors'),
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
/* harmony export */   "default": () => (/* binding */ QueryControls)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _order_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-control */ "./src/components/query-controls/order-control.js");
/* harmony import */ var _author_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./author-control */ "./src/components/query-controls/author-control.js");
/* harmony import */ var _taxonomy_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taxonomy-controls */ "./src/components/query-controls/taxonomy-controls.js");
/* harmony import */ var _sticky_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sticky-control */ "./src/components/query-controls/sticky-control.js");
/* harmony import */ var _post_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-control */ "./src/components/query-controls/post-control.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */






function QueryControls({
  attributes: {
    query,
    specificMode,
    specificPosts
  },
  setAttributes,
  setQuery,
  onSpecificModeChange,
  onLoopModeChange
}) {
  const {
    order,
    orderBy,
    author: authorIds,
    sticky,
    perPage
  } = query;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mode', 'bnm-blocks'),
      id: "bnm-blocks-content-mode",
      className: "bnm-blocks__button-group",
      help: specificMode ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The block will display only the specifically selected post(s).', 'bnm-blocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The block will display content based on the filtering settings below.', 'bnm-blocks'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ButtonGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: !specificMode && 'primary',
          "aria-pressed": !specificMode,
          onClick: onLoopModeChange,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dynamic', 'bnm-blocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: specificMode && 'primary',
          "aria-pressed": specificMode,
          onClick: onSpecificModeChange,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Static', 'bnm-blocks')
        })]
      })
    }), specificMode ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_post_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      selectedPosts: specificPosts,
      setSelectedPosts: posts => setAttributes({
        specificPosts: posts
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_taxonomy_controls__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onChange: setQuery,
        query: query
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_author_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
        value: authorIds,
        onChange: setQuery
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_order_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        order,
        orderBy,
        onChange: setQuery
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_sticky_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: sticky,
        onChange: value => setQuery({
          sticky: value
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Number of items', 'bnm-blocks'),
        value: perPage,
        onChange: value => setQuery({
          perPage: value
        }),
        min: 1,
        max: 100,
        required: true
      })]
    })]
  });
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies.
 */



const orderOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Newest to oldest'),
  value: 'date/desc'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Oldest to newest'),
  value: 'date/asc'
}, {
  /* translators: label for ordering posts by title in ascending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A → Z'),
  value: 'title/asc'
}, {
  /* translators: label for ordering posts by title in descending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Z → A'),
  value: 'title/desc'
}];
function OrderControl({
  order,
  orderBy,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Order by'),
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const MultiPostSelector = ({
  selectedPosts = [],
  setSelectedPosts
}) => {
  const [searchTerm, setSearchTerm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');

  // fetch matching searchResults for suggestions
  const searchResults = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    if (!searchTerm) return [];
    return select('core').getEntityRecords('postType', 'post', {
      search: searchTerm,
      per_page: 10
    });
  }, [searchTerm]);
  const isLoading = searchTerm && searchResults === undefined;

  // Lookup full post objects for the *already selected IDs*
  const selectedPostObjects = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    if (!selectedPosts || selectedPosts.length === 0) return [];
    return select('core').getEntityRecords('postType', 'post', {
      include: selectedPosts,
      orderby: 'include',
      per_page: selectedPosts.length
    });
  }, [selectedPosts]);

  // suggestion list shown by FormTokenField (strings)
  const suggestions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    if (isLoading) {
      return ['🔄 Loading...']; // fake suggestion for spinner
    }
    if (!Array.isArray(searchResults)) return ['No results'];
    return searchResults.map(p => p.title.rendered || '(no title)');
  }, [searchResults, isLoading]);

  // Tokens to display (titles for selected IDs)
  const tokenValues = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    if (!Array.isArray(selectedPostObjects)) return [];
    return selectedPostObjects.map(p => p.title.rendered || '(no title)');
  }, [selectedPostObjects]);
  const onChange = tokens => {
    if (!Array.isArray(searchResults)) return;

    // tokens is an array of strings (order preserved)
    const newIds = tokens.map(token => {
      // 1) try to match current search results (most likely right after selecting suggestion)
      const fromResults = searchResults.find(p => p.title.rendered === token);
      if (fromResults) {
        return fromResults.id;
      }

      // 2) fallback to any existing selected post that matches the token
      const fromExisting = selectedPostObjects.find(p => p.title.rendered === token);
      if (fromExisting) {
        return fromExisting.id;
      }

      // 3) unknown token (user typed a custom token) — keep placeholder so token doesn't vanish
      return null;
    }).filter(Boolean);
    setSelectedPosts(newIds);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "thbnm-multi-post-selector",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormTokenField, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Posts', 'bnm-blocks'),
      value: tokenValues,
      suggestions: suggestions,
      onInputChange: setSearchTerm,
      onChange: onChange
    }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "thbnm-loading-spinner-overlay",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, {})
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiPostSelector);

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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



const stickyOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Include'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Exclude'),
  value: 'exclude'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Only'),
  value: 'only'
}];
function StickyControl({
  value,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sticky posts'),
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
/* harmony export */   TaxonomyControls: () => (/* binding */ TaxonomyControls),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/components/query-controls/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


const EMPTY_ARRAY = [];
const BASE_QUERY = {
  order: 'asc',
  _fields: 'id,name',
  context: 'view'
};

// Helper function to get the term id based on user input in terms `FormTokenField`.
const getTermIdByTermValue = (terms, termValue) => {
  // First we check for exact match by `term.id` or case sensitive `term.name` match.
  const termId = termValue?.id || terms?.find(term => term.name === termValue)?.id;
  if (termId) {
    return termId;
  }

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
  return terms?.find(term => term.name.toLocaleLowerCase() === termValueLower)?.id;
};
function TaxonomyControls({
  onChange,
  query
}) {
  const {
    postType,
    taxQuery
  } = query;
  const taxonomies = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.useTaxonomies)(postType);
  if (!taxonomies || taxonomies.length === 0) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalVStack, {
    spacing: 4,
    children: taxonomies.map(taxonomy => {
      const termIds = taxQuery?.[taxonomy.slug] || [];
      const handleChange = newTermIds => onChange({
        taxQuery: {
          ...taxQuery,
          [taxonomy.slug]: newTermIds
        }
      });
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TaxonomyItem, {
        taxonomy: taxonomy,
        termIds: termIds,
        onChange: handleChange
      }, taxonomy.slug);
    })
  });
}

/**
 * Renders a `FormTokenField` for a given taxonomy.
 *
 * @param {Object}   props          The props for the component.
 * @param {Object}   props.taxonomy The taxonomy object.
 * @param {number[]} props.termIds  An array with the block's term ids for the given taxonomy.
 * @param {Function} props.onChange Callback `onChange` function.
 * @return {JSX.Element} The rendered component.
 */
function TaxonomyItem({
  taxonomy,
  termIds,
  onChange
}) {
  const [search, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [value, setValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(EMPTY_ARRAY);
  const [suggestions, setSuggestions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(EMPTY_ARRAY);
  const debouncedSearch = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useDebounce)(setSearch, 250);
  const {
    searchResults,
    searchHasResolved
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    if (!search) {
      return {
        searchResults: EMPTY_ARRAY,
        searchHasResolved: true
      };
    }
    const {
      getEntityRecords,
      hasFinishedResolution
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
    const selectorArgs = ['taxonomy', taxonomy.slug, {
      ...BASE_QUERY,
      search,
      orderby: 'name',
      exclude: termIds,
      per_page: 20
    }];
    return {
      searchResults: getEntityRecords(...selectorArgs),
      searchHasResolved: hasFinishedResolution('getEntityRecords', selectorArgs)
    };
  }, [search, taxonomy.slug, termIds]);
  // `existingTerms` are the ones fetched from the API and their type is `{ id: number; name: string }`.
  // They are used to extract the terms' names to populate the `FormTokenField` properly
  // and to sanitize the provided `termIds`, by setting only the ones that exist.
  const existingTerms = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    if (!termIds?.length) {
      return EMPTY_ARRAY;
    }
    const {
      getEntityRecords
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
    return getEntityRecords('taxonomy', taxonomy.slug, {
      ...BASE_QUERY,
      include: termIds,
      per_page: termIds.length
    });
  }, [taxonomy.slug, termIds]);
  // Update the `value` state only after the selectors are resolved
  // to avoid emptying the input when we're changing terms.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!termIds?.length) {
      setValue(EMPTY_ARRAY);
    }
    if (!existingTerms?.length) {
      return;
    }
    // Returns only the existing entity ids. This prevents the component
    // from crashing in the editor, when non existing ids are provided.
    const sanitizedValue = termIds.reduce((accumulator, id) => {
      const entity = existingTerms.find(term => term.id === id);
      if (entity) {
        accumulator.push({
          id,
          value: entity.name
        });
      }
      return accumulator;
    }, []);
    setValue(sanitizedValue);
  }, [termIds, existingTerms]);
  // Update suggestions only when the query has resolved.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!searchHasResolved) {
      return;
    }
    setSuggestions(searchResults.map(result => result.name));
  }, [searchResults, searchHasResolved]);
  const onTermsChange = newTermValues => {
    const newTermIds = new Set();
    for (const termValue of newTermValues) {
      const termId = getTermIdByTermValue(searchResults, termValue);
      if (termId) {
        newTermIds.add(termId);
      }
    }
    setSuggestions(EMPTY_ARRAY);
    onChange(Array.from(newTermIds));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FormTokenField, {
      label: taxonomy.name,
      value: value,
      onInputChange: debouncedSearch,
      suggestions: suggestions,
      displayTransform: _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__.decodeEntities,
      onChange: onTermsChange,
      __experimentalShowHowTo: false
    })
  });
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
/* harmony export */   getEntitiesInfo: () => (/* binding */ getEntitiesInfo),
/* harmony export */   usePostTypes: () => (/* binding */ usePostTypes),
/* harmony export */   useTaxonomies: () => (/* binding */ useTaxonomies)
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
  const mapping = entities?.reduce((accumulator, entity) => {
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
    const {
      getPostTypes
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
    const excludedPostTypes = ['attachment'];
    const filteredPostTypes = getPostTypes({
      per_page: -1
    })?.filter(({
      viewable,
      slug
    }) => viewable && !excludedPostTypes.includes(slug));
    return filteredPostTypes;
  }, []);
  const postTypesTaxonomiesMap = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!postTypes?.length) return;
    return postTypes.reduce((accumulator, type) => {
      accumulator[type.slug] = type.taxonomies;
      return accumulator;
    }, {});
  }, [postTypes]);
  const postTypesSelectOptions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (postTypes || []).map(({
    labels,
    slug
  }) => ({
    label: labels.singular_name,
    value: slug
  })), [postTypes]);
  return {
    postTypesTaxonomiesMap,
    postTypesSelectOptions
  };
};

/***/ }),

/***/ "./src/components/settings-controls/post-type-1/index.js":
/*!***************************************************************!*\
  !*** ./src/components/settings-controls/post-type-1/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlockExtraSettings)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/typography */ "./src/components/typography/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





function BlockExtraSettings({
  attributes,
  setAttributes
}) {
  const {
    showSectionHeader,
    sectionHeaderStyle,
    headerHtmlTag,
    headerFontSize,
    headerLineHeight,
    headerLetterSpacing,
    headerMargin,
    headerPadding,
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
    featuredImageMargin,
    featuredImageWidth,
    entryContentWidth,
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
    metaSpacing,
    metaMargin,
    metaPadding,
    categoryFontSize,
    categoryLineHeight,
    categoryLetterSpacing
  } = attributes;
  const formatWidthValue = (value, propertyToUpdate) => {
    if (!value) {
      return;
    }
    const numericValue = parseFloat(value.match(/\d+/)[0]);
    if (numericValue >= 20 && numericValue <= 80) {
      setAttributes({
        [propertyToUpdate]: value
      });
    } else {
      const defaultValue = propertyToUpdate === "entryContentWidth" ? "67%" : "33%";
      setAttributes({
        [propertyToUpdate]: defaultValue
      });
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Section Header', 'bnm-blocks'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Section Header', 'bnm-blocks'),
        checked: showSectionHeader,
        onChange: () => setAttributes({
          showSectionHeader: !showSectionHeader
        })
      }), showSectionHeader && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "thbnm-settings-panel",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Section Header Style', 'bnm-blocks'),
          value: sectionHeaderStyle,
          options: [{
            label: 'Style 1',
            value: '1'
          }, {
            label: 'Style 2',
            value: '2'
          }, {
            label: 'Style 3',
            value: '3'
          }, {
            label: 'Style 4',
            value: '4'
          }],
          onChange: newHeaderStyle => setAttributes({
            sectionHeaderStyle: newHeaderStyle
          }),
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Section Header HTML tag', 'bnm-blocks'),
          labelPosition: "side",
          value: headerHtmlTag,
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
            headerHtmlTag: newTitleTag
          }),
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'bnm-blocks'),
          fontSize: headerFontSize,
          onFontSizeChange: newFontSize => setAttributes({
            headerFontSize: newFontSize
          }),
          lineHeight: headerLineHeight,
          onLineHeightChange: newLineHeight => setAttributes({
            headerLineHeight: newLineHeight
          }),
          letterSpacing: headerLetterSpacing,
          onLetterSpacingChange: newLetterSpacing => setAttributes({
            headerLetterSpacing: newLetterSpacing
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'bnm-blocks'),
          values: headerMargin,
          onChange: nextValues => setAttributes({
            headerMargin: nextValues
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'bnm-blocks'),
          values: headerPadding,
          onChange: nextValues => setAttributes({
            headerPadding: nextValues
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'bnm-blocks'),
          initialOpen: false,
          colorSettings: [{
            value: attributes.headerColor,
            onChange: headerColor => setAttributes({
              headerColor
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Header Text Color', 'bnm-blocks')
          }, {
            value: attributes.headerHoverColor,
            onChange: headerHoverColor => setAttributes({
              headerHoverColor
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Header Text Hover Color', 'bnm-blocks')
          }]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Title', 'bnm-blocks'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Title', 'bnm-blocks'),
        checked: showTitle,
        onChange: () => setAttributes({
          showTitle: !showTitle
        })
      }), showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "thbnm-settings-panel",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title HTML tag', 'bnm-blocks'),
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
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography (Big Post Title)', 'bnm-blocks'),
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
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography (Small Post Titles)', 'bnm-blocks'),
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
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'bnm-blocks'),
          values: titleMargin,
          onChange: nextValues => setAttributes({
            titleMargin: nextValues
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'bnm-blocks'),
          values: titlePadding,
          onChange: nextValues => setAttributes({
            titlePadding: nextValues
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'bnm-blocks'),
          initialOpen: false,
          colorSettings: [{
            value: attributes.titleColor,
            onChange: titleColor => setAttributes({
              titleColor
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Color', 'bnm-blocks')
          }, {
            value: attributes.titleHoverColor,
            onChange: titleHoverColor => setAttributes({
              titleHoverColor
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Hover', 'bnm-blocks')
          }]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Category', 'bnm-blocks'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Category', 'bnm-blocks'),
          checked: showCategory,
          onChange: () => setAttributes({
            showCategory: !showCategory
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Category(Small Posts)', 'bnm-blocks'),
          checked: showCategorySmall,
          onChange: () => setAttributes({
            showCategorySmall: !showCategorySmall
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'bnm-blocks'),
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'bnm-blocks'),
        values: categoryMargin,
        onChange: nextValues => setAttributes({
          categoryMargin: nextValues
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'bnm-blocks'),
        values: categoryPadding,
        onChange: nextValues => setAttributes({
          categoryPadding: nextValues
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Category Color', 'bnm-blocks'),
        initialOpen: false,
        colorSettings: [{
          value: attributes.categoryColor,
          onChange: categoryColor => setAttributes({
            categoryColor
          }),
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'bnm-blocks')
        }, {
          value: attributes.categoryHoverColor,
          onChange: categoryHoverColor => setAttributes({
            categoryHoverColor
          }),
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color: Hover', 'bnm-blocks')
        }, {
          value: attributes.categoryBGColor,
          onChange: categoryBGColor => setAttributes({
            categoryBGColor
          }),
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'bnm-blocks')
        }, {
          value: attributes.categoryBGHoverColor,
          onChange: categoryBGHoverColor => setAttributes({
            categoryBGHoverColor
          }),
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color: Hover', 'bnm-blocks')
        }]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Meta', 'bnm-blocks'),
      className: "thbnm-panelbody",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
        className: "thbnm-featured-image-settings-tab-panel thbnm-tab-panel",
        activeClass: "thbnm-active-tab"
        //onSelect={ onSelect }
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
        }],
        children: tab => {
          if (tab.name === 'big-post') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Author', 'bnm-blocks'),
                checked: showAuthor,
                onChange: () => setAttributes({
                  showAuthor: !showAuthor
                })
              }), showAuthor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Author Avatar', 'bnm-blocks'),
                checked: showAvatar,
                onChange: () => setAttributes({
                  showAvatar: !showAvatar
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Date', 'bnm-blocks'),
                checked: showDate,
                onChange: () => setAttributes({
                  showDate: !showDate
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Comment Count', 'bnm-blocks'),
                checked: showCommentCount,
                onChange: () => setAttributes({
                  showCommentCount: !showCommentCount
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'bnm-blocks'),
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
              })]
            });
          } else if (tab.name === 'small-post') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Author', 'bnm-blocks'),
                checked: showAuthorSmall,
                onChange: () => setAttributes({
                  showAuthorSmall: !showAuthorSmall
                })
              }), showAuthorSmall && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Author Avatar', 'bnm-blocks'),
                checked: showAvatarSmall,
                onChange: () => setAttributes({
                  showAvatarSmall: !showAvatarSmall
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Date', 'bnm-blocks'),
                checked: showDateSmall,
                onChange: () => setAttributes({
                  showDateSmall: !showDateSmall
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Comment Count', 'bnm-blocks'),
                checked: showCommentCountSmall,
                onChange: () => setAttributes({
                  showCommentCountSmall: !showCommentCountSmall
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'bnm-blocks'),
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
              })]
            });
          }
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Meta Spacing', 'bnm-blocks'),
        value: metaSpacing,
        onChange: value => setAttributes({
          metaSpacing: value
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'bnm-blocks'),
        values: metaMargin,
        onChange: nextValues => setAttributes({
          metaMargin: nextValues
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'bnm-blocks'),
        values: metaPadding,
        onChange: nextValues => setAttributes({
          metaPadding: nextValues
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Meta Color', 'bnm-blocks'),
        initialOpen: false,
        colorSettings: [{
          value: attributes.metaColor,
          onChange: metaColor => setAttributes({
            metaColor
          }),
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'bnm-blocks')
        }, {
          value: attributes.metaHoverColor,
          onChange: metaHoverColor => setAttributes({
            metaHoverColor
          }),
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color: Hover', 'bnm-blocks')
        }]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Excerpt', 'bnm-blocks'),
      className: "thbnm-panelbody",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
        className: "thbnm-featured-image-settings-tab-panel thbnm-tab-panel",
        activeClass: "thbnm-active-tab"
        //onSelect={ onSelect }
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
        }],
        children: tab => {
          if (tab.name === 'big-post') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Post Excerpt', 'bnm-blocks'),
                checked: displayPostExcerpt,
                onChange: () => setAttributes({
                  displayPostExcerpt: !displayPostExcerpt
                })
              }), displayPostExcerpt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Max number of words in excerpt', 'bnm-blocks'),
                value: excerptLength,
                onChange: value => setAttributes({
                  excerptLength: value
                }),
                min: 5,
                max: 100
              }), displayPostExcerpt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add a "Read More" link', 'bnm-blocks'),
                checked: showReadMore,
                onChange: () => setAttributes({
                  showReadMore: !showReadMore
                })
              }), displayPostExcerpt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'bnm-blocks'),
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
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), showReadMore && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('"Read More" link text', 'bnm-blocks'),
                value: readMoreLabel,
                placeholder: readMoreLabel,
                onChange: value => setAttributes({
                  readMoreLabel: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'bnm-blocks'),
                values: excerptMargin,
                onChange: nextValues => setAttributes({
                  excerptMargin: nextValues
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'bnm-blocks'),
                values: excerptPadding,
                onChange: nextValues => setAttributes({
                  excerptPadding: nextValues
                })
              })]
            });
          } else if (tab.name === 'small-post') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Post Excerpt', 'bnm-blocks'),
                checked: displayPostExcerptSmall,
                onChange: () => setAttributes({
                  displayPostExcerptSmall: !displayPostExcerptSmall
                })
              }), displayPostExcerptSmall && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Max number of words in excerpt', 'bnm-blocks'),
                value: excerptLengthSmall,
                onChange: value => setAttributes({
                  excerptLengthSmall: value
                }),
                min: 5,
                max: 100
              }), displayPostExcerptSmall && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add a "Read More" link', 'bnm-blocks'),
                checked: showReadMoreSmall,
                onChange: () => setAttributes({
                  showReadMoreSmall: !showReadMoreSmall
                })
              }), displayPostExcerptSmall && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'bnm-blocks'),
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
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), showReadMoreSmall && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('"Read More" link text', 'bnm-blocks'),
                value: readMoreLabel,
                placeholder: readMoreLabel,
                onChange: value => setAttributes({
                  readMoreLabel: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'bnm-blocks'),
                values: excerptMarginSmall,
                onChange: nextValues => setAttributes({
                  excerptMarginSmall: nextValues
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'bnm-blocks'),
                values: excerptPaddingSmall,
                onChange: nextValues => setAttributes({
                  excerptPaddingSmall: nextValues
                })
              })]
            });
          }
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'bnm-blocks'),
        initialOpen: false,
        colorSettings: [{
          value: attributes.excerptColor,
          onChange: excerptColor => setAttributes({
            excerptColor
          }),
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Excerpt Color', 'bnm-blocks')
        }]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Featured Image Settings', 'bnm-blocks'),
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
        className: "thbnm-featured-image-settings-tab-panel thbnm-tab-panel",
        activeclassName: "thbnm-active-tab"
        //onSelect={ onSelect }
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
        }],
        children: tab => {
          if (tab.name === 'big-post') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display Featured Image', 'bnm-blocks'),
                checked: showFeaturedImage,
                onChange: () => setAttributes({
                  showFeaturedImage: !showFeaturedImage
                })
              }), showFeaturedImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Size', 'bnm-blocks'),
                value: attributes.featuredImageSizeSlug,
                options: Object.entries(window.themezHutGutenberg.imageSizes).map(([value, label]) => ({
                  value,
                  label
                })),
                onChange: imageSize => setAttributes({
                  featuredImageSizeSlug: imageSize
                })
              })]
            });
          } else if (tab.name === 'small-post') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display Featured Image', 'bnm-blocks'),
                checked: showFeaturedImageSmall,
                onChange: () => setAttributes({
                  showFeaturedImageSmall: !showFeaturedImageSmall
                })
              }), showFeaturedImageSmall && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Size (Small)', 'bnm-blocks'),
                  value: attributes.featuredImageSizeSlugSmall,
                  options: Object.entries(window.themezHutGutenberg.imageSizes).map(([value, label]) => ({
                    value,
                    label
                  })),
                  onChange: imageSize => setAttributes({
                    featuredImageSizeSlugSmall: imageSize
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Featured Image Width (%)', 'bnm-blocks'),
                  value: featuredImageWidth,
                  onChange: value => formatWidthValue(value, "featuredImageWidth"),
                  step: 5,
                  units: [{
                    a11yLabel: 'Percentage (%)',
                    label: '%',
                    step: 5,
                    value: '%'
                  }]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Width (%)', 'bnm-blocks'),
                  value: entryContentWidth,
                  onChange: value => formatWidthValue(value, "entryContentWidth"),
                  step: 5,
                  units: [{
                    a11yLabel: 'Percentage (%)',
                    label: '%',
                    step: 5,
                    value: '%'
                  }]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'bnm-blocks'),
                  values: featuredImageMargin,
                  onChange: nextValues => setAttributes({
                    featuredImageMargin: nextValues
                  })
                })]
              })]
            });
          }
        }
      })
    })]
  });
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function TypographyControl(props) {
  const [isVisible, setIsVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "thbnm-typography-control-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "thbnm-control-label",
      children: props.label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "thbnm-color-control-click-side",
      children: [isVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        className: "thbnm-typograpy-control-button",
        onClick: toggleVisible,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Dashicon, {
          icon: "edit"
        })
      }), !isVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        className: "thbnm-typograpy-control-button",
        onClick: toggleVisible,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Dashicon, {
          icon: "edit"
        })
      }), isVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Popover, {
        position: "top left",
        onClose: toggleVisible,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "thbnm-typography-controls-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FontSizePicker, {
            __nextHasNoMarginBottom: true,
            value: props.fontSize,
            onChange: props.onFontSizeChange,
            fontSizes: fontSizes
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalUnitControl, {
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
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalUnitControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Letter Spacing', 'bnm-blocks'),
            value: props.letterSpacing,
            onChange: props.onLetterSpacingChange,
            step: 0.1,
            min: -50,
            max: 100
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {})]
        })
      })]
    })]
  });
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
/* harmony export */   FeaturedBlock1Icon: () => (/* binding */ FeaturedBlock1Icon),
/* harmony export */   FeaturedBlock2Icon: () => (/* binding */ FeaturedBlock2Icon),
/* harmony export */   PostBlock2Icon: () => (/* binding */ PostBlock2Icon),
/* harmony export */   PostBlock3Icon: () => (/* binding */ PostBlock3Icon),
/* harmony export */   Slider1Icon: () => (/* binding */ Slider1Icon),
/* harmony export */   postBlock1Icon: () => (/* binding */ postBlock1Icon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const postBlock1Icon = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    version: "1.1",
    viewBox: "0 0 12.7 12.7",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
      fillRule: "evenodd",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.251",
        d: "M0 .794h5.556v3.704H0z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.418",
        d: "M6.88.794h2.645v1.852H6.879z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.265",
        d: "M0 5.82h5.556v1.06H0z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.187",
        d: "M0 7.938h5.556v.529H0z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.247",
        d: "M0 8.996h5.556v.529H0z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.247",
        d: "M0 10.054h5.556v.53H0z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.195",
        d: "M0 11.113h3.44v.529H0z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.279",
        d: "M10.054.794H12.7v.529h-2.646z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.283",
        d: "M10.054 1.852h2.117v.53h-2.117z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.418",
        d: "M6.88 3.704h2.645v1.852H6.879z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.418",
        d: "M6.88 6.615h2.645v1.852H6.879z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.418",
        d: "M6.88 9.525h2.645v1.852H6.879z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.279",
        d: "M10.054 3.704H12.7v.53h-2.646z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.279",
        d: "M10.054 6.615H12.7v.529h-2.646z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.279",
        d: "M10.054 9.525H12.7v.53h-2.646z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.283",
        d: "M10.054 4.763h2.117v.529h-2.117z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.283",
        d: "M10.054 7.673h2.117v.53h-2.117z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.283",
        d: "M10.054 10.583h2.117v.53h-2.117z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      })]
    })
  });
};
const PostBlock2Icon = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    version: "1.1",
    viewBox: "0 0 12.7 12.7",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
      fill: "#000",
      fillOpacity: "1",
      fillRule: "evenodd",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.251",
        d: "M0 0h5.556v3.704H0z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.418",
        d: "M7.144 7.144H9.79v1.852H7.144z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.265",
        d: "M0 4.498h5.556v1.058H0z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.418",
        d: "M7.144 10.054H9.79v1.852H7.144z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.418",
        d: "M0 10.054h2.646v1.852H0z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.418",
        d: "M0 7.144h2.646v1.852H0z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.279",
        d: "M3.175 10.054h2.646v.53H3.175z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.265",
        d: "M3.175 7.144h2.381v.529H3.175z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.283",
        d: "M3.175 11.113h2.117v.529H3.175z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.283",
        d: "M3.175 8.202h2.117v.53H3.175z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.265",
        d: "M10.319 7.144H12.7v.529h-2.381z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.283",
        d: "M10.319 8.202h2.116v.53H10.32z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.265",
        d: "M10.319 10.054H12.7v.53h-2.381z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.283",
        d: "M10.319 11.113h2.116v.529H10.32z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.251",
        d: "M7.144 0H12.7v3.704H7.144z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.265",
        d: "M7.144 4.498H12.7v1.058H7.144z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      })]
    })
  });
};
const PostBlock3Icon = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    version: "1.1",
    viewBox: "0 0 12.7 12.7",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
      fillRule: "evenodd",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#000",
        fillOpacity: "1",
        strokeWidth: "0.158",
        d: "M0 1.323h3.44v2.381H0z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#000",
        fillOpacity: "1",
        strokeWidth: "0.158",
        d: "M4.498 1.323h3.44v2.381h-3.44z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#000",
        fillOpacity: "1",
        strokeWidth: "0.158",
        d: "M8.996 1.323h3.44v2.381h-3.44z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#000",
        fillOpacity: "1",
        strokeWidth: "0.158",
        d: "M0 7.408h3.44V9.79H0z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#000",
        fillOpacity: "1",
        strokeWidth: "0.158",
        d: "M4.498 7.408h3.44V9.79h-3.44z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#000",
        fillOpacity: "1",
        strokeWidth: "0.158",
        d: "M8.996 7.408h3.44V9.79h-3.44z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.265",
        d: "M0 4.498h3.44v.794H0z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.265",
        d: "M4.498 4.498h3.44v.794h-3.44z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.265",
        d: "M8.996 4.498h3.44v.794h-3.44z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.265",
        d: "M0 10.583h3.44v.794H0z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.265",
        d: "M4.498 10.583h3.44v.794h-3.44z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.265",
        d: "M8.996 10.583h3.44v.794h-3.44z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      })]
    })
  });
};
const FeaturedBlock1Icon = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    version: "1.1",
    viewBox: "0 0 12.7 12.7",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
      fillRule: "evenodd",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.235",
        d: "M0 3.704h7.408v5.027H0z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#333",
        strokeWidth: "0.266",
        d: "M8.202 3.704H12.7v2.117H8.202z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#333",
        strokeWidth: "0.266",
        d: "M8.202 6.615H12.7V8.73H8.202z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      })]
    })
  });
};
const FeaturedBlock2Icon = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    version: "1.1",
    viewBox: "0 0 12.7 12.7",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
      fillRule: "evenodd",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.197",
        d: "M0 2.381h5.82V6.88H0z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#333",
        strokeWidth: "0.256",
        d: "M0 7.673h3.704v2.381H0z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.197",
        d: "M6.88 2.381h5.82V6.88H6.88z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#333",
        strokeWidth: "0.256",
        d: "M4.498 7.673h3.704v2.381H4.498z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#333",
        strokeWidth: "0.256",
        d: "M8.996 7.673H12.7v2.381H8.996z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      })]
    })
  });
};
const Slider1Icon = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    version: "1.1",
    viewBox: "0 0 12.7 12.7",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fillRule: "evenodd",
        strokeWidth: "0.276",
        d: "M0 1.587h12.7v9.526H0z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#fff",
        fillRule: "evenodd",
        strokeWidth: "0.278",
        d: "M.794 2.381h11.112v7.938H.794z",
        opacity: "1",
        stopColor: "#000",
        stopOpacity: "1",
        vectorEffect: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "none",
        stroke: "#000",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: "1",
        strokeWidth: "0.265",
        d: "M2.91 5.027L1.852 6.35 2.91 7.408v0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "none",
        stroke: "#000",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: "1",
        strokeWidth: "0.265",
        d: "M2.91 5.027L1.852 6.35 2.91 7.408v0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "none",
        stroke: "#000",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: "1",
        strokeWidth: "0.265",
        d: "M9.608 7.47l.975-1.385-1.12-.991v0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.172",
        d: "M5.3 9.147a.456.39 0 01-.456.39.456.39 0 01-.457-.39.456.39 0 01.457-.39.456.39 0 01.456.39z"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.172",
        d: "M6.804 9.147a.456.39 0 01-.457.39.456.39 0 01-.456-.39.456.39 0 01.456-.39.456.39 0 01.457.39z"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeWidth: "0.172",
        d: "M8.34 9.131a.456.39 0 01-.457.39.456.39 0 01-.457-.39.456.39 0 01.457-.39.456.39 0 01.456.39z"
      })]
    })
  });
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
/* harmony export */   boxValues: () => (/* binding */ boxValues),
/* harmony export */   hasValueOnBox: () => (/* binding */ hasValueOnBox),
/* harmony export */   mightBeBoxed: () => (/* binding */ mightBeBoxed),
/* harmony export */   mightBeUnit: () => (/* binding */ mightBeUnit),
/* harmony export */   px: () => (/* binding */ px)
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

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

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
/******/ 			"blocks/posts/post-block-1/index": 0,
/******/ 			"blocks/posts/post-block-1/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/posts/post-block-1/style-index"], () => (__webpack_require__("./src/blocks/posts/post-block-1/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map