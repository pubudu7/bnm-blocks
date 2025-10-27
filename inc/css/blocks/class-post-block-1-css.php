<?php

namespace ThemezHut\BNM_Blocks\CSS\Blocks;

use ThemezHut\BNM_Blocks\CSS\CSS_Utility;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}


class Post_Block_1_CSS {

    public function render_css( $attributes ) {

        $utility = new CSS_Utility( $attributes );

        $utility->generate_styles_array(
            array(
                array(
                    'property'  =>  '--bnm-title-font-size',
                    'value'     =>  'titleFontSize',
                    'type'      =>  'font-size'
                ),
                array(
                    'property'  =>  '--bnm-title-font-size-small',
                    'value'     =>  'titleFontSizeSmall',
                    'type'      =>  'font-size'
                ),
                array(
                    'property'  =>  '--bnm-title-line-height',
                    'value'     =>  'titleLineHeight',
                ),
                array(
                    'property'  =>  '--bnm-title-line-height-small',
                    'value'     =>  'titleLineHeightSmall',
                ),
                array(
                    'property'  =>  '--bnm-title-letter-spacing',
                    'value'     =>  'titleLetterSpacing',
                ),
                array(
                    'property'  =>  '--bnm-title-letter-spacing-small',
                    'value'     =>  'titleLetterSpacingSmall',
                ),
                array(
                    'property'  =>  '--bnm-title-padding',
                    'value'     =>  'titlePadding',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--bnm-title-padding-small',
                    'value'     =>  'titlePaddingSmall',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--bnm-title-margin',
                    'value'     =>  'titleMargin',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--bnm-title-margin-small',
                    'value'     =>  'titleMarginSmall',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--bnm-title-color',
                    'value'     =>  'titleColor',
                ),
                array(
                    'property'  =>  '--bnm-title-hover-color',
                    'value'     =>  'titleHoverColor',
                ),
                array(
                    'property'  =>  '--bnm-category-font-size',
                    'value'     =>  'categoryFontSize',
                    'type'      =>  'font-size',
                ),
                array(
                    'property'  =>  '--bnm-category-line-height',
                    'value'     =>  'categoryLineHeight',
                ),
                array(
                    'property'  =>  '--bnm-category-letter-spacing',
                    'value'     =>  'categoryLetterSpacing',
                ),
                array(
                    'property'  =>  '--bnm-category-color',
                    'value'     =>  'categoryColor',
                ),
                array(
                    'property'  =>  '--bnm-category-hover-color',
                    'value'     =>  'categoryHoverColor',
                ),
                array(
                    'property'  =>  '--bnm-category-bg-color',
                    'value'     =>  'categoryBGColor',
                ),
                array(
                    'property'  =>  '--bnm-category-bg-hover-color',
                    'value'     =>  'categoryBGHoverColor',
                ),
                array(
                    'property'  =>  '--bnm-category-padding',
                    'value'     =>  'categoryPadding',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--bnm-category-margin',
                    'value'     =>  'categoryMargin',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--bnm-meta-font-size',
                    'value'     =>  'metaFontSize',
                    'type'      =>  'font-size'
                ),
                array(
                    'property'  =>  '--bnm-meta-font-size-small',
                    'value'     =>  'metaFontSizeSmall',
                    'type'      =>  'font-size'
                ),
                array(
                    'property'  =>  '--bnm-meta-line-height',
                    'value'     =>  'metaLineHeight',
                ),
                array(
                    'property'  =>  '--bnm-meta-line-height-small',
                    'value'     =>  'metaLineHeightSmall',
                ),
                array(
                    'property'  =>  '--bnm-meta-letter-spacing',
                    'value'     =>  'metaLetterSpacing',
                ),
                array(
                    'property'  =>  '--bnm-meta-letter-spacing-small',
                    'value'     =>  'metaLetterSpacingSmall',
                ),
                array(
                    'property'  =>  '--bnm-meta-spacing',
                    'value'     =>  'metaSpacing',
                ),
                array(
                    'property'  =>  '--bnm-meta-color',
                    'value'     =>  'metaColor',
                ),
                array(
                    'property'  =>  '--bnm-meta-hover-color',
                    'value'     =>  'metaHoverColor',
                ),
                array(
                    'property'  =>  '--bnm-meta-padding',
                    'value'     =>  'metaPadding',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--bnm-meta-margin',
                    'value'     =>  'metaMargin',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--bnm-excerpt-font-size',
                    'value'     =>  'excerptFontSize',
                    'type'      =>  'font-size'
                ),
                array(
                    'property'  =>  '--bnm-excerpt-font-size-small',
                    'value'     =>  'excerptFontSizeSmall',
                    'type'      =>  'font-size'
                ),
                array(
                    'property'  =>  '--bnm-excerpt-line-height',
                    'value'     =>  'excerptLineHeight',
                ),
                array(
                    'property'  =>  '--bnm-excerpt-line-height-small',
                    'value'     =>  'excerptLineHeightSmall',
                ),
                array(
                    'property'  =>  '--bnm-excerpt-letter-spacing',
                    'value'     =>  'excerptLetterSpacing',
                ),
                array(
                    'property'  =>  '--bnm-excerpt-letter-spacing-small',
                    'value'     =>  'excerptLetterSpacingSmall',
                ),
                array(
                    'property'  =>  '--bnm-excerpt-color',
                    'value'     =>  'excerptColor',
                ),
                array(
                    'property'  =>  '--bnm-excerpt-padding',
                    'value'     =>  'excerptPadding',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--bnm-excerpt-padding-small',
                    'value'     =>  'excerptPaddingSmall',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--bnm-excerpt-margin',
                    'value'     =>  'excerptMargin',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--bnm-excerpt-margin-small',
                    'value'     =>  'excerptMarginSmall',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--bnm-header-font-size',
                    'value'     =>  'headerFontSize',
                    'type'      =>  'font-size'
                ),
                array(
                    'property'  =>  '--bnm-header-line-height',
                    'value'     =>  'headerLineHeight',
                ),
                array(
                    'property'  =>  '--bnm-header-letter-spacing',
                    'value'     =>  'headerLetterSpacing',
                ),
                array(
                    'property'  =>  '--bnm-header-padding',
                    'value'     =>  'headerPadding',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--bnm-header-margin',
                    'value'     =>  'headerMargin',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--bnm-header-color',
                    'value'     =>  'headerColor',
                ),
                array(
                    'property'  =>  '--bnm-header-hover-color',
                    'value'     =>  'headerHoverColor',
                ),
                array(
                    'property'  =>  '--bnm-col-gap',
                    'value'     =>  'colGap',
                ),
                array(
                    'property'  =>  '--bnm-image-width',
                    'value'     =>  'featuredImageWidth',
                ),
                array(
                    'property'  =>  '--bnm-content-width',
                    'value'     =>  'entryContentWidth',
                ),
                array(
                    'property'  =>  '--bnm-image-margin',
                    'value'     =>  'featuredImageMargin',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--bnm-border-color',
                    'value'     =>  'postBorderColor',
                ),
            )
        );

        $css = $utility->generate_css();

        return $css;
    }

}