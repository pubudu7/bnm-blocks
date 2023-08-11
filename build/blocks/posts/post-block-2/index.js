(()=>{var e,t={814:(e,t,a)=>{"use strict";const l=window.wp.blocks,n=window.wp.element,o=window.lodash;var r=a(184),i=a.n(r);const c=window.wp.i18n,s=window.wp.blockEditor,m=window.wp.data,g=window.wp.compose,p=window.wp.coreData,h=window.wp.notices,b=window.wp.components,d=[{label:(0,c.__)("Newest to oldest"),value:"date/desc"},{label:(0,c.__)("Oldest to newest"),value:"date/asc"},{
/* translators: label for ordering posts by title in ascending order */
label:(0,c.__)("A → Z"),value:"title/asc"},{
/* translators: label for ordering posts by title in descending order */
label:(0,c.__)("Z → A"),value:"title/desc"}],u=function(e){let{order:t,orderBy:a,onChange:l}=e;return(0,n.createElement)(b.SelectControl,{label:(0,c.__)("Order by"),value:`${a}/${t}`,options:d,onChange:e=>{const[t,a]=e.split("/");l({order:a,orderBy:t})}})},_=e=>{const t=null==e?void 0:e.reduce(((e,t)=>{const{mapById:a,mapByName:l,names:n}=e;return a[t.id]=t,l[t.name]=t,n.push(t.name),e}),{mapById:{},mapByName:{},names:[]});return{entities:e,...t}},v={who:"authors",per_page:-1,_fields:"id,name",context:"view"},C=function(e){let{value:t,onChange:a}=e;const l=(0,m.useSelect)((e=>{const{getUsers:t}=e(p.store);return t(v)}),[]);if(!l)return null;const o=_(l),r=(t?t.toString().split(","):[]).reduce(((e,t)=>{const a=o.mapById[t];return a&&e.push({id:t,value:a.name}),e}),[]);return(0,n.createElement)(b.FormTokenField,{label:(0,c.__)("Authors"),value:r,suggestions:o.names,onChange:e=>{const t=Array.from(e.reduce(((e,t)=>{const a=((e,t)=>{var a;const l=(null==t?void 0:t.id)||(null===(a=e[t])||void 0===a?void 0:a.id);if(l)return l})(o.mapByName,t);return a&&e.add(a),e}),new Set));a({author:t.join(",")})}})},S=function(e){let{onChange:t,query:a}=e;const l=(o=a.postType,(0,m.useSelect)((e=>{const{getTaxonomies:t}=e(p.store);return t({type:o,per_page:-1,context:"view"})}),[o]));var o;const r=(0,m.useSelect)((e=>{const{getEntityRecords:t}=e(p.store),a={per_page:100};return null==l?void 0:l.map((e=>{let{slug:l,name:n}=e;const o=t("taxonomy",l,a);return{slug:l,name:n,terms:_(o)}}))}),[l]),i=e=>{var t;const l=r.find((t=>{let{slug:a}=t;return a===e}));return l?((null===(t=a.taxQuery)||void 0===t?void 0:t[e])||[]).reduce(((e,t)=>{const a=l.terms.mapById[t];return a&&e.push({id:t,value:a.name}),e}),[]):[]};return(0,n.createElement)(n.Fragment,null,!(null==r||!r.length)&&r.map((e=>{var l;let{slug:o,name:c,terms:s}=e;return null!=s&&null!==(l=s.names)&&void 0!==l&&l.length?(0,n.createElement)(b.FormTokenField,{key:o,label:c,value:i(o),suggestions:s.names,onChange:(m=o,e=>{const l=r.find((e=>{let{slug:t}=e;return t===m}));if(!l)return;const n=Array.from(e.reduce(((e,t)=>{const a=((e,t)=>{var a;const l=(null==t?void 0:t.id)||(null===(a=e[t])||void 0===a?void 0:a.id);if(l)return l;const n=t.toLocaleLowerCase();for(const t in e)if(t.toLocaleLowerCase()===n)return e[t].id})(l.terms.mapByName,t);return a&&e.add(a),e}),new Set)),o={...a.taxQuery,[m]:n};t({taxQuery:o})})}):null;var m})))},E=[{label:(0,c.__)("Include"),value:""},{label:(0,c.__)("Exclude"),value:"exclude"},{label:(0,c.__)("Only"),value:"only"}];function y(e){let{value:t,onChange:a}=e;return(0,n.createElement)(b.SelectControl,{label:(0,c.__)("Sticky posts"),options:E,value:t,onChange:a})}function x(e){let{attributes:{query:t},setQuery:a}=e;const{order:l,orderBy:o,author:r,sticky:i,perPage:s}=t;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(S,{onChange:a,query:t}),(0,n.createElement)(C,{value:r,onChange:a}),(0,n.createElement)(u,{order:l,orderBy:o,onChange:a}),(0,n.createElement)(y,{value:i,onChange:e=>a({sticky:e})}),(0,n.createElement)(b.RangeControl,{label:(0,c.__)("Number of items","bnm-blocks"),value:s,onChange:e=>a({perPage:e}),min:2,max:100,required:!0}))}function f(e){const[t,a]=(0,n.useState)(!1),l=()=>{a((e=>!e))},o=[{name:(0,c.__)("Small"),slug:"small",size:16},{name:(0,c.__)("Medium"),slug:"medium",size:24},{name:(0,c.__)("Large"),slug:"large",size:32},{name:(0,c.__)("Extra Large"),slug:"extra-large",size:42}];return(0,n.createElement)("div",{className:"thbnm-typography-control-container"},(0,n.createElement)("div",{className:"thbnm-control-label"},e.label),(0,n.createElement)("div",{className:"thbnm-color-control-click-side"},t&&(0,n.createElement)(b.Button,{className:"thbnm-typograpy-control-button",onClick:l},(0,n.createElement)(b.Dashicon,{icon:"edit"})),!t&&(0,n.createElement)(b.Button,{className:"thbnm-typograpy-control-button",onClick:l},(0,n.createElement)(b.Dashicon,{icon:"edit"})),t&&(0,n.createElement)(b.Popover,{position:"top left",onClose:l},(0,n.createElement)("div",{className:"thbnm-typography-controls-wrapper"},(0,n.createElement)(b.FontSizePicker,{__nextHasNoMarginBottom:!0,value:e.fontSize,onChange:e.onFontSizeChange,fontSizes:o}),(0,n.createElement)("br",null),(0,n.createElement)(b.__experimentalUnitControl,{label:(0,c.__)("Line Height","bnm-blocks"),value:e.lineHeight,onChange:e.onLineHeightChange,step:.1,units:[{a11yLabel:"Unitless (-)",label:"-",step:.1,value:""},{a11yLabel:"Pixels (px)",label:"px",step:.1,value:"px"},{a11yLabel:"Percentage (%)",label:"%",step:1,value:"%"}]}),(0,n.createElement)("br",null),(0,n.createElement)(b.__experimentalUnitControl,{label:(0,c.__)("Letter Spacing","bnm-blocks"),value:e.letterSpacing,onChange:e.onLetterSpacingChange,step:.1,min:-50,max:100}),(0,n.createElement)("br",null)))))}function k(e){let{attributes:t,setAttributes:a}=e;const{showSectionHeader:l,headerHtmlTag:r,headerFontSize:i,headerLineHeight:m,headerLetterSpacing:g,headerMargin:p,headerPadding:h,showTitle:d,titleHtmlTag:u,titleFontSize:_,titleFontSizeSmall:v,titleLineHeight:C,titleLineHeightSmall:S,titleLetterSpacing:E,titleLetterSpacingSmall:y,titleMargin:x,titlePadding:k,showFeaturedImage:w,showFeaturedImageSmall:H,featuredImageMargin:L,featuredImageWidth:P,entryContentWidth:z,showDate:M,showCategory:T,showAuthor:N,showAvatar:F,showCommentCount:B,displayPostExcerpt:O,showDateSmall:I,showCategorySmall:A,categoryMargin:W,categoryPadding:R,showAuthorSmall:j,showAvatarSmall:G,showCommentCountSmall:D,displayPostExcerptSmall:U,excerptLength:q,excerptLengthSmall:$,excerptFontSize:Q,excerptFontSizeSmall:Z,excerptLineHeight:J,excerptLineHeightSmall:K,excerptLetterSpacing:V,excerptLetterSpacingSmall:X,excerptMargin:Y,excerptMarginSmall:ee,excerptPadding:te,excerptPaddingSmall:ae,showReadMore:le,showReadMoreSmall:ne,readMoreLabel:oe,metaFontSize:re,metaFontSizeSmall:ie,metaLineHeight:ce,metaLineHeightSmall:se,metaLetterSpacing:me,metaLetterSpacingSmall:ge,metaSpacing:pe,metaMargin:he,metaPadding:be,categoryFontSize:de,categoryLineHeight:ue,categoryLetterSpacing:_e}=t,ve=(e,t)=>{if(!e)return;const l=parseFloat(e.match(/\d+/)[0]);a(l>=20&&l<=80?{[t]:e}:{[t]:"entryContentWidth"===t?"67%":"33%"})};return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(b.PanelBody,{title:(0,c.__)("Section Header","bnm-blocks"),initialOpen:!1},(0,n.createElement)(b.ToggleControl,{label:(0,c.__)("Show Section Header","bnm-blocks"),checked:l,onChange:()=>a({showSectionHeader:!l})}),l&&(0,n.createElement)("div",{className:"thbnm-settings-panel"},(0,n.createElement)(b.SelectControl,{label:(0,c.__)("Section Header HTML tag","bnm-blocks"),labelPosition:"side",value:r,options:[{label:"h1",value:"h1"},{label:"h2",value:"h2"},{label:"h3",value:"h3"},{label:"h4",value:"h4"},{label:"h5",value:"h5"},{label:"h6",value:"h6"},{label:"span",value:"span"},{label:"p",value:"p"}],onChange:e=>a({headerHtmlTag:e}),__nextHasNoMarginBottom:!0}),(0,n.createElement)(f,{label:(0,c.__)("Typography","bnm-blocks"),fontSize:i,onFontSizeChange:e=>a({headerFontSize:e}),lineHeight:m,onLineHeightChange:e=>a({headerLineHeight:e}),letterSpacing:g,onLetterSpacingChange:e=>a({headerLetterSpacing:e})}),(0,n.createElement)("br",null),(0,n.createElement)(b.__experimentalBoxControl,{label:(0,c.__)("Margin","bnm-blocks"),values:p,onChange:e=>a({headerMargin:e})}),(0,n.createElement)(b.__experimentalBoxControl,{label:(0,c.__)("Padding","bnm-blocks"),values:h,onChange:e=>a({headerPadding:e})}),(0,n.createElement)(s.PanelColorSettings,{title:(0,c.__)("Color","bnm-blocks"),initialOpen:!1,colorSettings:[{value:t.headerColor,onChange:e=>a({headerColor:e}),label:(0,c.__)("Header Text Color","bnm-blocks")},{value:t.headerHoverColor,onChange:e=>a({headerHoverColor:e}),label:(0,c.__)("Header Text Hover Color","bnm-blocks")}]}))),(0,n.createElement)(b.PanelBody,{title:(0,c.__)("Post Title","bnm-blocks"),initialOpen:!1},(0,n.createElement)(b.ToggleControl,{label:(0,c.__)("Show Title","bnm-blocks"),checked:d,onChange:()=>a({showTitle:!d})}),d&&(0,n.createElement)("div",{className:"thbnm-settings-panel"},(0,n.createElement)(b.SelectControl,{label:(0,c.__)("Title HTML tag","bnm-blocks"),labelPosition:"side",value:u,options:[{label:"h1",value:"h1"},{label:"h2",value:"h2"},{label:"h3",value:"h3"},{label:"h4",value:"h4"},{label:"h5",value:"h5"},{label:"h6",value:"h6"},{label:"span",value:"span"},{label:"p",value:"p"}],onChange:e=>a({titleHtmlTag:e}),__nextHasNoMarginBottom:!0}),(0,n.createElement)(f,{label:(0,c.__)("Typography (Big Post Title)","bnm-blocks"),fontSize:_,onFontSizeChange:e=>a({titleFontSize:e}),lineHeight:C,onLineHeightChange:e=>a({titleLineHeight:e}),letterSpacing:E,onLetterSpacingChange:e=>a({titleLetterSpacing:e})}),(0,n.createElement)("br",null),(0,n.createElement)(f,{label:(0,c.__)("Typography (Small Post Titles)","bnm-blocks"),fontSize:v,onFontSizeChange:e=>a({titleFontSizeSmall:e}),lineHeight:S,onLineHeightChange:e=>a({titleLineHeightSmall:e}),letterSpacing:y,onLetterSpacingChange:e=>a({titleLetterSpacingSmall:e})}),(0,n.createElement)("br",null),(0,n.createElement)(b.__experimentalBoxControl,{label:(0,c.__)("Margin","bnm-blocks"),values:x,onChange:e=>a({titleMargin:e})}),(0,n.createElement)(b.__experimentalBoxControl,{label:(0,c.__)("Padding","bnm-blocks"),values:k,onChange:e=>a({titlePadding:e})}),(0,n.createElement)(s.PanelColorSettings,{title:(0,c.__)("Color","bnm-blocks"),initialOpen:!1,colorSettings:[{value:t.titleColor,onChange:e=>a({titleColor:e}),label:(0,c.__)("Title Color","bnm-blocks")},{value:t.titleHoverColor,onChange:e=>a({titleHoverColor:e}),label:(0,c.__)("Title Hover","bnm-blocks")}]}))),(0,n.createElement)(b.PanelBody,{title:(0,c.__)("Category","bnm-blocks"),initialOpen:!1},(0,n.createElement)(b.PanelRow,null,(0,n.createElement)(b.ToggleControl,{label:(0,c.__)("Show Category","bnm-blocks"),checked:T,onChange:()=>a({showCategory:!T})})),(0,n.createElement)(b.PanelRow,null,(0,n.createElement)(b.ToggleControl,{label:(0,c.__)("Show Category(Small Posts)","bnm-blocks"),checked:A,onChange:()=>a({showCategorySmall:!A})})),(0,n.createElement)(f,{label:(0,c.__)("Typography","bnm-blocks"),fontSize:de,onFontSizeChange:e=>a({categoryFontSize:e}),lineHeight:ue,onLineHeightChange:e=>a({categoryLineHeight:e}),letterSpacing:_e,onLetterSpacingChange:e=>a({categoryLetterSpacing:e})}),(0,n.createElement)("br",null),(0,n.createElement)(b.__experimentalBoxControl,{label:(0,c.__)("Margin","bnm-blocks"),values:W,onChange:e=>a({categoryMargin:e})}),(0,n.createElement)(b.__experimentalBoxControl,{label:(0,c.__)("Padding","bnm-blocks"),values:R,onChange:e=>a({categoryPadding:e})}),(0,n.createElement)(s.PanelColorSettings,{title:(0,c.__)("Category Color","bnm-blocks"),initialOpen:!1,colorSettings:[{value:t.categoryColor,onChange:e=>a({categoryColor:e}),label:(0,c.__)("Text Color","bnm-blocks")},{value:t.categoryHoverColor,onChange:e=>a({categoryHoverColor:e}),label:(0,c.__)("Text Color: Hover","bnm-blocks")},{value:t.categoryBGColor,onChange:e=>a({categoryBGColor:e}),label:(0,c.__)("Background Color","bnm-blocks")},{value:t.categoryBGHoverColor,onChange:e=>a({categoryBGHoverColor:e}),label:(0,c.__)("Background Color: Hover","bnm-blocks")}]})),(0,n.createElement)(b.PanelBody,{title:(0,c.__)("Post Meta","bnm-blocks"),className:"thbnm-panelbody",initialOpen:!1},(0,n.createElement)(b.TabPanel,{className:"thbnm-featured-image-settings-tab-panel thbnm-tab-panel",activeClass:"thbnm-active-tab",initialTabName:"big-post",tabs:[{name:"big-post",title:"Big Post",className:"tab-big-post"},{name:"small-post",title:"Small Posts",className:"tab-small-post"}]},(e=>"big-post"===e.name?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(b.ToggleControl,{label:(0,c.__)("Show Author","bnm-blocks"),checked:N,onChange:()=>a({showAuthor:!N})}),N&&(0,n.createElement)(b.ToggleControl,{label:(0,c.__)("Show Author Avatar","bnm-blocks"),checked:F,onChange:()=>a({showAvatar:!F})}),(0,n.createElement)(b.ToggleControl,{label:(0,c.__)("Show Date","bnm-blocks"),checked:M,onChange:()=>a({showDate:!M})}),(0,n.createElement)(b.ToggleControl,{label:(0,c.__)("Show Comment Count","bnm-blocks"),checked:B,onChange:()=>a({showCommentCount:!B})}),(0,n.createElement)(f,{label:(0,c.__)("Typography","bnm-blocks"),fontSize:re,onFontSizeChange:e=>a({metaFontSize:e}),lineHeight:ce,onLineHeightChange:e=>a({metaLineHeight:e}),letterSpacing:me,onLetterSpacingChange:e=>a({metaLetterSpacing:e})})):"small-post"===e.name?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(b.ToggleControl,{label:(0,c.__)("Show Author","bnm-blocks"),checked:j,onChange:()=>a({showAuthorSmall:!j})}),j&&(0,n.createElement)(b.ToggleControl,{label:(0,c.__)("Show Author Avatar","bnm-blocks"),checked:G,onChange:()=>a({showAvatarSmall:!G})}),(0,n.createElement)(b.ToggleControl,{label:(0,c.__)("Show Date","bnm-blocks"),checked:I,onChange:()=>a({showDateSmall:!I})}),(0,n.createElement)(b.ToggleControl,{label:(0,c.__)("Show Comment Count","bnm-blocks"),checked:D,onChange:()=>a({showCommentCountSmall:!D})}),(0,n.createElement)(f,{label:(0,c.__)("Typography","bnm-blocks"),fontSize:ie,onFontSizeChange:e=>a({metaFontSizeSmall:e}),lineHeight:se,onLineHeightChange:e=>a({metaLineHeightSmall:e}),letterSpacing:ge,onLetterSpacingChange:e=>a({metaLetterSpacingSmall:e})})):void 0)),(0,n.createElement)(b.__experimentalUnitControl,{label:(0,c.__)("Meta Spacing","bnm-blocks"),value:pe,onChange:e=>a({metaSpacing:e})}),(0,n.createElement)(b.__experimentalBoxControl,{label:(0,c.__)("Margin","bnm-blocks"),values:he,onChange:e=>a({metaMargin:e})}),(0,n.createElement)(b.__experimentalBoxControl,{label:(0,c.__)("Padding","bnm-blocks"),values:be,onChange:e=>a({metaPadding:e})}),(0,n.createElement)(s.PanelColorSettings,{title:(0,c.__)("Post Meta Color","bnm-blocks"),initialOpen:!1,colorSettings:[{value:t.metaColor,onChange:e=>a({metaColor:e}),label:(0,c.__)("Text Color","bnm-blocks")},{value:t.metaHoverColor,onChange:e=>a({metaHoverColor:e}),label:(0,c.__)("Text Color: Hover","bnm-blocks")}]})),(0,n.createElement)(b.PanelBody,{title:(0,c.__)("Post Excerpt","bnm-blocks"),className:"thbnm-panelbody",initialOpen:!1},(0,n.createElement)(b.TabPanel,{className:"thbnm-featured-image-settings-tab-panel thbnm-tab-panel",activeClass:"thbnm-active-tab",initialTabName:"big-post",tabs:[{name:"big-post",title:"Big Post",className:"tab-big-post"},{name:"small-post",title:"Small Posts",className:"tab-small-post"}]},(e=>"big-post"===e.name?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(b.ToggleControl,{label:(0,c.__)("Show Post Excerpt","bnm-blocks"),checked:O,onChange:()=>a({displayPostExcerpt:!O})}),O&&(0,n.createElement)(b.RangeControl,{label:(0,c.__)("Max number of words in excerpt","bnm-blocks"),value:q,onChange:e=>a({excerptLength:e}),min:5,max:100}),O&&(0,n.createElement)(b.ToggleControl,{label:(0,c.__)('Add a "Read More" link',"bnm-blocks"),checked:le,onChange:()=>a({showReadMore:!le})}),O&&(0,n.createElement)(f,{label:(0,c.__)("Typography","bnm-blocks"),fontSize:Q,onFontSizeChange:e=>a({excerptFontSize:e}),lineHeight:J,onLineHeightChange:e=>a({excerptLineHeight:e}),letterSpacing:V,onLetterSpacingChange:e=>a({excerptLetterSpacing:e})}),(0,n.createElement)("br",null),le&&(0,n.createElement)(b.TextControl,{label:(0,c.__)('"Read More" link text',"bnm-blocks"),value:oe,placeholder:oe,onChange:e=>a({readMoreLabel:e})}),(0,n.createElement)(b.__experimentalBoxControl,{label:(0,c.__)("Margin","bnm-blocks"),values:Y,onChange:e=>a({excerptMargin:e})}),(0,n.createElement)(b.__experimentalBoxControl,{label:(0,c.__)("Padding","bnm-blocks"),values:te,onChange:e=>a({excerptPadding:e})})):"small-post"===e.name?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(b.ToggleControl,{label:(0,c.__)("Show Post Excerpt","bnm-blocks"),checked:U,onChange:()=>a({displayPostExcerptSmall:!U})}),U&&(0,n.createElement)(b.RangeControl,{label:(0,c.__)("Max number of words in excerpt","bnm-blocks"),value:$,onChange:e=>a({excerptLengthSmall:e}),min:5,max:100}),U&&(0,n.createElement)(b.ToggleControl,{label:(0,c.__)('Add a "Read More" link',"bnm-blocks"),checked:ne,onChange:()=>a({showReadMoreSmall:!ne})}),U&&(0,n.createElement)(f,{label:(0,c.__)("Typography","bnm-blocks"),fontSize:Z,onFontSizeChange:e=>a({excerptFontSizeSmall:e}),lineHeight:K,onLineHeightChange:e=>a({excerptLineHeightSmall:e}),letterSpacing:X,onLetterSpacingChange:e=>a({excerptLetterSpacingSmall:e})}),(0,n.createElement)("br",null),ne&&(0,n.createElement)(b.TextControl,{label:(0,c.__)('"Read More" link text',"bnm-blocks"),value:oe,placeholder:oe,onChange:e=>a({readMoreLabel:e})}),(0,n.createElement)(b.__experimentalBoxControl,{label:(0,c.__)("Margin","bnm-blocks"),values:ee,onChange:e=>a({excerptMarginSmall:e})}),(0,n.createElement)(b.__experimentalBoxControl,{label:(0,c.__)("Padding","bnm-blocks"),values:ae,onChange:e=>a({excerptPaddingSmall:e})})):void 0)),(0,n.createElement)(s.PanelColorSettings,{title:(0,c.__)("Color","bnm-blocks"),initialOpen:!1,colorSettings:[{value:t.excerptColor,onChange:e=>a({excerptColor:e}),label:(0,c.__)("Excerpt Color","bnm-blocks")}]})),(0,n.createElement)(b.PanelBody,{title:(0,c.__)("Featured Image Settings","bnm-blocks"),initialOpen:!1},(0,n.createElement)(b.TabPanel,{className:"thbnm-featured-image-settings-tab-panel thbnm-tab-panel",activeclassName:"thbnm-active-tab",initialTabName:"big-post",tabs:[{name:"big-post",title:"Big Post",className:"tab-big-post"},{name:"small-post",title:"Small Posts",className:"tab-small-post"}]},(e=>"big-post"===e.name?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(b.ToggleControl,{label:(0,c.__)("Display Featured Image","bnm-blocks"),checked:w,onChange:()=>a({showFeaturedImage:!w})}),w&&(0,n.createElement)(b.SelectControl,{label:(0,c.__)("Image Size","bnm-blocks"),value:t.featuredImageSizeSlug,options:window.themezHutGutenberg.imageSizes.map((e=>({label:(0,o.startCase)((0,o.toLower)(e)),value:e}))),onChange:e=>a({featuredImageSizeSlug:e})})):"small-post"===e.name?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(b.ToggleControl,{label:(0,c.__)("Display Featured Image","bnm-blocks"),checked:H,onChange:()=>a({showFeaturedImageSmall:!H})}),H&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(b.SelectControl,{label:(0,c.__)("Image Size(Small)","bnm-blocks"),value:t.featuredImageSizeSlugSmall,options:window.themezHutGutenberg.imageSizes.map((e=>({label:(0,o.startCase)((0,o.toLower)(e)),value:e}))),onChange:e=>a({featuredImageSizeSlugSmall:e})}),(0,n.createElement)(b.__experimentalUnitControl,{label:(0,c.__)("Featured Image Width (%)","bnm-blocks"),value:P,onChange:e=>ve(e,"featuredImageWidth"),step:5,units:[{a11yLabel:"Percentage (%)",label:"%",step:5,value:"%"}]}),(0,n.createElement)(b.__experimentalUnitControl,{label:(0,c.__)("Content Width (%)","bnm-blocks"),value:z,onChange:e=>ve(e,"entryContentWidth"),step:5,units:[{a11yLabel:"Percentage (%)",label:"%",step:5,value:"%"}]}),(0,n.createElement)(b.__experimentalBoxControl,{label:(0,c.__)("Margin","bnm-blocks"),values:L,onChange:e=>a({featuredImageMargin:e})}))):void 0))))}const w=e=>(0,o.isNumber)(e)?(e=>e?`${e}px`:e)(e):e,H=e=>{var t,a,l,n;if(0!==Object.keys(e).length&&e.constructor===Object&&L(e))return`${null!==(t=e.top)&&void 0!==t?t:"0px"} ${null!==(a=e.right)&&void 0!==a?a:"0px"} ${null!==(l=e.bottom)&&void 0!==l?l:"0px"} ${null!==(n=e.left)&&void 0!==n?n:"0px"}`},L=e=>{for(const t in e)if(void 0!==e[t])return!0;return!1};function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},P.apply(this,arguments)}const z=window.wp.date;const M=e=>{let{post:t,excerptLength:a,showReadMore:l,readMoreLabel:o}=e,r=t.excerpt.rendered;const i=document.createElement("div");return i.innerHTML=r,r=i.textContent||i.innerText||"",l?(0,n.createElement)("div",{className:"bnm-post-excerpt"},r.trim().split(" ",a).join(" "),(0,c.__)("… "),(0,n.createElement)("a",{href:"#",className:"bnm-readmore"},o)):(0,n.createElement)("div",{className:"bnm-post-excerpt"},r.trim().split(" ",a).join(" "),(0,c.__)("… "))},T=e=>{let{attributes:t,post:a}=e;const l=t.titleHtmlTag||"h3";return(0,n.createElement)(l,{className:"entry-title"},(0,n.createElement)("a",{href:"#"},a.title.rendered?a.title.rendered:(0,c.__)("Default title","bnm-blocks")))},N=e=>{let{categoriesList:t,post:a}=e;const l=t,o=a.categories,r=[];if(void 0!==l&&void 0!==o)for(let e=0;e<l.length;e++)for(let t=0;t<o.length;t++)l[e].id===o[t]&&r.push(l[e].name);return(0,n.createElement)("div",{className:"bnm-category-list"},r.map((e=>(0,n.createElement)("a",{href:"#"},e))))},F=e=>{let{post:t,featuredImageSizeSlug:a}=e;const{url:l,alt:r}=function(e,t){var a,l,n,r;const i=(0,o.get)(e,["_embedded","wp:featuredmedia","0"]);return{url:null!==(a=null==i||null===(l=i.media_details)||void 0===l||null===(n=l.sizes)||void 0===n||null===(r=n[t])||void 0===r?void 0:r.source_url)&&void 0!==a?a:null==i?void 0:i.source_url,alt:null==i?void 0:i.alt_text}}(t,a);return l&&(0,n.createElement)("figure",{className:"post-thumbnail"},(0,n.createElement)("img",{src:l,alt:r}))||null},B=e=>{let{author:t}=e;return(0,n.createElement)("span",{className:"byline"},(0,n.createElement)("span",{className:"author vcard bnm-post-author"},(0,n.createElement)("a",{href:"#"},(0,c.sprintf)(
/* translators: byline. %s: current author. */
(0,c.__)("by %s"),t.name))))},O=e=>{var t;let{author:a}=e;const l=null==a||null===(t=a.avatar_urls)||void 0===t?void 0:t[48];return l&&(0,n.createElement)("span",{className:"bnm-avatar"},(0,n.createElement)("img",{src:l}))||null},I=e=>{let{post:t}=e;const a=(0,z.getSettings)().formats.date;return t.date_gmt?(0,n.createElement)("span",{className:"posted-on bnm-post-date"},(0,n.createElement)("time",{className:"entry-date published",dateTime:(0,z.format)("c",t.date_gmt)},(0,n.createElement)("a",{href:"#"},(0,z.dateI18n)(a,t.date_gmt)))):null},A=e=>{let{post:t}=e;return t.comment_count?(0,n.createElement)("span",{className:"comments-link bnm-comment-count"},(0,n.createElement)("a",{href:"#"},t.comment_count)):null},W=e=>{let{posts:t,authorsList:a,categoriesList:l,blockProps:o,inlineStyles:r,attributes:i,setAttributes:m}=e;return(0,n.createElement)("div",P({},o,{style:r}),(0,n.createElement)("div",{className:"posts-block-2-container"},i.showSectionHeader&&(0,n.createElement)("div",{className:"bnm-block-title-wrap"},(0,n.createElement)(s.RichText,{onChange:e=>m({sectionHeader:e}),placeholder:(0,c.__)("Write section header…","bnm-blocks"),value:i.sectionHeader,tagName:i.headerHtmlTag,className:"article-section-title"})),(0,n.createElement)("div",{className:"bnm-pb2-posts-grid"},t&&t.length>0&&t.map(((e,t)=>{const o=null==a?void 0:a.find((t=>t.id===e.author));return(0===t||1===t)&&(0,n.createElement)("article",{className:"bnm-pb2-large"},i.showFeaturedImage&&(0,n.createElement)(F,{post:e,featuredImageSizeSlug:i.featuredImageSizeSlug}),(0,n.createElement)("div",{className:"bnm-entry-wrapper"},i.showCategory&&l&&(0,n.createElement)(N,{categoriesList:l,post:e}),i.showTitle&&(0,n.createElement)(T,{post:e,attributes:i}),(0,n.createElement)("div",{className:"entry-meta"},i.showAuthor&&i.showAvatar&&o&&(0,n.createElement)(O,{author:o}),i.showAuthor&&o&&(0,n.createElement)(B,{author:o}),i.showDate&&(0,n.createElement)(I,{post:e}),i.showCommentCount&&(0,n.createElement)(A,{post:e})),i.displayPostExcerpt&&(0,n.createElement)(M,{post:e,excerptLength:i.excerptLength,showReadMore:i.showReadMore})))})),t&&t.length>0&&t.map(((e,t)=>{const o=null==a?void 0:a.find((t=>t.id===e.author));return t>1&&(0,n.createElement)("article",{className:"bnm-pb2-small"},i.showFeaturedImage&&(0,n.createElement)(F,{post:e,featuredImageSizeSlug:i.featuredImageSizeSlugSmall}),(0,n.createElement)("div",{className:"entry-details"},i.showCategorySmall&&l&&(0,n.createElement)(N,{categoriesList:l,post:e}),i.showTitle&&(0,n.createElement)(T,{post:e,attributes:i}),(0,n.createElement)("div",{className:"entry-meta"},i.showAuthorSmall&&i.showAvatarSmall&&o&&(0,n.createElement)(O,{author:o}),i.showAuthorSmall&&o&&(0,n.createElement)(B,{author:o}),i.showDateSmall&&(0,n.createElement)(I,{post:e}),i.showCommentCountSmall&&(0,n.createElement)(A,{post:e})),i.displayPostExcerptSmall&&(0,n.createElement)(M,{post:e,excerptLength:i.excerptLengthSmall,showReadMore:i.showReadMoreSmall})))})))))},R={per_page:-1,context:"view"},j={per_page:-1,has_published_posts:["post"],context:"view"},G=JSON.parse('{"u2":"bnm-blocks/post-block-2"}');(0,l.registerBlockType)(G.u2,{icon:()=>(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",version:"1.1",viewBox:"0 0 12.7 12.7"},(0,n.createElement)("g",{fill:"#000",fillOpacity:"1",fillRule:"evenodd"},(0,n.createElement)("path",{strokeWidth:"0.251",d:"M0 0h5.556v3.704H0z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}),(0,n.createElement)("path",{strokeWidth:"0.418",d:"M7.144 7.144H9.79v1.852H7.144z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}),(0,n.createElement)("path",{strokeWidth:"0.265",d:"M0 4.498h5.556v1.058H0z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}),(0,n.createElement)("path",{strokeWidth:"0.418",d:"M7.144 10.054H9.79v1.852H7.144z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}),(0,n.createElement)("path",{strokeWidth:"0.418",d:"M0 10.054h2.646v1.852H0z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}),(0,n.createElement)("path",{strokeWidth:"0.418",d:"M0 7.144h2.646v1.852H0z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}),(0,n.createElement)("path",{strokeWidth:"0.279",d:"M3.175 10.054h2.646v.53H3.175z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}),(0,n.createElement)("path",{strokeWidth:"0.265",d:"M3.175 7.144h2.381v.529H3.175z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}),(0,n.createElement)("path",{strokeWidth:"0.283",d:"M3.175 11.113h2.117v.529H3.175z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}),(0,n.createElement)("path",{strokeWidth:"0.283",d:"M3.175 8.202h2.117v.53H3.175z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}),(0,n.createElement)("path",{strokeWidth:"0.265",d:"M10.319 7.144H12.7v.529h-2.381z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}),(0,n.createElement)("path",{strokeWidth:"0.283",d:"M10.319 8.202h2.116v.53H10.32z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}),(0,n.createElement)("path",{strokeWidth:"0.265",d:"M10.319 10.054H12.7v.53h-2.381z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}),(0,n.createElement)("path",{strokeWidth:"0.283",d:"M10.319 11.113h2.116v.529H10.32z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}),(0,n.createElement)("path",{strokeWidth:"0.251",d:"M7.144 0H12.7v3.704H7.144z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}),(0,n.createElement)("path",{strokeWidth:"0.265",d:"M7.144 4.498H12.7v1.058H7.144z",opacity:"1",stopColor:"#000",stopOpacity:"1",vectorEffect:"none"}))),edit:function e(t){let{attributes:a,setAttributes:l}=t;const{queryId:r,query:d,categoryPadding:u,featuredImageSizeSlug:_}=a,{author:v,order:C,orderBy:S,perPage:E,taxQuery:y,sticky:f}=d,P={author:v,order:C,orderby:S,per_page:E,_embed:"wp:featuredmedia"};"exclude"===f&&(P.sticky=!1),"only"===f&&(P.sticky=!0),y&&(P.categories=y.category,P.tags=y.post_tag);const{posts:z,categoriesList:M,authorsList:T}=(0,m.useSelect)((e=>{const{getEntityRecords:t,getUsers:a}=e(p.store);return{posts:t("postType","post",(0,o.pickBy)(P,(e=>!(0,o.isUndefined)(e)))),categoriesList:t("taxonomy","category",R),authorsList:a(j)}}),[v,C,S,E,y,f,_]),{__unstableMarkNextChangeAsNotPersistent:N}=(0,m.useDispatch)(s.store),F=(0,g.useInstanceId)(e),{postsPerPage:B}=(0,m.useSelect)((e=>{const{getSettings:t}=e(s.store);return{postsPerPage:+t().postsPerPage||5}}),[]);(0,n.useEffect)((()=>{const e={};!d.perPage&&B&&(e.perPage=B),Object.keys(e).length&&(N(),U(e))}),[d.perPage]),(0,n.useEffect)((()=>{Number.isFinite(r)||(N(),l({queryId:F}))}),[r,F]);const{createWarningNotice:O,removeNotice:I}=(0,m.useDispatch)(h.store),A={"--title-font-size":w(a.titleFontSize),"--title-font-size-small":w(a.titleFontSizeSmall),"--title-line-height":a.titleLineHeight,"--title-line-height-small":a.titleLineHeightSmall,"--title-letter-spacing":a.titleLetterSpacing,"--title-letter-spacing-small":a.titleLetterSpacingSmall,"--title-padding":H(a.titlePadding),"--title-margin":H(a.titleMargin),"--title-color":a.titleColor,"--title-hover-color":a.titleHoverColor,"--category-font-size":w(a.categoryFontSize),"--category-line-height":a.categoryLineHeight,"--category-letter-spacing":a.categoryLetterSpacing,"--category-color":a.categoryColor,"--category-hover-color":a.categoryHoverColor,"--category-bg-color":a.categoryBGColor,"--category-bg-hover-color":a.categoryBGHoverColor,"--category-padding":H(a.categoryPadding),"--category-margin":H(a.categoryMargin),"--meta-font-size":w(a.metaFontSize),"--meta-font-size-small":w(a.metaFontSizeSmall),"--meta-line-height":a.metaLineHeight,"--meta-line-height-small":a.metaLineHeightSmall,"--meta-letter-spacing":a.metaLetterSpacing,"--meta-letter-spacing-small":a.metaLetterSpacingSmall,"--meta-spacing":a.metaSpacing,"--meta-padding":H(a.metaPadding),"--meta-margin":H(a.metaMargin),"--meta-color":a.metaColor,"--meta-hover-color":a.metaHoverColor,"--excerpt-font-size":w(a.excerptFontSize),"--excerpt-font-size-small":w(a.excerptFontSizeSmall),"--excerpt-line-height":a.excerptLineHeight,"--excerpt-line-height-small":a.excerptLineHeightSmall,"--excerpt-letter-spacing":a.excerptLetterSpacing,"--excerpt-letter-spacing-small":a.excerptLetterSpacingSmall,"--excerpt-padding":H(a.excerptPadding),"--excerpt-margin":H(a.excerptMargin),"--excerpt-padding-small":H(a.excerptPaddingSmall),"--excerpt-margin-small":H(a.excerptMarginSmall),"--excerpt-color":a.excerptColor,"--col-gap":a.colGap,"--row-gap":a.rowGap,"--header-font-size":w(a.headerFontSize),"--header-line-height":a.headerLineHeight,"--header-letter-spacing":a.headerLetterSpacing,"--header-padding":H(a.headerPadding),"--header-margin":H(a.headerMargin),"--header-color":a.headerColor,"--header-hover-color":a.headerHoverColor,"--image-width":a.featuredImageWidth,"--content-width":a.entryContentWidth,"--image-margin":H(a.featuredImageMargin)};let G=!1;0!==Object.keys(u).length&&u.constructor===Object&&L(u)&&(G=!0),(a.categoryBGColor||a.categoryBGHoverColor)&&(G=!0);const D=(0,s.useBlockProps)({className:i()("wpbnmpb2",{"bnm-box-cat":G})}),U=e=>l({query:{...d,...e}}),q=!(null==z||!z.length),$=(0,n.createElement)(s.InspectorControls,null,(0,n.createElement)(b.PanelBody,{title:(0,c.__)("Content Settings","bnm-blocks"),initialOpen:!0},(0,n.createElement)(x,{attributes:a,setQuery:U}),(0,n.createElement)(b.__experimentalUnitControl,{label:(0,c.__)("Column Gap","bnm-blocks"),value:a.colGap,onChange:e=>l({colGap:e}),step:5,units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"}]}),(0,n.createElement)(b.__experimentalUnitControl,{label:(0,c.__)("Row Gap","bnm-blocks"),value:a.rowGap,onChange:e=>l({rowGap:e}),step:5,units:[{value:"px",label:"px"},{value:"%",label:"%"},{value:"em",label:"em"}]})),(0,n.createElement)(k,{attributes:a,setAttributes:l}));return q?(0,n.createElement)(n.Fragment,null,$,(0,n.createElement)(W,{posts:z,categoriesList:M,authorsList:T,blockProps:D,inlineStyles:A,attributes:a,setAttributes:l})):(0,n.createElement)("div",D,$,(0,n.createElement)(b.Placeholder,null,Array.isArray(z)?(0,c.__)("No posts found"):(0,n.createElement)(b.Spinner,null)))},save:function(){return null}})},184:(e,t)=>{var a;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var r=n.apply(null,a);r&&e.push(r)}}else if("object"===o){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var i in a)l.call(a,i)&&a[i]&&e.push(i)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()}},a={};function l(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,l),o.exports}l.m=t,e=[],l.O=(t,a,n,o)=>{if(!a){var r=1/0;for(m=0;m<e.length;m++){for(var[a,n,o]=e[m],i=!0,c=0;c<a.length;c++)(!1&o||r>=o)&&Object.keys(l.O).every((e=>l.O[e](a[c])))?a.splice(c--,1):(i=!1,o<r&&(r=o));if(i){e.splice(m--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[a,n,o]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={540:0,772:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var n,o,[r,i,c]=a,s=0;if(r.some((t=>0!==e[t]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(c)var m=c(l)}for(t&&t(a);s<r.length;s++)o=r[s],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(m)},a=globalThis.webpackChunkbnm_blocks=globalThis.webpackChunkbnm_blocks||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=l.O(void 0,[772],(()=>l(814)));n=l.O(n)})();