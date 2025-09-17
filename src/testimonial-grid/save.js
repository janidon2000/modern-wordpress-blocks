import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { items } = attributes;

  return (
    <div className="mwb-testimonial-grid">
      {items.map((item, index) => (
        <div key={index} className="mwb-testimonial-item">
          {item.imageUrl && (
            <div className="mwb-testimonial-avatar">
              <img src={item.imageUrl} alt={item.imageAlt || ''} />
            </div>
          )}
          <RichText.Content tagName="h4" className="mwb-testimonial-name" value={item.name} />
          <RichText.Content tagName="p" className="mwb-testimonial-quote" value={item.quote} />
        </div>
      ))}
    </div>
  );
}