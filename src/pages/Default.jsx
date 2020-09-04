import { h } from 'preact';
import { useState } from 'preact/hooks';
import { AppButton } from '../component/AppButton.jsx';
import { Block } from '../component/Block.jsx';

export function Default() {

	const [ show, setShow ] = useState( false );
	const onButtonClick = () => setShow( ! show );

	return (
		<div>
			<AppButton label="ぼたｎ" onClick={ onButtonClick }></AppButton>
			{ show && <Block /> }
		</div>
	);

}
