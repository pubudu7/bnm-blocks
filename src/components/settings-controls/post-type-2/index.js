// Settings controls for the post type that does NOT have two different sized posts.

/**
 * External dependencies
 */
import { startCase, toLower } from 'lodash';

/**
 * WordPress dependencies
 */
 import {
	PanelBody,
	PanelRow,
	RangeControl,
    SelectControl,
	ToggleControl,
	TextControl,
	__experimentalUnitControl as UnitControl,
    __experimentalBoxControl as BoxControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { PanelColorSettings } from '@wordpress/block-editor';


import TypographyControl from '../../../components/typography'; 

export default function BlockExtraSettings( { attributes, setAttributes } ) {
    const {
        showTitle,
		showSectionHeader,
		headerHtmlTag,
		headerFontSize,
		headerLineHeight,
		headerLetterSpacing,
		headerMargin,
		headerPadding,
        titleHtmlTag,
        titleFontSize,
        titleLineHeight,
		titleLetterSpacing,
		titleMargin,
        titlePadding,
		showFeaturedImage,
		imagePosition,
		featuredImageWidth,
		featuredImageMargin,
		imageMinHeight,
		entryContentWidth,
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
		excerptMargin,
		excerptPadding,
		showReadMore,
		readMoreLabel,
        metaFontSize,
		metaLineHeight,
		metaLetterSpacing,
		metaSpacing,
		metaMargin,
		metaPadding,
        categoryFontSize,
		categoryLineHeight,
		categoryLetterSpacing
    } = attributes;

	const formatWidthValue = ( value, propertyToUpdate ) => {
		if(!value) {
			return;
		}
		const numericValue = parseFloat(value.match(/\d+/)[0]);

		if ( numericValue >= 20 && numericValue <= 80 ) {
			setAttributes( { [propertyToUpdate]: value } );
		} else {
			const defaultValue = propertyToUpdate === "entryContentWidth" ? "67%" : "33%";
			setAttributes( { [propertyToUpdate]: defaultValue } );
		}
	};

    return (
        <>
			<PanelBody title={ __( 'Section Header', 'bnm-blocks') } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Show Section Header', 'bnm-blocks' ) }
					checked={ showSectionHeader }
					onChange={ () => setAttributes( { showSectionHeader: ! showSectionHeader } ) }
				/>
				{ showSectionHeader && (
					<div className="thbnm-settings-panel">
						<SelectControl
							label={ __( 'Section Header HTML tag', 'bnm-blocks' ) }
							labelPosition={ "side" }
							value={ headerHtmlTag }
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
							onChange={ ( newTitleTag ) => setAttributes( { headerHtmlTag: newTitleTag } ) }
							__nextHasNoMarginBottom
						/>

						<TypographyControl
							label = { __( 'Typography', 'bnm-blocks' ) }
							fontSize={ headerFontSize }
							onFontSizeChange={ ( newFontSize ) => setAttributes( { headerFontSize: newFontSize } ) }
							lineHeight = { headerLineHeight }
							onLineHeightChange = { ( newLineHeight ) => setAttributes( { headerLineHeight: newLineHeight } ) }
							letterSpacing = { headerLetterSpacing }
							onLetterSpacingChange = { ( newLetterSpacing ) => setAttributes( { headerLetterSpacing: newLetterSpacing } ) }
						/>

						<br />

						<BoxControl
							label={ __( 'Margin', 'bnm-blocks' ) }
							values={ headerMargin }
							onChange={ nextValues => setAttributes( { headerMargin: nextValues } ) }
						/>
					
						<BoxControl
							label={ __( 'Padding', 'bnm-blocks' ) }
							values={ headerPadding }
							onChange={ nextValues => setAttributes( { headerPadding: nextValues } ) }
						/>

						<PanelColorSettings
							title={ __( 'Color', 'bnm-blocks' ) }
							initialOpen={ false }
							colorSettings={ [
								{
									value: attributes.headerColor,
									onChange: headerColor => setAttributes({ headerColor }),
									label: __( 'Header Text Color', 'bnm-blocks' )
								},
								{
									value: attributes.headerHoverColor,
									onChange: headerHoverColor => setAttributes({ headerHoverColor }),
									label: __( 'Header Text Hover Color', 'bnm-blocks' )
								}
							] }
						/>				
					</div>
				) }
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
						options={ Object.entries(window.themezHutGutenberg.imageSizes).map(([value, label]) => ({
							value,
							label
						})) }
						onChange={ imageSize => setAttributes({ featuredImageSizeSlug: imageSize }) }
					/>  
				) }

				{ showFeaturedImage && imagePosition !== 'top' && imagePosition !== 'behind' && (
					<>
					<UnitControl
						label={ __( 'Featured Image Width (%)', 'bnm-blocks' ) }
						value={ featuredImageWidth }
						onChange={ value => formatWidthValue(value, "featuredImageWidth") }
						step={ 5 }
						units={[
							{
								a11yLabel: 'Percentage (%)',
								label: '%',
								step: 5,
								value: '%'
							}
						]}
					/>
					<UnitControl
						label={ __( 'Content Width (%)', 'bnm-blocks' ) }
						value={ entryContentWidth }
						onChange={ value => formatWidthValue(value, "entryContentWidth") }
						step={ 5 }
						units={[
							{
								a11yLabel: 'Percentage (%)',
								label: '%',
								step: 5,
								value: '%'
							}
						]}
					/>
					</>
				) }

				{ showFeaturedImage && imagePosition === 'behind' && (
					<RangeControl
						label={ __( 'Minimum height', 'bnm-blocks' ) }
						help={ __(
							"Sets a minimum height for the block, using a percentage of the screen's current height.",
							'bnm-blocks'
						) }
						value={ imageMinHeight }
						onChange={ _imageMinHeight => setAttributes( { imageMinHeight: _imageMinHeight } ) }
						min={ 0 }
						max={ 100 }
						required
					/>
				) }

				<BoxControl
					label={ __( 'Margin', 'bnm-blocks' ) }
					values={ featuredImageMargin }
					onChange={ nextValues => setAttributes( { featuredImageMargin: nextValues } ) }
				/>
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

					<PanelColorSettings
						title={ __( 'Category Color', 'bnm-blocks' ) }
						initialOpen={ false }
						colorSettings={ [
							{
								value: attributes.categoryColor,
								onChange: categoryColor => setAttributes({ categoryColor }),
								label: __( 'Text Color', 'bnm-blocks' )
							},
							{
								value: attributes.categoryHoverColor,
								onChange: categoryHoverColor => setAttributes({ categoryHoverColor }),
								label: __( 'Text Color: Hover', 'bnm-blocks' )
							},
							{
								value: attributes.categoryBGColor,
								onChange: categoryBGColor => setAttributes({ categoryBGColor }),
								label: __( 'Background Color', 'bnm-blocks' )
							},
							{
								value: attributes.categoryBGHoverColor,
								onChange: categoryBGHoverColor => setAttributes({ categoryBGHoverColor }),
								label: __( 'Background Color: Hover', 'bnm-blocks' )
							}
						] }
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

					<PanelColorSettings
						title={ __( 'Post Meta Color', 'bnm-blocks' ) }
						initialOpen={ false }
						colorSettings={ [
							{
								value: attributes.metaColor,
								onChange: metaColor => setAttributes({ metaColor }),
								label: __( 'Text Color', 'bnm-blocks' )
							},
							{
								value: attributes.metaHoverColor,
								onChange: metaHoverColor => setAttributes({ metaHoverColor }),
								label: __( 'Text Color: Hover', 'bnm-blocks' )
							}
						] }
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

		</>
    );
}