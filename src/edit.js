/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';


const {InspectorControls} = wp.blockEditor;
const {PanelBody, ColorPalette, RangeControl} = wp.components;


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { className, attributes, setAttributes } ) {

	const colors = [
        { name: 'red', color: '#f00' },
        { name: 'white', color: '#fff' },
        { name: 'blue', color: '#00f' },
	];
	
	return (

		<div>
			<InspectorControls>

				<PanelBody title="Homework1 Settings" > 

				<ColorPalette
					colors={ colors }
					value={ attributes.color }
					onChange={ ( color ) => setAttributes( { color: color } ) }
        		/>

				<RangeControl
						label="Width"
						value={ attributes.width }
						onChange={ ( columns ) => setAttributes( { width:columns } ) }
						min={ 2 }
						max={ 1000 }
				/>

				<RangeControl
						label="Height"
						value={ attributes.height }
						onChange={ ( columns ) => setAttributes( { height:columns } ) }
						min={ 2 }
						max={ 1000 }
				/>

				</PanelBody>

			</InspectorControls>	

			<div className={ className } style={{
				background: attributes.color,
				height: attributes.height,
				width:attributes.width,
			}} >

			{ __( 'Atiq Test – hello from the editor!', 'atiq-test' ) }

			</div>
		</div>
	
	);
}
