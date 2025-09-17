import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';

// These imports are REQUIRED so your SCSS turns into build/style.css and build/editor.css
import './style.scss';
import './editor.scss';

registerBlockType('mwb/hero-cta', {
  edit: Edit,
  save,
});