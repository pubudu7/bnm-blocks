<?php

namespace ThemezHut\BNM_Blocks\CSS\Blocks;

use ThemezHut\BNM_Blocks\CSS\CSS_Utility;

class Post_Slider_1_CSS {

    public function render_css( $attributes ) {

        $utility = new CSS_Utility( $attributes );

        $utility->generate_styles_array(
            array(
                array(
                    'property'  =>  '--title-font-size',
                    'value'     =>  'titleFontSize',
                    'type'      =>  'font-size'
                ),
                array(
                    'property'  =>  '--title-line-height',
                    'value'     =>  'titleLineHeight',
                ),
                array(
                    'property'  =>  '--title-letter-spacing',
                    'value'     =>  'titleLetterSpacing',
                ),
                array(
                    'property'  =>  '--title-padding',
                    'value'     =>  'titlePadding',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--title-margin',
                    'value'     =>  'titleMargin',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--title-color',
                    'value'     =>  'titleColor',
                ),
                array(
                    'property'  =>  '--title-hover-color',
                    'value'     =>  'titleHoverColor',
                ),
                array(
                    'property'  =>  '--category-font-size',
                    'value'     =>  'categoryFontSize',
                    'type'      =>  'font-size',
                ),
                array(
                    'property'  =>  '--category-line-height',
                    'value'     =>  'categoryLineHeight',
                ),
                array(
                    'property'  =>  '--category-letter-spacing',
                    'value'     =>  'categoryLetterSpacing',
                ),
                array(
                    'property'  =>  '--category-color',
                    'value'     =>  'categoryColor',
                ),
                array(
                    'property'  =>  '--category-hover-color',
                    'value'     =>  'categoryHoverColor',
                ),
                array(
                    'property'  =>  '--category-bg-color',
                    'value'     =>  'categoryBGColor',
                ),
                array(
                    'property'  =>  '--category-bg-hover-color',
                    'value'     =>  'categoryBGHoverColor',
                ),
                array(
                    'property'  =>  '--category-padding',
                    'value'     =>  'categoryPadding',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--category-margin',
                    'value'     =>  'categoryMargin',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--meta-font-size',
                    'value'     =>  'metaFontSize',
                    'type'      =>  'font-size'
                ),
                array(
                    'property'  =>  '--meta-line-height',
                    'value'     =>  'metaLineHeight',
                ),
                array(
                    'property'  =>  '--meta-letter-spacing',
                    'value'     =>  'metaLetterSpacing',
                ),
                array(
                    'property'  =>  '--meta-spacing',
                    'value'     =>  'metaSpacing',
                ),
                array(
                    'property'  =>  '--meta-color',
                    'value'     =>  'metaColor',
                ),
                array(
                    'property'  =>  '--meta-hover-color',
                    'value'     =>  'metaHoverColor',
                ),
                array(
                    'property'  =>  '--meta-padding',
                    'value'     =>  'metaPadding',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--meta-margin',
                    'value'     =>  'metaMargin',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--header-font-size',
                    'value'     =>  'headerFontSize',
                    'type'      =>  'font-size'
                ),
                array(
                    'property'  =>  '--header-line-height',
                    'value'     =>  'headerLineHeight',
                ),
                array(
                    'property'  =>  '--header-letter-spacing',
                    'value'     =>  'headerLetterSpacing',
                ),
                array(
                    'property'  =>  '--header-padding',
                    'value'     =>  'headerPadding',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--header-margin',
                    'value'     =>  'headerMargin',
                    'type'      =>  'box-control',
                ),
                array(
                    'property'  =>  '--header-color',
                    'value'     =>  'headerColor',
                ),
                array(
                    'property'  =>  '--header-hover-color',
                    'value'     =>  'headerHoverColor',
                ),
            )
        );

        $css = $utility->generate_css();

        return $css;
    }

}