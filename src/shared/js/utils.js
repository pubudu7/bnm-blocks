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
 * Returns a valid CSS shorthand string from a BoxControl-style object.
 *
 * @param {Object} values
 * @return {string|undefined} e.g. "10px 15px 10px 15px"
 */
export const boxValues = ( values ) => {
	if ( !values || typeof values !== 'object' || !hasValueOnBox( values ) ) {
		return;
	}

	// Normalize each side, ensuring a px unit if missing.
	const normalize = ( val ) => {
		if ( val === undefined || val === null || val === '' ) {
			return '0px';
		}
		const stringVal = val.toString().trim();

		// If already has a unit, keep as is
		if ( /[a-z%]+$/i.test( stringVal ) ) {
			return stringVal;
		}

		// Otherwise append 'px'
		return stringVal + 'px';
	};

	return `${normalize( values.top )} ${normalize( values.right )} ${normalize( values.bottom )} ${normalize( values.left )}`;
};

/**
 * Check if any property has at least one value other than undefined.
 *
 * @param {Object} obj
 * @return {boolean}
 */
export const hasValueOnBox = ( obj ) => {
	for ( const key in obj ) {
		if ( obj[ key ] !== undefined && obj[ key ] !== null && obj[ key ] !== '' ) {
			return true;
		}
	}
	return false;
};
