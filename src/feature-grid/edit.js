import { __ } from '@wordpress/i18n';
import { RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
  const { items } = attributes;

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setAttributes({ items: newItems });
  };

  const addItem = () => {
    setAttributes({
      items: [...items, { icon: "⭐", title: "New Feature", text: "Description..." }],
    });
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setAttributes({ items: newItems });
  };

  return (
    <Fragment>
      <InspectorControls>
        <PanelBody title={__('Feature Grid Settings', 'modern-wordpress-blocks')}>
          <Button onClick={addItem} variant="secondary">
            {__('Add Feature', 'modern-wordpress-blocks')}
          </Button>
        </PanelBody>
      </InspectorControls>

      <div className="mwb-feature-grid">
        {items.map((item, index) => (
          <div key={index} className="mwb-feature-card">
            <RichText
              tagName="div"
              className="mwb-feature-card__icon"
              value={item.icon}
              onChange={(val) => updateItem(index, 'icon', val)}
              placeholder="⭐"
            />
            <RichText
              tagName="h3"
              className="mwb-feature-card__title"
              value={item.title}
              onChange={(val) => updateItem(index, 'title', val)}
              placeholder={__('Feature title…')}
            />
            <RichText
              tagName="p"
              className="mwb-feature-card__text"
              value={item.text}
              onChange={(val) => updateItem(index, 'text', val)}
              placeholder={__('Feature description…')}
            />
            <Button
              variant="link"
              isDestructive
              onClick={() => removeItem(index)}
              style={{ marginTop: '0.5rem' }}
            >
              {__('Remove Feature')}
            </Button>
          </div>
        ))}
      </div>
    </Fragment>
  );
}