import { FormTokenField } from '@wordpress/components';
import { useState } from '@wordpress/element';

const continents = [
    'Africa',
    'America',
    'Antarctica',
    'Asia',
    'Europe',
    'Oceania',
];

export const MyFormTokenField = () => {
    const [ selectedContinents, setSelectedContinents ] = useState( [] );

    return (
        <FormTokenField
            value={ selectedContinents }
            suggestions={ continents }
            onChange={ ( tokens ) => setSelectedContinents( tokens ) }
        />
    );
};