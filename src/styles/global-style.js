import { glob } from 'goober';
import { COLOR } from './css-constants.js';

glob`
	body {
		margin: 0;
		background: ${ COLOR.LIGHT };
	}
`;
