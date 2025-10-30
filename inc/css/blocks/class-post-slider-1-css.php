<?php

namespace ThemezHut\BNM_Blocks\CSS\Blocks;

use ThemezHut\BNM_Blocks\CSS\CSS_Utility;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}


class Post_Slider_1_CSS {

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
                    'property'  =>  '--bnm-title-line-height',
                    'value'     =>  'titleLineHeight',
                ),
                array(
                    'property'  =>  '--bnm-title-letter-spacing',
                    'value'     =>  'titleLetterSpacing',
                ),
                array(
                    'property'  =>  '--bnm-title-padding',
                    'value'     =>  'titlePadding',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--bnm-title-margin',
                    'value'     =>  'titleMargin',
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
                    'property'  =>  '--bnm-meta-line-height',
                    'value'     =>  'metaLineHeight',
                ),
                array(
                    'property'  =>  '--bnm-meta-letter-spacing',
                    'value'     =>  'metaLetterSpacing',
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
                    'property'  => '--bnm-thumbs-per-view',
                    'value'     => 'thumbSlidesPerView'
                )
            )
        );

        $css = $utility->generate_css();

        return $css;
    }

}