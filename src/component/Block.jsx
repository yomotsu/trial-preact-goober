import { h } from 'preact';
import { css } from 'goober';
import { COLOR, cssContainerMixin } from '../styles/css-constants.js';

const className = css`
	${ cssContainerMixin }
	background: ${ COLOR.PRIMARY };

	&:hover {
		background: ${ COLOR.DARK };
	}
`;

export function Block() {

	return (
		<div class={ className }>
			block
		</div>
	);

}
