import { registerBlockStyle } from '@wordpress/blocks';
import './editor.scss';

registerBlockStyle( 'core/columns', {
	name: 'borders',
	label: 'Borders',
} );