import { h } from 'preact';
import { css } from 'goober';
import { COLOR } from '../styles/css-constants.js';

const className = css`
	color: #fff;
	cursor: pointer;
	border: 0;
	border-radius: 3px;
	background: ${ COLOR.DARK };

	&::before {
		content: '🐶';
	}
`;

export function AppButton( { label, onClick } ) {

	return (
		<button
			type="button"
			class={ className }
			onClick={ onClick }
		>
			{ label }
		</button>
	);

}
