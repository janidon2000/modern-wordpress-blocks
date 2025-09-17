import { __ } from '@wordpress/i18n';
import { 
  RichText,
  MediaUpload,
  MediaUploadCheck,
  InspectorControls 
} from '@wordpress/block-editor';
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
      items: [...items, { name: "Client Name", quote: "Client feedback…", imageUrl: "", imageAlt: "" }],
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
        <PanelBody title={__('Testimonials', 'modern-wordpress-blocks')}>
          <Button onClick={addItem} variant="secondary">
            {__('Add Testimonial')}
          </Button>
        </PanelBody>
      </InspectorControls>

      <div className="mwb-testimonial-grid">
        {items.map((item, index) => (
          <div key={index} className="mwb-testimonial-item">
            <div className="mwb-testimonial-avatar">
              {item.imageUrl ? (
                <img src={item.imageUrl} alt={item.imageAlt || ''} />
              ) : (
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) => {
                      updateItem(index, 'imageUrl', media.url);
                      updateItem(index, 'imageAlt', media.alt);
                    }}
                    allowedTypes={['image']}
                    render={({ open }) => (
                      <Button onClick={open} variant="secondary">
                        {__('Upload Avatar')}
                      </Button>
                    )}
                  />
                </MediaUploadCheck>
              )}
            </div>
            <RichText
              tagName="h4"
              className="mwb-testimonial-name"
              value={item.name}
              onChange={(val) => updateItem(index, 'name', val)}
              placeholder="Name…"
            />
            <RichText
              tagName="p"
              className="mwb-testimonial-quote"
              value={item.quote}
              onChange={(val) => updateItem(index, 'quote', val)}
              placeholder="Quote…"
            />
            <Button
              variant="link"
              isDestructive
              onClick={() => removeItem(index)}
            >
              {__('Remove')}
            </Button>
          </div>
        ))}
      </div>
    </Fragment>
  );
}