import { 
    FontSizePicker,
    __experimentalUnitControl as UnitControl,
    Dashicon,
    Button,
    Popover
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export default function TypographyControl( props ) {

    const [ isVisible, setIsVisible ] = useState( false );
    const toggleVisible = () => {
        setIsVisible( ( state ) => ! state );
    }

    const fontSizes = [
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

    return(
        <div className="thbnm-typography-control-container">
            <div className="thbnm-control-label">
                { props.label }   
            </div>

            <div class="thbnm-color-control-click-side">

                { isVisible && (
                    <Button className="thbnm-typograpy-control-button" onClick={toggleVisible}>
                        <Dashicon icon="edit" />
                    </Button>
                ) }
                
                { ! isVisible && (
                    <Button className="thbnm-typograpy-control-button" onClick={toggleVisible}>
                        <Dashicon icon="edit" />
                    </Button>
                ) }

                { isVisible && (
                    <Popover
                        position="top left"
                        onClose={ toggleVisible }
                    >
                        <div className="thbnm-typography-controls-wrapper">
                            <FontSizePicker
                                __nextHasNoMarginBottom
                                value={ props.fontSize }
                                onChange={ props.onFontSizeChange }
                                fontSizes={ fontSizes }
                            />
                            <br />

                            <UnitControl
                                label={ __( 'Line Height', 'bnm-blocks' ) }
                                value={ props.lineHeight }
                                onChange={ props.onLineHeightChange }
                                step={ 0.1 }
                                min={ 0 }
                                max={ 3 }
                                units={[
                                    {
                                        a11yLabel: 'Unitless (-)',
                                        label: '-',
                                        step: 0.1,
                                        value: ''
                                    },
                                    {
                                        a11yLabel: 'Pixels (px)',
                                        label: 'px',
                                        step: 0.1,
                                        value: 'px'
                                    },
                                    {
                                        a11yLabel: 'Percentage (%)',
                                        label: '%',
                                        step: 1,
                                        value: '%'
                                    }
                                ]}
                            />

                            <br />

                            <UnitControl
                                label={ __( 'Letter Spacing', 'bnm-blocks' ) }
                                value={ props.letterSpacing }
                                onChange={ props.onLetterSpacingChange }
                                step={ 0.1 }
                                min={ -50 }
                                max={ 100 }
                            />

                            <br />
                        </div>
                    </Popover>
                ) }
            </div>
        </div>
    );
}  