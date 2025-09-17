import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import './style.scss';
import './editor.scss';

registerBlockType('mwb/testimonial-grid', {
  edit: Edit,
  save,
});