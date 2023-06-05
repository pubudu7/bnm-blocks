/**
 * External dependencies
 */
import { startCase, toLower } from 'lodash';

/**
 * WordPress dependencies
 */
 import {
	BaseControl,
	Button,
	ButtonGroup,
	PanelBody,
	PanelRow,
	RangeControl,
    SelectControl,
	ToggleControl,
    __experimentalBoxControl as BoxControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';

import TypographyControl from '../../components/typography'; 

export function SliderSettings( { attributes, setAttributes } ) {

    const { 
        aspectRatio, 
        imageFit, 
        hidePagination,
        hideNextPrevBtns,
        autoplay,
        delay,
        showTitle,
        titleHtmlTag,
        titleFontSize,
        titleLineHeight,
        titleLetterSpacing,
        titleMargin,
        titlePadding,
        showDate,
        showCategory,
        showAuthor,
        showAvatar,
        showCommentCount,
        metaFontSize,
        metaLineHeight,
        metaLetterSpacing,
        metaMargin,
        metaPadding,
        categoryFontSize,
        categoryLineHeight,
        categoryLetterSpacing,
        categoryMargin,
        categoryPadding
    } = attributes;

    const aspectRatioOptions = [
        {
            value: 1,
            label: /* translators: label for square aspect ratio option */ __(
                'Square',
                'bnm-blocks'
            ),
            shortName: /* translators: abbreviation for 1:1 aspect ratio */ __(
                '1:1',
                'bnm-blocks'
            ),
        },
        {
            value: 0.75,
            label: /* translators: label for 4:3 aspect ratio option */ __( '4:3', 'bnm-blocks' ),
            shortName: /* translators: abbreviation for 4:3 aspect ratio */ __(
                '4:3',
                'bnm-blocks'
            ),
        },
        {
            value: 0.5625,
            label: /* translators: label for 16:9 aspect ratio option */ __(
                '16:9',
                'bnm-blocks'
            ),
            shortName: /* translators: abbreviation for 16:9 aspect ratio */ __(
                '16:9',
                'bnm-blocks'
            ),
        },
        {
            value: 4 / 3,
            label: /* translators: label for 3:4 aspect ratio option */ __( '3:4', 'bnm-blocks' ),
            shortName: /* translators: abbreviation for 3:4 aspect ratio */ __(
                '3:4',
                'bnm-blocks'
            ),
        },
        {
            value: 16 / 9,
            label: /* translators: label for 9:16 aspect ratio option */ __(
                '9:16',
                'bnm-blocks'
            ),
            shortName: /* translators: abbreviation for 9:16 aspect ratio */ __(
                '9:16',
                'bnm-blocks'
            ),
        },
    ];

    return (
        <InspectorControls>
            <PanelBody title={ __( 'Slideshow Settings' ) }  initialOpen={ false }>
                <BaseControl
                    label={ __( 'Slide Aspect Ratio', 'bnm-blocks' ) }
                    help={ __( 'All slides will share the same aspect ratio, for consistency.', 'bnm-blocks' ) }
                    id="bnm-blocks__aspect-ratio-control">

                    <PanelRow>
                        <ButtonGroup
                            id="bnm-blocks__aspect-ratio-control-buttons"
                            aria-label={ __( 'Slide Aspect Ratio', 'bnm-blocks' ) }
                        >
                            { aspectRatioOptions.map( option => {
                                const isCurrent = aspectRatio === option.value;
                                return (
                                    <Button
                                        isPrimary={ isCurrent }
                                        aria-pressed={ isCurrent }
                                        aria-label={ option.label }
                                        key={ option.value }
                                        onClick={ () => setAttributes( { aspectRatio: option.value } ) }
                                        >
                                            { option.shortName }
                                    </Button>
                                );
                            } ) }
                        </ButtonGroup>
                    </PanelRow>

                </BaseControl>
                
                <SelectControl
                    label={ __( 'Image Size', 'bnm-blocks' ) }
                    value={ attributes.featuredImageSizeSlug }
                    options={ window.themezHutGutenberg.imageSizes.map( size => ({
                        label: startCase( toLower( size ) ),
                        value: size
                    }) ) }
                    onChange={ imageSize => setAttributes({ featuredImageSizeSlug: imageSize }) }
                /> 
                    
                <BaseControl
                    label={ __( 'Image Fit', 'bnm-blocks' ) }
                    help={
                        'cover' === imageFit
                            ? __(
                                    'The image will fill the entire slide and will be cropped if necessary.',
                                    'bnm-popups'
                                )
                            : __(
                                    'The image will be resized to fit inside the slide without being cropped.',
                                    'bnm-popups'
                                )
                    }
                    id="bnm-blocks__blocks__image-fit-control"
                >
                    <PanelRow>
                        <ButtonGroup
                            id="bnm-blocks__image-fit-buttons"
                            aria-label={ __( 'Image Fit', 'bnm-blocks' ) }
                        >
                            <Button
                                isPrimary={ 'cover' === imageFit }
                                aria-pressed={ 'cover' === imageFit }
                                aria-label={ __( 'Cover', 'bnm-blocks' ) }
                                onClick={ () => setAttributes( { imageFit: 'cover' } ) }
                            >
                                { __( 'Cover', 'bnm-blocks' ) }
                            </Button>
                            <Button
                                isPrimary={ 'contain' === imageFit }
                                aria-pressed={ 'contain' === imageFit }
                                aria-label={ __( 'Contain', 'bnm-blocks' ) }
                                onClick={ () => setAttributes( { imageFit: 'contain' } ) }
                            >
                                { __( 'Contain', 'bnm-blocks' ) }
                            </Button>
                        </ButtonGroup>
                    </PanelRow>
                </BaseControl>
                <ToggleControl
                    label={ __( 'Hide Pagination' ) }
                    help={ __( 'Hide the bullet pagination' ) }
                    checked={ hidePagination }
                    onChange={ _hidePagination => { 
                        setAttributes( { hidePagination: _hidePagination } );
                    } }
                />
                <ToggleControl
                    label={ __( 'Hide Next/Prev Buttons' ) }
                    checked={ hideNextPrevBtns }
                    onChange={ _hideNextPrevBtns => { 
                        setAttributes( { hideNextPrevBtns: _hideNextPrevBtns } );
                    } }
                />
                <ToggleControl
                    label={ __( 'Autoplay' ) }
                    help={ __( 'Autoplay between slides' ) }
                    checked={ autoplay }
                    onChange={ _autoplay => {
                        setAttributes( { autoplay: _autoplay } );
                    } }
                />
                
                { autoplay && ( 
                    <RangeControl
                        label={ __( 'Delay between transitions (in seconds)' ) }
                        value={ delay }
                        onChange={ _delay => {
                            setAttributes( { delay: _delay } );
                        } }
                        min={ 1 }
                        max={ 20 }
                    /> 
                ) }

            </PanelBody>

            <PanelBody title={ __( 'Post Title', 'bnm-blocks' ) } initialOpen={ false }>
                
                    <ToggleControl
                        label={ __( 'Show Title', 'bnm-blocks' ) }
                        checked={ showTitle }
                        onChange={ () => setAttributes( { showTitle: ! showTitle } ) }
                    />
                

                { showTitle && (
                    <div className="thbnm-settings-panel">
                    
                        <SelectControl
                            label={ __( 'Title HTML tag', 'bnm-blocks' ) }
                            labelPosition={ "side" }
                            value={ titleHtmlTag }
                            options={ [
                                { label: 'h1', value: 'h1' },
                                { label: 'h2', value: 'h2' },
                                { label: 'h3', value: 'h3' },
                                { label: 'h4', value: 'h4' },
                                { label: 'h5', value: 'h5' },
                                { label: 'h6', value: 'h6' },
                                { label: 'span', value: 'span' },
                                { label: 'p', value: 'p' },
                            ] }
                            onChange={ ( newTitleTag ) => setAttributes( { titleHtmlTag: newTitleTag } ) }
                            __nextHasNoMarginBottom
                        />
                        
                        <TypographyControl
							label = { __( 'Typography', 'bnm-blocks' ) }
							fontSize={ titleFontSize }
							onFontSizeChange={ ( newFontSize ) => setAttributes( { titleFontSize: newFontSize } ) }
							lineHeight = { titleLineHeight }
							onLineHeightChange = { ( newLineHeight ) => setAttributes( { titleLineHeight: newLineHeight } ) }
							letterSpacing = { titleLetterSpacing }
							onLetterSpacingChange = { ( newLetterSpacing ) => setAttributes( { titleLetterSpacing: newLetterSpacing } ) }
						/>

                        <br></br>

                        <BoxControl
							label={ __( 'Margin', 'bnm-blocks' ) }
							values={ titleMargin }
							onChange={ nextValues => setAttributes( { titleMargin: nextValues } ) }
						/>
                    
                        <BoxControl
							label={ __( 'Padding', 'bnm-blocks' ) }
							values={ titlePadding }
							onChange={ nextValues => setAttributes( { titlePadding: nextValues } ) }
						/>
                    
                        <PanelColorSettings
							title={ __( 'Color', 'bnm-blocks' ) }
							initialOpen={ false }
							colorSettings={ [
								{
									value: attributes.titleColor,
									onChange: titleColor => setAttributes({ titleColor }),
									label: __( 'Title Color', 'bnm-blocks' )
								},
								{
									value: attributes.titleHoverColor,
									onChange: titleHoverColor => setAttributes({ titleHoverColor }),
									label: __( 'Title Hover', 'bnm-blocks' )
								}
							] }
						/>
                    
                    </div>
                ) }
            </PanelBody>
            
            <PanelBody title={ __( 'Category', 'bnm-blocks' ) } initialOpen={ false }>
                <div className="thbnm-settings-panel">
                <PanelRow>
                    <ToggleControl
                        label={ __( 'Show Category', 'bnm-blocks' ) }
                        checked={ showCategory }
                        onChange={ () => setAttributes( { showCategory: ! showCategory } ) }
                    />
                </PanelRow>

                { showCategory && (
                    <>
                        <TypographyControl
                            label = { __( 'Typography', 'bnm-blocks' ) }
                            fontSize={ categoryFontSize }
                            onFontSizeChange={ ( newFontSize ) => setAttributes( { categoryFontSize: newFontSize } ) }
                            lineHeight = { categoryLineHeight }
                            onLineHeightChange = { ( newLineHeight ) => setAttributes( { categoryLineHeight: newLineHeight } ) }
                            letterSpacing = { categoryLetterSpacing }
                            onLetterSpacingChange = { ( newLetterSpacing ) => setAttributes( { categoryLetterSpacing: newLetterSpacing } ) }
                        />

                        <br></br>

                        <BoxControl
                            label={ __( 'Margin', 'bnm-blocks' ) }
                            values={ categoryMargin }
                            onChange={ nextValues => setAttributes( { categoryMargin: nextValues } ) }
                        />

                        <BoxControl
                            label={ __( 'Padding', 'bnm-blocks' ) }
                            values={ categoryPadding }
                            onChange={ nextValues => setAttributes( { categoryPadding: nextValues } ) }
                        />

                        <PanelColorSettings
                            title={ __( 'Color', 'bnm-blocks' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                {
                                    value: attributes.categoryColor,
                                    onChange: categoryColor => setAttributes({ categoryColor }),
                                    label: __( 'Category Color', 'bnm-blocks' )
                                },
                                {
                                    value: attributes.categoryHoverColor,
                                    onChange: categoryHoverColor => setAttributes({ categoryHoverColor }),
                                    label: __( 'Category Color: Hover', 'bnm-blocks' )
                                },
                                {
                                    value: attributes.categoryBGColor,
                                    onChange: categoryBGColor => setAttributes({ categoryBGColor }),
                                    label: __( 'Category Background Color', 'bnm-blocks' )
                                },
                                {
                                    value: attributes.categoryBGHoverColor,
                                    onChange: categoryBGHoverColor => setAttributes({ categoryBGHoverColor }),
                                    label: __( 'Category Background Color: Hover', 'bnm-blocks' )
                                }
                            ] }
                        />
                    </>
                )}
                
                
                </div>
            </PanelBody>

            <PanelBody title={ __( 'Post Meta', 'bnm-blocks' ) } initialOpen={ false }>
                <div className="thbnm-settings-panel">
                <PanelRow>
                    <ToggleControl
                        label={ __( 'Show Author', 'bnm-blocks' ) }
                        checked={ showAuthor }
                        onChange={ () => setAttributes( { showAuthor: ! showAuthor } ) }
                    />
                </PanelRow>
                { showAuthor && (
                    <PanelRow>
                        <ToggleControl
                            label={ __( 'Show Author Avatar', 'bnm-blocks' ) }
                            checked={ showAvatar }
                            onChange={ () => setAttributes( { showAvatar: ! showAvatar } ) }
                        />
                    </PanelRow>
                ) }
                <PanelRow>
                    <ToggleControl
                        label={ __( 'Show Date', 'bnm-blocks' ) }
                        checked={ showDate }
                        onChange={ () => setAttributes( { showDate: ! showDate } ) }
                    />
                </PanelRow>
                <PanelRow>
                    <ToggleControl
                        label={ __( 'Show Comment Count', 'bnm-blocks' ) }
                        checked={ showCommentCount }
                        onChange={ () => setAttributes( { showCommentCount: ! showCommentCount } ) }
                    />
                </PanelRow>
                <TypographyControl
                    label = { __( 'Typography', 'bnm-blocks' ) }
                    fontSize={ metaFontSize }
                    onFontSizeChange={ ( newFontSize ) => setAttributes( { metaFontSize: newFontSize } ) }
                    lineHeight = { metaLineHeight }
                    onLineHeightChange = { ( newLineHeight ) => setAttributes( { metaLineHeight: newLineHeight } ) }
                    letterSpacing = { metaLetterSpacing }
                    onLetterSpacingChange = { ( newLetterSpacing ) => setAttributes( { metaLetterSpacing: newLetterSpacing } ) }
                />
                <br></br>
                <BoxControl
                    label={ __( 'Margin', 'bnm-blocks' ) }
                    values={ metaMargin }
                    onChange={ nextValues => setAttributes( { metaMargin: nextValues } ) }
                />

                <BoxControl
                    label={ __( 'Padding', 'bnm-blocks' ) }
                    values={ metaPadding }
                    onChange={ nextValues => setAttributes( { metaPadding: nextValues } ) }
                />
                <PanelColorSettings
                    title={ __( 'Color', 'bnm-blocks' ) }
                    initialOpen={ false }
                    colorSettings={ [
                        {
                            value: attributes.metaColor,
                            onChange: metaColor => setAttributes({ metaColor }),
                            label: __( 'Meta Color', 'bnm-blocks' )
                        },
                        {
                            value: attributes.metaHoverColor,
                            onChange: metaHoverColor => setAttributes({ metaHoverColor }),
                            label: __( 'Meta Color: Hover', 'bnm-blocks' )
                        }
                    ] }
                />
                </div>
            </PanelBody>
        </InspectorControls>
    );
}