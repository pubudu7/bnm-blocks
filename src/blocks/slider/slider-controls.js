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
    FontSizePicker,
    __experimentalNumberControl as NumberControl,
    __experimentalBoxControl as BoxControl,
    ColorPalette,
    ColorPicker
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';

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
        titlePadding,
        titleColor,
        titleHoverColor,
        showDate,
        showCategory,
        showAuthor,
        showAvatar,
        showCommentCount,
        metaFontSize,
        metaColor,
        metaHoverColor,
        categoryFontSize,
        categoryColor,
        categoryHoverColor,
        categoryBGColor,
        categoryBGHoverColor
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

    const titlefontSizes = [
        {
            name: __( 'Small' ),
            slug: 'small',
            size: 16,
        },
        {
            name: __( 'Medium' ),
            slug: 'medium',
            size: 24,
        },
        {
            name: __( 'Large' ),
            slug: 'large',
            size: 32,
        },
        {
            name: __( 'Extra Large' ),
            slug: 'extra-large',
            size: 42,
        },
    ];
    const metafontSizes = [
        {
            name: __( 'Small' ),
            slug: 'small',
            size: 10,
        },
        {
            name: __( 'Medium' ),
            slug: 'medium',
            size: 12,
        },
        {
            name: __( 'Large' ),
            slug: 'large',
            size: 14,
        },
        {
            name: __( 'Extra Large' ),
            slug: 'extra-large',
            size: 16,
        },
    ];
    const fallbackTitleFontSize = 32;
    const fallbackMetaFontSize = 14;

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
                    <>
                    
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
                        
                        <FontSizePicker
                            __nextHasNoMarginBottom
                            fontSizes={ titlefontSizes }
                            value={ titleFontSize }
                            fallbackFontSize={ fallbackTitleFontSize }
                            onChange={ ( newFontSize ) => setAttributes( { titleFontSize: newFontSize } ) }
                        />
                    
                        <NumberControl
                            label={ __( 'Line Height', 'bnm-blocks' ) }
                            isShiftStepEnabled={ true }
                            onChange={ ( newLineHeight ) => setAttributes( { titleLineHeight: newLineHeight } ) }
                            step={ 0.1 }
                            shiftStep={ 10 }
                            value={ titleLineHeight }
                        />
                    
                        <BoxControl
                            label={ __( 'Padding', 'bnm-blocks' ) }
                            values={ titlePadding }
                            onChange={ nextValues => setAttributes( { titlePadding: nextValues } ) }
                        />
                    
                        <fieldset>
                            <legend className="blocks-base-control__label">
                                { __( 'Title Color', 'bnm-blocks' ) }
                            </legend>
                            <ColorPicker
                                color={ titleColor }
                                onChange={ newColor => setAttributes( { titleColor: newColor } ) }
                                enableAlpha
                                defaultValue=""
                            />
                        </fieldset>
                        <fieldset>
                            <legend className="blocks-base-control__label">
                                { __( 'Title Hover Color', 'bnm-blocks' ) }
                            </legend>
                            <ColorPicker
                                color={ titleHoverColor }
                                onChange={ newColor => setAttributes( { titleHoverColor: newColor } ) }
                                enableAlpha
                                defaultValue=""
                            />
                        </fieldset>
                    
                    </>
                ) }
            </PanelBody>
            
            <PanelBody title={ __( 'Category', 'bnm-blocks' ) } initialOpen={ false }>
                <PanelRow>
                    <ToggleControl
                        label={ __( 'Show Category', 'bnm-blocks' ) }
                        checked={ showCategory }
                        onChange={ () => setAttributes( { showCategory: ! showCategory } ) }
                    />
                </PanelRow>
                <FontSizePicker
                    __nextHasNoMarginBottom
                    fontSizes={ metafontSizes }
                    value={ categoryFontSize }
                    fallbackFontSize={ fallbackMetaFontSize }
                    onChange={ ( newFontSize ) => setAttributes( { categoryFontSize: newFontSize } ) }
                />
                <fieldset>
                    <legend className="blocks-base-control__label">
                        { __( 'Category Color', 'bnm-blocks' ) }
                    </legend>
                    <ColorPicker
                        color={ categoryColor }
                        onChange={ newColor => setAttributes( { categoryColor: newColor } ) }
                        enableAlpha
                        defaultValue=""
                    />
                </fieldset>
                <fieldset>
                    <legend className="blocks-base-control__label">
                        { __( 'Category Hover Color', 'bnm-blocks' ) }
                    </legend>
                    <ColorPicker
                        color={ categoryHoverColor }
                        onChange={ newColor => setAttributes( { categoryHoverColor: newColor } ) }
                        enableAlpha
                        defaultValue=""
                    />
                </fieldset>
                <fieldset>
                    <legend className="blocks-base-control__label">
                        { __( 'Category Background Color', 'bnm-blocks' ) }
                    </legend>
                    <ColorPicker
                        color={ categoryBGColor }
                        onChange={ newColor => setAttributes( { categoryBGColor: newColor } ) }
                        enableAlpha
                        defaultValue=""
                    />
                </fieldset>
                <fieldset>
                    <legend className="blocks-base-control__label">
                        { __( 'Category Background Hover Color', 'bnm-blocks' ) }
                    </legend>
                    <ColorPicker
                        color={ categoryBGHoverColor }
                        onChange={ newColor => setAttributes( { categoryBGHoverColor: newColor } ) }
                        enableAlpha
                        defaultValue=""
                    />
                </fieldset>
            </PanelBody>

            <PanelBody title={ __( 'Post Meta', 'bnm-blocks' ) } initialOpen={ false }>
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
                <FontSizePicker
                    __nextHasNoMarginBottom
                    fontSizes={ metafontSizes }
                    value={ metaFontSize }
                    fallbackFontSize={ fallbackMetaFontSize }
                    onChange={ ( newFontSize ) => setAttributes( { metaFontSize: newFontSize } ) }
                />
                <fieldset>
                    <legend className="blocks-base-control__label">
                        { __( 'Post Meta Color', 'bnm-blocks' ) }
                    </legend>
                    <ColorPicker
                        color={ metaColor }
                        onChange={ newColor => setAttributes( { metaColor: newColor } ) }
                        enableAlpha
                        defaultValue=""
                    />
                </fieldset>
                <fieldset>
                    <legend className="blocks-base-control__label">
                        { __( 'Post Meta Hover Color', 'bnm-blocks' ) }
                    </legend>
                    <ColorPicker
                        color={ metaHoverColor }
                        onChange={ newColor => setAttributes( { metaHoverColor: newColor } ) }
                        enableAlpha
                        defaultValue=""
                    />
                </fieldset>
                
            </PanelBody>
        </InspectorControls>
    );
}