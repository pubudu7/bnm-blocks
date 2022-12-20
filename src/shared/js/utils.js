/**
 * External dependancies.
 */
import { isNumber, isObject } from 'lodash';


/**
 * returns the px value.
 */
export const px = value => value ? `${ value }px` : value;

/**
 * Checks if it is only a number and returns the px value. 
 * Returns the default value if it is not a number
 */
export const mightBeUnit = value => isNumber( value ) ? px( value ) : value;

export const mightBeBoxed = value => {
    if ( isObject( value ) ) {
        return boxValues( value );
    }

    return mightBeUnit( value );
};

/**
 * Return the values from a box type.
 */
export const boxValues = values => {
    if ( Object.keys(values).length !== 0 && values.constructor !== Object ) {
        return `${values['top']} ${values['right']} ${values['bottom']} ${values['left']}`;
    }
    return;
}