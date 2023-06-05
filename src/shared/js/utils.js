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
 * Returns the values from a box type.
 *
 * @param values
 */
export const boxValues = values => {
    if ( Object.keys(values).length !== 0 && values.constructor === Object && hasValueOnBox(values) ) {
        return `${values.top ?? '0px'} ${values.right ?? '0px'} ${values.bottom ?? '0px'} ${values.left ?? '0px'}`;
    }
}

/**
 * Check if any property has at least one value other than undefined.
 *
 * @param {Object} obj
 * @return boolean
 */
export const hasValueOnBox = obj => {
    for ( const key in obj ) {
        if ( obj[key] !== undefined ) {
            return true;
        }
    }
    return false;
}