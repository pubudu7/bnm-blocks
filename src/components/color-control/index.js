import { Button, Popover, ColorPicker, ColorIndicator, Tooltip } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export default function ColorPopupButton( { color, onChange, label } ) {
    const [ isVisible, setIsVisible ] = useState( false );
    const [ moduleColor, setModuleColor ] = useState( color );
    
    const toggleVisible = () => {
        setIsVisible( ( state ) => ! state );
    };

    const toggleClose = () => {
		if ( isVisible === true ) {
			setIsVisible( false );
		}
	};

    return (
        <div className="thbnm-color-picker-container">
            <span className="thbnm-color-control-label">
                { label }
            </span>
            
            <div className="thbnm-color-control-click-side">
                { isVisible && (
                    <Tooltip text={ __( 'Select Color' ) }>
                        <Button className="thbnm-color-indicator-button" onClick={ toggleClose }>
                            <ColorIndicator colorValue={ moduleColor } />
                        </Button>
                    </Tooltip> 
                ) }

                { ! isVisible && ( 
                    <Tooltip text={ __( 'Select Color' ) }>
                        <Button className="thbnm-color-indicator-button" onClick={ toggleVisible }>
                            <ColorIndicator colorValue={ moduleColor } />
                        </Button>
                    </Tooltip>
                ) }
                
                { isVisible && ( 
                    <Popover
                        onClose={ toggleClose }
                        position="top left"
                        >
                        <ColorPicker
                            color={ color }
                            onChange={ ( newColor ) => {
                                onChange( newColor );
                                setModuleColor( newColor );
                            } }
                            enableAlpha
                            defaultValue=""
                        />
                    </Popover> 
                ) }
            </div>
        </div>
    );
};

