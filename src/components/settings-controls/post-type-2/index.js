// Settings controls for the post type that does NOT have two different sized posts.

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
	TextControl,
	__experimentalUnitControl as UnitControl,
    FontSizePicker,
    __experimentalNumberControl as NumberControl,
    __experimentalBoxControl as BoxControl,
	TabPanel,
    ColorPalette,
    ColorPicker
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';


import ColorPopupButton from '../../../components/color-control';
import TypographyControl from '../../../components/typography'; 

export default function BlockExtraSettings( { attributes, setAttributes } ) {
    const {
        showTitle,
        titleHtmlTag,
        titleFontSize,
        titleLineHeight,
		titleLetterSpacing,
		titleMargin,
        titlePadding,
        titleColor,
        titleHoverColor,
		showFeaturedImage,
        showDate,
        showCategory,
        showAuthor,
        showAvatar,
        showCommentCount,
		displayPostExcerpt,
		categoryMargin,
		categoryPadding,
		excerptLength,
		excerptFontSize,
		excerptLineHeight,
		excerptLetterSpacing,
		excerptColor,
		excerptMargin,
		excerptPadding,
		showReadMore,
		readMoreLabel,
        metaFontSize,
		metaLineHeight,
		metaLetterSpacing,
        metaColor,
        metaHoverColor,
		metaSpacing,
		metaMargin,
		metaPadding,
        categoryFontSize,
		categoryLineHeight,
		categoryLetterSpacing,
        categoryColor,
        categoryHoverColor,
        categoryBGColor,
        categoryBGHoverColor
    } = attributes;

	const updateColor = ( newColor ) =>
		setAttributes( { titleColor: newColor } );

    return (
        <InspectorControls>
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
							label = { __( 'Typography (Big Post Title)', 'bnm-blocks' ) }
							fontSize={ titleFontSize }
							onFontSizeChange={ ( newFontSize ) => setAttributes( { titleFontSize: newFontSize } ) }
							lineHeight = { titleLineHeight }
							onLineHeightChange = { ( newLineHeight ) => setAttributes( { titleLineHeight: newLineHeight } ) }
							letterSpacing = { titleLetterSpacing }
							onLetterSpacingChange = { ( newLetterSpacing ) => setAttributes( { titleLetterSpacing: newLetterSpacing } ) }
						/>

						<br />

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

						<ColorPopupButton
							color={ titleHoverColor }
							onChange={ ( value ) => {
								setAttributes({
									titleHoverColor: value,
								});
							} }
							label={ __( 'Title Hover Color', 'bnm-blocks' ) }
						/>					
					</div>
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

					<TypographyControl
						label = { __( 'Typography', 'bnm-blocks' ) }
						fontSize={ categoryFontSize }
						onFontSizeChange={ ( newFontSize ) => setAttributes( { categoryFontSize: newFontSize } ) }
						lineHeight = { categoryLineHeight }
						onLineHeightChange = { ( newLineHeight ) => setAttributes( { categoryLineHeight: newLineHeight } ) }
						letterSpacing = { categoryLetterSpacing }
						onLetterSpacingChange = { ( newLetterSpacing ) => setAttributes( { categoryLetterSpacing: newLetterSpacing } ) }
					/>

					<br />

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

					<ColorPopupButton
						color={ categoryColor }
						onChange={ ( value ) => {
							setAttributes({
								categoryColor: value,
							});
						} }
						label={ __( 'Category Color', 'bnm-blocks' ) }
					/>
					<ColorPopupButton
						color={ categoryHoverColor }
						onChange={ ( value ) => {
							setAttributes({
								categoryHoverColor: value,
							});
						} }
						label={ __( 'Category Hover Color', 'bnm-blocks' ) }
					/>
					<ColorPopupButton
						color={ categoryBGColor }
						onChange={ ( value ) => {
							setAttributes({
								categoryBGColor: value,
							});
						} }
						label={ __( 'Category Background Color', 'bnm-blocks' ) }
					/>
					<ColorPopupButton
						color={ categoryBGHoverColor }
						onChange={ ( value ) => {
							setAttributes({
								categoryBGHoverColor: value,
							});
						} }
						label={ __( 'Category Background Hover Color', 'bnm-blocks' ) }
					/>
				</PanelBody>
	
				<PanelBody title={ __( 'Post Meta', 'bnm-blocks' ) } className="thbnm-panelbody" initialOpen={ false }>

                    <ToggleControl
                        label={ __( 'Show Author', 'bnm-blocks' ) }
                        checked={ showAuthor }
                        onChange={ () => setAttributes( { showAuthor: ! showAuthor } ) }
                    />
                    
                    { showAuthor && (
                        <ToggleControl
                            label={ __( 'Show Author Avatar', 'bnm-blocks' ) }
                            checked={ showAvatar }
                            onChange={ () => setAttributes( { showAvatar: ! showAvatar } ) }
                        />
                    ) }
                    
                    <ToggleControl
                        label={ __( 'Show Date', 'bnm-blocks' ) }
                        checked={ showDate }
                        onChange={ () => setAttributes( { showDate: ! showDate } ) }
                    />
                
                    <ToggleControl
                        label={ __( 'Show Comment Count', 'bnm-blocks' ) }
                        checked={ showCommentCount }
                        onChange={ () => setAttributes( { showCommentCount: ! showCommentCount } ) }
                    /> 

                    <TypographyControl
                        label = { __( 'Typography', 'bnm-blocks' ) }
                        fontSize={ metaFontSize }
                        onFontSizeChange={ ( newFontSize ) => setAttributes( { metaFontSize: newFontSize } ) }
                        lineHeight = { metaLineHeight }
                        onLineHeightChange = { ( newLineHeight ) => setAttributes( { metaLineHeight: newLineHeight } ) }
                        letterSpacing = { metaLetterSpacing }
                        onLetterSpacingChange = { ( newLetterSpacing ) => setAttributes( { metaLetterSpacing: newLetterSpacing } ) }
                    />


					<br />

					<UnitControl
						label={ __( 'Meta Spacing', 'bnm-blocks' ) }
						value={ metaSpacing }
						onChange={ ( value ) => setAttributes( { metaSpacing: value } ) }
						step={ 1 }
						min={ 0 }
						max={ 100 }
					/>

					<br />

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

					<ColorPopupButton
						color={ metaColor }
						onChange={ ( value ) => {
							setAttributes({
								metaColor: value,
							});
						} }
						label={ __( 'Post Meta Color', 'bnm-blocks' ) }
					/>
					<ColorPopupButton
						color={ metaHoverColor }
						onChange={ ( value ) => {
							setAttributes({
								metaHoverColor: value,
							});
						} }
						label={ __( 'Post Meta Hover Color', 'bnm-blocks' ) }
					/>
			</PanelBody>
			<PanelBody title={ __( 'Post Excerpt', 'bnm-blocks' ) } className="thbnm-panelbody" initialOpen={ false }>
				
                <ToggleControl
                    label={ __( 'Show Post Excerpt', 'bnm-blocks' ) }
                    checked={ displayPostExcerpt }
                    onChange={ () => setAttributes( { displayPostExcerpt: ! displayPostExcerpt } ) }
                />
                { displayPostExcerpt && (
                    <RangeControl
                        label={ __( 'Max number of words in excerpt', 'bnm-blocks' ) }
                        value={ excerptLength }
                        onChange={ value => setAttributes( { excerptLength: value } ) }
                        min={ 5 }
                        max={ 100 }
                    />
                ) }
                { displayPostExcerpt && (
                    <ToggleControl
                        label={ __( 'Add a "Read More" link', 'bnm-blocks' ) }
                        checked={ showReadMore }
                        onChange={ () => setAttributes( { showReadMore: ! showReadMore } ) }
                    />
                ) }
                { displayPostExcerpt && (
                    <TypographyControl
                        label = { __( 'Typography', 'bnm-blocks' ) }
                        fontSize={ excerptFontSize }
                        onFontSizeChange={ ( newFontSize ) => setAttributes( { excerptFontSize: newFontSize } ) }
                        lineHeight = { excerptLineHeight }
                        onLineHeightChange = { ( newLineHeight ) => setAttributes( { excerptLineHeight: newLineHeight } ) }
                        letterSpacing = { excerptLetterSpacing }
                        onLetterSpacingChange = { ( newLetterSpacing ) => setAttributes( { excerptLetterSpacing: newLetterSpacing } ) }
                    />
                ) }
                <br />
                { showReadMore && (
                    <TextControl
                        label={ __( '"Read More" link text', 'bnm-blocks' ) }
                        value={ readMoreLabel }
                        placeholder={ readMoreLabel }
                        onChange={ value => setAttributes( { readMoreLabel: value } ) }
                    />
                ) }

                <BoxControl
                    label={ __( 'Margin', 'bnm-blocks' ) }
                    values={ excerptMargin }
                    onChange={ nextValues => setAttributes( { excerptMargin: nextValues } ) }
                />

                <BoxControl
                    label={ __( 'Padding', 'bnm-blocks' ) }
                    values={ excerptPadding }
                    onChange={ nextValues => setAttributes( { excerptPadding: nextValues } ) }
                />

				<PanelColorSettings
					title={ __( 'Color', 'bnm-blocks' ) }
					initialOpen={ false }
					colorSettings={ [
						{
							value: attributes.excerptColor,
							onChange: excerptColor => setAttributes({ excerptColor }),
							label: __( 'Excerpt Color', 'bnm-blocks' )
						}
					] }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Featured Image Settings', 'bnm-blocks') } initialOpen={ false }>

                <ToggleControl
                    label={ __( 'Display Featured Image', 'bnm-blocks' ) }
                    checked={ showFeaturedImage }
                    onChange={ () => setAttributes( { showFeaturedImage: ! showFeaturedImage } ) }
                />
                { showFeaturedImage && (
                    <SelectControl
                        label={ __( 'Image Size', 'bnm-blocks' ) }
                        value={ attributes.featuredImageSizeSlug }
                        options={ window.themezHutGutenberg.imageSizes.map( size => ({
                            label: startCase( toLower( size ) ),
                            value: size
                        }) ) }
                        onChange={ imageSize => setAttributes({ featuredImageSizeSlug: imageSize }) }
                    /> 
                ) }
	
			</PanelBody>
		</InspectorControls>
    );
}